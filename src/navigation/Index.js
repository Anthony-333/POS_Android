import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//screens Import
import HomeScreen from "../screens/homeScreen/";
import InventoryScreen from "../screens/InventoryScreen/";
import ScanScreen from "../screens/ScanScreen";

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="DrawerNavigation" component={DrawerNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
        <Stack.Screen name="ScanScreen" component={ScanScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
