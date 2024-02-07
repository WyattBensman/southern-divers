import { useEffect, useState } from "react";
import axios from "axios";
import { InView } from "react-intersection-observer";

export default function Form() {
  const [formSubmitted, setFormSubmitted] = useState(
    localStorage.getItem("formSubmitted") === "true" || false
  );
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    companyName: "",
    email: "",
    jobType: "",
    helpText: "",
  });

  useEffect(() => {
    localStorage.setItem("formSubmitted", formSubmitted);
  }, [formSubmitted]);

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/form-submit", formData);

      if (response.status === 200) {
        console.log("Form submitted successfully");
        setFormSubmitted(true);
        localStorage.setItem("formSubmitted", "true");

        // Clear localStorage after 5 minutes
        setTimeout(() => {
          localStorage.removeItem("formSubmitted");
        }, 5 * 60 * 1000);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <InView triggerOnce>
      {({ inView, ref }) => (
        <div className="md:w-1/2 flex justify-center md:mt-0 mt-12">
          <div
            ref={ref}
            className={`w-7/8 bg-white py-8 px-12 shadow-lg min-h-[550px] ${
              inView
                ? "transform scale-100 transition-transform duration-1000 ease-in-out"
                : "transform scale-90 opacity-0 transition-transform duration-1000 ease-in-out"
            }`}
          >
            {formSubmitted ? (
              <div className="flex flex-col justify-center items-center h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="text-green-500 w-12 h-12 mx-auto mb-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <h4 className="text-2xl font-semibold mb-2">Thank You!</h4>
                <p className="text-sm text-gray-600 pb-20">
                  Your form has been successfully submitted. We'll get back to
                  you within 24-48 hours.
                </p>
              </div>
            ) : (
              <>
                <h4 className="text-xl font-semibold text-center mt-2 mb-4">
                  Project Request Form
                </h4>
                {/* FORM */}
                <form onSubmit={handleSubmit}>
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
                        value={formData.name}
                        onChange={handleInputChange}
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
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
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
                      value={formData.companyName}
                      onChange={handleInputChange}
                      className="mt-1 p-2 w-full border rounded-md font-light text-black"
                    />
                  </div>

                  {/* EMAIL ADDRESS */}
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="text-md font-light text-gray-700"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
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
                      value={formData.jobType}
                      onChange={handleInputChange}
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
                      value={formData.helpText}
                      onChange={handleInputChange}
                      rows="4"
                      className="mt-1 p-2 w-full border rounded-md font-light text-black"
                    ></textarea>
                  </div>
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-800 hover:shadow-md duration-200"
                    >
                      Submit Request
                    </button>
                  </div>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </InView>
  );
}
