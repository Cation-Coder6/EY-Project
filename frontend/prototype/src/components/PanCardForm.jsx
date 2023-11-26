// PanCardForm.js
import React, { useState } from "react";
import axios from "axios";

function PanCardForm() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    creditAmount: "",
    debitAmount: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let tempErrors = {};
    tempErrors.cardNumber = formData.cardNumber
      ? ""
      : "Card Number is required";
    tempErrors.creditAmount = formData.creditAmount
      ? ""
      : "Credit Amount is required";
    tempErrors.debitAmount = formData.debitAmount
      ? ""
      : "Debit Amount is required";

    setErrors({ ...tempErrors });
    return Object.values(tempErrors).every((x) => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post(
          "https://ey-backend.onrender.com/api/v1/panCard/addPancardRecord",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error submitting form", error);
      }
    }
  };

  return (
    <div className="p-4 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">Pan Card Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            htmlFor="cardNumber"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Card Number
          </label>
          <input
            type="number"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
              errors.cardNumber ? "border-red-500" : ""
            }`}
          />
          <p className="text-xs text-red-500">{errors.cardNumber}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="creditAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Credit Amount
          </label>
          <input
            type="number"
            name="creditAmount"
            id="creditAmount"
            value={formData.creditAmount}
            onChange={handleChange}
            className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
              errors.creditAmount ? "border-red-500" : ""
            }`}
          />
          <p className="text-xs text-red-500">{errors.creditAmount}</p>
        </div>
        <div className="mb-4">
          <label
            htmlFor="debitAmount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Debit Amount
          </label>
          <input
            type="number"
            name="debitAmount"
            id="debitAmount"
            value={formData.debitAmount}
            onChange={handleChange}
            className={`shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md ${
              errors.debitAmount ? "border-red-500" : ""
            }`}
          />
          <p className="text-xs text-red-500">{errors.debitAmount}</p>
        </div>
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default PanCardForm;
