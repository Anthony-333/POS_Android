import NetInfo from "@react-native-community/netinfo";

//Check if there's Internet connection
export const NetCheck = () => {
  return NetInfo.fetch().then((state) => {
    return state.isConnected;
  });
};
