import React from 'react';
import { View, SectionList, StyleSheet } from 'react-native';

import Text from '../components/shared/Text';

import Card from '../components/shared/Card';
import { Section } from '../types/types';
import { settings } from '../lib/staticData';
import RenderItem from '../components/settings/RenderSettingsItem';

const Settings: React.FC = () => {
  const renderSectionHeader = ({
    section: { title },
  }: {
    section: Section;
  }) => (
    <View style={styles.sectionHeaderContainer}>
      <Text isColorPrimary bold>
        {title}
      </Text>
    </View>
  );

  return (
    <Card>
      <SectionList
        showsVerticalScrollIndicator={false}
        sections={settings}
        keyExtractor={(item, index) => item.key + index}
        renderItem={RenderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </Card>
  );
};

const styles = StyleSheet.create({
  sectionHeaderContainer: {
    marginRight: 5,
  },
});

export default Settings;
