import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import React from "react";
import GameItem from "./GameItem";
import AddGameButton from "./AddGameButton";

export default function AfficheG() {
  const [games, setGames] = useState([
    {
      id: 1,
      titre: "The Last of Us Part II",
      prix: 25,
      genre: "Action-Aventure",
    },
    {
      id: 2,
      titre: "FIFA 23",
      prix: 20,
      genre: "Sport",
    },
    {
      id: 3,
      titre: "Call of Duty: Modern Warfare II",
      prix: 30,
      genre: "FPS",
    },
    {
      id: 4,
      titre: "Horizon Forbidden West",
      prix: 28,
      genre: "Action-RPG",
    },
    {
      id: 5,
      titre: "Mario Kart 8 Deluxe",
      prix: 35,
      genre: "Course",
    },
    {
      id: 6,
      titre: "Animal Crossing: New Horizons",
      prix: 22,
      genre: "Simulation",
    },
    {
      id: 7,
      titre: "Elden Ring",
      prix: 32,
      genre: "Action-RPG",
    },
    {
      id: 8,
      titre: "God of War Ragnarök",
      prix: 40,
      genre: "Action-Aventure",
    },
    {
      id: 9,
      titre: "Gran Turismo 7",
      prix: 27,
      genre: "Course",
    },
    {
      id: 10,
      titre: "Minecraft",
      prix: 18,
      genre: "Sandbox",
    },
    {
      id: 11,
      titre: "Fortnite",
      prix: 0,
      genre: "Battle Royale",
    },
    {
      id: 12,
      titre: "Red Dead Redemption 2",
      prix: 23,
      genre: "Action-Aventure",
    },
    {
      id: 13,
      titre: "Cyberpunk 2077",
      prix: 15,
      genre: "RPG",
    },
    {
      id: 14,
      titre: "Resident Evil Village",
      prix: 19,
      genre: "Horreur",
    },
    {
      id: 15,
      titre: "Assassin's Creed Valhalla",
      prix: 21,
      genre: "Action-Aventure",
    },
  ]);

  const addGame = (newGame) => {
    setGames([...games, newGame]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleList}>Ma Liste de Jeux</Text>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <GameItem item={item} />}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
      <AddGameButton onAdd={addGame} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  titleList: {
    fontSize: 24,
    color: "white",
  },
  boutonModifier: {
    marginTop: 20,
    backgroundColor: "#0077cc",
    borderRadius: 7,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  row: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
