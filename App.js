import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
const App = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./src/assets/logo.png")} />
input
      <Text styele={styles.title}>20 caracteres </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3F3FF",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    marginBottom: 60
  }
});

export default App;
