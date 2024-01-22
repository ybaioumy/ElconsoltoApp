import React from 'react';
import { View, Image, Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Text from './Text';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import WhiteLogo from '../../images/logos/whiteLogo.png';

import { Translation } from '../../constants/ar';
import RenderIcon from '../../helpers/RenderIcon';
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
        position: 'relative',
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
            onPress={() => navigation.navigate('UserProfile')}
            style={styles.button}>
            <Ionicons name="person" size={20} color="#fff" />
          </Pressable>
          <Image
            source={WhiteLogo}
            style={{ width: 138, height: 40, objectFit: 'contain' }}
          />
          <Pressable
            onPress={() => navigation.navigate('Notifications')}
            style={styles.button}>
            <Ionicons name="notifications" size={20} color="#fff" />
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
            <RenderIcon iconName="rightArrow" />
            <Text style={{ color: '#fff' }} size={19}>
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
    padding: 5,
    backgroundColor: '#FFFFFF36',
    borderRadius: 50,
    
  },
  navigation: {
    flex: 1,
  },
});
