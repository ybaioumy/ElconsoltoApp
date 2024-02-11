import { Pressable, StyleSheet, View } from 'react-native';
import React from 'react';
import TextInput from '../../components/shared/TextInput';
import RenderIcon from '../../components/shared/RenderIcon';
import Button from '../../components/shared/Button';

import Text from '../../components/shared/Text';
import { AntDesign } from '@expo/vector-icons';
import { lightTheme } from '../../constants/theme';
import Tags from '../../components/searchScreen/Tags';

const tags = [
  'اعراض السكر',
  ' علاج الامساك ',
  ' جرثومة المعدة',
  ' ارتفاع الضغط',
  ' اعراض الصداع',
];

const Search = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 14,
        }}>
        <TextInput
          icon={<RenderIcon iconName="search" color="#878B91" />}
          placeholder="بحث"
          searchInput
          backgroundColor="#FFF"
          style={{
            flex: 1,
            alignSelf: 'center',
            marginTop: 20,
            backGroundColor: '#000',
          }}
        />
        <Pressable onPress={() => console.log('pressed')}>
          <RenderIcon iconName="filter" />
        </Pressable>
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
