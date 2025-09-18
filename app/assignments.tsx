
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import { mockAssignments } from '../data/mockData';
import AssignmentCard from '../components/AssignmentCard';
import BottomTabBar from '../components/BottomTabBar';
import Icon from '../components/Icon';

const filterOptions = [
  { key: 'all', label: 'All', icon: 'list-outline' },
  { key: 'pending', label: 'Pending', icon: 'time-outline' },
  { key: 'submitted', label: 'Submitted', icon: 'checkmark-circle-outline' },
  { key: 'graded', label: 'Graded', icon: 'trophy-outline' },
];

export default function AssignmentsScreen() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredAssignments = selectedFilter === 'all' 
    ? mockAssignments 
    : mockAssignments.filter(assignment => assignment.status === selectedFilter);

  const getAssignmentStats = () => {
    const pending = mockAssignments.filter(a => a.status === 'pending').length;
    const submitted = mockAssignments.filter(a => a.status === 'submitted').length;
    const graded = mockAssignments.filter(a => a.status === 'graded').length;
    
    return { pending, submitted, graded, total: mockAssignments.length };
  };

  const stats = getAssignmentStats();

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={commonStyles.title}>Assignments</Text>
          <Text style={commonStyles.textSecondary}>Track your homework and projects</Text>
        </View>

        {/* Stats Cards */}
        <View style={commonStyles.section}>
          <View style={styles.statsGrid}>
            <View style={[styles.statCard, { borderLeftColor: colors.warning }]}>
              <Text style={styles.statNumber}>{stats.pending}</Text>
              <Text style={styles.statLabel}>Pending</Text>
            </View>
            <View style={[styles.statCard, { borderLeftColor: colors.primary }]}>
              <Text style={styles.statNumber}>{stats.submitted}</Text>
              <Text style={styles.statLabel}>Submitted</Text>
            </View>
            <View style={[styles.statCard, { borderLeftColor: colors.success }]}>
              <Text style={styles.statNumber}>{stats.graded}</Text>
              <Text style={styles.statLabel}>Graded</Text>
            </View>
          </View>
        </View>

        {/* Filter Buttons */}
        <View style={commonStyles.section}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.filterContainer}
          >
            {filterOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[
                  styles.filterButton,
                  selectedFilter === option.key && styles.selectedFilterButton
                ]}
                onPress={() => setSelectedFilter(option.key)}
                activeOpacity={0.7}
              >
                <Icon 
                  name={option.icon as any} 
                  size={16} 
                  color={selectedFilter === option.key ? colors.background : colors.text} 
                />
                <Text style={[
                  styles.filterButtonText,
                  selectedFilter === option.key && styles.selectedFilterButtonText
                ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Assignments List */}
        <View style={[commonStyles.section, { paddingBottom: 100 }]}>
          {filteredAssignments.length > 0 ? (
            filteredAssignments.map((assignment) => (
              <AssignmentCard 
                key={assignment.id} 
                assignment={assignment}
                onPress={() => console.log(`Viewing assignment: ${assignment.title}`)}
              />
            ))
          ) : (
            <View style={commonStyles.card}>
              <Text style={commonStyles.textSecondary}>
                No assignments found for the selected filter
              </Text>
            </View>
          )}
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
  statsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statCard: {
    flex: 1,
    backgroundColor: colors.card,
    borderRadius: 12,
    padding: 16,
    marginHorizontal: 4,
    borderLeftWidth: 4,
    alignItems: 'center',
    boxShadow: `0px 2px 8px ${colors.shadow}`,
    elevation: 2,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  filterContainer: {
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedFilterButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
    marginLeft: 6,
  },
  selectedFilterButtonText: {
    color: colors.background,
  },
});
