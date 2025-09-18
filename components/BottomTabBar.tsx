
import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { colors, commonStyles } from '../styles/commonStyles';
import Icon from './Icon';
import { router, usePathname } from 'expo-router';

interface TabItem {
  name: string;
  icon: string;
  route: string;
  label: string;
}

const tabs: TabItem[] = [
  { name: 'home', icon: 'home-outline', route: '/', label: 'Home' },
  { name: 'schedule', icon: 'calendar-outline', route: '/schedule', label: 'Schedule' },
  { name: 'assignments', icon: 'book-outline', route: '/assignments', label: 'Tasks' },
  { name: 'profile', icon: 'person-outline', route: '/profile', label: 'Profile' },
];

const BottomTabBar: React.FC = () => {
  const pathname = usePathname();

  const handleTabPress = (route: string) => {
    console.log(`Navigating to ${route}`);
    router.push(route as any);
  };

  return (
    <View style={[commonStyles.bottomTabBar, styles.container]}>
      {tabs.map((tab) => {
        const isActive = pathname === tab.route;
        return (
          <TouchableOpacity
            key={tab.name}
            style={styles.tab}
            onPress={() => handleTabPress(tab.route)}
            activeOpacity={0.7}
          >
            <Icon
              name={tab.icon as any}
              size={24}
              color={isActive ? colors.primary : colors.text}
            />
            <Text style={[styles.tabLabel, { color: isActive ? colors.primary : colors.text }]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: '500',
    marginTop: 4,
  },
});

export default BottomTabBar;
