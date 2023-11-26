import React, { useState } from "react";

function AadharPan() {
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    aadharNumber: "",
    panNumber: "",
    location: {
      village: "",
      district: "",
      state: "",
    },
  });
  const [errors, setErrors] = useState({});

  const validate = (name, value) => {
    switch (name) {
      case "name":
      case "fatherName":
      case "motherName":
      case "village":
      case "district":
      case "state":
        return value.length < 3
          ? "This field must be at least 3 characters long"
          : "";
      case "aadharNumber":
      case "panNumber":
        return value.length !== 6
          ? "This field must be exactly 6 digits long"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const error = validate(name, value);

    if (["village", "district", "state"].includes(name)) {
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [name]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check for any validation errors before submitting
    const validationErrors = Object.values(errors).some((error) => error);
    if (validationErrors) {
      console.log("Validation errors", errors);
      return; // Stop submission if there are validation errors
    }

    try {
      const response = await fetch(
        "https://ey-backend.onrender.com/api/v1/aadharCard/createAadhar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const result = await response.json();
      console.log("Success:", result);
      // Handle success here
    } catch (error) {
      console.error("Error:", error.message);
      // Handle errors here
    }
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit}>
        {Object.keys(formData).map((key) => {
          if (key === "location") {
            return Object.keys(formData.location).map((locKey) => (
              <div key={locKey} className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor={locKey}
                >
                  {locKey.charAt(0).toUpperCase() + locKey.slice(1)}
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id={locKey}
                  type="text"
                  placeholder={locKey}
                  name={locKey}
                  onChange={handleChange}
                />
                {errors[locKey] && (
                  <p className="text-red-500 text-xs italic">
                    {errors[locKey]}
                  </p>
                )}
              </div>
            ));
          }
          return (
            <div key={key} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={key}
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={key}
                type="text"
                placeholder={key}
                name={key}
                onChange={handleChange}
              />
              {errors[key] && (
                <p className="text-red-500 text-xs italic">{errors[key]}</p>
              )}
            </div>
          );
        })}

        <div className="flex items-center justify-between">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default AadharPan;
