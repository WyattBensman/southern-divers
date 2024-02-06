import Contact from "../components/contact/contact";
import Header from "../components/home/Header";
import AboutUs from "../components/home/aboutUs";
import Services from "../components/home/services";

export default function Home() {
  return (
    <>
      <Header />
      <div className="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <AboutUs />
        <Services />
      </div>
      <Contact />
    </>
  );
}
