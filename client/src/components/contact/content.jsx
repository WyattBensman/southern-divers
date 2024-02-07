import { InView } from "react-intersection-observer";

export default function Content() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`md:w-1/2 mt-12 ${
            inView
              ? "transform scale-100 transition-transform duration-1000 ease-in-out"
              : "transform scale-90 opacity-0 transition-transform duration-1000 ease-in-out"
          }`}
        >
          <h2 className="text-5xl font-semibold  mb-4">
            Get started with your next project
          </h2>
          <p className="text-lg font-light">
            Reach out via phone number, email, or fill out a project request for
            the most efficient, and smooth process!
          </p>
          <div className="mt-12 ml-8">
            {/* CONTACT */}
            <h4 className="text-xl font-medium mb-4">Contact</h4>
            <p className="text-xl font-light">
              <i className="fa-solid fa-phone mr-2 mb-2"></i>911-394-2000
            </p>
            <p className="text-xl font-light">
              <i className="fa-regular fa-envelope mr-2"></i>
              southerndivers@gmail.com
            </p>
            {/* ADDRESS */}
            <h4 className="text-xl font-medium mt-8 my-4">Billing Address</h4>
            <p className="text-xl font-light">
              <i className="fa-solid fa-map-location-dot mr-2"></i>11230
              Nebraska Avenue, 33602 Tampa, Florida
            </p>
          </div>
        </div>
      )}
    </InView>
  );
}
