import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import { ArrowRight } from 'lucide-react-native'; // Clean line icon for the button

const { width } = Dimensions.get('window');

// The function we will pass to mark the onboarding as complete
const LandingScreen = ({ onComplete }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        {/* The requested icon from the URL */}
        <View style={styles.iconWrapper}>
          <Image 
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png' }} 
            style={styles.heroIcon} 
          />
        </View>

        {/* Localized Welcome Text */}
        <Text style={styles.welcomeTitle}>Welcome to Advocacy</Text>
        <Text style={styles.welcomeSub}>
          Your trusted legal support companion. Connect with professionals, get answers, and book appointments with ease.
        </Text>

        {/* The Blue "Next" Button */}
        <TouchableOpacity style={styles.nextBtn} activeOpacity={0.8} onPress={onComplete}>
          <View style={styles.btnContent}>
            <Text style={styles.btnText}>Next</Text>
            <ArrowRight color="#FFF" size={20} strokeWidth={2.5} style={styles.arrow} />
          </View>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FB' }, // Soft light blue bg like mockup
  content: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    paddingHorizontal: 30,
    marginTop: -Dimensions.get('window').height * 0.1, // Lift everything slightly up
  },
  
  iconWrapper: { 
    width: 200, 
    height: 200, 
    borderRadius: 100, 
    backgroundColor: '#D1E3F8', // Circle background for the icon
    justifyContent: 'center', 
    alignItems: 'center', 
    marginBottom: 40,
    shadowColor: '#1F3C75',
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3
  },
  heroIcon: { width: 130, height: 130 },
  
  welcomeTitle: { 
    fontSize: 32, 
    fontWeight: '900', 
    color: '#0d0d0e', // Pure black like mockup
    textAlign: 'center', 
    marginBottom: 15,
    letterSpacing: 0.5
  },
  welcomeSub: { 
    fontSize: 16, 
    color: '#64748B', // Muted slate gray
    textAlign: 'center', 
    lineHeight: 24, 
    width: '90%', 
    marginBottom: 50 
  },
  
  nextBtn: { 
    backgroundColor: '#007AFF', // Clean iOS blue
    paddingVertical: 18, 
    width: width * 0.6, // Wider button
    borderRadius: 30, 
    justifyContent: 'center', 
    alignItems: 'center',
    shadowColor: '#007AFF',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 5
  },
  btnContent: { flexDirection: 'row', alignItems: 'center' },
  btnText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' },
  arrow: { marginLeft: 10 }
});

export default LandingScreen;