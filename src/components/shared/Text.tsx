import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { lightTheme } from '../../constants/theme';

interface CustomTextProps {
  style?: any;
  children?: any;
  isColorPrimary?: boolean;
  size?: number | undefined;
  bold?: boolean;
}

const Text = ({
  children,
  isColorPrimary,
  size,
  bold,
  style,
}: CustomTextProps) => {
  return (
    <RNText
      style={[
        styles.text,
        style,
        { fontSize: size },
        bold ? { fontFamily: 'DroidBold', fontWeight: '600' } : null,
        isColorPrimary ? { color: lightTheme.colors.primary } : null,
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
