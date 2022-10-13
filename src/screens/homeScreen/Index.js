import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { NetCheck } from "../../functions/NetChecker";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full width

import { Ionicons, Entypo } from "@expo/vector-icons";

const Index = ({ navigation }) => {
  //Time interval of checking internet connection
  const MINUTE_MS = 10000;

  const [connectionStatus, setConnectionStatus] = useState(false);

  //Check internet Connection
  useEffect(() => {
    ToastAndroid.showWithGravity(
      "Checking Internet.",
      ToastAndroid.LONG,
      ToastAndroid.CENTER
    );

    const interval = setInterval(() => {
      NetCheck().then((res) => {
        if (res) {
          ToastAndroid.showWithGravity(
            "Connected to Internet.",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
          setConnectionStatus(true);
        }
        if (!res) {
          ToastAndroid.showWithGravity(
            "Checking Internet.",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );

          setConnectionStatus(false);
        }
      });
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  // if (connectionStatus) {
  //   ToastAndroid.showWithGravity(
  //     "Connected to Internet.",
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER
  //   );
  // }
  // if (!connectionStatus) {
  //   ToastAndroid.showWithGravity(
  //     "Checking Internet",
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER
  //   );
  // }

  // //Check server
  // const CheckServer = () => {
  //   axios
  //     .get("https://3f99-120-28-167-232.ap.ngrok.io/")
  //     .then(function (response) {
  //       // handle success
  //       if (response.data === true) {
  //         ToastAndroid.showWithGravity(
  //           "Connected to server.",
  //           ToastAndroid.LONG,
  //           ToastAndroid.CENTER
  //         );
  //       } else {
  //         ToastAndroid.showWithGravity(
  //           "Cannot Reach the server",
  //           ToastAndroid.LONG,
  //           ToastAndroid.CENTER
  //         );
  //       }
  //     });
  // };

  // useEffect(() => {
  //   CheckServer();
  // }, []);
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
          onPress={() => navigation.navigate("InventoryScreen")}
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
