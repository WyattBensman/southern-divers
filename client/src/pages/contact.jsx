import { useEffect } from "react";
import ContactMain from "../components/contact/contact";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact | Southern Divers";
  }, []);

  return (
    <div className="mt-20">
      <ContactMain />
    </div>
  );
}
