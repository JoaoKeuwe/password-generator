import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
const App = () => {
  const [size, setSize] = useState(10);

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("./src/assets/logo.png")} />
      <Text style={styles.title}>{size} caracteres </Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="black"
          minimumTrackTintColor="green"
          thumbTintColor="blue"
          value={size}
          onValueChange={(value) => setSize(value.toFixed(0))} />
        
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
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
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#FFF",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#329de9",
    width: "80%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});

export default App;
