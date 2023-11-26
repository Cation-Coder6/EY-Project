import React from "react";
import AadharForm from "../components/AadharCard"; // Assuming you have this component from your previous implementation
import PanCardForm from "../components/PanCardForm";

function AadharPan() {
  return (
    <div className="flex flex-col h-screen">
      <div className="flex flex-col items-center justify-center w-full h-full bg-green-900">
        <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-xl">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-10">
            Aadhar and Pan Card Registration
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Aadhar Card Details
              </h2>
              <AadharForm />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                Pan Card Details
              </h2>
              <PanCardForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AadharPan;
