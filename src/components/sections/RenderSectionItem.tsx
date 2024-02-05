import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';

import Text from '../shared/Text';
import Card from '../shared/Card';
import { SettingItem, SettingSection } from '../../types/types';
import RenderIcon from '../shared/RenderIcon';
import { useNavigation } from '@react-navigation/native';
import { lightTheme } from '../../constants/theme';
const RenderSectionItem = ({ item }: { item: SettingItem }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (item.screen) {
      navigation.navigate(item.screen as never);
    }
  };
  return (
    <Pressable
      onPress={handlePress}
      style={{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
        width: '30%',
      }}>
      <RenderIcon iconName={item.icon} color={lightTheme.colors.primary} />
      <Text style={[{ color: 'rgba(51, 51, 51, 1)' }]} size={12}>
        {item.label}
      </Text>
    </Pressable>
  );
};

export default RenderSectionItem;

const styles = StyleSheet.create({});
