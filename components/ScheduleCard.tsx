
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Schedule } from '../types';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface ScheduleCardProps {
  schedule: Schedule;
}

const ScheduleCard: React.FC<ScheduleCardProps> = ({ schedule }) => {
  return (
    <View style={[commonStyles.smallCard, styles.container]}>
      <View style={styles.header}>
        <View style={styles.subjectContainer}>
          <Text style={styles.subject}>{schedule.subject}</Text>
          <Text style={styles.time}>{schedule.time}</Text>
        </View>
      </View>
      
      <View style={styles.details}>
        <View style={styles.detailRow}>
          <Icon name="person-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.teacher}>{schedule.teacher}</Text>
        </View>
        
        <View style={styles.detailRow}>
          <Icon name="location-outline" size={16} color={colors.textSecondary} />
          <Text style={styles.room}>{schedule.room}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
  },
  header: {
    marginBottom: 12,
  },
  subjectContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  subject: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text,
    flex: 1,
  },
  time: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.primary,
  },
  details: {
    gap: 8,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacher: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 8,
  },
  room: {
    fontSize: 14,
    color: colors.textSecondary,
    marginLeft: 8,
  },
});

export default ScheduleCard;
