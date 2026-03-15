import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import i18n from "../i18n";

const LanguageSwitcher = () => {

  return (
    <View style={styles.container}>

      <TouchableOpacity
        style={styles.button}
        onPress={() => i18n.changeLanguage("en")}
      >
        <Text style={styles.text}>EN</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => i18n.changeLanguage("hi")}
      >
        <Text style={styles.text}>HI</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => i18n.changeLanguage("bn")}
      >
        <Text style={styles.text}>BN</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LanguageSwitcher;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 10
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: "#1F3C75",
    borderRadius: 6
  },
  text: {
    color: "#FFF",
    fontWeight: "600"
  }
});