import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Layout/RootLayout";
import Error from "./components/Error";
import Products from "./components/Products";
import AboutPage from "./pages/AboutPage.jsx";
import Cart from "./pages/Cart.jsx";
import SingleProduct from "./pages/SingleProduct.jsx";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/about",
          element: <AboutPage />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/product/:productid",
          element: <SingleProduct />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
