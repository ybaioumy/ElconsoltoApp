import React from 'react';
import { Text as RNText, StyleSheet } from 'react-native';
import { lightTheme } from '../../constants/theme';

import { CustomTextProps } from '../../types/types';

const Text = ({
  children,
  isColorPrimary,
  size = 14,
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
    textAlign: 'right',
    // color: '#000',
  },
});

export default Text;
