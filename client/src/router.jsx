import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home";
import Services from "./pages/services";
import Contact from "./pages/contact";
import Navbar from "./components/global/navbar";
import Footer from "./components/global/footer";

export const router = createBrowserRouter([
  {
    element: <PrimaryLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/contact", element: <Contact /> },
    ],
  },
]);

function PrimaryLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
