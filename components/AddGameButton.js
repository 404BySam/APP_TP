// AddGameButton.js
import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import GameModal from "./GameModal";

export default function AddGameButton({ onAdd }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleAdd = (game) => {
    onAdd(game);
    setModalVisible(false);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.addButton}
      >
        <Text style={styles.plus}>＋</Text>
      </TouchableOpacity>

      <GameModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={handleAdd}
      />
    </>
  );
}

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: "blue",
    borderRadius: 50,
    width: 60,
    height: 60,
    position: "absolute",
    bottom: 40,
    right: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
});
