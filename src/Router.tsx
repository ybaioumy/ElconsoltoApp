import { StyleSheet, View, LogBox, StatusBar } from 'react-native';
import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Notifications from './screens/Notifications';
import CustomHeader from './components/shared/Header';
import Register from './screens/authScreens/Register';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Login from './screens/authScreens/Login';
import OnboardingScreen from './screens/onboardingScreens/Onboarding';
import FavoriteTopics from './screens/FavoriteTopics';
import Article from './screens/Article';
import Search from './screens/searchScreens/Search';
import SearchResult from './screens/searchScreens/SearchResult';
import BMI from './screens/healthSections/BMI';
import CustomBottomTabBar from './components/shared/BottomNavigationTabs';
import Settings from './screens/Settings';
import Sections from './screens/Sections';
import MedicineReminder from './screens/healthSections/MedicineReminder';
import RemindersListing from './screens/Reminders';
import HealthInNumbers from './screens/healthSections/HealthInNumbers';
import EncyclopediaOfMedicines from './screens/healthSections/EncyclopediaOfMedicines';
import PregnancyAndBirth from './screens/healthSections/PregnancyAndBirth';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(['Reanimated']); // issue wiht latest version of React native with reanimated
LogBox.ignoreLogs(['VirtualizedLists should never be nested']);

const Router = () => {
  const [fontsLoaded, fontError] = useFonts({
    Droid: require('../assets/fonts/ArbFONTS-DroidArabicKufi.ttf'),
    DroidBold: require('../assets/fonts/ArbFONTS-DroidArabicKufiBold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar barStyle={'light-content'} />
      <Stack.Navigator
        initialRouteName="Onboarding"
        screenOptions={{
          header: (options) => (
            <CustomHeader showLogo={false} screenName={options.route.name} />
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            header: () => <CustomHeader showLogo />,
          }}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Favorites" component={FavoriteTopics} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="SearchResult" component={SearchResult} />
        <Stack.Screen name="BMI" component={BMI} />
        
        <Stack.Screen name="Sections" component={Sections} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="MedicineReminder" component={MedicineReminder} />
        <Stack.Screen name="Reminders" component={RemindersListing} />
        <Stack.Screen name="Health" component={HealthInNumbers} />
        <Stack.Screen name="Enclopedia" component={EncyclopediaOfMedicines} />
        <Stack.Screen name="PregnancyAndBirth" component={PregnancyAndBirth} />
        <Stack.Screen
          name="Article"
          component={Article}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
      <CustomBottomTabBar />
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    // position: 'relative',
  },
});
