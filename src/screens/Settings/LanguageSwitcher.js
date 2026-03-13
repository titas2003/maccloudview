import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import i18n from 'i18next';

const LanguageSwitcher = () => {

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Select Language</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('en')}
      >
        <Text>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('hi')}
      >
        <Text>हिन्दी</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => changeLanguage('bn')}
      >
        <Text>বাংলা</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LanguageSwitcher;

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 18, marginBottom: 20 },
  button: {
    padding: 15,
    backgroundColor: '#eee',
    marginBottom: 10,
    borderRadius: 8
  }
});