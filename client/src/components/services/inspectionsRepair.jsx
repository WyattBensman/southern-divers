import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function InspectionsRepair() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`my-16 ${
            inView
              ? "transform scale-100 transition-transform duration-1000 ease-in-out"
              : "transform scale-90 opacity-0 transition-transform duration-1000 ease-in-out"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Underwater Inspections and Repair
          </h2>
          <div className="flex">
            <img
              src="/images/underwater-inspections-repair.png"
              alt=""
              className="w-80"
            />
            <div className="flex flex-col justify-between ml-6 mt-6 mb-12 lg:mr-32">
              <p className="text-lg font-light">
                Our expertise extends to detailed underwater inspections,
                including seagrass surveys crucial for permitting the
                construction of docks. For seawall and piling repair, we employ
                advanced techniques such as snapjackets, cleanings, hydraulic
                cement patchwork, and piling wrapping. Trust us for meticulous
                assessments and precision repairs that reinforce and extend the
                lifespan of your marine structures.
              </p>
              <Link
                to="/contact"
                className="w-fit bg-blue-600 mt-8 px-6 py-2 text-white hover:bg-blue-800 hover:shadow-md duration-200"
              >
                Make Inquiry
              </Link>
            </div>
          </div>
        </div>
      )}
    </InView>
  );
}
