import React, { useState, useEffect } from "react";

function AadharDetails({ details }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust the timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        isLoading ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
      }`}
    >
      {isLoading ? (
        <div className="p-6">
          <div>Loading...</div>{" "}
          {/* Replace with a more sophisticated loader if desired */}
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-bold text-2xl mb-4 text-gray-700">
            Aadhar Details
          </h3>
          <div className="text-gray-600">
            <p className="mb-2">
              <strong className="text-gray-800">Name:</strong>{" "}
              <span className="ml-2">{details.name}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-800">Father's Name:</strong>{" "}
              <span className="ml-2">{details.fatherName}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-800">Mother's Name:</strong>{" "}
              <span className="ml-2">{details.motherName}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-800">Aadhar Number:</strong>{" "}
              <span className="ml-2">{details.aadharNumber}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-800">PAN Number:</strong>{" "}
              <span className="ml-2">{details.panNumber}</span>
            </p>
            <p className="mb-2">
              <strong className="text-gray-800">Location:</strong>{" "}
              <span className="ml-2">
                {details.location.village}, {details.location.district},{" "}
                {details.location.state}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default AadharDetails;
