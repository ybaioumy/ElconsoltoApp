import { StyleSheet, View, Image } from 'react-native';
import React, { useState } from 'react';
import Text from '../../components/shared/Text';
import WaterIntakeImage from '../../images/calculators/waterIntake.png';
import Button from '../../components/shared/Button';
import { lightTheme } from '../../constants/theme';
import CustomSlider from '../../components/calculators/Slider';
import WaterIntakeCalculator from '../../components/calculators/WaterIntakeCalculator';
const WaterIntake = () => {
  const [showCalculator, setHideCalculator] = useState(false);
  const handlePress = () => {
    setHideCalculator(!showCalculator);
  };
  return (
    <View style={styles.container}>
      {showCalculator ? (
        <WaterIntakeCalculator />
      ) : (
        <View style={styles.container}>
          <Text size={13}>
            تحديد احتياج المياه هى أداة لتقييم احتياج الجسم من المياه والتذكير
            بشرب كمية كافيه من المياه في اليوم الواحد
          </Text>
          <Text size={16} bold>
            يجب تحديد النوع و الوزن و الطول و الانشطة اليومية
          </Text>
          <View
            style={{
              flex: 0.8,
              alignItems: 'center',
              justifyContent: 'space-around',
            }}>
            <Image source={WaterIntakeImage} />
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

export default WaterIntake;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
});
