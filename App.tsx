import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context'; // Added this
import { Home, LayoutGrid, User, Info } from 'lucide-react-native';
import ServicesScreen from './src/screens/ServicesScreen';

// Import your actual screens
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

type RootTabParamList = {
  Home: undefined;
  Services: undefined;
  SOS: undefined;
  Profile: undefined;
  Version: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

const SOSButton = ({ onPress }: { onPress?: () => void }) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.9} style={styles.sosContainer}>
    <View style={styles.sosButton}>
      <Text style={styles.sosText}>SOS</Text>
    </View>
  </TouchableOpacity>
);

export default function App() {
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
            options={{ tabBarIcon: ({ color }) => <Home color={color} size={24} /> }}
          />

          <Tab.Screen
            name="Services"
            component={ServicesScreen}
            options={{
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
            component={ProfileScreen} // Points to your new Profile page
            options={{ tabBarIcon: ({ color }) => <User color={color} size={24} /> }}
          />

          <Tab.Screen
            name="Version"
            component={View}
            options={{
              tabBarIcon: ({ color }) => <Info color={color} size={24} />,
              tabBarLabel: 'Version'
            }}
          />

        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: Platform.OS === 'ios' ? 85 : 65,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 0,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  sosContainer: { top: -30, justifyContent: 'center', alignItems: 'center' },
  sosButton: {
    width: 75, height: 75, borderRadius: 37.5, backgroundColor: '#D32F2F',
    justifyContent: 'center', alignItems: 'center', borderWidth: 5, borderColor: '#FFFFFF',
    shadowColor: '#D32F2F', shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.5, shadowRadius: 12,
  },
  sosText: { color: 'white', fontWeight: '900', fontSize: 22 },
});