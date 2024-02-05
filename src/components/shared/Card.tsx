import React from 'react';
import { View, StyleSheet } from 'react-native';

type CardProps = {
  children: React.ReactNode;
  style?: any;
  width?: string;
};
export default function Card({ children, width, style }: CardProps) {
  return (
    <View style={[styles.container, { width: width ? width : '90%' }, style]}>
      {children}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    // width: '90%',
    alignSelf: 'center',
    marginVertical: 16,
  },
});
