import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Scale, Briefcase, Calendar, ChevronLeft, UserCircle } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Bar */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerLeft}>
          <ChevronLeft color="#1F3C75" size={24} />
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
        <Text style={styles.logoText}>Advocacy</Text>
        <TouchableOpacity>
          <UserCircle color="#1F3C75" size={32} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* WIDER HERO CARD */}
        <LinearGradient 
          colors={['#2B4C8C', '#162D59']} 
          start={{x: 0, y: 0}} end={{x: 1, y: 0}}
          style={styles.heroCard}
        >
          {/* Icon pushed far left and made slightly transparent */}
          <View style={styles.heroIconWrapper}>
            <Scale color="rgba(255,255,255,0.15)" size={140} />
          </View>
          
          {/* Content pushed far right */}
          <View style={styles.heroTextContainer}>
            <Text style={styles.heroTitle}>MY LEGAL{"\n"}ADVISORY</Text>
            <Text style={styles.heroSub}>Find and contact your selected verified lawyer</Text>
            <TouchableOpacity style={styles.heroBtn}>
              <Text style={styles.heroBtnText}>View Advisor Profile</Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>

        {/* BENTO GRID */}
        <View style={styles.gridRow}>
          <View style={[styles.gridCard, { backgroundColor: '#F0F9F1' }]}>
            <Briefcase color="#1F3C75" size={48} />
            <Text style={styles.cardTitle}>LEGAL{"\n"}DOCUMENT</Text>
            <TouchableOpacity style={styles.cardBtnGreen}>
              <Text style={styles.btnText}>Manage Docs</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.gridCard, { backgroundColor: '#F0F7FF' }]}>
            <Calendar color="#1F3C75" size={48} />
            <Text style={styles.cardTitle}>BOOK{"\n"}APPOINTMENT:</Text>
            <TouchableOpacity style={styles.cardBtnBlue}>
              <Text style={styles.btnText}>Schedule Now</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* NEXT APPOINTMENT */}
        <View style={styles.apptCard}>
           <View style={{flex: 1}}>
             <Text style={styles.apptLabel}>NEXT APPOINTMENT</Text>
             <Text style={styles.apptTime}>14 OCT, 2:00 PM</Text>
             <Text style={styles.apptDoc}>With Adv. Sarah Jensen</Text>
           </View>
           <TouchableOpacity style={styles.checkInBtn}>
             <Text style={styles.checkInText}>Check-in</Text>
           </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    marginTop: 10,
    height: 50
  },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoutText: { color: '#1F3C75', fontSize: 16, marginLeft: 5 },
  logoText: { fontSize: 32, fontWeight: 'bold', color: '#0d0d0e' },
  
  scrollContent: { paddingHorizontal: 15, paddingTop: 20, paddingBottom: 120 },
  
  // HERO CARD ADJUSTMENTS
  heroCard: { 
    borderRadius: 30, 
    height: 200, 
    marginBottom: 20, 
    flexDirection: 'row', // Align icon and text horizontally
    overflow: 'hidden',
    width: '100%', // Ensures it uses full available width
  },
  heroIconWrapper: {
    position: 'absolute',
    left: -15,
    top: 10,
    justifyContent: 'center',
    height: '100%',
  },
  heroTextContainer: { 
    flex: 1,
    padding: 25,
    justifyContent: 'center',
    alignItems: 'flex-end', // Pushes text content to the right
    zIndex: 2,
  },
  heroTitle: { 
    color: '#FFF', 
    fontSize: 24, 
    fontWeight: '900', 
    textAlign: 'right',
    lineHeight: 28 
  },
  heroSub: { 
    color: 'rgba(255,255,255,0.8)', 
    fontSize: 13, 
    textAlign: 'right', 
    marginTop: 8, 
    marginBottom: 15,
    width: '80%' 
  },
  heroBtn: { 
    backgroundColor: '#7ED38C', 
    paddingHorizontal: 20, 
    paddingVertical: 10, 
    borderRadius: 25 
  },
  heroBtnText: { color: '#FFF', fontWeight: 'bold', fontSize: 14 },

  gridRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  gridCard: { 
    width: (width - 45) / 2, 
    height: 250, 
    borderRadius: 30, 
    padding: 20, 
    justifyContent: 'space-between' 
  },
  cardTitle: { color: '#1F3C75', fontWeight: 'bold', fontSize: 18, lineHeight: 22 },
  cardBtnGreen: { backgroundColor: '#7ED38C', padding: 12, borderRadius: 15 },
  cardBtnBlue: { backgroundColor: '#5D9CEC', padding: 12, borderRadius: 15 },
  btnText: { color: '#FFF', textAlign: 'center', fontSize: 12, fontWeight: 'bold' },

  apptCard: { 
    backgroundColor: '#F8FAFB', 
    borderRadius: 30, 
    padding: 25, 
    flexDirection: 'row', 
    alignItems: 'center' 
  },
  apptLabel: { fontSize: 12, color: '#94A3B8', fontWeight: 'bold' },
  apptTime: { fontSize: 20, color: '#1F3C75', fontWeight: 'bold' },
  apptDoc: { fontSize: 14, color: '#64748B' },
  checkInBtn: { backgroundColor: '#EBF7EE', paddingHorizontal: 20, paddingVertical: 12, borderRadius: 18 },
  checkInText: { color: '#7ED38C', fontWeight: 'bold' }
});

export default HomeScreen;