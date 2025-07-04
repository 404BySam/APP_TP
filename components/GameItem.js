import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GameItem({ item }) {
  return (
    <View style={styles.container}>
      <Text>{item.titre}</Text>
      <Text>Genre : {item.genre}</Text>
      <Text>Prix : {item.prix}€</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    alignItems: "center",
  },
});
