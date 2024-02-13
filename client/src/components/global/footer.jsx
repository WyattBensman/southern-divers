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
          <i className="fa-solid fa-phone mr-2 mb-2"></i>
          <a href="tel:9113942000" className="text-white">
            813-528-2166
          </a>
        </p>
        <p className="font-light">
          <i className="fa-regular fa-envelope mr-2"></i>
          <a href="mailto:southerndivers@gmail.com" className="text-white">
            southerndivers@gmail.com
          </a>
        </p>
      </div>
      <div className="md:w-fit md:mt-0 mt-12">
        <h4 className="text-xl font-medium mb-4">Billing Address</h4>
        <p className="font-light">
          <i className="fa-solid fa-map mr-2 mb-2"></i>904 Riverscape Street
        </p>
        <p className="font-light">
          <i className="fa-solid fa-map text-blue-600 mr-2 mb-2"></i>
          Bradenton, Florida, 34208
        </p>
      </div>
      <div className="md:w-fit md:mt-0 mt-12">
        <h4 className="text-xl font-medium mb-4">Services</h4>
        <Link
          to="/services#boat-salvage"
          className="block font-light mb-2 hover:text-gray-200 hover:underline duration-200 cursor-pointer"
        >
          Boat Salvage
        </Link>
        <Link
          to="/services#dredging-erosion"
          className="block font-light mb-2 hover:text-gray-200 hover:underline duration-200 cursor-pointer"
        >
          Dredging & Erosion Control
        </Link>
        <Link
          to="/services#inspections-salvage"
          className="block font-light hover:text-gray-200 hover:underline duration-200 cursor-pointer"
        >
          Underwater Inspections & Repair
        </Link>
      </div>
    </div>
  );
}
