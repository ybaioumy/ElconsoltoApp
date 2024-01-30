import React from 'react';
import { View, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Text from '../shared/Text';
import { lightTheme } from '../../constants/theme';
type TagProps = {
  tag: string;
};

const Tag: React.FC<TagProps> = ({ tag }) => {
  const navigation = useNavigation();

  const handleTagPress = () => {
    navigation.navigate('SearchResult', { tag });
  };

  return (
    <Pressable onPress={handleTagPress}>
      <View style={styles.tagContainer}>
        <Text style={styles.tagText}>{tag}</Text>
      </View>
    </Pressable>
  );
};

interface TagsProps {
  tags: string[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <View style={styles.tagsContainer}>
      {tags.map((tag, index) => (
        <Tag key={index} tag={tag} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  tagContainer: {
    padding: 8,
    margin: 4,
    backgroundColor: '#fff',
    borderRadius: 6,
    shadowColor: lightTheme.colors.boxShadow,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.01,
    shadowRadius: 3.84,
    elevation: 2,
  },
  tagText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6F7789',
  },
});

export default Tags;