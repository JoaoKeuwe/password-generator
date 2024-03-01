import React, { useState } from "react";
import { Text, StyleSheet, Image, TouchableOpacity, View, Modal } from "react-native";
import Slider from "@react-native-community/slider";
import { ModalPassword } from './src/components/modal'

const App = () => {
  const [size, setSize] = useState(6);
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)

  let charset = '"abcdefghijk1mnopqrstuvwxyZABCDEFGHIJKLMNOPORSTUVWXYZ0123456789'


  const generatePassword = () => {
    let password = ''
    for (let i = 0, n = charset.length; i < size; i++) {
      password += charset.charAt(Math.floor(Math.random() * n))
    }
    setPasswordValue(password)
    setModalVisible(true)
  }


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

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <ModalPassword close={() => setModalVisible(false)} passwordValue={passwordValue} />
      </Modal>
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
