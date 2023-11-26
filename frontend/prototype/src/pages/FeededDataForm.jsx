import React, { useState } from "react";

function FeededDataForm() {
  const [formData, setFormData] = useState({
    cropCode: "",
    area: "",
    rainfall: "",
  });
  const [error, setError] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (values) => {
    const errors = {};
    if (!values.cropCode) {
      errors.cropCode = "Crop code is required";
    }
    if (!values.area) {
      errors.area = "Area is required";
    } else if (isNaN(values.area)) {
      errors.area = "Area must be a number";
    }
    if (!values.rainfall) {
      errors.rainfall = "Rainfall is required";
    } else if (isNaN(values.rainfall)) {
      errors.rainfall = "Rainfall must be a number";
    }
    return errors;
  };
  async function sendFeededDataToBackend(feededData) {
    try {
      const response = await fetch(
        "https://ey-backend.onrender.com/api/v1/feedData/create",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feededData),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      return result;
    } catch (error) {
      console.error("Error sending feeded data to backend:", error);
      throw error; // rethrow the error for caller to handle
    }
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setError(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        // Use formData instead of feededData
        const result = await sendFeededDataToBackend(formData);
        console.log("Sending data to backend:", formData);
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 1000);
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto my-10 bg-white p-8 border border-gray-200 rounded-lg shadow-xl">
      <h2 className="text-2xl font-semibold text-center text-gray-800">
        Feeded Data Entry
      </h2>
      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {/* Crop Code Input */}
        <div className="relative">
          <input
            type="text"
            name="cropCode"
            id="cropCode"
            value={formData.cropCode}
            onChange={handleChange}
            className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 ${
              error.cropCode ? "border-red-500" : ""
            }`}
            placeholder="Crop Code"
          />
          <label
            htmlFor="cropCode"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Crop Code
          </label>
          {error.cropCode && (
            <p className="text-red-500 text-xs italic">{error.cropCode}</p>
          )}
        </div>

        {/* Area Input */}
        <div className="relative">
          <input
            type="text"
            name="area"
            id="area"
            value={formData.area}
            onChange={handleChange}
            className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 ${
              error.area ? "border-red-500" : ""
            }`}
            placeholder="Area"
          />
          <label
            htmlFor="area"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Area
          </label>
          {error.area && (
            <p className="text-red-500 text-xs italic">{error.area}</p>
          )}
        </div>

        {/* Rainfall Input */}
        <div className="relative">
          <input
            type="text"
            name="rainfall"
            id="rainfall"
            value={formData.rainfall}
            onChange={handleChange}
            className={`peer h-10 w-full border-b-2 border-gray-300 text-gray-900 placeholder-transparent focus:outline-none focus:border-indigo-600 ${
              error.rainfall ? "border-red-500" : ""
            }`}
            placeholder="Rainfall"
          />
          <label
            htmlFor="rainfall"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Rainfall
          </label>
          {error.rainfall && (
            <p className="text-red-500 text-xs italic">{error.rainfall}</p>
          )}
        </div>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit
        </button>
      </form>
      {isSubmitted && (
        <div className="text-green-500 text-center mt-3">
          Data sent successfully!
        </div>
      )}
    </div>
  );
}

export default FeededDataForm;
