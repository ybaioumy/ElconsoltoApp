import React, { FC, ReactNode, useState, useEffect } from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  TextStyle,
  TouchableOpacityProps,
} from 'react-native';
import { lightTheme } from '../../constants/theme';
import Text from './Text';
import { useNavigation } from '@react-navigation/native';
type ButtonType = 'primary' | 'secondary' | 'link';
type ButtonWidth = 'small' | 'medium' | 'large' | 'xlarge';
type ButtonRadius = 'rounded' | 'semiRounded';

interface ButtonProps extends TouchableOpacityProps {
  type?: ButtonType;
  width?: ButtonWidth;
  borderRadius?: ButtonRadius;
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({
  type = 'primary',
  width = 'medium',
  borderRadius = 'rounded',
  children,

  style,
  ...restProps
}) => {
  const [isWomenScreen, setIsWomenScreen] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const currentRoute =
      navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
    const womenScreens = ['PregnancyAndBirth'];
    setIsWomenScreen(womenScreens.includes(currentRoute));
  }, [navigation]);

  const getButtonStyle = (): ViewStyle | TextStyle => {
    switch (type) {
      case 'primary':
        return isWomenScreen ? styles.primaryButtonWomen : styles.primaryButton;

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
  },
  primaryButton: {
    backgroundColor: lightTheme.colors.primary,
  },
  primaryButtonWomen: {
    backgroundColor: lightTheme.colors.purpleColor,
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
    color: '#fff',
    // fontWeight: 'bold',
  },
});

export default Button;
