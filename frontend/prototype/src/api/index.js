export async function getCreditDetails(aadharNumber, panNumber) {
  const baseUrl = "https://ey-backend.onrender.com";
  const url = `${baseUrl}/api/v1/apiCall/creditFetch?aadharNumber=${aadharNumber}&panNumber=${panNumber}`;

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
    console.error("Failed to fetch credit details:", error.message);
    // Optionally, rethrow the error if you want calling code to handle it
    throw error;
  }
}
