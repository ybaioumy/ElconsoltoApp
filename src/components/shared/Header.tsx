import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';

import Text from './Text';
import WhiteLogo from '../../images/logos/whiteLogo.png';
import { Translation } from '../../constants/ar';
import RenderIcon from './RenderIcon';
type HeaderProps = {
  showLogo: boolean;
  screenName?: string | undefined;
};
const CustomHeader = ({ showLogo, screenName }: HeaderProps) => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();
  const screenNameAR =
    Translation[(screenName as keyof typeof Translation) || ''];
  return (
    <LinearGradient
      colors={['#1C3C50', '#26A4A2']}
      style={{
        paddingTop: insets.top,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 130,
        borderBottomLeftRadius: 25,
      }}>
      {showLogo ? (
        <>
          <Pressable
            onPress={() => navigation.navigate('UserProfile' as never)}
            style={styles.button}>
            <RenderIcon iconName="person" color="#fff" />
          </Pressable>
          <Image
            source={WhiteLogo}
            style={{ width: 138, height: 40, objectFit: 'contain' }}
          />
          <Pressable
            onPress={() => navigation.navigate('Search' as never)}
            style={styles.button}>
            <RenderIcon iconName="notifications" color="#fff" />
          </Pressable>
        </>
      ) : (
        <View style={[styles.navigation, { paddingTop: insets.top }]}>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row-reverse',
              alignItems: 'center',
              marginBottom: insets.top,
              gap: 18,
            }}>
            <RenderIcon iconName="rightArrow" color="#fff" />
            <Text style={{ color: '#fff' }} size={19} bold>
              {screenNameAR}
            </Text>
          </Pressable>
        </View>
      )}
    </LinearGradient>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  button: {
    width: 34,
    height: 34,
    backgroundColor: '#FFFFFF36',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigation: {
    flex: 1,
  },
});
