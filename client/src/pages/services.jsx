import { useEffect } from "react";
import BoatSalvage from "../components/services/boatSalvage";
import DredgingErosion from "../components/services/dredgingErosion";
import InspectionsRepair from "../components/services/inspectionsRepair";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mt-20">
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-light text-center">
          A Solution for Every Need in Coastal Living!
        </h2>
      </div>
      <div className="mt-12 px-4 sm:px-8 md:px-16 lg:px-20 xl:px-24">
        <BoatSalvage />
        <DredgingErosion />
        <InspectionsRepair />
      </div>
    </div>
  );
}
