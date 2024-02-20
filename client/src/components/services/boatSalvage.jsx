import { InView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function BoatSalvage() {
  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div
          ref={ref}
          id="boat-salvage"
          className={`my-16 ${
            inView
              ? "opacity-100 translate-y-0 transition-opacity duration-1000 ease-in-out"
              : "opacity-0 translate-y-20"
          }`}
        >
          <h2 className="text-3xl font-semibold mb-4">Boat Salvage</h2>
          <div className="flex md:flex-row flex-col">
            <img
              src="/images/boat-salvage-service.png"
              alt="Professional Boat Salvaging"
              className="md:w-80 h-full"
            />
            <div className="flex flex-col justify-between md:ml-6 mt-6 mb-12 lg:mr-32">
              <p className="text-lg font-light">
                Our Boat Salvage services are led by certified divers,
                specifically trained in underwater salvage and recovery in the
                state of Florida. With a focus on expertise and safety, our team
                is equipped to handle various challenges, ensuring the
                successful retrieval and restoration of sunken vessels. Whether
                it's emergency retrievals or planned salvage operations, trust
                us to navigate the depths and safeguard your valuable marine
                assets.
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
