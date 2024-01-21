import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFetchData } from '../hooks/fetchers';
import ArticleComponent from '../components/shared/ArticleComponent';

const Home = () => {
  // const { data } = useFetchData();
  // console.log(data);
  return (
    <View style={{ flex: 1 }}>
      <ArticleComponent
        heading="اخبار"
        description="4 علامات تظهر بعد الأكل قد تكشف إصابتك بسرطان خطير"
        imageSource={'https://reactnative.dev/img/tiny_logo.png'}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
