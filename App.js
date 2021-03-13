import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import Clipboard from "expo-clipboard";
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

export default function App() {
  const [password, setPassword] = useState("");
  const [size, setSize] = useState(10);

  function generatePass() {
    let pass = "";
    for (let i = 0, n = charset.length; i < size; i++) {
      pass += charset.charAt(Math.floor(Math.random() * n));
    }
    setPassword(pass);
  }

  function copyPass() {
    Clipboard.setString(password);
  }
  return (
    <View style={styles.container}>
      <Image
        source={require("./src/assets/logo.png")}
        style={styles.container__logo}
      />
      <Text style={styles.container__text}>{size} Caracteres</Text>
      <View style={styles.container__area}>
        <Slider
          style={styles.container__area_slider}
          minimumValue={5}
          maximumValue={15}
          value={size}
          onValueChange={(valor) => setSize(valor.toFixed(0))}
          minimumTrackTintColor="#FFA200"
          maximumTrackTintColor="6e7c7c"
        />
      </View>

      <TouchableOpacity style={styles.container__button} onPress={generatePass}>
        <Text style={styles.container__button_text}>Gerar Senha</Text>
      </TouchableOpacity>

      {password !== "" && (
        <View style={styles.container__area}>
          <Text style={styles.container__area_password} onLongPress={copyPass}>
            {" "}
            {password}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  container__logo: {
    marginBottom: 60,
  },
  container__text: {
    color: "#6e7582",
    fontSize: 30,
    fontWeight: "bold",
  },
  container__area: {
    marginTop: 15,
    marginBottom: 15,
    backgroundColor: "#fff",
    width: "90%",
  },
  container__area_slider: {
    height: 50,
  },
  container__area_password: {
    padding: 10,
    textAlign: "center",
    fontSize: 20,
  },
  container__button: {
    backgroundColor: "#FFA200",
    width: "80%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
    marginBottom: 25,
  },
  container__button_text: {
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
  },
});
