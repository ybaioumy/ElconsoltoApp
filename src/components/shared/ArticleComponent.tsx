import { StyleSheet, View, Image, Pressable } from 'react-native';
import React from 'react';
import { ArticleProps } from '../../types/types';
import Text from './Text';
import RenderIcon from '../../helpers/RenderIcon';
const ArticleComponent: React.FC<ArticleProps> = ({
  imageSource,
  heading,
  description,
}) => {
  return (
    <Pressable style={styles.container}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      <View style={styles.detailsContainer}>
        <View style={styles.heading}>
          <Text isColorPrimary size={12}>
            {heading}
          </Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 22 }}>
            <Pressable>
              <RenderIcon iconName="share" />
            </Pressable>
            <Pressable>
              <RenderIcon iconName="save" />
            </Pressable>
          </View>
        </View>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

export default ArticleComponent;

const styles = StyleSheet.create({
  container: {
    textAlign: 'right',
    gap: 10,
    flexDirection: 'row-reverse',
    margin: 10,
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignItems: 'center',
  },
  image: {
    width: 145,
    height: 85,
    borderRadius: 4,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  heading: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // fontWeight: 'bold', //font file should has all the font weights ??
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});
