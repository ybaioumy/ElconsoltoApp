import {
  StyleSheet,
  View,
  TextInput as RNTextInput,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import TextInput from '../../components/shared/TextInput';
import RenderIcon from '../../components/shared/RenderIcon';
import Button from '../../components/shared/Button';
import { lightTheme } from '../../constants/theme';
import { AntDesign } from '@expo/vector-icons';
import Text from '../../components/shared/Text';


const SearchResult = ({ route, navigation }: any) => {
  const { tag } = route.params || {};
  const [inputValue, setInputValue] = useState<string | undefined>('');

  useEffect(() => {
    const unsubscribeFocus = navigation.addListener('focus', () => {
      setInputValue(tag);
    });

    return unsubscribeFocus;
  }, [navigation, tag]);
 


  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row-reverse',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TextInput
          icon={<RenderIcon iconName="search" color="#878B91" />}
          placeholder="بحث"
          searchInput
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: 12,
        }}>
        <Text size={18} bold>
          نتائج البحث
        </Text>
        <RenderIcon iconName="search" />
      </View>
    </View>
  );
};

export default SearchResult;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '100%',
  },
});
