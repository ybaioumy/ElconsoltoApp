import React, { useState } from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Assuming you're using Expo for icons
import CustomSlider from './Slider';
import Text from '../shared/Text';
import RenderIcon from '../shared/RenderIcon';
const BMICalculator: React.FC = () => {
  const [gender, setGender] = useState<string>('male'); // Default gender is male

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
  };

  return (
    <View style={styles.container}>
      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'male' ? styles.selectedGender : null,
          ]}
          onPress={() => handleGenderSelect('male')}>
          {gender === 'male' && (
            <View style={styles.checkIcon}>
              <RenderIcon iconName="checkMark" />
            </View>
          )}
          <Image
            source={require('../../images/calculators/male.png')}
            style={styles.genderIcon}
          />
          <Text>ذكر</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.genderButton,
            gender === 'female' ? styles.selectedGender : null,
          ]}
          onPress={() => handleGenderSelect('female')}>
          {gender === 'female' && (
            <View style={styles.checkIcon}>
              <RenderIcon iconName="checkMark" />
            </View>
          )}
          <Image
            source={require('../../images/calculators/female.png')}
            style={styles.genderIcon}
          />
          <Text>انثي</Text>
        </TouchableOpacity>
      </View>
      <CustomSlider
        title="Height"
        leftIcon="smallPerson"
        rightIcon="tallPerson"
      />
      <CustomSlider
        title="Weight"
        leftIcon="smallPerson"
        rightIcon="tallPerson"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  genderButton: {
    width: 148,
    height: 82,
    padding: 20,
    flexDirection: 'row-reverse',
    gap: 5,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    position: 'relative',
  },
  selectedGender: {
    backgroundColor: '#ECECEC',
  },
  checkIcon: {
    position: 'absolute',
    top: 5,
    right: 5,
    zIndex: 1,
    backgroundColor: 'rgba(55, 192, 190, 1)',
    borderRadius: 20,
    padding: 5,
  },
  genderIcon: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default BMICalculator;
