import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';

import Text from '../shared/Text';
import { SectionsItem } from '../../types/types';
import RenderIcon from '../shared/RenderIcon';
import { useNavigation } from '@react-navigation/native';
import { lightTheme } from '../../constants/theme';
const RenderSectionItem = ({ item }: { item: SectionsItem }) => {
  const navigation = useNavigation();
  const handlePress = () => {
    if (item.screen) {
      console.log(item.screen);
      navigation.navigate(item.screen as never);
    }
  };

  return (
    <Pressable
      onPress={handlePress}
      style={[styles.container, lightTheme.shadow]}>
      <RenderIcon
        iconName={item.icon || ''}
        color={lightTheme.colors.primary}
      />
      <Text style={[{ color: 'rgba(51, 51, 51, 1)' }]} size={12}>
        {item.label}
      </Text>
    </Pressable>
  );
};

export default RenderSectionItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    width: '30%',
    height: 65,
    borderRadius: 6,
    marginVertical: 10,
    marginHorizontal: 5,
  },
});
