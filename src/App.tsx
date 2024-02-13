import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

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
          element: <Home />,
        },
        {
          path: "dashboard",
          element: <Dashboard />,
        },
        {
          path: "history",
          element: <History />,
        },
        {
          path: "fixed-expense",
          element: <FixedExpense />,
        },
        {
          path: "settings",
          element: <Settings />,
        },
        {
          path: "authorization",
          element: <Authorization />,
        },
        {
          path: "list-expense",
          element: <ListExpense />,
        },
        {
          path: "documentation",
          element: <Documentation />,
        },
        {
          path: "log",
          element: <Log />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
