import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { InView } from "react-intersection-observer";
import "../../styles.css";

export default function Header() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          className="h-screen bg-cover bg-center relative"
          style={{ backgroundImage: 'url("/images/boat-dock-header.JPG")' }}
        >
          <div
            ref={ref}
            className={`headerBox flex justify-center items-center relative ${
              inView
                ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
                : "opacity-0 translate-y-20"
            }`}
          >
            {/* Icon & Business Name - Top Border Aligned */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center pb-10">
              <svg
                className="w-[260px] h-[130px] text-center"
                fill="transparent"
                stroke="transparent"
              >
                <path id="curve" d="M 0 120 C 0 120, 130 0, 260 120"></path>
                <text className="text-white" textAnchor="middle" fill="white">
                  <textPath
                    className="md:text-4xl text-2xl"
                    href="#curve"
                    startOffset="50%"
                  >
                    Southern Divers
                  </textPath>
                </text>
              </svg>
              <Icon
                icon="map:scuba-diving"
                className="text-white md:w-20 md:h-20 w-16 h-16 mb-12 mt-[-40px]" // Adjust the negative margin value as needed
              />
            </div>

            <h1 className="md:text-4xl text-2xl w-[400px] text-center font-light italic text-white py-12">
              Unveiling the Depths, Elevating Your Shoreline.
            </h1>

            {/* Button - Bottom Border Aligned */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
              <Link
                to="/contact"
                className="w-52 md:w-64 bg-blue-600 px-6 py-3 text-white text-center md:text-xl text-lg hover:bg-blue-800 hover:shadow-md duration-200"
              >
                Request A Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
