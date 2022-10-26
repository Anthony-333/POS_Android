import NetInfo from "@react-native-community/netinfo";

//Check if there's Internet connection
export const NetCheck = () => {
  try {
    return NetInfo.fetch().then((state) => {
      return state.isConnected;
    });
  } catch (error) {
    return false;
  }
};

export const DatabaseCheck = () => {
  return fetch("https://07c9-120-28-167-232.ap.ngrok.io/")
    .then((response) => response.json())
    .then((json) => {
      return json.Status;
    })
    .catch((error) => {
      console.error(error);
    });
};
