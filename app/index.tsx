
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import { mockAnnouncements, mockAssignments, quickActions } from '../data/mockData';
import AnnouncementCard from '../components/AnnouncementCard';
import AssignmentCard from '../components/AssignmentCard';
import QuickActionButton from '../components/QuickActionButton';
import BottomTabBar from '../components/BottomTabBar';

export default function HomeScreen() {
  try {
    const upcomingAssignments = mockAssignments
      .filter(assignment => assignment.status === 'pending')
      .slice(0, 3);

    const recentAnnouncements = mockAnnouncements.slice(0, 3);

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={commonStyles.title}>Good Morning!</Text>
          <Text style={commonStyles.textSecondary}>Welcome back to your school portal</Text>
        </View>

        {/* Quick Actions */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.subtitle}>Quick Actions</Text>
          <View style={styles.quickActionsGrid}>
            {quickActions.map((action) => (
              <QuickActionButton key={action.id} action={action} />
            ))}
          </View>
        </View>

        {/* Recent Announcements */}
        <View style={commonStyles.section}>
          <Text style={commonStyles.subtitle}>Recent Announcements</Text>
          {recentAnnouncements.map((announcement) => (
            <AnnouncementCard key={announcement.id} announcement={announcement} />
          ))}
        </View>

        {/* Upcoming Assignments */}
        <View style={[commonStyles.section, { paddingBottom: 100 }]}>
          <Text style={commonStyles.subtitle}>Upcoming Assignments</Text>
          {upcomingAssignments.length > 0 ? (
            upcomingAssignments.map((assignment) => (
              <AssignmentCard key={assignment.id} assignment={assignment} />
            ))
          ) : (
            <View style={commonStyles.card}>
              <Text style={commonStyles.textSecondary}>No upcoming assignments</Text>
            </View>
          )}
        </View>
      </ScrollView>

      <BottomTabBar />
    </SafeAreaView>
  );
  } catch (error) {
    console.error('Error in HomeScreen:', error);
    return (
      <SafeAreaView style={commonStyles.container}>
        <View style={[commonStyles.content, commonStyles.centerContent]}>
          <Text style={commonStyles.text}>Something went wrong loading the home screen.</Text>
        </View>
        <BottomTabBar />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 32,
  },
  quickActionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
