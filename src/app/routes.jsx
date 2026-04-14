import { createBrowserRouter } from "react-router";
import { Root } from "./components/Root";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { ProductDetail } from "./pages/ProductDetail";
import { Manufacturing } from "./pages/Manufacturing";
import { Contact } from "./pages/Contact";
import { Blog } from "./pages/Blog";
import { NotFound } from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "products", Component: Products },
      { path: "products/:id", Component: ProductDetail },
      { path: "manufacturing", Component: Manufacturing },
      { path: "contact", Component: Contact },
      { path: "blog", Component: Blog },
      { path: "*", Component: NotFound },
    ],
  },
]);
