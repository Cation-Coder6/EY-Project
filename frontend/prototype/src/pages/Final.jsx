import React from "react";
import Lottie from "react-lottie";
import animationData from "../assets/tick.json"; // Path to your Lottie file

function Final() {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="text-center p-10">
      <h1 className="text-4xl font-bold mb-5">
        Congratulations on Your Loan Approval!
      </h1>
      <div style={{ width: "300px", margin: "0 auto" }}>
        <Lottie options={defaultOptions} height={300} width={300} />
      </div>
      <h1 className="text-4xl font-bold mb-5">
        Thank You for using our services.
      </h1>
    </div>
  );
}

export default Final;
