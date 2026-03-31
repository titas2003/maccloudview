import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, StyleSheet, Platform, ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Home, LayoutGrid, User, Info } from 'lucide-react-native';

import './src/i18n';

// Screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import ServicesScreen from './src/screens/ServicesScreen';
import LandingScreen from './src/screens/LandingScreen';
import LegalConsultationScreen from './src/screens/services/LegalConsultationScreen';
import LegalAdviceScreen from './src/screens/services/LegalAdviceScreen';
import LoginScreen from './src/screens/LoginScreen';

// Permissions
import { checkPermissions, requestPermissions } from './src/utils/permissions';

// Types
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
  LegalAdvice: undefined;
};

// Navigators
const Tab = createBottomTabNavigator<RootTabParamList>();
const Stack = createStackNavigator<ServicesStackParamList>();

// Services Stack
function ServicesStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ServicesMain" component={ServicesScreen} />
      <Stack.Screen name="LegalConsultation" component={LegalConsultationScreen} />
      <Stack.Screen name="LegalAdvice" component={LegalAdviceScreen} />
    </Stack.Navigator>
  );
}

// SOS Button
const SOSButton = ({ onPress }: { onPress?: () => void }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.sosContainer}>
    <View style={styles.sosButton}>
      <Text style={styles.sosText}>SOS</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {

  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [hasPermissions, setHasPermissions] = useState<boolean | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    const initApp = async () => {

      // 1. Check onboarding
      const launch = await AsyncStorage.getItem('alreadyLaunched');
      if (launch === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }

      // 2. Check permissions
      const granted = await checkPermissions();
      if (granted) {
        setHasPermissions(true);
      } else {
        const requested = await requestPermissions();
        setHasPermissions(requested);
      }

      // 3. Check login
      const login = await AsyncStorage.getItem('isLoggedIn');
      setIsLoggedIn(login === 'true');
    };

    initApp();
  }, []);

  // After onboarding complete
  const handleCompleteOnboarding = async () => {
    await AsyncStorage.setItem('alreadyLaunched', 'true');
    setIsFirstLaunch(false);
  };

  // After login
  const handleLogin = async () => {
    await AsyncStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  // Loading state
  if (
    isFirstLaunch === null ||
    hasPermissions === null ||
    isLoggedIn === null
  ) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#1F3C75" />
      </View>
    );
  }

  // 1. First Launch → Landing
  if (isFirstLaunch) {
    return (
      <SafeAreaProvider>
        <LandingScreen onComplete={handleCompleteOnboarding} />
      </SafeAreaProvider>
    );
  }

  // 2. Permissions required
  if (!hasPermissions) {
    return (
      <SafeAreaProvider>
        <View style={styles.loadingContainer}>
          <Text>Permissions are required to continue</Text>
        </View>
      </SafeAreaProvider>
    );
  }

  // 3. Login required
  if (!isLoggedIn) {
    return (
      <SafeAreaProvider>
        <LoginScreen onLogin={handleLogin} />
      </SafeAreaProvider>
    );
  }

  // 4. MAIN APP (your existing UI untouched)
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

// Styles
const styles = StyleSheet.create({

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  tabBar: {
    height: Platform.OS === 'ios' ? 85 : 65,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    backgroundColor: '#FFF',
    borderTopWidth: 0,
  },

  sosContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center'
  },

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

  sosText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 22
  }

});