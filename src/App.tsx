// styles
import "@/styles/global.scss";

// react-router-dom
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

// pages
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";
import Products from "@/pages/products/Products";
import Users from "@/pages/users/Users";

// components
import Footer from "@/components/footer/Footer";
import Menu from "@/components/Menu/Menu";
import Navbar from "@/components/navbar/Navbar";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
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
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "users",
          element: <Users />,
        },
        {
          path: "products",
          element: <Products />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
