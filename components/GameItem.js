import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function GameItem({ game }) {
  return (
    <View style={styles.container}>
      <Text>{game.titre}</Text>
      <Text>Genre : {game.genre}</Text>
      <Text>Prix : {game.prix}€</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
});
