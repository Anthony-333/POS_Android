import { View, Text } from "react-native";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

//screens Import
import HomeScreen from "../screens/homeScreen/Index";
import InventoryScreen from "../screens/InventoryScreen/Index";
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="InventoryScreen" component={InventoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
