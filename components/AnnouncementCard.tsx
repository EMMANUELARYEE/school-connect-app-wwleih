
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Announcement } from '../types';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';

interface AnnouncementCardProps {
  announcement: Announcement;
}

const AnnouncementCard: React.FC<AnnouncementCardProps> = ({ announcement }) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return colors.error;
      case 'medium':
        return colors.warning;
      case 'low':
        return colors.success;
      default:
        return colors.textSecondary;
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <View style={[commonStyles.smallCard, styles.container]}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{announcement.title}</Text>
          <View style={[styles.priorityBadge, { backgroundColor: getPriorityColor(announcement.priority) }]}>
            <Text style={styles.priorityText}>{announcement.priority.toUpperCase()}</Text>
          </View>
        </View>
        <Text style={styles.date}>{formatDate(announcement.date)}</Text>
      </View>
      
      <Text style={styles.content}>{announcement.content}</Text>
      
      <View style={styles.footer}>
        <View style={styles.categoryContainer}>
          <Icon name="pricetag-outline" size={16} color={colors.primary} />
          <Text style={styles.category}>{announcement.category}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  header: {
    marginBottom: 12,
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
  priorityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: '700',
    color: colors.background,
  },
  date: {
    fontSize: 12,
    color: colors.textSecondary,
  },
  content: {
    fontSize: 14,
    color: colors.text,
    lineHeight: 20,
    marginBottom: 12,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  category: {
    fontSize: 12,
    color: colors.primary,
    marginLeft: 4,
    fontWeight: '500',
  },
});

export default AnnouncementCard;
