import { useEffect } from "react";
import ContactMain from "../components/contact/contact";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20">
      <ContactMain />
    </div>
  );
}
