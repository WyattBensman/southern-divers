export default function Form() {
  return (
    <div className="md:w-1/2 flex justify-center md:mt-0 mt-12">
      <div className="w-7/8 bg-white py-8 px-12 shadow-lg">
        <h4 className="text-xl font-semibold text-center mt-2 mb-4">
          Project Request Form
        </h4>
        {/* FORM */}
        <form>
          {/* NAME & PHONE NUMBER */}
          <div className="flex md:flex-row flex-col mb-4">
            <div className="md:w-1/2 md:mr-8">
              <label
                htmlFor="name"
                className="text-md font-light text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-1 p-2 w-full border rounded-md font-light text-black"
              />
            </div>
            <div className="md:w-1/2 md:mt-0 mt-4">
              <label
                htmlFor="phoneNumber"
                className="text-md font-light text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                className="mt-1 p-2 w-full border rounded-md font-light text-black"
              />
            </div>
          </div>

          {/* COMPANY NAME */}
          <div className="mb-4">
            <label
              htmlFor="companyName"
              className="text-md font-light text-gray-700"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="mt-1 p-2 w-full border rounded-md font-light text-black"
            />
          </div>

          {/* EMAIL ADDRESS */}
          <div className="mb-4">
            <label htmlFor="email" className="text-md font-light text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="mt-1 p-2 w-full border rounded-md font-light text-black"
            />
          </div>

          {/* JOB TYPE */}
          <div className="mb-4">
            <label
              htmlFor="jobType"
              className="text-md font-light text-gray-700"
            >
              Job Type
            </label>
            <select
              id="jobType"
              name="jobType"
              className="mt-1 p-2 w-full border rounded-md font-light text-black"
            >
              <option value="boatSalvage">-</option>
              <option value="boatSalvage">Boat Salvage</option>
              <option value="dredgingErosionControl">
                Dredging & Erosion Control
              </option>
              <option value="underwaterInspections">
                Underwater Inspections & Seawall/Piling Repair
              </option>
            </select>
          </div>

          {/* HELP */}
          <div className="mb-4">
            <label
              htmlFor="helpText"
              className="text-md font-light text-gray-700"
            >
              How Can We Help?
            </label>
            <textarea
              id="helpText"
              name="helpText"
              rows="4"
              className="mt-1 p-2 w-full border rounded-md font-light text-black"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-800 hover:shadow-md duration-200">
              Submit Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
