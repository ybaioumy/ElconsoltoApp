import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFetchData } from '../hooks/fetchers';
import ArticleComponent from '../components/shared/ArticleComponent';

import { ArticleItemProps } from '../types/types';
import Loader from '../components/shared/Loader';

import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

import { data } from '../utils/dummyData';
const Home = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState<boolean>(false);

  const fetchData = useCallback(() => {
    setLoading(true);

    // Perform data fetching here
    // For example, fetch data from an API and update the 'data' state

    // Simulating data fetching delay
    setTimeout(() => {
      const newData: ArticleItemProps[] = [
        // ...updated data
      ];

      // setData(newData);
      setLoading(false);
    }, 1000);
  }, []);

  const navigateToArticleScreen = (articleData: ArticleItemProps) => {
    navigation.navigate('Article', { articleData });
  };

  const renderItem = ({ item }: { item: ArticleItemProps }) => (
    <ArticleComponent
      heading={item.heading}
      description={item.description}
      imageSource={item.imageSource}
      title={item.title}
      onPress={() => navigateToArticleScreen(item)}
      // vertical
    />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        ListFooterComponent={loading ? <Loader /> : null}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={fetchData} />
        }
        ListFooterComponentStyle={{
          alignItems: 'center',
        }}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
