
import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors, commonStyles } from '../styles/commonStyles';
import { mockSchedule } from '../data/mockData';
import ScheduleCard from '../components/ScheduleCard';
import BottomTabBar from '../components/BottomTabBar';
import Icon from '../components/Icon';

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export default function ScheduleScreen() {
  const [selectedDay, setSelectedDay] = useState('Monday');

  const todaySchedule = mockSchedule.filter(item => item.day === selectedDay);

  return (
    <SafeAreaView style={commonStyles.container}>
      <ScrollView style={commonStyles.content} showsVerticalScrollIndicator={false}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={commonStyles.title}>Class Schedule</Text>
          <Text style={commonStyles.textSecondary}>View your daily class timetable</Text>
        </View>

        {/* Day Selector */}
        <View style={commonStyles.section}>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.daySelector}
          >
            {daysOfWeek.map((day) => (
              <TouchableOpacity
                key={day}
                style={[
                  styles.dayButton,
                  selectedDay === day && styles.selectedDayButton
                ]}
                onPress={() => setSelectedDay(day)}
                activeOpacity={0.7}
              >
                <Text style={[
                  styles.dayButtonText,
                  selectedDay === day && styles.selectedDayButtonText
                ]}>
                  {day}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* Schedule for Selected Day */}
        <View style={[commonStyles.section, { paddingBottom: 100 }]}>
          <View style={styles.scheduleHeader}>
            <Icon name="calendar-outline" size={20} color={colors.primary} />
            <Text style={styles.scheduleTitle}>{selectedDay} Schedule</Text>
          </View>
          
          {todaySchedule.length > 0 ? (
            todaySchedule.map((scheduleItem) => (
              <ScheduleCard key={scheduleItem.id} schedule={scheduleItem} />
            ))
          ) : (
            <View style={commonStyles.card}>
              <Text style={commonStyles.textSecondary}>No classes scheduled for {selectedDay}</Text>
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
  daySelector: {
    marginBottom: 16,
  },
  dayButton: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginRight: 12,
    borderRadius: 20,
    backgroundColor: colors.backgroundAlt,
    borderWidth: 1,
    borderColor: colors.border,
  },
  selectedDayButton: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  dayButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text,
  },
  selectedDayButtonText: {
    color: colors.background,
  },
  scheduleHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  scheduleTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: colors.text,
    marginLeft: 8,
  },
});
