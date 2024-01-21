import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import WhiteLogo from '../../images/logos/whiteLogo.png';

const CustomHeader = () => {
  const navigation = useNavigation();
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#1C3C50', '#26A4A2']}
      style={{
        // position: 'relative',
        paddingTop: insets.top,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        height: 130, 
        borderBottomLeftRadius: 30,
        backgroundColor: '#000',
      }}>
      <TouchableOpacity
        onPress={() => navigation.navigate('UserProfile')}
        style={styles.button}>
        <Ionicons name="person" size={20} color="#fff" />
      </TouchableOpacity>

      <Image
        source={WhiteLogo} 
        style={{ width: 138, height: 40, objectFit: 'contain' }} 
      />

      <TouchableOpacity
        onPress={() => navigation.navigate('Notifications')}
        style={styles.button}>
        <Ionicons name="notifications" size={20} color="#fff" />
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
  triangleCorner: {
    position: 'absolute',
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 30,

    borderTopWidth: 30,
    borderRightColor: 'transparent',
    borderTopColor: 'red',

    transform: [{ rotate: '90deg' }],
    right: 0,
    bottom: -30,
  },
  button: {
    padding: 10,
    backgroundColor: '#FFFFFF36',
    borderRadius: 50,
  },
});
