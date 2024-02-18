import React, { useState } from 'react';
import { Pressable, View, StyleSheet } from 'react-native';
import { lightTheme } from '../../constants/theme';
import RenderIcon from './RenderIcon';
import Text from './Text';
interface Props {
  data: string[]; // Data array for options
  onPress: (value: string) => void; // Function to handle selection
  selectedValue: string; // Currently selected value
  label: string;
}
//TODO: needs to be refactored
const DropDown: React.FC<Props> = ({ data, onPress, selectedValue, label }) => {
  const [toggle, setToggle] = useState(false);
  const handleOptionPress = (option: string) => {
    onPress(option);
    setToggle(false);
  };

  return (
    <Pressable
      onPress={() => setToggle(!toggle)}
      style={[styles.input, styles.toggle]}>
      <Pressable
        onPress={() => setToggle(!toggle)}
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 7,
        }}>
        <RenderIcon iconName="leftArrow" color="#CFCFCF" />
        <Text style={{ color: '#818286' }}>{selectedValue}</Text>
      </Pressable>
      <Text style={{ color: '#818286' }}>{label}</Text>
      {toggle ? (
        <View style={[lightTheme.shadow, styles.toggleContainer]}>
          <View style={styles.triangle} />

          {data.map((option, index) => (
            <Pressable
              key={index}
              onPress={() => handleOptionPress(option)}
              style={[
                styles.option,
                index === data.length - 1 && styles.lastOption,
              ]}>
              <Text style={{ color: '#1D1D1DC7' }}>{option}</Text>
            </Pressable>
          ))}
        </View>
      ) : null}
    </Pressable>
  );
};

export default DropDown;

const styles = StyleSheet.create({
  input: {
    marginTop: 8,
    // marginBottom: -5,
    borderRadius: 14,
    fontSize: 16,

    padding: 10,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    fontFamily: 'Droid',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  toggle: {
    position: 'relative',
  },
  toggleContainer: {
    position: 'absolute',
    left: 0,
    top: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    padding: 5,
    zIndex: 99,
  },
  option: {
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#D9D9D94D',
  },
  lastOption: {
    borderBottomWidth: 0,
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 15,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#FFF',
    position: 'absolute',
    top: -15,
  },
});
