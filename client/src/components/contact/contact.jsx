import Content from "./content";
import Form from "./form";

export default function Contact() {
  return (
    <div className="flex flex-col md:flex-row py-20 bg-gray-100 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
      <Content />
      <Form />
    </div>
  );
}
