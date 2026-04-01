import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from "react-native-vector-icons/Feather";
import LottieView from "lottie-react-native";

const SignupScreen = ({ goBack }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      {/* Lottie Animation */}
      <LottieView
        source={require("../../assets/lottie/Success_law.json")}
        autoPlay
        loop
        style={styles.lottie}
      />

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.title}>Create Account</Text>
        <Text style={styles.subtitle}>Allow Advocacy at your service</Text>

        {/* Name */}
        <View style={styles.inputContainer}>
          <Icon name="user" size={18} color="#7A7A7A" />
          <TextInput
            placeholder="Full Name"
            style={styles.input}
            value={name}
            onChangeText={setName}
          />
        </View>

        {/* Email */}
        <View style={styles.inputContainer}>
          <Icon name="mail" size={18} color="#7A7A7A" />
          <TextInput
            placeholder="Email"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Phone */}
        <View style={styles.inputContainer}>
          <Icon name="phone" size={18} color="#7A7A7A" />
          <TextInput
            placeholder="Phone"
            keyboardType="phone-pad"
            style={styles.input}
            value={phone}
            onChangeText={setPhone}
          />
        </View>

        {/* Password */}
        <View style={styles.inputContainer}>
          <Icon name="lock" size={18} color="#7A7A7A" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
          />
        </View>

        {/* Signup Button */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Back to Login */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={goBack}>
            <Text style={styles.login}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FB",
  },

  lottie: {
    backgroundColor: "#96cadd",
    width: "100%",
    height: 350,
  },

  card: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    marginTop: -20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    color: "#2C3E50",
  },

  subtitle: {
    color: "#7A7A7A",
    marginBottom: 20,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F1F4F9",
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
  },

  input: {
    flex: 1,
    padding: 12,
  },

  button: {
    backgroundColor: "#96cadd",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#ffffff",
    fontWeight: "600",
    fontSize: 16,
  },

  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },

  footerText: {
    color: "#666",
  },

  login: {
    color: "#3D6DCC",
    fontWeight: "600",
  },
});