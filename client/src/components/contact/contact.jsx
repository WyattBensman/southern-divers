import { useLocation } from "react-router-dom";
import Content from "./content";
import Form from "./form";

export default function ContactMain() {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isContactPage ? "py-10" : "py-20"
      } bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24`}
    >
      <Content />
      <Form />
    </div>
  );
}
