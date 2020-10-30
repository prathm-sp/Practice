import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App({ navigation }) {
  var [email, setEmail] = useState("");
  var [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sologram</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setEmail(text.target.value)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#003f5c"
          onChangeText={(text) => setPassword(text.target.value)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => {
          navigation.navigate("HomeTab");
        }}
      >
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {
    marginBottom: 50,
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#feea1d",
    borderWidth: 0,
    width: "100%",
    height: "25%",
  },
  inputView: {
    width: "80%",
    backgroundColor: "white",
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 30,
  },
  headerText: {
    color: "#440027",
    fontWeight: "bold",
    fontSize: 50,
    fontStyle: "italic",
  },
  inputText: {
    height: 50,
    borderColor: "#9874aa",
    color: "white",
  },
  forgot: {
    color: "white",
    fontSize: 11,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#feea1d",
    borderRadius: 25,
    borderWidth: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: "black",
  },
});
