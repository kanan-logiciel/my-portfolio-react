import axios from "axios";

export const httpPost = async (url, data, headers) => {
  try {
    const response = await axios.post(url, data, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const httpGet = async (url, headers) => {
  try {
    const response = await axios.get(url, { headers });
    return response.data;
  } catch (error) {
    throw error;
  }
};
