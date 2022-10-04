import { StatusBar } from "expo-status-bar";
import { View, Dimensions } from "react-native";

import Navigation from "./src/navigation/Index";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full width

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
}
