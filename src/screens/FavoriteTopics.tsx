import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../components/shared/Text';
import Button from '../components/shared/Button';

import { useNavigation } from '@react-navigation/native';
const FavoriteTopics = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          width: '100%',
          alignItems: 'center',
          // justifyContent: 'center',
          gap: 20,
        }}>
        <Text size={18} bold>
          ما الاقسام التي تهتم بها و تفضل متابعة اخبارها ؟
        </Text>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button width="xlarge" borderRadius="semiRounded">
          <Text>امراض مزمنة</Text>
        </Button>
        <Button
          type="link"
          style={{ alignSelf: 'flex-end' }}
          width="small"
          onPress={() => navigation.navigate('Home' as never)}>
          <Text size={17} bold isColorPrimary>
            تخطى
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default FavoriteTopics;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingVertical: 25,
    // gap: 20,
  },
});
