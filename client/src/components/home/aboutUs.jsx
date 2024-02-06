export default function AboutUs() {
  return (
    <div className="md:flex mt-20">
      <div className="flex flex-col md:w-3/5">
        <h2 className="text-3xl mb-4 font-semibold">About Us</h2>
        <div className="text-lg font-light">
          <p className="mb-2">
            From expert boat salvage to precision dredging, we ensure a
            worry-free coastal experience with thorough inspections and seamless
            seawall/piling repairs across Southern Florida.
          </p>
          <p>
            Grounded in Christian values and maritime expertise, we redefine
            coastal living with a commitment to water sanctity. Blending
            expertise and experience, we guarantee tranquility by efficiently
            managing time and costs to deliver top-quality work across the the{" "}
            <span className="italic font-medium">Greater Tampa Bay Area</span>,{" "}
            <span className="italic font-medium">Fort Myers</span>,{" "}
            <span className="italic font-medium">Naples</span>, and{" "}
            <span className="italic font-medium">Beyond</span>.
          </p>
        </div>
      </div>
      <div className="md:w-2/5 flex items-top justify-center">
        <img
          src="/images/southern-divers-logo.png"
          className="md:w-72 w-52 md:mt-0 mt-8"
          alt="Southern Divers Logo"
        />
      </div>
    </div>
  );
}
