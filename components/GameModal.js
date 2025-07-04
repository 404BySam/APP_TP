// GameModal.js
import React, { useState } from "react";
import {
  Modal,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from "react-native";

export default function GameModal({ visible, onClose, onAdd }) {
  const [titre, setTitre] = useState("");
  const [prix, setPrix] = useState("");
  const [genre, setGenre] = useState("");

  const handleAdd = () => {
    if (!titre || !prix || !genre) return;

    onAdd({
      id: Date.now(),
      titre,
      prix: parseFloat(prix),
      genre,
    });

    setTitre("");
    setPrix("");
    setGenre("");
    onClose();
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Ajouter un jeu</Text>

          <TextInput
            placeholder="Titre"
            value={titre}
            onChangeText={setTitre}
            style={styles.input}
          />
          <TextInput
            placeholder="Prix"
            value={prix}
            onChangeText={setPrix}
            keyboardType="numeric"
            style={styles.input}
          />
          <TextInput
            placeholder="Genre"
            value={genre}
            onChangeText={setGenre}
            style={styles.input}
          />

          <Pressable
            style={[styles.button, styles.addButton]}
            onPress={handleAdd}
          >
            <Text style={styles.textStyle}>Ajouter</Text>
          </Pressable>

          <Pressable
            style={[styles.button, styles.closeButton]}
            onPress={onClose}
          >
            <Text style={styles.textStyle}>Annuler</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 25,
    width: "85%",
    alignItems: "center",
  },
  modalText: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
  },
  button: {
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginVertical: 6,
  },
  addButton: {
    backgroundColor: "#28a745",
  },
  closeButton: {
    backgroundColor: "#dc3545",
  },
  textStyle: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
});
