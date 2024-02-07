import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function InspectionsRepair() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          id="inspections-repair"
          className={`my-16 ${
            inView
              ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Underwater Inspections and Repair
          </h2>
          <div className="flex md:flex-row flex-col">
            <img
              src="/images/underwater-inspections-repair.png"
              alt=""
              className="md:w-80"
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
