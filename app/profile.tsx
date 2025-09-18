
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import { mockUserProfile } from '../data/mockData';
import BottomTabBar from '../components/BottomTabBar';
import Icon from '../components/Icon';

const profileOptions = [
  { id: '1', title: 'Edit Profile', icon: 'person-outline', color: colors.primary },
  { id: '2', title: 'Notifications', icon: 'notifications-outline', color: colors.secondary },
  { id: '3', title: 'Academic Records', icon: 'document-text-outline', color: colors.accent },
  { id: '4', title: 'Settings', icon: 'settings-outline', color: colors.textSecondary },
  { id: '5', title: 'Help & Support', icon: 'help-circle-outline', color: colors.primary },
  { id: '6', title: 'About', icon: 'information-circle-outline', color: colors.secondary },
];

export default function ProfileScreen() {
  const handleOptionPress = (option: any) => {
    console.log(`Selected option: ${option.title}`);
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={commonStyles.title}>Profile</Text>
          <Text style={commonStyles.textSecondary}>Manage your account and preferences</Text>
        </View>

        {/* Profile Card */}
        <View style={[commonStyles.card, styles.profileCard]}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Icon name="person" size={40} color={colors.background} />
            </View>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{mockUserProfile.name}</Text>
            <Text style={styles.profileDetail}>{mockUserProfile.grade}</Text>
            <Text style={styles.profileDetail}>ID: {mockUserProfile.studentId}</Text>
            <Text style={styles.profileDetail}>{mockUserProfile.email}</Text>
          </View>
        </View>

        {/* Academic Summary */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.subtitle}>Academic Summary</Text>
          <View style={styles.summaryGrid}>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryNumber}>4.2</Text>
              <Text style={styles.summaryLabel}>GPA</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryNumber}>12</Text>
              <Text style={styles.summaryLabel}>Courses</Text>
            </View>
            <View style={styles.summaryCard}>
              <Text style={styles.summaryNumber}>95%</Text>
              <Text style={styles.summaryLabel}>Attendance</Text>
            </View>
          </View>
        </View>

        {/* Profile Options */}
        <View style={[commonStyles.section, { paddingBottom: 100 }]}>
          <Text style={commonStyles.subtitle}>Options</Text>
          {profileOptions.map((option) => (
            <TouchableOpacity
              key={option.id}
              style={styles.optionItem}
              onPress={() => handleOptionPress(option)}
              activeOpacity={0.7}
            >
              <View style={styles.optionLeft}>
                <View style={[styles.optionIcon, { backgroundColor: option.color }]}>
                  <Icon name={option.icon as any} size={20} color={colors.background} />
                </View>
                <Text style={styles.optionTitle}>{option.title}</Text>
              </View>
              <Icon name="chevron-forward-outline" size={20} color={colors.textSecondary} />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <BottomTabBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 24,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 24,
  },
  avatarContainer: {
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileInfo: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 8,
  },
  profileDetail: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 4,
  },
  summaryGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summaryCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    alignItems: 'center',
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 2,
  },
  summaryNumber: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
    marginBottom: 4,
  },
  summaryLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 2,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
});
