import { View, Text, FlatList, Button } from "react-native";
import React from "react";

const InventoryListItem = () => {
  const DATA = [
    {
      id: "1",
      itemCode: "74123",
      itemName: "Shabu",
      itemDesc: "masarap ang shabu",
    },
    {
      id: "2",
      itemCode: "789456",
      itemName: "Cocain",
      itemDesc: "masarap ang cocain",
    },
    {
      id: "3",
      itemCode: "123456",
      itemName: "marijuana",
      itemDesc: "masarap ang marijuana",
    },
  ];

  const Item = ({ itemCode, itemName, itemDesc }) => (
    <View style={{ flexDirection: "row" }}>
      <Text style={{ marginHorizontal: 5 }}>{itemCode}</Text>
      <Text style={{ marginHorizontal: 5 }}>{itemName}</Text>
      <Text style={{ marginHorizontal: 5 }}>{itemDesc}</Text>

      <Button title={"button"}></Button>
    </View>
  );

  const renderItem = ({ item }) => (
    <Item
      itemCode={item.itemCode}
      itemName={item.itemName}
      itemDesc={item.itemDesc}
    />
  );

  return (
    <View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default InventoryListItem;
