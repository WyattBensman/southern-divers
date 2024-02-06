import { Icon } from "@iconify/react";
import "../../styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div
      className="h-screen bg-cover bg-center relative"
      style={{ backgroundImage: 'url("/images/boat-dock-header.JPG")' }}
    >
      <div className="headerBox flex justify-center items-center relative">
        {/* Icon & Business Name - Top Border Aligned */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pb-10">
          <h1 className="md:text-4xl text-2xl text-white text-center">
            Souther Divers
          </h1>
          <Icon
            icon="map:scuba-diving"
            className="text-white md:w-20 md:h-20 w-16 h-16"
          />
        </div>

        <h1 className="md:text-4xl text-2xl w-[400px] text-center font-light italic text-white py-12">
          Unveiling the Depths, Elevating Your Shoreline.
        </h1>

        {/* Button - Bottom Border Aligned */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <Link
            to="/contact"
            className="w-52 md:w-64 bg-blue-600 px-6 py-2 text-white text-center md:text-xl text-lg hover:bg-blue-800 hover:shadow-md duration-200"
          >
            Request A Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
