import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home, LayoutGrid, User, Info } from 'lucide-react-native';
import './src/i18n';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import LandingScreen from './src/screens/LandingScreen';
import LegalConsultationScreen from './src/screens/services/LegalConsultationScreen';

type RootTabParamList = {
  Home: undefined;
  ServicesStack: undefined;
  SOS: undefined;
  Profile: undefined;
  Version: undefined;
};

type ServicesStackParamList = {
  ServicesMain: undefined;
  LegalConsultation: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<ServicesStackParamList>();

function ServicesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ServicesMain" component={ServicesScreen} />
      <Stack.Screen name="LegalConsultation" component={LegalConsultationScreen} />
    </Stack.Navigator>
  );
}

const SOSButton = ({ onPress }: { onPress?: () => void }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.sosContainer}>
    <View style={styles.sosButton}>
      <Text style={styles.sosText}>SOS</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then(value => {
      if (value === null) setIsFirstLaunch(true);
      else setIsFirstLaunch(false);
    });
  }, []);

  const handleCompleteOnboarding = async () => {
    await AsyncStorage.setItem('alreadyLaunched', 'true');
    setIsFirstLaunch(false);
  };

  if (isFirstLaunch === null) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1F3C75" />
      </View>
    );
  }

  if (isFirstLaunch) {
    return (
      <SafeAreaProvider>
        <LandingScreen onComplete={handleCompleteOnboarding} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: styles.tabBar,
            tabBarActiveTintColor: '#1F3C75',
            tabBarInactiveTintColor: '#94A3B8',
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => <Home color={color} size={24} />
            }}
          />

          <Tab.Screen
            name="ServicesStack"
            component={ServicesStack}
            options={{
              tabBarLabel: 'Services',
              tabBarIcon: ({ color }) => <LayoutGrid color={color} size={24} />
            }}
          />

          <Tab.Screen
            name="SOS"
            component={View}
            options={{
              tabBarButton: (props) => <SOSButton {...props} />,
              tabBarLabel: () => null
            }}
          />

          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => <User color={color} size={24} />
            }}
          />

          <Tab.Screen
            name="Version"
            component={View}
            options={{
              tabBarLabel: 'Version',
              tabBarIcon: ({ color }) => <Info color={color} size={24} />
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  tabBar: {
    height: Platform.OS === 'ios' ? 85 : 65,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    backgroundColor: '#FFF',
    borderTopWidth: 0,
  },

  sosContainer: { top: -30, justifyContent: 'center', alignItems: 'center' },

  sosButton: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: '#D32F2F',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 5,
    borderColor: '#FFF'
  },

  sosText: { color: 'white', fontWeight: '900', fontSize: 22 }
});