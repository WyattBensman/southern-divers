import { useEffect } from "react";
import ContactMain from "../components/contact/contact";
import Header from "../components/home/header";
import AboutUs from "../components/home/aboutUs";
import Services from "../components/home/services";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <AboutUs />
        <Services />
      </div>
      <ContactMain />
    </>
  );
}
