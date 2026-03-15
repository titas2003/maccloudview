import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Search, ChevronRight, Gavel, FileText, Briefcase, Landmark, Shield, Home } from 'lucide-react-native';
import { useTranslation } from 'react-i18next';
import i18n from '../i18n';

const ALL_SERVICES = (t) => [
  { id: '1', title: t('legalConsultation'), category: t('general'), icon: Gavel, route: 'LegalConsultation' },
  { id: '2', title: t('legalAdvice'), category: t('general'), icon: FileText }, 
  { id: '3', title: t('legalDocumentDrafting'), category: t('documentation'), icon: Briefcase }, 
  { id: '4', title: t('legalDocumentReview'), category: t('documentation'), icon: Briefcase }, 
  { id: '5', title: t('contractDrafting'), category: t('corporate'), icon: Landmark }, 
  { id: '6', title: t('contractReview'), category: t('corporate'), icon: Landmark }, 
  { id: '7', title: t('legalNoticeDrafting'), category: t('documentation'), icon: FileText }, 
  { id: '8', title: t('replyLegalNotice'), category: t('documentation'), icon: FileText }, 
  { id: '9', title: t('affidavitPreparation'), category: t('personal'), icon: Shield }, 
  { id: '10', title: t('powerOfAttorney'), category: t('personal'), icon: Shield }, 
  { id: '11', title: t('agreementDrafting'), category: t('property'), icon: Home }, 
  { id: '12', title: t('caseFiling'), category: t('litigation'), icon: Gavel },
];

const ServicesScreen = () => {

  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  const [searchQuery, setSearchQuery] = useState('');

  const services = ALL_SERVICES(t);

  const filteredServices = services.filter(service =>
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

      {/* Header with language switch */}
      <View style={styles.headerRow}>

        <Text style={styles.headerTitle}>{t('legalServices')}</Text>

        <View style={styles.langContainer}>
          <TouchableOpacity onPress={() => i18n.changeLanguage('en')}>
            <Text style={styles.langText}>EN</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => i18n.changeLanguage('hi')}>
            <Text style={styles.langText}>HI</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => i18n.changeLanguage('bn')}>
            <Text style={styles.langText}>BN</Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.searchBar}>
        <Search color="#94A3B8" size={20} />

        <TextInput
          placeholder={t('searchLegalIssue')}
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

  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: '#1F3C75',
    marginBottom: 20
  },

  langContainer: {
    flexDirection: 'row',
    gap: 10
  },

  langText: {
    fontSize: 12,
    fontWeight: '700',
    color: '#1F3C75'
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