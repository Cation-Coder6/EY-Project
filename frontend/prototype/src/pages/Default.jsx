import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";
import bgImg from "../assets/pattern.svg";
// import axios from "axios";

function Default() {
  const [name, setName] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [crop, setCrop] = useState("0000");
  const { setData } = useContext(DataContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setData({ name, aadharNumber, panNumber, crop });
      navigate("/credit");
    } catch (error) {
      console.error("Error submitting data", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-900">
      <div className="flex flex-col items-center w-full max-w-md p-8 border border-gray-300 bg-gray-100 rounded-lg shadow-xl">
        <h1 className="font-bold text-4xl mb-10">Quadravision Project</h1>
        <form onSubmit={handleSubmit} className="w-full">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="p-3 m-3 w-full border-0 rounded-lg shadow-sm"
          />
          <input
            type="number"
            value={aadharNumber}
            onChange={(e) => setAadharNumber(e.target.value)}
            placeholder="Enter your Aadhar number"
            className="p-3 m-3 w-full border-0 rounded-lg shadow-sm"
          />
          <input
            type="number"
            value={panNumber}
            onChange={(e) => setPanNumber(e.target.value)}
            placeholder="Enter your PAN number"
            className="p-3 m-3 w-full border-0 rounded-lg shadow-sm"
          />
          <button
            type="submit"
            className="bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-6 rounded-lg shadow mt-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Default;
