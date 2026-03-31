import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { checkAndRequestPermissions } from '../utils/permissions';
import { useNavigation } from '@react-navigation/native';

const PermissionScreen = () => {

  const navigation = useNavigation();

  useEffect(() => {
    handlePermissions();
  }, []);

  const handlePermissions = async () => {
    const granted = await checkAndRequestPermissions();

    if (granted) {
      navigation.replace('Login');
    } else {
      alert('All permissions are required for app functionality.');
    }
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1F3C75" />
      <Text style={styles.text}>Checking permissions...</Text>
    </View>
  );
};

export default PermissionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    marginTop: 15,
    fontSize: 14
  }
});