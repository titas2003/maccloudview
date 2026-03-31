import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ onLogin }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // dummy login
    await AsyncStorage.setItem('isLoggedIn', 'true');
    onLogin();
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Welcome Back</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 28, fontWeight: '900', marginBottom: 20 },
  input: { borderWidth: 1, padding: 14, marginBottom: 15, borderRadius: 10 },
  button: { backgroundColor: '#1F3C75', padding: 15, borderRadius: 10 },
  buttonText: { color: '#FFF', textAlign: 'center', fontWeight: '700' }
});