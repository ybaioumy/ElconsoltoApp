import React from 'react';
import { View, StyleSheet } from 'react-native';

type CardProps = {
  children: React.ReactNode;
  style?: any;
  width?: string;
  color?: string;
};
export default function Card({ children, width, style, color }: CardProps) {
  return (
    <View
      style={[
        styles.container,
        { width: width ? width : '90%' },
        { backgroundColor: color ? color : '#fff' },
        style,
      ]}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 16,
    
    alignSelf: 'center',
    marginVertical: 16,
  },
});
