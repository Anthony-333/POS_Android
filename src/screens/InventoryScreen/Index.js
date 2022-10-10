import { View, Text, TextInput, FlatList, Button } from "react-native";
import React from "react";

import { AntDesign } from "@expo/vector-icons";
import InventoryListItem from "../../components/InventoryListItem/InventoryListItem";

const Index = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginHorizontal: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            borderWidth: 2,
            borderColor: "black",
            borderRadius: 15,
            padding: 5,
            flex: 1,
          }}
        >
          <AntDesign name="search1" size={24} color="black" />
          <TextInput placeholder="Search..." style={{ flex: 1 }}></TextInput>
        </View>
        <View
          style={{
            backgroundColor: "#0768DA",
            borderRadius: 5,
            alignItems: "center",
            justifyContent: "center",
            padding: 5,
            marginLeft: 10,
          }}
        >
          <Text style={{ color: "white" }}> Add Item</Text>
        </View>
      </View>

      <View>
        <InventoryListItem />
      </View>
    </View>
  );
};

export default Index;
