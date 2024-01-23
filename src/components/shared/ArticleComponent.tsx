import { StyleSheet, View, Image, Pressable } from 'react-native';
import React from 'react';
import { ArticleComponentProps } from '../../types/types';
import Text from './Text';
import RenderIcon from './RenderIcon';
import ArticleImage from '../../images/image.jpg';

const ArticleComponent: React.FC<ArticleComponentProps> = ({
  imageSource,
  heading,
  description,
  vertical,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        { flexDirection: vertical ? 'column' : 'row-reverse' },
      ]}>
      <Image
        source={{ uri: imageSource }}
        style={[
          styles.image,
          { width: vertical ? '100%' : 145 },
          { height: vertical ? 262 : 85 },
          vertical ? { alignSelf: 'center' } : null,
        ]}
      />
      <View
        style={[styles.detailsContainer, { flex: vertical ? undefined : 1 }]}>
        <View style={styles.heading}>
          <Text isColorPrimary size={vertical ? 15 : 12} bold>
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
    borderRadius: 4,
    marginRight: 10,
  },
  detailsContainer: {
    flexDirection: 'column',
  },
  heading: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
  },
});
