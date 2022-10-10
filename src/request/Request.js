import axios from "axios";

export const getItem = async () => {
  try {
    const response = await axios.get(
      `http://120.28.167.232:44252/api/getItems`
    );
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
