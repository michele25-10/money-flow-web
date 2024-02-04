import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

//scss
import "./styles/global.scss";

//pagine
import ListExpense from "./pages/list-expense/List-Expense";
import AddExpense from "./pages/add-expense/Add-Expense";
import Settings from "./pages/settings/Settings";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";
import Log from "./pages/log/Log";

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
          path: "settings",
          element: <Settings />,
        },
        {
          path: "list-expense",
          element: <ListExpense />,
        },
        {
          path: "add-expense",
          element: <AddExpense />,
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
