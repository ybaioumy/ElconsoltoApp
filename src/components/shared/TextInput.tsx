// ReusableTextInput.js

import React, { ReactElement, useState } from 'react';
import {
  View,
  TextInput as RNTextInput,
  StyleSheet,
  Keyboard,
} from 'react-native';
import Text from './Text';
import { lightTheme } from '../../constants/theme';
import { TextInputProps } from '../../types/types';

const TextInput = ({
  label,
  placeholder,
  secureTextEntry,
  icon,
  searchInput = false,
  style,
  value,
  onChangeText,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>('');
  // console.log(inputValue);
  return (
    <View style={[styles.container, style]}>
      {!searchInput ? <Text style={styles.label}>{label}</Text> : null}
      <View
        style={[
          styles.inputContainer,
          { flexDirection: searchInput ? 'row-reverse' : 'row' },
          { borderRadius: searchInput ? 13 : 28 },
          { justifyContent: searchInput ? 'space-between' : 'flex-end' },
          { borderWidth: searchInput ? 0 : 1 },
          // searchInput && lightTheme.shadow,
        ]}>
        <RNTextInput
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
        {icon &&
          React.cloneElement(icon, {
            style: { marginLeft: searchInput ? 0 : 10 },
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 15,
    marginRight: 8,
    color: lightTheme.colors.secondaryText,
  },
  inputContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    borderColor: '#ECECEC',
    borderWidth: 1,
    paddingHorizontal: 24,
    gap: 13,
    // height:48
    paddingVertical: 10,
    // height: 56,
  },
  input: {
    flex: 1,
    backgroundColor: 'transparent',
    // height: '100%',
    textAlign: 'right',
    fontFamily: 'Droid',
  },
  icon: {
    // marginLeft: 10,
  },
});

export default TextInput;
