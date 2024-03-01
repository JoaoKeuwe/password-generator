import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";

import * as Clipboard from "expo-clipboard";

export const ModalPassword = ({ passwordValue, close }) => {
  async function handleCopyPassword() {
    await Clipboard.setStringAsync(passwordValue);
    alert("senha salva com sucesso");
    close();
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha Gerada</Text>

        <Pressable style={styles.innerPassword} onPress={handleCopyPassword}>
          <Text style={styles.text}>{passwordValue}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={close}>
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(24,24,24,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    backgroundColor: "#fff",
    width: "85%",
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: "#0e0e0e",
    width: "90%",
    paddingTop: 14,
    paddingBottom: 14,
    borderRadius: 8,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
  buttonArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginTop: 8,
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    marginTop: 14,
    marginBottom: 14,
    padding: 10,
  },
  buttonSave: {
    backgroundColor: "#3a2de9ea",
    borderRadius: 8,
  },
  buttonSaveText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});
