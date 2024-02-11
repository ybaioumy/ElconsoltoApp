import React from 'react';
import {
  SectionList,
  View,
  StyleSheet,
  FlatList,
  ScrollView,
} from 'react-native';
import Text from '../components/shared/Text';
import { sections } from '../lib/staticData';
import { SectionsSection } from '../types/types';
import { lightTheme } from '../constants/theme';
import RenderIcon from '../components/shared/RenderIcon';
import RenderSectionItem from '../components/sections/RenderSectionItem';

const Sections: React.FC = () => {
  return (
    <ScrollView style={styles.container}>
      {sections.map(({ title, data }) => (
        <View key={title} style={styles.sectionContainer}>
          <View style={styles.sectionHeaderContainer}>
            <Text style={{ marginRight: 10 }} size={16}>
              {title}
            </Text>
          </View>
          <FlatList
            scrollEnabled={false}
            showsVerticalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => <RenderSectionItem item={item} />}
            numColumns={3}
            columnWrapperStyle={{
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          />
        </View>
      ))}
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: { padding: 10 },
  sectionHeaderContainer: {
    height: 25,
    justifyContent: 'center',
    borderRightWidth: 5,
    borderRightColor: lightTheme.colors.primary,
    marginBottom: 20,
  },
  sectionContainer: { marginBottom: 20 },
});

export default Sections;
