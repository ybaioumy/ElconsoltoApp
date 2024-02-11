import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import Text from '../../components/shared/Text';
import BMIImage from '../../images/calculators/bmi.png';
import Button from '../../components/shared/Button';
import { lightTheme } from '../../constants/theme';
import CustomSlider from '../../components/calculators/Slider';
import BMICalculator from '../../components/calculators/BMICalculator';

const BMI = () => {
  const [showCalculator, setHideCalculator] = useState(false);
  const handlePress = () => {
    setHideCalculator(!showCalculator);
  };
  return (
    <View style={styles.container}>
      {showCalculator ? (
        <BMICalculator />
      ) : (
        <View style={styles.container}>
          <Text size={13}>
            حاسبة مؤشر كتلة الجسم هى أداة لتقييم الوزن الطبيعى أو زيادة الوزن،
            ويتم تقييم الوزن من خلال إستخدام مؤشر كتلة الجسم الذى يفحص العلاقة
            بين طول ووزن الجسم.
          </Text>
          <View
            style={{
              flex: 0.8,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image source={BMIImage} />
            <Button
              onPress={handlePress}
              style={{ backgroundColor: lightTheme.colors.primary }}
              width="large">
              <Text size={18} bold style={{ color: '#fff' }}>
                احسب
              </Text>
            </Button>
          </View>
        </View>
      )}
    </View>
  );
};

export default BMI;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
});
