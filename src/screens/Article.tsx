import React from 'react';
import { View, ImageBackground, StyleSheet, Pressable } from 'react-native';
import Text from '../components/shared/Text';
import RenderIcon from '../components/shared/RenderIcon';
import { useNavigation } from '@react-navigation/native';
import { lightTheme } from '../constants/theme';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
const Article = ({ route }: any) => {
  // console.log(route);
  const { articleData } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
        source={{ uri: articleData.imageSource }}
        imageStyle={{ borderBottomLeftRadius: 21, borderBottomRightRadius: 21 }}
        style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}>
          <Feather name="chevron-right" size={24} color="black" />
        </Pressable>
      </ImageBackground>
      <View style={styles.content}>
        <Text isColorPrimary>{articleData.heading}</Text>
        <Text bold size={20}>
          {articleData.title}
        </Text>
        <Text style={{ color: '#828282', marginVertical: 15 }}>
          {`كتبت -${articleData.authorName} :`}
        </Text>
        <Text style={{ lineHeight: 30 }}>{articleData.description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: '100%',
    height: 250,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: lightTheme.colors.semiTransparent,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    width: 40,
    height: 40,
  },
  content: {
    flex: 1,
    padding: 20,
  },
});

export default Article;
