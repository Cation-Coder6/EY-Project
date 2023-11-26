import React, { useState, useEffect, useContext } from "react";
import AadharDetails from "../components/AadharDetails";
import PanCardDetails from "../components/PanCardDetails";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../DataContext";
import { getCreditDetails } from "../api";

function CreditScore() {
  const [creditScore, setCreditScore] = useState(49);
  const [barStyle, setBarStyle] = useState({});
  const [pointerStyle, setPointerStyle] = useState({});
  const [scoreColor, setScoreColor] = useState("black");
  const [showButton, setShowButton] = useState(false);
  const [aadharDetails, setAadharDetails] = useState(null);
  const [panCardDetails, setPanCardDetails] = useState(null);

  const { data } = useContext(DataContext);
  const navigate = useNavigate();
  console.log(data);
  useEffect(() => {
    async function getData() {
      const fetchedData = await getCreditDetails(
        data.aadharNumber,
        data.panNumber
      );
      setAadharDetails(fetchedData.data.aadhar);
      setPanCardDetails(fetchedData.data.pan);
    }
    getData();
  }, []);

  useEffect(() => {
    if (creditScore !== null) {
      const percentage = creditScore;
      let backgroundColor;
      if (creditScore < 50) {
        backgroundColor = "green";
      } else if (creditScore < 75) {
        backgroundColor = "orange";
      } else {
        backgroundColor = "red";
      }
      setBarStyle({
        width: `${percentage}%`,
        backgroundColor,
        transition: "width 0.5s ease, background-color 0.5s ease",
      });
      setPointerStyle({ left: `calc(${percentage}% - 10px)` });
      setScoreColor(backgroundColor);

      setTimeout(() => {
        setShowButton(true);
      }, 1700);
    }
  }, [creditScore]);

  const handleReviewClick = () => {
    // Add logic to submit for human review
    alert("Submitted for human review."); // Placeholder action
  };

  const handleButtonClick = () => {
    navigate("/approved");
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center p-6 m-6">
        <h2 className="text-2xl font-semibold mb-4">
          Your Fraud Score is{" "}
          {creditScore !== null && (
            <span style={{ color: scoreColor }}>{creditScore}</span>
          )}
        </h2>
        {creditScore !== null && (
          <div className="w-full bg-gray-200 h-8 rounded-full overflow-hidden relative">
            <div
              className="absolute top-0 left-0 h-full"
              style={barStyle}
            ></div>
            <div className="absolute top-0" style={pointerStyle}>
              <div className="w-4 h-4 bg-black rounded-full transform translate-y-2"></div>
              <span className="absolute -top-8 text-xs">{creditScore}</span>
            </div>
            <div className="flex justify-between text-xs px-2">
              <span>Bad</span>
              <span>Medium</span>
              <span>Good</span>
            </div>
          </div>
        )}
      </div>
      {aadharDetails && panCardDetails && (
        <div className="flex justify-around mt-8">
          <AadharDetails details={aadharDetails} />
          <PanCardDetails details={panCardDetails} />
        </div>
      )}
      {creditScore !== null && (
        <div className="flex justify-center p-4">
          {creditScore < 75 ? (
            showButton && (
              <button
                className="bg-green-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleButtonClick}
              >
                Proceed
              </button>
            )
          ) : (
            <div className="text-center">
              <p className="text-red-500 font-bold mb-4 p-2">
                Sorry, your score is too low. We cannot move your application
                further at this moment.
              </p>

              <button
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded"
                onClick={handleReviewClick}
              >
                Submit for Human Review
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default CreditScore;
