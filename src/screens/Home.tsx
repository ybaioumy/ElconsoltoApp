import { StyleSheet, View, FlatList, RefreshControl } from 'react-native';
import React, { useCallback, useState } from 'react';
import { useFetchData } from '../hooks/fetchers';
import ArticleComponent from '../components/shared/ArticleComponent';
import Button from '../components/shared/Button';

import { ArticleItemProps } from '../types/types';
import Loader from '../components/shared/Loader';
import Text from '../components/shared/Text';
import BottomModal from '../components/shared/BottomModal';
const Home = () => {
  // const { data } = useFetchData();
  // console.log(data);
  const [loading, setLoading] = useState<boolean>(false);
  const data = [
    {
      id: 2,
      heading: 'اخبار',
      description: '4 علامات تظهر بعد الأكل قد تكشف إصابتك بسرطان خطير',
      imageSource: 'https://reactnative.dev/img/tiny_logo.png',
    },
    {
      id: 1,
      heading: 'اخبار',
      description: '4 علامات تظهر بعد الأكل قد تكشف إصابتك بسرطان خطير',
      imageSource: 'https://reactnative.dev/img/tiny_logo.png',
    },
  ];
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
  const renderItem = ({ item }: { item: ArticleItemProps }) => (
    <ArticleComponent
      heading={item.heading}
      description={item.description}
      imageSource={item.imageSource}
      // vertical
    />
  );

  return (
    <View style={styles.container}>
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

      <BottomModal />
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
