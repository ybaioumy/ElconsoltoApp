// CustomBottomTabBar.js

import React, { useEffect, useCallback, useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RenderIcon from './RenderIcon';
import Text from './Text';
const CustomBottomTabBar = () => {
  const navigation = useNavigation();
  const [hidden, setHidden] = useState(false);

  const navigateToScreen = (screenName: string) => {
    navigation.navigate(screenName as never);
  };

  const hiddenScreens = ['Onboarding', 'Login', 'Register', 'Favorites'];
  useEffect(() => {
    const unsubscribe = navigation.addListener('state', () => {
      const currentRoute =
        navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
      // console.log(currentRoute);
      setHidden(currentRoute ? hiddenScreens.includes(currentRoute) : true);
    });

    return unsubscribe;
  }, [navigation]);
  // Render null if the tab bar should be hidden
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
        onPress={() => navigateToScreen('BMI')}
        style={styles.tabItem}>
        <RenderIcon iconName="health" />
        <Text size={12}>صحتك</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigateToScreen('Sections')}
        style={[styles.tabItem, styles.middleTab]}>
        <View style={styles.middleTabContent}>
          <View style={styles.middleTabInner}>
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
    paddingBottom: 5,
    marginTop: 10,
    // position: 'absolute',
    // left: 0,
    // right: 0,
    // bottom: 0,
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
