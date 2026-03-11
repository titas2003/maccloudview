import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import { Search, ChevronRight, Gavel, FileText, Briefcase, Home, ShieldCheck, Landmark, Sparkles, MessageCircle } from 'lucide-react-native';

const { width } = Dimensions.get('window');

const ALL_SERVICES = [
  { id: '1', title: 'Legal consultation', category: 'General', icon: Gavel },
  { id: '2', title: 'Legal advice', category: 'General', icon: FileText },
  { id: '3', title: 'Legal document drafting', category: 'Documentation', icon: Briefcase },
  { id: '4', title: 'Legal document review', category: 'Documentation', icon: Briefcase },
  { id: '5', title: 'Contract drafting', category: 'Corporate', icon: Landmark },
  { id: '6', title: 'Contract review', category: 'Corporate', icon: Landmark },
  { id: '7', title: 'Legal notice drafting', category: 'Documentation', icon: FileText },
  { id: '8', title: 'Reply to legal notices', category: 'Documentation', icon: FileText },
  { id: '9', title: 'Affidavit preparation', category: 'Personal', icon: ShieldCheck },
  { id: '10', title: 'Power of Attorney drafting', category: 'Personal', icon: ShieldCheck },
  { id: '11', title: 'Agreement drafting (rent, etc.)', category: 'Property', icon: Home },
  { id: '12', title: 'Case filing assistance', category: 'Litigation', icon: Gavel },
  // ... Add your full list here
];

const ServicesScreen = () => {
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = ALL_SERVICES.filter(service => 
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderServiceItem = ({ item }) => {
    const IconComponent = item.icon;
    return (
      <TouchableOpacity style={styles.serviceItem} activeOpacity={0.7}>
        <View style={styles.iconContainer}>
          <IconComponent color="#1F3C75" size={22} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.serviceTitle}>{item.title}</Text>
          <Text style={styles.serviceCategory}>{item.category}</Text>
        </View>
        <ChevronRight color="#CBD5E1" size={18} />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingTop: insets.top, paddingHorizontal: 20 }}>
        {/* Header with AI Badge */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Legal Services</Text>
            <View style={styles.aiBadge}>
              <Sparkles color="#7ED38C" size={12} />
              <Text style={styles.aiBadgeText}>AI POWERED</Text>
            </View>
          </View>
        </View>

        {/* AI Enhanced Search */}
        <View style={styles.searchSection}>
          <View style={styles.searchBar}>
            <Search color="#94A3B8" size={20} />
            <TextInput 
              placeholder="Describe your legal issue..." 
              placeholderTextColor="#94A3B8"
              style={styles.searchInput}
              value={searchQuery}
              onChangeText={setSearchQuery}
            />
          </View>
        </View>
      </View>

      <FlatList
        data={filteredServices}
        renderItem={renderServiceItem}
        keyExtractor={item => item.id}
        contentContainerStyle={[styles.listContent, { paddingBottom: insets.bottom + 100 }]}
        showsVerticalScrollIndicator={false}
      />

      {/* Floating AI Assistant Button */}
      <TouchableOpacity 
        style={[styles.aiFab, { bottom: insets.bottom + 80 }]}
        activeOpacity={0.8}
        onPress={() => alert('AI Assistant coming soon!')}
      >
        <LinearGradient
          colors={['#1F3C75', '#2B4C8C']}
          style={styles.fabGradient}
        >
          <MessageCircle color="#FFF" size={28} />
          <View style={styles.pingEffect} />
        </LinearGradient>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { marginBottom: 15, marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  headerTitle: { fontSize: 28, fontWeight: '900', color: '#1F3C75' },
  aiBadge: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F0F9F1', 
    paddingHorizontal: 8, 
    paddingVertical: 4, 
    borderRadius: 8, 
    marginTop: 4,
    alignSelf: 'flex-start'
  },
  aiBadgeText: { fontSize: 10, fontWeight: '800', color: '#7ED38C', marginLeft: 4 },
  
  searchSection: { marginBottom: 20 },
  searchBar: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#F8FAFC', 
    paddingHorizontal: 15, 
    borderRadius: 15, 
    height: 55,
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },
  searchInput: { flex: 1, marginLeft: 10, fontSize: 16, color: '#1F3C75' },

  listContent: { paddingHorizontal: 20 },
  serviceItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#FFF', 
    padding: 14, 
    borderRadius: 18, 
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#F1F5F9'
  },
  iconContainer: { 
    width: 44, 
    height: 44, 
    borderRadius: 12, 
    backgroundColor: '#F0F4FF', 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  textContainer: { flex: 1, marginLeft: 12 },
  serviceTitle: { fontSize: 15, fontWeight: '700', color: '#1F3C75' },
  serviceCategory: { fontSize: 11, color: '#94A3B8', marginTop: 1 },

  // AI FAB Styles
  aiFab: {
    position: 'absolute',
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#1F3C75',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  fabGradient: {
    flex: 1,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pingEffect: {
    position: 'absolute',
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#7ED38C',
    top: 15,
    right: 15,
    borderWidth: 2,
    borderColor: '#FFF'
  }
});

export default ServicesScreen;