import { StyleSheet, View } from 'react-native';
import React from 'react';
import TextInput from '../../components/shared/TextInput';
import RenderIcon from '../../components/shared/RenderIcon';
import Button from '../../components/shared/Button';

import Text from '../../components/shared/Text';
import { AntDesign } from '@expo/vector-icons';
import { lightTheme } from '../../constants/theme';
import Tags from '../../components/searchScreen/Tags';

const tags = ['React', 'JavaScript', 'TypeScript', 'React Native', 'CSS'];

const Search = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          icon={<RenderIcon iconName="search" />}
          placeholder="بحث"
          searchInput
          style={{
            flex: 0.9,
            alignSelf: 'center',
            marginTop: 20,
            backGroundColor: '#000',
          }}
        />
        <Button
          borderRadius="semiRounded"
          style={{
            width: 44,
            height: 44,
            backgroundColor: lightTheme.colors.primary,
          }}>
          <AntDesign name="filter" size={24} color="white" />
        </Button>
      </View>

      <Text size={18} bold style={{ marginBottom: 30 }}>
        الاكثر انتشارا
      </Text>
      <Tags tags={tags} />
      <Text size={18} bold style={{ marginTop: 30 }}>
        الموضوعات المقترحة
      </Text>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
  },
});
