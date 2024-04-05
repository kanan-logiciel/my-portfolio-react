import axios from "axios";

export const httpPost = async (url, data, headers) => {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Server responded with error:", error.response.status);
      console.error("Error message:", error.response.data);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received from server.");
    } else {
      // Something happened in setting up the request that triggered an error
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};

export const httpGet = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    const { response } = error;

    const { data: apiError } = response;

    console.log("## error", error, apiError);
    if (error.response) {
      console.error("Server responded with error:", error.response.status);
      console.error("Error message:", error.response.data);
    } else if (error.request) {
      console.error("No response received from server.");
    } else {
      console.error("Error setting up the request:", error.message);
    }
    throw error;
  }
};
