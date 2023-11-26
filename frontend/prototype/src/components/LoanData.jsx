import React from "react";
import { useNavigate } from "react-router-dom";

const LoanData = ({ data }) => {
  const navigate = useNavigate();
  const handleFinalStep = () => {
    navigate("/final");
  };

  return (
    <div className="p-8 max-w-3xl mx-auto bg-white rounded-xl shadow-lg space-y-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">
        Loan Information
      </h2>

      <div className="space-y-6">
        {Object.entries({
          "Crop Registration Number": data.feedData.cropCode,
          "Land Area": data.feedData.area,
          "Applicant Name": data.aadharCard.name,
          "Father's Name": data.aadharCard.fatherName,
          "Mother's Name": data.aadharCard.motherName,
          "Aadhar Number": data.aadharCard.aadharNumber,
          "PAN Card Number": data.aadharCard.panNumber,
          Location: `${data.aadharCard.location.village}, ${data.aadharCard.location.district}, ${data.aadharCard.location.state}`,
          "Crop Type": "Wheat",
          "Crop Variety": "PBW752",
          "Estimated Production Per Hectare": data.predictedProduction,
          "Predicted Price Per Unit": data.predictedPrice,
          "Revenue Forecast": data.predictedRevenue,
          "Suggested Loan Amount": data.approvalAmount,
        }).map(([label, value]) => (
          <p className="font-medium text-gray-700">
            {label}: <span className="text-gray-600">{value}</span>
          </p>
        ))}

        <button
          onClick={handleFinalStep}
          className="w-full mt-8 bg-green-600 hover:bg-green-700 text-white rounded-lg px-6 py-3 transition duration-300 ease-in-out"
        >
          Proceed to Final Step
        </button>
      </div>
    </div>
  );
};

export default LoanData;
