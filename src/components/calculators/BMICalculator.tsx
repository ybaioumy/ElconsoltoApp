import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native';
import CustomSlider from './Slider';
import Text from '../shared/Text';
import RenderIcon from '../shared/RenderIcon';
import Button from '../shared/Button';
import { lightTheme } from '../../constants/theme';
const BMICalculator: React.FC = () => {
  const [gender, setGender] = useState<string>('male');

  const handleGenderSelect = (selectedGender: string) => {
    setGender(selectedGender);
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.container}
      contentContainerStyle={{
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Text size={17} bold style={{ marginBottom: 30 }}>
        يجب اعطاء بعض المعلومات الاساسية
      </Text>
      <View style={styles.genderContainer}>
        <Pressable
          style={[
            styles.genderButton,
            gender === 'male' ? styles.selectedGender : null,
            lightTheme.shadow,
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
        </Pressable>
        <Pressable
          style={[
            styles.genderButton,
            gender === 'female' ? styles.selectedGender : null,
            lightTheme.shadow,
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
        </Pressable>
      </View>
      <View
        style={{
          gap: 20,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <CustomSlider
          title="السن"
          leftIcon="smallPerson"
          rightIcon="tallPerson"
          unit=""
        />
        <CustomSlider
          title="الطول"
          leftIcon="smallPerson"
          rightIcon="tallPerson"
          unit="cm"
        />
        <CustomSlider
          title="الوزن"
          leftIcon="smallPerson"
          rightIcon="tallPerson"
          unit="kg"
        />
        <View style={{ marginVertical: 50, width: '100%' }}>
          <Button style={{ alignSelf: 'center' }} width="large">
            <Text style={{ color: '#FFF' }} bold size={18}>
              النتيجة
            </Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#fff',
    borderRadius: 27,
    width: '100%',
    alignSelf: 'center',
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
