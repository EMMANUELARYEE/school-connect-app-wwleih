
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Assignment } from '../types';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface AssignmentCardProps {
  assignment: Assignment;
  onPress?: () => void;
}

const AssignmentCard: React.FC<AssignmentCardProps> = ({ assignment, onPress }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return colors.warning;
      case 'submitted':
        return colors.primary;
      case 'graded':
        return colors.success;
      default:
        return colors.textSecondary;
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'pending':
        return 'time-outline';
      case 'submitted':
        return 'checkmark-circle-outline';
      case 'graded':
        return 'trophy-outline';
      default:
        return 'help-circle-outline';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = date.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Due Today';
    if (diffDays === 1) return 'Due Tomorrow';
    if (diffDays > 0) return `Due in ${diffDays} days`;
    return `Overdue by ${Math.abs(diffDays)} days`;
  };

  const isOverdue = () => {
    const today = new Date();
    const dueDate = new Date(assignment.dueDate);
    return dueDate < today && assignment.status === 'pending';
  };

  return (
    <TouchableOpacity 
      style={[commonStyles.smallCard, styles.container, isOverdue() && styles.overdueCard]} 
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{assignment.title}</Text>
          <View style={[styles.statusBadge, { backgroundColor: getStatusColor(assignment.status) }]}>
            <Icon 
              name={getStatusIcon(assignment.status)} 
              size={12} 
              color={colors.background} 
            />
          </View>
        </View>
        <Text style={styles.subject}>{assignment.subject}</Text>
      </View>
      
      <Text style={styles.description} numberOfLines={2}>
        {assignment.description}
      </Text>
      
      <View style={styles.footer}>
        <Text style={[styles.dueDate, isOverdue() && styles.overdueText]}>
          {formatDate(assignment.dueDate)}
        </Text>
        {assignment.grade && (
          <View style={styles.gradeContainer}>
            <Text style={styles.gradeLabel}>Grade: </Text>
            <Text style={styles.grade}>{assignment.grade}%</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  overdueCard: {
    borderLeftWidth: 4,
    borderLeftColor: colors.error,
  },
  header: {
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
    marginRight: 8,
  },
  statusBadge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subject: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
  },
  description: {
    fontSize: 14,
    color: colors.textSecondary,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  dueDate: {
    fontSize: 12,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  overdueText: {
    color: colors.error,
    fontWeight: '600',
  },
  gradeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  gradeLabel: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  grade: {
    fontSize: 12,
    color: colors.success,
    fontWeight: '600',
  },
});

export default AssignmentCard;
