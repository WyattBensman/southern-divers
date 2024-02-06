export default function Services() {
  return (
    <div className="my-20">
      <h2 className="text-3xl font-semibold mb-4">Our Services</h2>
      <div className="flex md:flex-row flex-col gap-x-4 gap-y-10">
        {/* BOAT SALVAGE */}
        <div className="md:w-1/3">
          <img
            src="/images/boat-salvage.png"
            className="w-full"
            alt="Professional Boat Salvage Services"
          />
          <h3 className="text-xl font-medium mt-2">Boat Salvage</h3>
          <p className="font-light">
            Expert retrieval of sunken vessels, ensuring the restoration and
            protection of your marine assets.
          </p>
          <p className="w-fit mt-6 cursor-pointer hover:underline hover:text-blue-600 duration-200">
            Learn More{""}
            <i className="ml-1 fa-solid fa-arrow-right text-blue-600"></i>
          </p>
        </div>
        {/* DREDGING EROSION CONTROL */}
        <div className="md:w-1/3">
          <img
            src="/images/dredging-erosion-control.png"
            className="w-full"
            alt="Dredging Operation for Erosion Control"
          />
          <h3 className="text-xl font-medium mt-2">
            Dredging & Erosion Control
          </h3>
          <p className="font-light">
            Precision dredging and erosion solutions, preserving and enhancing
            the resilience of your coastal environment.
          </p>
          <p className="w-fit mt-6 cursor-pointer hover:underline hover:text-blue-600 duration-200">
            Learn More{""}
            <i className="ml-1 fa-solid fa-arrow-right text-blue-600"></i>
          </p>
        </div>
        {/* Underwater Inspections & Repair */}
        <div className="md:w-1/3">
          <img
            src="/images/underwater-inspections.png"
            className="w-full"
            alt="Professional Underwater Maintenance and Inspections"
          />
          <h3 className="text-xl font-medium mt-2">
            Underwater Inspections & Repair
          </h3>
          <p className="font-light">
            Thorough underwater assessments and seamless repairs, safeguarding
            and revitalizing your marine structures with precision.
          </p>
          <p className="w-fit mt-6 cursor-pointer hover:underline hover:text-blue-600 duration-200">
            Learn More{""}
            <i className="ml-1 fa-solid fa-arrow-right text-blue-600"></i>
          </p>
        </div>
      </div>
    </div>
  );
}
