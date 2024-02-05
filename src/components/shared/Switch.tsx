import React, { useState, useRef } from 'react';
import { View, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import { lightTheme } from '../../constants/theme';

interface CustomSwitchProps {
  value: boolean;
  onChange: (newValue: boolean) => void;
}

const CustomSwitch: React.FC<CustomSwitchProps> = ({ value, onChange }) => {
  const translateX = useRef(new Animated.Value(value ? 10 : 0)).current;

  const toggleSwitch = () => {
    const newValue = !value;
    onChange(newValue);
    Animated.timing(translateX, {
      toValue: newValue ? 10 : 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableOpacity onPress={toggleSwitch} activeOpacity={0.7}>
      <View
        style={[styles.switchContainer, value && styles.switchContainerActive]}>
        <Animated.View
          style={[
            styles.switchThumb,
            value && styles.switchThumbActive,
            { transform: [{ translateX }] },
          ]}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  switchContainer: {
    width: 30,
    height: 20,
    borderRadius: 15,
    backgroundColor: '#C8C8C8',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  switchContainerActive: {
    backgroundColor: lightTheme.colors.primary,
  },
  switchThumb: {
    marginLeft: 5,
    width: 10,
    height: 10,
    borderRadius: 13,
    backgroundColor: '#FFF',
  },
  switchThumbActive: {
    // backgroundColor: 'yellow',
  },
});

export default CustomSwitch;
