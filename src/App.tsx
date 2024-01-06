import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Auth from "./pages/Auth";
import SearchResults from "./pages/SearchResults";
import ProductPage from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "products/search",
        element: <SearchResults />,
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
      {
        path: "auth",
        element: <Auth />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
