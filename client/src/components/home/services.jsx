import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`my-20 ${
            inView
              ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
          <div className="flex md:flex-row flex-col gap-x-4 gap-y-10">
            {/* BOAT SALVAGE */}
            <div className="md:w-1/3">
              <img
                src="/images/boat-salvage.png"
                className="w-full"
                alt="Professional Boat Salvage Services"
              />
              <h3 className="text-xl font-medium mt-2">Boat Salvage</h3>
              <p className="font-light mb-6">
                Expert retrieval of sunken vessels, ensuring the restoration and
                protection of your marine assets.
              </p>
              <Link
                to="/services#boat-salvage"
                className="w-fit mt-6 cursor-pointer hover:underline hover:text-blue-600 duration-200"
              >
                Learn More{""}
                <i className="ml-1 fa-solid fa-arrow-right text-blue-600"></i>
              </Link>
            </div>
            {/* DREDGING EROSION CONTROL */}
            <div className="md:w-1/3">
              <img
                src="/images/dredging-erosion-control.png"
                className="w-full"
                alt="Dredging Operation for Erosion Control"
              />
              <h3 className="text-xl font-medium mt-2">
                Dredging & Erosion Control
              </h3>
              <p className="font-light mb-6">
                Precision dredging and erosion solutions, preserving and
                enhancing the resilience of your coastal environment.
              </p>
              <Link
                to="/services#dredging-erosion"
                className="w-fit mt-6 cursor-pointer hover:underline hover:text-blue-600 duration-200"
              >
                Learn More{""}
                <i className="ml-1 fa-solid fa-arrow-right text-blue-600"></i>
              </Link>
            </div>
            {/* Underwater Inspections & Repair */}
            <div className="md:w-1/3">
              <img
                src="/images/underwater-inspections.png"
                className="w-full"
                alt="Professional Underwater Maintenance and Inspections"
              />
              <h3 className="text-xl font-medium mt-2">
                Underwater Inspections & Repair
              </h3>
              <p className="font-light mb-6">
                Thorough underwater assessments and seamless repairs,
                safeguarding and revitalizing your marine structures with
                precision.
              </p>
              <Link
                to="/services#inspections-salvage"
                className="w-fit cursor-pointer hover:underline hover:text-blue-600 duration-200"
              >
                Learn More{""}
                <i className="ml-1 fa-solid fa-arrow-right text-blue-600"></i>
              </Link>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
