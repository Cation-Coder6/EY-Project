export async function getLoanAmountDetails(cropCode, aadharNumber) {
  const baseUrl = "https://ey-backend.onrender.com";
  const url = `${baseUrl}/api/v1/apiCall/loanAmount?cropCode=${cropCode}&aadharNumber=${aadharNumber}`;

  const requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      // Handle non-200 responses
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Failed to fetch loan amount details:", error.message);
    // Optionally, rethrow the error if you want the calling code to handle it
    throw error;
  }
}
