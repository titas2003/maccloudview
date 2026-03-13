import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from 'react-native';

import {
  ChevronLeft,
  Scale,
  Gavel,
  Users
} from 'lucide-react-native';

import { useNavigation } from '@react-navigation/native';
import i18n from 'i18next';

const LegalConsultationScreen = () => {

  const navigation = useNavigation();
  const { t } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  const legalServices = [
    {
      id: '1',
      title: t('familyLaw'),
      icon: Users,
      desc: t('familyLawDesc')
    },
    {
      id: '2',
      title: t('criminalDefense'),
      icon: Gavel,
      desc: t('criminalDefenseDesc')
    },
    {
      id: '3',
      title: t('corporateLaw'),
      icon: Scale,
      desc: t('corporateLawDesc')
    },
    {
      id: '4',
      title: t('civilLitigation'),
      icon: Gavel,
      desc: t('civilLitigationDesc')
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}

      <View style={styles.header}>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ChevronLeft color="#1F3C75" size={28} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {t('legalConsultation')}
        </Text>

        <View style={{ width: 40 }} />

      </View>

      {/* Language Switcher */}

      <View style={styles.languageContainer}>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => changeLanguage('en')}
        >
          <Text style={styles.langText}>EN</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => changeLanguage('hi')}
        >
          <Text style={styles.langText}>हिन्दी</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.langButton}
          onPress={() => changeLanguage('bn')}
        >
          <Text style={styles.langText}>বাংলা</Text>
        </TouchableOpacity>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >

        {/* Banner */}

        <View style={styles.banner}>

          <View style={styles.bannerTextContainer}>

            <Text style={styles.bannerTitle}>
              {t('justiceQuote')}
            </Text>

            <Text style={styles.bannerSubtitle}>
              {t('bannerSubtitle')}
            </Text>

          </View>

          <Scale
            color="rgba(255,255,255,0.2)"
            size={80}
            style={styles.bannerIcon}
          />

        </View>

        {/* About */}

        <View style={styles.infoSection}>

          <Text style={styles.sectionTitle}>
            {t('aboutService')}
          </Text>

          <Text style={styles.descriptionText}>
            {t('serviceDescription')}
          </Text>

        </View>

        {/* Expertise */}

        <Text style={styles.sectionTitle}>
          {t('areasOfExpertise')}
        </Text>

        {legalServices.map((item) => {

          const Icon = item.icon;

          return (
            <TouchableOpacity
              key={item.id}
              style={styles.serviceCard}
              activeOpacity={0.8}
            >

              <View style={styles.iconBox}>
                <Icon color="#1F3C75" size={24} />
              </View>

              <View style={styles.cardText}>

                <Text style={styles.cardTitle}>
                  {item.title}
                </Text>

                <Text style={styles.cardDesc}>
                  {item.desc}
                </Text>

              </View>

            </TouchableOpacity>
          );

        })}

        {/* CTA */}

        <TouchableOpacity
          style={styles.bookButton}
          activeOpacity={0.8}
        >
          <Text style={styles.bookButtonText}>
            {t('talkLawyer')}
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  );
};

export default LegalConsultationScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC'
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    height: 56,
    backgroundColor: '#FFF'
  },

  backButton: {
    padding: 8
  },

  headerTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F3C75'
  },

  languageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
    backgroundColor: '#FFF'
  },

  langButton: {
    paddingHorizontal: 14,
    paddingVertical: 6,
    marginHorizontal: 5,
    backgroundColor: '#E2E8F0',
    borderRadius: 8
  },

  langText: {
    fontSize: 13,
    fontWeight: '600'
  },

  scrollContent: {
    padding: 20
  },

  banner: {
    backgroundColor: '#1F3C75',
    borderRadius: 16,
    padding: 24,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 24
  },

  bannerTextContainer: {
    flex: 1,
    zIndex: 1
  },

  bannerTitle: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: '800'
  },

  bannerSubtitle: {
    color: '#CBD5E1',
    marginTop: 8,
    fontSize: 14,
    lineHeight: 20
  },

  bannerIcon: {
    position: 'absolute',
    right: -10,
    bottom: -10
  },

  infoSection: {
    marginBottom: 24
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#334155',
    marginBottom: 12
  },

  descriptionText: {
    fontSize: 15,
    color: '#64748B',
    lineHeight: 22
  },

  serviceCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E2E8F0'
  },

  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 10,
    backgroundColor: '#F1F5F9',
    justifyContent: 'center',
    alignItems: 'center'
  },

  cardText: {
    marginLeft: 16,
    flex: 1
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1E293B'
  },

  cardDesc: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 2
  },

  bookButton: {
    backgroundColor: '#1F3C75',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 12,
    marginBottom: 30,
    elevation: 5
  },

  bookButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '700'
  }

});