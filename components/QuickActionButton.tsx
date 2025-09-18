
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { QuickAction } from '../types';
import { colors } from '../styles/commonStyles';
import Icon from './Icon';
import { router } from 'expo-router';

interface QuickActionButtonProps {
  action: QuickAction;
}

const QuickActionButton: React.FC<QuickActionButtonProps> = ({ action }) => {
  const handlePress = async () => {
    try {
      console.log(`Attempting to navigate to ${action.route}`);
      
      // Handle navigation with proper error handling
      const validRoutes = ['/schedule', '/assignments', '/profile'];
      
      if (validRoutes.includes(action.route)) {
        console.log(`Navigating to valid route: ${action.route}`);
        await router.push(action.route as any);
        console.log(`Successfully navigated to ${action.route}`);
      } else {
        console.log(`Route ${action.route} not implemented yet`);
        // Show a user-friendly message for unimplemented routes
        console.warn(`Feature "${action.title}" is coming soon!`);
      }
    } catch (error) {
      console.error('Navigation error in QuickActionButton:', error);
      // Handle navigation errors gracefully without throwing
    }
  };

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: action.color }]} 
      onPress={handlePress}
      activeOpacity={0.8}
    >
      <Icon name={action.icon as any} size={24} color={colors.background} />
      <Text style={styles.title}>{action.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '48%',
    aspectRatio: 1,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 12,
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    elevation: 4,
  },
  title: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.background,
    marginTop: 8,
    textAlign: 'center',
  },
});

export default QuickActionButton;
