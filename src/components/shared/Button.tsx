import React, { FC, ReactNode, useState } from 'react';
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
type ButtonRadius = 'rounded' | 'semiRounded';

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonType;
  width?: ButtonWidth;
  borderRadius?: ButtonRadius;
  children: ReactNode;
  selected?: boolean; 
}

const Button: FC<ButtonProps> = ({
  type = 'primary',
  width = 'medium',
  borderRadius = 'rounded',
  children,
  selected = false, 
  style,
  ...restProps
}) => {
  const [isSelected, setIsSelected] = useState(selected);

  const handlePress = () => {
    setIsSelected(!isSelected);
  };

  const getButtonStyle = (): ViewStyle | TextStyle => {
    switch (type) {
      case 'primary':
        return isSelected
          ? styles.primaryButton
          : styles.primaryButtonUnselected;
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
      style={[
        styles.button,
        getButtonStyle(),
        geButtonWidth(),
        style,
        { borderRadius: borderRadius === 'rounded' ? 28 : 12 },
      ]}
      onPress={handlePress}
      {...restProps}>
      <Text
        style={[styles.buttonText, { color: isSelected ? '#FFF' : '#000' }]}
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
  },
  primaryButton: {
    backgroundColor: lightTheme.colors.primary,
  },
  primaryButtonUnselected: {
    backgroundColor: lightTheme.colors.ligthGray,
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
    // color: '#fff',
    // fontWeight: 'bold',
  },
});

export default Button;
