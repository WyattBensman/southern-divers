import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  const renderFooter = location.pathname !== "/contact";

  if (!renderFooter) {
    return null;
  }

  return (
    <div className="flex md:flex-row flex-col gap-x-32 justify-center text-white py-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24 bg-blue-600">
      <div className="md:w-fit">
        <h4 className="text-xl font-medium mb-4">Contact</h4>
        <p className="font-light">
          <i className="fa-solid fa-phone mr-2 mb-2"></i>911-394-2000
        </p>
        <p className="font-light">
          <i class="fa-regular fa-envelope mr-2"></i>southerndivers@gmail.com
        </p>
      </div>
      <div className="md:w-fit md:mt-0 mt-12">
        <h4 className="text-xl font-medium mb-4">Billing Address</h4>
        <p className="font-light">
          <i className="fa-solid fa-map mr-2 mb-2"></i>11230 Sidney Freyburg
          Road
        </p>
        <p className="font-light">
          <i className="fa-solid fa-map text-blue-600 mr-2 mb-2"></i>33602,
          Tampa, Florida
        </p>
      </div>
      <div className="md:w-fit md:mt-0 mt-12">
        <h4 className="text-xl font-medium mb-4">Services</h4>
        <Link
          to="/services"
          className="block font-light mb-2 hover:text-gray-200 hover:underline duration-200 cursor-pointer"
        >
          Boat Salvage
        </Link>
        <Link
          to="/services"
          className="block font-light mb-2 hover:text-gray-200 hover:underline duration-200 cursor-pointer"
        >
          Dredging & Erosion Control
        </Link>
        <Link
          to="/services"
          className="block font-light hover:text-gray-200 hover:underline duration-200 cursor-pointer"
        >
          Underwater Inspections & Repair
        </Link>
      </div>
      {/* <div className="md:w-1/4 md:mb-0 mb-12 flex justify-center md:order-3 order-1">
        <button className="px-6 py-3 h-fit border border-white text-white hover:bg-white hover:text-blue-600 duration-200">
          Request a Quote
        </button>
      </div> */}
    </div>
  );
}
