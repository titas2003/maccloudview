import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Search, ChevronRight, Gavel, FileText, Briefcase, Landmark, Shield, Home } from 'lucide-react-native';

const ALL_SERVICES = [
  { id: '1', title: 'Legal consultation', category: 'General', icon: Gavel, route: 'LegalConsultation' },
  { id: '2', title: 'Legal advice', category: 'General', icon: FileText }, 
  { id: '3', title: 'Legal document drafting', category: 'Documentation', icon: Briefcase }, 
  { id: '4', title: 'Legal document review', category: 'Documentation', icon: Briefcase }, 
  { id: '5', title: 'Contract drafting', category: 'Corporate', icon: Landmark }, 
  { id: '6', title: 'Contract review', category: 'Corporate', icon: Landmark }, 
  { id: '7', title: 'Legal notice drafting', category: 'Documentation', icon: FileText }, 
  { id: '8', title: 'Reply to legal notices', category: 'Documentation', icon: FileText }, 
  { id: '9', title: 'Affidavit preparation', category: 'Personal', icon: Shield }, 
  { id: '10', title: 'Power of Attorney drafting', category: 'Personal', icon: Shield }, 
  { id: '11', title: 'Agreement drafting (rent, etc.)', category: 'Property', icon: Home }, 
  { id: '12', title: 'Case filing assistance', category: 'Litigation', icon: Gavel },
];

const ServicesScreen = () => {

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = ALL_SERVICES.filter(service =>
    service.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const renderServiceItem = ({ item }) => {
    const IconComponent = item.icon;

    return (
      <TouchableOpacity
        style={styles.serviceItem}
        activeOpacity={0.7}
        onPress={() => {
          if (item.route) {
            navigation.navigate(item.route);
          }
        }}
      >
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
    <View style={[styles.container, { paddingTop: insets.top }]}>

      <Text style={styles.headerTitle}>Legal Services</Text>

      <View style={styles.searchBar}>
        <Search color="#94A3B8" size={20} />
        <TextInput
          placeholder="Describe your legal issue..."
          style={styles.searchInput}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      <FlatList
        data={filteredServices}
        renderItem={renderServiceItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 120 }}
      />
    </View>
  );
};

export default ServicesScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1F3C75',
    marginBottom: 20
  },

  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    paddingHorizontal: 15,
    borderRadius: 15,
    height: 55,
    marginBottom: 20
  },

  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16
  },

  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
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

  textContainer: {
    flex: 1,
    marginLeft: 12
  },

  serviceTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1F3C75'
  },

  serviceCategory: {
    fontSize: 11,
    color: '#94A3B8'
  }
});