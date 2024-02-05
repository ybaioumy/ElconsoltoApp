import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LottieView from 'lottie-react-native';

const Loader = () => {
  return (
    <View>
      <LottieView
        source={require('../../../assets/loader.json')}
        autoPlay
        loop
        duration={2500}
        style={{ width: 100, height: 100, aspectRatio: 1 }}
      />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({});
