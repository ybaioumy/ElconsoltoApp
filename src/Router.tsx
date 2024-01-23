import { Button, StyleSheet, Text, View, LogBox } from 'react-native';
import React, { useCallback } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import UserProfile from './screens/UserProfile';
import Notifications from './screens/Notifications';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import CustomHeader from './components/shared/Header';

const Stack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
LogBox.ignoreLogs(['Reanimated']); // issue wiht latest version of React native with reanimated
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
        <Stack.Navigator
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
          <Stack.Screen name="UserProfile" component={UserProfile} />
          <Stack.Screen name="Notifications" component={Notifications} />
        </Stack.Navigator>
    </View>
  );
};

export default Router;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
