// CustomBottomTabBar.js

import React, { useEffect, useCallback, useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RenderIcon from './RenderIcon';
import Text from './Text';
const CustomBottomTabBar = () => {
  const navigation = useNavigation();
  const [hidden, setHidden] = useState(false);
  const [iconColor, setIconColor] = useState(false);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName as never);
  };

  const hiddenScreens = ['Onboarding', 'Login', 'Register', 'Favorites'];
  const womenScreen = ['PregnancyAndBirth'];

  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentRoute =
        navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
      // to hide the navigation if matches the route of the hidden screens 
      setHidden(currentRoute ? hiddenScreens.includes(currentRoute) : true);
      setIconColor(currentRoute ? womenScreen.includes(currentRoute) : true);
    });

    return unsubscribe;
  }, [navigation]);

  if (hidden) {
    return null;
  }

  return (
    <View style={styles.tabBar}>
      <TouchableOpacity
        onPress={() => navigateToScreen('Home')}
        style={styles.tabItem}>
        <RenderIcon iconName="home" />
        <Text size={12}>الرئيسية</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('Enclopedia')}
        style={styles.tabItem}>
        <RenderIcon iconName="health" />
        <Text size={12}>صحتك</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('Sections')}
        style={[styles.tabItem, styles.middleTab]}>
        <View style={styles.middleTabContent}>
          <View
            style={[
              styles.middleTabContent,
              iconColor ? { backgroundColor: '#B66B8A' } : null,
            ]}>
            <RenderIcon iconName="burgerMenu" />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('Settings')}
        style={styles.tabItem}>
        <RenderIcon iconName="settings" />
        <Text size={12}>الاعدادات</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('Search')}
        style={styles.tabItem}>
        <RenderIcon iconName="search" color="#7E919A" />
        <Text size={12}>بحث</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',

  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 5,
    gap: 5,
  },
  middleTab: {
    position: 'relative',
    top: -30,
  },
  middleTabContent: {
    backgroundColor: '#37C0BE',
    borderRadius: 15,
    width: 57,
    height: 57,
    justifyContent: 'center',
    alignItems: 'center',
  },
  middleTabInner: {
    // top: 2,
  },
});

export default CustomBottomTabBar;
