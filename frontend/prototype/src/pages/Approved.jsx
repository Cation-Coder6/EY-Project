import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import LoanData from "../components/LoanData";
import { getLoanAmountDetails } from "../api/loanData";
import { DataContext } from "../DataContext";

function Approved() {
  const [cropCode, setCropCode] = useState("");
  const [loanData, setLoanData] = useState(null); // Initialize to null
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const { data } = useContext(DataContext);
  console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setError("");
    try {
      // Use the imported function
      const result = await getLoanAmountDetails(cropCode, data.aadharNumber);
      setLoanData(result); // Update the state with the received data
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const navigate = useNavigate();

  const handleFinalStep = () => {
    navigate("/final");
  };

  return (
    <div className="p-6 m-6">
      <h1 className="text-3xl font-bold text-center mb-10 m-3 text-green-600">
        Congrats on having an Negligible Fraud Score!
        <br />
        <br />
        <span className="text-black">
          We will help you get started with a loan amount immediately after
          understanding your needs better!
        </span>
      </h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <label htmlFor="cropCode" className="block mb-2 text-3xl font-semibold">
          Enter Your Crop Registration Number:
        </label>
        <input
          type="text"
          id="cropCode"
          value={cropCode}
          onChange={(e) => setCropCode(e.target.value)}
          className="border rounded p-2 mb-4 w-full"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded px-4 py-2"
        >
          Check Loan Amount
        </button>
      </form>

      {/* Display error message if there is an error */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Display loading indicator */}
      {isLoading && <p>Loading...</p>}

      {/* Conditionally render the LoanData component */}
      {loanData && <LoanData data={loanData} />}
    </div>
  );
}

export default Approved;
