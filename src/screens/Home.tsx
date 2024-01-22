import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useFetchData } from '../hooks/fetchers';
import ArticleComponent from '../components/shared/ArticleComponent';
import ButtomModal from '../components/shared/ButtomModal';
import Button from '../components/shared/Button';
const Home = () => {
  // const { data } = useFetchData();
  // console.log(data);
  return (
    <View style={{ flex: 1 }}>
      <ArticleComponent
        heading="اخبار"
        description="4 علامات تظهر بعد الأكل قد تكشف إصابتك بسرطان خطير"
        imageSource={'https://reactnative.dev/img/tiny_logo.png'}
        vertical
      />
      {/* <ButtomModal /> */}
      <Button
        type="secondary"
        width="medium"
        onPress={() => console.log('pressed')}>
        <Text>ابدا الاختبار</Text>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
