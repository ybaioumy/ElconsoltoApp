import React from 'react';
import { SectionList, View, StyleSheet } from 'react-native';
import RenderSectionItem from '../components/sections/RenderSectionItem';
import Text from '../components/shared/Text';
import { sections } from '../lib/staticData';
import { SettingSection } from '../types/types';
import { lightTheme } from '../constants/theme';

const Sections: React.FC = () => {
  const renderSectionHeader = ({
    section: { title },
  }: {
    section: SettingSection;
  }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text isColorPrimary bold style={{ marginRight: 12 }}>
        {title}
      </Text>
    </View>
  );
  return (
    <SectionList
      showsVerticalScrollIndicator={false}
      sections={sections}
      keyExtractor={(item) => item.key}
      renderItem={RenderSectionItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};
const styles = StyleSheet.create({
  sectionHeaderContainer: {
    borderRightWidth: 5,
    borderRightColor: lightTheme.colors.primary,
  },
});

export default Sections;