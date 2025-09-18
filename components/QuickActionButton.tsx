
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
  const handlePress = () => {
    console.log(`Navigating to ${action.route}`);
    // For now, we'll just log since we haven't implemented all routes yet
    if (action.route === '/schedule') {
      router.push('/schedule');
    } else if (action.route === '/assignments') {
      router.push('/assignments');
    } else if (action.route === '/profile') {
      router.push('/profile');
    } else {
      console.log(`Route ${action.route} not implemented yet`);
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
