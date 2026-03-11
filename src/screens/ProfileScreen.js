import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { 
  ChevronRight, 
  Settings, 
  ShieldCheck, 
  CreditCard, 
  Bell, 
  LogOut, 
  Mail, 
  Phone 
} from 'lucide-react-native';

const ProfileScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Account Profile</Text>
        <TouchableOpacity style={styles.settingsBtn}>
          <Settings color="#1F3C75" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        
        {/* Profile Card */}
        <View style={styles.profileCard}>
          <View style={styles.avatarWrapper}>
            <Image 
              source={{ uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400' }} 
              style={styles.avatar}
            />
            <View style={styles.verifiedBadge}>
              <ShieldCheck color="#FFF" size={14} />
            </View>
          </View>
          <Text style={styles.userName}>Advocacy</Text>
          <Text style={styles.userStatus}>Premium Member</Text>
        </View>

        {/* Info Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>CONTACT INFORMATION</Text>
          <View style={styles.infoRow}>
            <View style={styles.iconBox}><Mail color="#1F3C75" size={20} /></View>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoLabel}>Email</Text>
              <Text style={styles.infoValue}>titas@maccloudview.com</Text>
            </View>
          </View>
          <View style={styles.infoRow}>
            <View style={styles.iconBox}><Phone color="#1F3C75" size={20} /></View>
            <View style={styles.infoTextWrapper}>
              <Text style={styles.infoLabel}>Phone</Text>
              <Text style={styles.infoValue}>+91 98765 43210</Text>
            </View>
          </View>
        </View>

        {/* Settings Menu Section */}
        <View style={styles.section}>
          <Text style={styles.sectionLabel}>APP SETTINGS</Text>
          
          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#E3F2FD' }]}><CreditCard color="#42A5F5" size={20} /></View>
              <Text style={styles.menuItemText}>Payment Methods</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#FFF9C4' }]}><Bell color="#FBC02D" size={20} /></View>
              <Text style={styles.menuItemText}>Notifications</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.iconBox, { backgroundColor: '#E8F5E9' }]}><ShieldCheck color="#66BB6A" size={20} /></View>
              <Text style={styles.menuItemText}>Security & Privacy</Text>
            </View>
            <ChevronRight color="#CBD5E1" size={20} />
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutBtn}>
          <LogOut color="#EF4444" size={20} />
          <Text style={styles.logoutText}>Logout from Device</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8FAFC' },
  header: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    paddingHorizontal: 20, 
    height: 60,
    backgroundColor: '#FFF'
  },
  headerTitle: { fontSize: 20, fontWeight: '800', color: '#1F3C75' },
  settingsBtn: { padding: 5 },
  scrollContent: { padding: 20, paddingBottom: 120 },
  
  // Profile Card
  profileCard: { 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    borderRadius: 30, 
    padding: 25,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2
  },
  avatarWrapper: { position: 'relative', marginBottom: 15 },
  avatar: { width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: '#F1F5F9' },
  verifiedBadge: { 
    position: 'absolute', 
    bottom: 5, 
    right: 5, 
    backgroundColor: '#7ED38C', 
    padding: 4, 
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#FFF'
  },
  userName: { fontSize: 24, fontWeight: '900', color: '#1F3C75' },
  userStatus: { fontSize: 14, color: '#64748B', marginTop: 2 },

  // Sections
  section: { marginBottom: 25 },
  sectionLabel: { fontSize: 12, fontWeight: '800', color: '#94A3B8', letterSpacing: 1, marginBottom: 12, marginLeft: 5 },
  infoRow: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    padding: 15, 
    borderRadius: 20, 
    marginBottom: 10 
  },
  iconBox: { width: 40, height: 40, borderRadius: 12, backgroundColor: '#F1F5F9', justifyContent: 'center', alignItems: 'center' },
  infoTextWrapper: { marginLeft: 15 },
  infoLabel: { fontSize: 12, color: '#94A3B8' },
  infoValue: { fontSize: 15, fontWeight: '600', color: '#1F3C75' },

  // Menu Items
  menuItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    backgroundColor: '#FFF', 
    padding: 15, 
    borderRadius: 20, 
    marginBottom: 10 
  },
  menuItemLeft: { flexDirection: 'row', alignItems: 'center' },
  menuItemText: { fontSize: 16, fontWeight: '600', color: '#1F3C75', marginLeft: 15 },

  // Logout
  logoutBtn: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center', 
    padding: 20, 
    backgroundColor: '#FEF2F2', 
    borderRadius: 20,
    marginTop: 10
  },
  logoutText: { color: '#EF4444', fontWeight: 'bold', fontSize: 16, marginLeft: 10 }
});

export default ProfileScreen;