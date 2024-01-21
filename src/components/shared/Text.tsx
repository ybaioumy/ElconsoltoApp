import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { lightTheme } from '../../constants/theme';

interface CustomTextProps {
  style?: any;
  children?: any;
  isColorPrimary?: boolean;
  size?: number | undefined;
}

const Text = ({ children, isColorPrimary, size, style }: CustomTextProps) => {
  return (
    <RNText
      style={[
        styles.text,
        style,
        isColorPrimary ? { color: lightTheme.colors.primary } : null,
        { fontSize: size },
      ]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Droid',
  },
});

export default Text;
