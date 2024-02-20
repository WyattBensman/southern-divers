import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function DredgingErosion() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          id="dredging-erosion"
          className={`my-16 ${
            inView
              ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4">
            Dredging and Erosion Control
          </h2>
          <div className="flex md:flex-row flex-col">
            <img
              src="/images/erosion-control.png"
              alt="Professional Dredging Solutions"
              className="md:w-80 h-full"
            />
            <div className="flex flex-col justify-between ml-6 mt-6 mb-12 lg:mr-32">
              <p className="text-lg font-light">
                Experience comprehensive dredging solutions for both commercial
                and residential needs. Our operations cover boatlifts, slips,
                and marinas, enhancing accessibility and preserving the
                integrity of waterfront structures. Additionally, we specialize
                in rip rap Boulder installation and Geo-tube erosion control
                barrier installation, providing a robust defense against erosion
                and ensuring the long-term stability of coastal environments.
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
