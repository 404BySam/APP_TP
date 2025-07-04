import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import AfficheG from "./components/AfficheG";

export default function App() {
  return (
    <ImageBackground
      source={require("./assets/background.png")}
      style={styles.bg}
    >
      <View style={styles.container}>
        <AfficheG />
        <StatusBar style="auto" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    flex: 1,
    justifyContent: "center",
  },
});
