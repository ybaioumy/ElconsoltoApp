// ReusableTextInput.js

import React, { ReactElement, useState } from 'react';
import { View, TextInput as RNTextInput, StyleSheet } from 'react-native';
import Text from './Text';
import { lightTheme } from '../../constants/theme';

type TextInputProps = {
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  icon: ReactElement;
};

const TextInput = ({
  label,
  placeholder,
  secureTextEntry,
  icon,
}: TextInputProps) => {
  const [inputValue, setInputValue] = useState<string | undefined>('');
  // console.log(inputValue);
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.inputContainer}>
        <RNTextInput
          style={styles.input}
          placeholder={placeholder}
          value={inputValue}
          onChangeText={(text) => setInputValue(text)}
          secureTextEntry={secureTextEntry}
        />
        {icon && React.cloneElement(icon, { style: styles.icon })}
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
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 28,
    paddingHorizontal: 24,
    gap: 13,
    paddingVertical: 15,
    // height: 56,
  },
  input: {
    flex: 1,
    height: '100%',
    textAlign: 'right',
    fontFamily: 'Droid',
  },
  icon: {
    marginLeft: 10,
  },
});

export default TextInput;
