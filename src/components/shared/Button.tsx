import React, { FC, ReactNode } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { lightTheme } from '../../constants/theme';
import Text from './Text';

type ButtonType = 'primary' | 'secondary' | 'link';
type ButtonWidth = 'small' | 'medium' | 'large' | 'xlarge';

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonType;
  width?: ButtonWidth;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = 'primary',
  width = 'medium',
  children,
  style,
  ...restProps
}) => {
  const getButtonStyle = (): ViewStyle | TextStyle => {
    switch (type) {
      case 'primary':
        return styles.primaryButton;
      case 'secondary':
        return styles.secondaryButton;
      case 'link':
        return styles.linkButton;
      default:
        return {};
    }
  };

  const geButtonWidth = (): ViewStyle | TextStyle => {
    switch (width) {
      case 'small':
        return styles.smallButton;
      case 'medium':
        return styles.mediumButton;
      case 'large':
        return styles.largeButton;
      case 'xlarge':
        return styles.xLargeButton;
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity
      style={[styles.button, getButtonStyle(), geButtonWidth(), style]}
      {...restProps}>
      <Text
        style={[styles.buttonText]}
        size={18}
        isColorPrimary={type === 'link' || type === 'secondary'}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  primaryButton: {
    backgroundColor: lightTheme.colors.primary,
  },
  secondaryButton: {
    borderWidth: 1,
    borderColor: lightTheme.colors.primary,
    backgroundColor: 'transparent',
  },
  linkButton: {
    backgroundColor: 'transparent',
  },
  smallButton: { width: '25%' },
  mediumButton: { width: '50%' },
  largeButton: { width: '75%' },
  xLargeButton: { width: '90%' },
  buttonText: {
    color: '#fff',
    // fontWeight: 'bold',
  },
});

export default Button;
