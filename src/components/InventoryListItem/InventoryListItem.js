import { View, Text, FlatList, Button, ScrollView } from "react-native";
import React from "react";

const InventoryListItem = () => {
  const DATA = [
    {
      id: "1",
      itemCode: "74123",
      itemName: "Shabu",
      itemDesc: "",
    },
    {
      id: "2",
      itemCode: "789456",
      itemName: "Cocain",
      itemDesc: "",
    },
    {
      id: "3",
      itemCode: "123456",
      itemName: "marijuana",
      itemDesc: "",
    },
  ];

  const Item = ({ itemCode, itemName, itemDesc }) => (
    <View
      style={{
        flexDirection: "row",

        marginHorizontal: 5,
        alignItems: "center",
        overflow: "scroll",
        borderColor: "black",
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
      
      }}
    >
      <View
        style={{
          height: 35,
          borderColor: "black",
          borderRightWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          minWidth: 100,
        }}
      >
        <Text  style={{ marginHorizontal: 5 }}>{itemCode}</Text>
      </View>
      <View
        style={{
          height: 35,
          borderColor: "black",
          borderRightWidth: 1,
          alignItems: "center",
          justifyContent: "center",
          minWidth: 200,
        }}
      >
        <Text style={{ marginHorizontal: 5, textAlign: "center" }}>
          {itemName}
        </Text>
      </View>

      <Button title={"Button"}></Button>
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
    <ScrollView horizontal style={{ flexDirection: "row", marginTop: 20 }}>
      <View>
        <View
          style={{
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "black",
            marginHorizontal: 5,
          }}
        >
          <View
            style={{
              minWidth: 100,
              height: 30,
              justifyContent: "center",
              borderRightWidth: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Item Code</Text>
          </View>
          <View
            style={{
              minWidth: 200,
              textAlign: "center",
              height: 30,
              justifyContent: "center",
              borderRightWidth: 1,
            }}
          >
            <Text style={{ textAlign: "center" }}>Item Name</Text>
          </View>
        </View>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </ScrollView>
  );
};

export default InventoryListItem;
