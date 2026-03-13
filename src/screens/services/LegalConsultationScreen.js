import React from 'react';
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
    Users,
    
} from 'lucide-react-native';

import { useNavigation } from '@react-navigation/native';

const LegalConsultationScreen = () => {

    const navigation = useNavigation();

    const legalServices = [
        { id: '1', title: 'Family Law', icon: Users, desc: 'Divorce, custody, and mediation support.' },
        { id: '2', title: 'Criminal Defense', icon: Gavel, desc: 'Expert legal representation and defense.' },
        { id: '3', title: 'Corporate Law', icon: Scale, desc: 'Business contracts, IP, and disputes.' },
        { id: '4', title: 'Civil Litigation', icon: Gavel, desc: 'Property disputes and rights protection.' },
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
                    Legal Consultation
                </Text>

                <View style={{ width: 40 }} />

            </View>

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >

                {/* Banner */}

                <View style={styles.banner}>

                    <View style={styles.bannerTextContainer}>
                        <Text style={styles.bannerTitle}>
                            Justice Delayed is Justice Denied
                        </Text>

                        <Text style={styles.bannerSubtitle}>
                            Get immediate expert legal guidance from top advocates.
                        </Text>
                    </View>

                    <Scale
                        color="rgba(255,255,255,0.2)"
                        size={80}
                        style={styles.bannerIcon}
                    />

                </View>

                {/* About Section */}

                <View style={styles.infoSection}>

                    <Text style={styles.sectionTitle}>
                        About the Service
                    </Text>

                    <Text style={styles.descriptionText}>
                        Our legal consultation service connects you with verified legal
                        experts who specialize in various fields of law. Whether you need
                        a simple contract review or complex litigation advice, we ensure
                        your rights are protected.
                    </Text>

                </View>

                {/* Expertise Section */}

                <Text style={styles.sectionTitle}>
                    Areas of Expertise
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

                {/* CTA Button */}

                <TouchableOpacity
                    style={styles.bookButton}
                    activeOpacity={0.8}
                >
                    <Text style={styles.bookButtonText}>
                        Talk to a Lawyer Now
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