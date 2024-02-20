import { InView } from "react-intersection-observer";

export default function Content() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`md:w-1/2 mt-12 ${
            inView
              ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
              : "opacity-0 translate-y-20"
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
              <i className="fa-solid fa-phone mr-2 mb-2"></i>
              <a href="tel:8135282166">813-528-2166</a>
            </p>
            <p className="text-xl font-light">
              <i className="fa-regular fa-envelope mr-2"></i>
              <a href="mailto:southerndivers@gmail.com">
                southerndivers@gmail.com
              </a>
            </p>
            {/* ADDRESS */}
            <h4 className="text-xl font-medium mt-8 my-4">Billing Address</h4>
            <p className="text-xl font-light">
              <i className="fa-solid fa-map-location-dot mr-2"></i>904
              Riverscape Street, Bradenton, Florida, 34208
            </p>
          </div>
        </div>
      )}
    </InView>
  );
}
