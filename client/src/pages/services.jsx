import BoatSalvage from "../components/services/BoatSalvage";
import DredgingErosion from "../components/services/DredgingErosion";
import InspectionsRepair from "../components/services/InspectionsRepair";

export default function Services() {
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
