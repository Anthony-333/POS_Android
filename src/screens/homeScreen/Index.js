import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full width

import { Ionicons, Entypo } from "@expo/vector-icons";

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: "bold", fontSize: 20, textAlign: "center" }}>
        Mobile POS
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          width: width,
          paddingTop: 20,
        }}
      >
        <TouchableOpacity
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>Select Foods</Text>
          <Ionicons name="fast-food" size={50} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Text>Select Drinksss</Text>
          <Entypo name="drink" size={50} color="black" />
        </TouchableOpacity>
      </View>

      <View style={{ paddingHorizontal: 37, paddingTop: 20 }}>
        <TouchableOpacity
          style={{
            padding: 20,
            borderWidth: 1,
            borderColor: "black",
            borderRadius: 10,
          }}
        >
          <Text style={{ textAlign: "center" }}>Manage Inventory</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
});
export default Index;
