import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ToastAndroid,
  Alert,
  Animated,
} from "react-native";
import React, { useEffect, useState } from "react";

import axios from "axios";

import { NetCheck, DatabaseCheck } from "../../functions/HttpRequests";
import { Ionicons, Entypo,MaterialCommunityIcons } from "@expo/vector-icons";
import { CurvedBottomBar } from "react-native-curved-bottom-bar";

import TryScreen from "../try";
import TryScreens from "../tryscreen";

var width = Dimensions.get("window").width; //full width
var height = Dimensions.get("window").height; //full width



const HomeScreen = ({ navigation }) => {
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

          console.log("check");
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

      DatabaseCheck().then((res) => {
        if (res) {
          ToastAndroid.showWithGravity(
            "Connected to Database",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }

        if (!res) {
          ToastAndroid.showWithGravity(
            "Local storage is in use.",
            ToastAndroid.SHORT,
            ToastAndroid.CENTER
          );
        }
      });
    }, MINUTE_MS);

    return () => clearInterval(interval);
  }, []);

  //Bottom tab navigator
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "settings-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? "black" : "gray"}
      />
    );
  };

  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.containerwrapper}>
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

      <CurvedBottomBar.Navigator
        style={styles.bottomBar}
        strokeWidth={0.5}
        strokeColor="#DDDDDD"
        height={55}
        circleWidth={55}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight={false}
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
              }}
              onPress={() => navigate("ScanScreen")}
            >
              <MaterialCommunityIcons
                name="qrcode-scan"
                size={25}
                color="black"
              />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
      >
        <CurvedBottomBar.Screen
          name="title1"
          position="LEFT"
          component={TryScreen}
        />
        <CurvedBottomBar.Screen
          name="title2"
          component={TryScreens}
          position="RIGHT"
        />
      </CurvedBottomBar.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  containerwrapper: {
    paddingTop: 50,
  },
  button: {
    marginVertical: 5,
  },
  bottomBar: {},
  btnCircle: {
    width: 60,
    height: 60,
    borderRadius: 35,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
    bottom: 30,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: "gray",
  },
  img: {
    width: 30,
    height: 30,
  },
});
export default HomeScreen;
