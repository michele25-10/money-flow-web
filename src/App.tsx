import { useEffect, useState } from "react";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";

//scss
import "./styles/global.scss";

//pagine
import ListExpense from "./pages/list-expense/List-Expense";
import Settings from "./pages/settings/Settings";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Log from "./pages/log/Log";
import Authorization from "./pages/authorization/Authorization";
import History from "./pages/history/History";
import FixedExpense from "./pages/fixed-expense/FixedExpense";
import Documentation from "./pages/documentation/Documentation";

//Component Common
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/menu";
import SnackBar from "./components/snackbar/SnackBar";

import { authList } from "./utils/enum";

import { setGlobalState } from "./utils/state";

import { gestioneSnackbar, ws } from "./utils/common";
import { isAuthorised } from "./utils/auth";

function App() {
  const Layout = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
      ws(
        "GET",
        process.env.VITE_API_URL + "/user/info/",
        null,
        null,
        true
      ).then((res: any) => {
        setGlobalState("auth", res.data.auth);
        setGlobalState("dev", res.data.info.dev ? res.data.info.dev : false);
        setGlobalState("flagGenitore", res.data.info.flag_genitore);
        setShow(true);
      });
    }, []);

    return (
      <div className="main">
        {show ? (
          <>
            <Navbar />
            <div className="containerApp">
              <div className="menuContainer">
                <Menu />
              </div>
              <div className="contentContainer">
                <Outlet />
              </div>
            </div>
            <Footer />
            <SnackBar />
          </>
        ) : null}
      </div>
    );
  };

  type ProtectedRouteProps = {
    id_autorizzazione: number;
    children: any;
  };
  const ProtectedRoute = (props: ProtectedRouteProps) => {
    if (!sessionStorage.getItem("accessToken")) {
      return <Navigate to="../login" replace />;
    }
    const check: any = isAuthorised(props.id_autorizzazione);
    if (!check.value) {
      gestioneSnackbar(true, check.message, "error");
      return <Navigate to={check.path} replace />;
    }

    return props.children;
  };

  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: (
            <ProtectedRoute id_autorizzazione={authList.homepage}>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoute id_autorizzazione={authList.dashboard}>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "history",
          element: (
            <ProtectedRoute id_autorizzazione={authList.storico}>
              <History />
            </ProtectedRoute>
          ),
        },
        {
          path: "fixed-expense",
          element: (
            <ProtectedRoute id_autorizzazione={authList.speseFisse}>
              <FixedExpense />
            </ProtectedRoute>
          ),
        },
        {
          path: "settings",
          element: (
            <ProtectedRoute id_autorizzazione={authList.configurazione}>
              <Settings />
            </ProtectedRoute>
          ),
        },
        {
          path: "authorization",
          element: (
            <ProtectedRoute id_autorizzazione={authList.autorizzazioni}>
              <Authorization />
            </ProtectedRoute>
          ),
        },
        {
          path: "list-expense",
          element: (
            <ProtectedRoute id_autorizzazione={authList.listaSpesa}>
              <ListExpense />
            </ProtectedRoute>
          ),
        },
        {
          path: "documentation",
          element: (
            <ProtectedRoute id_autorizzazione={authList.documenti}>
              <Documentation />
            </ProtectedRoute>
          ),
        },
        {
          path: "log",
          element: (
            <ProtectedRoute id_autorizzazione={authList.log}>
              <Log />
            </ProtectedRoute>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
