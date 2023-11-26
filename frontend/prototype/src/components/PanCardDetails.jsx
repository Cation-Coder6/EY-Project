import React, { useState, useEffect } from "react";
const panCardDetails = {
  cardNumber: 987654321,
  creditAmount: 10000,
  debitAmount: 10000,
};

function PanCardDetails({ details = panCardDetails }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // assuming the data loads in 1 second

    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      className={`transition-all duration-700 ease-in-out ${
        isLoading ? "opacity-0 translate-x-full" : "opacity-100 translate-x-0"
      }`}
    >
      {isLoading ? (
        <div className="p-4">
          <div>Loading...</div>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-200">
          <h3 className="font-bold text-2xl mb-4 text-gray-700">
            Pan Card Details
          </h3>
          <div className="text-gray-600 space-y-3">
            <p className="text-lg">
              <strong className="text-gray-800">Card Number:</strong>{" "}
              <span className="ml-2">{details.cardNumber}</span>
            </p>
            <p className="text-lg">
              <strong className="text-gray-800">Total Credit Amount:</strong>{" "}
              <span className="ml-2">{details.creditAmount}</span>
            </p>
            <p className="text-lg">
              <strong className="text-gray-800">Total Debit Amount:</strong>{" "}
              <span className="ml-2">{details.debitAmount}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default PanCardDetails;
