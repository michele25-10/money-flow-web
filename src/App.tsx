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

function App() {
  const Layout = () => {
    return (
      <div className="main">
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
      </div>
    );
  };

  type ProtectedRouteProps = {
    children: any;
  };
  const ProtectedRoute = (props: ProtectedRouteProps) => {
    if (!sessionStorage.getItem("accessToken")) {
      return <Navigate to="../login" replace />;
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
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          ),
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
        },
        {
          path: "history",
          element: (
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          ),
        },
        {
          path: "fixed-expense",
          element: (
            <ProtectedRoute>
              <FixedExpense />
            </ProtectedRoute>
          ),
        },
        {
          path: "settings",
          element: (
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          ),
        },
        {
          path: "authorization",
          element: (
            <ProtectedRoute>
              <Authorization />
            </ProtectedRoute>
          ),
        },
        {
          path: "list-expense",
          element: (
            <ProtectedRoute>
              <ListExpense />
            </ProtectedRoute>
          ),
        },
        {
          path: "documentation",
          element: (
            <ProtectedRoute>
              <Documentation />
            </ProtectedRoute>
          ),
        },
        {
          path: "log",
          element: (
            <ProtectedRoute>
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
