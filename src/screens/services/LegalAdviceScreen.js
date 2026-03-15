import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';

const LegalAdviceScreen = () => {

  const insets = useSafeAreaInsets();
  const { t } = useTranslation();

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]}>

      {/* Banner */}
      <View style={styles.banner}>

        <Text style={styles.bannerTitle}>
          {t('legalAdvice')}
        </Text>

        <Text style={styles.bannerQuote}>
          {t('justiceQuote')}
        </Text>

        <Text style={styles.bannerSubtitle}>
          {t('bannerSubtitle')}
        </Text>

      </View>


      {/* About Section */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          {t('aboutService')}
        </Text>

        <Text style={styles.description}>
          {t('serviceDescription')}
        </Text>

      </View>


      {/* Areas of Expertise */}

      <View style={styles.section}>

        <Text style={styles.sectionTitle}>
          {t('areasOfExpertise')}
        </Text>


        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            {t('familyLaw')}
          </Text>

          <Text style={styles.cardDesc}>
            {t('familyLawDesc')}
          </Text>

        </View>


        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            {t('criminalDefense')}
          </Text>

          <Text style={styles.cardDesc}>
            {t('criminalDefenseDesc')}
          </Text>

        </View>


        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            {t('corporateLaw')}
          </Text>

          <Text style={styles.cardDesc}>
            {t('corporateLawDesc')}
          </Text>

        </View>


        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            {t('civilLitigation')}
          </Text>

          <Text style={styles.cardDesc}>
            {t('civilLitigationDesc')}
          </Text>

        </View>

      </View>


      {/* CTA */}

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>
          {t('talkLawyer')}
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
};

export default LegalAdviceScreen;


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20
  },

  banner: {
    backgroundColor: '#1F3C75',
    padding: 25,
    borderRadius: 20,
    marginBottom: 25
  },

  bannerTitle: {
    fontSize: 26,
    fontWeight: '900',
    color: '#FFF',
    marginBottom: 10
  },

  bannerQuote: {
    fontSize: 14,
    color: '#E2E8F0',
    fontStyle: 'italic',
    marginBottom: 10
  },

  bannerSubtitle: {
    fontSize: 14,
    color: '#CBD5F5'
  },

  section: {
    marginBottom: 25
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1F3C75',
    marginBottom: 12
  },

  description: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22
  },

  card: {
    backgroundColor: '#F8FAFC',
    padding: 18,
    borderRadius: 15,
    marginBottom: 12
  },

  cardTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1F3C75'
  },

  cardDesc: {
    fontSize: 13,
    color: '#64748B',
    marginTop: 5
  },

  ctaButton: {
    backgroundColor: '#1F3C75',
    padding: 18,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 40
  },

  ctaText: {
    color: '#FFF',
    fontWeight: '800',
    fontSize: 16
  }

});