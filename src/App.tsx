import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

//pagine
import ListExpense from "./pages/list-expense/List-Expense";
import AddExpense from "./pages/add-expense/Add-Expense";
import Settings from "./pages/settings/Settings";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/home/Home";
import Login from "./pages/login/login";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "home",
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
  ]);

  return <RouterProvider router={router} />;
}

export default App;
