// import { View, Text } from "react-native";
// import React from "react";

// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// const Stack = createNativeStackNavigator();

// //screens Import
// import HomeScreen from "../screens/homeScreen/Index";
// import InventoryScreen from "../screens/InventoryScreen/Index";
// const Navigation = () => {
//   return (
//     <Stack.Navigator>
//       {/* <Stack.Screen name="HomeScreen" component={HomeScreen} />
//       <Stack.Screen name="InventoryScreen" component={InventoryScreen} /> */}
//     </Stack.Navigator>
//   );
// };

// export default Navigation;

import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import HomeScreen from "../screens/homeScreen/index";
import InventoryScreen from "../screens/InventoryScreen/index";
import ScanScreen from "../screens/ScanScreen";

const Navigation = ({ navigate }) => {
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
    <View style={{ flex: 1 }}>
      <NavigationContainer>
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
                onPress={() => navigate(ScanScreen)}
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
            component={HomeScreen}
          />
          <CurvedBottomBar.Screen
            name="title2"
            component={InventoryScreen}
            position="RIGHT"
          />
        </CurvedBottomBar.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
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

export default Navigation;
