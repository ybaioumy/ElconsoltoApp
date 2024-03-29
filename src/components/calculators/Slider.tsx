import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';
import RenderIcon from '../shared/RenderIcon';
import SliderThumb from '../../images/calculators/Ellipse.png';
import Text from '../shared/Text';

type CustomSliderProps = {
  leftIcon: string;
  rightIcon: string;
  title: string;
  unit: string;
};

const CustomSlider: React.FC<CustomSliderProps> = ({
  title,
  leftIcon,
  rightIcon,
  unit,
}) => {
  const [value, setValue] = useState<number>(25);
  const [sliderWidth, setSliderWidth] = useState<number>(200);

  const handleLayout = (event: any) => {
    const { width } = event.nativeEvent.layout;
    setSliderWidth(width);
  };
  const renderLeftIcon = () => {
    return <RenderIcon iconName={leftIcon} />;
  };

  const renderRightIcon = () => {
    return <RenderIcon iconName={rightIcon} />;
  };
  return (
    <View style={styles.container}>
      <Text size={19} style={{ alignSelf: 'flex-end', marginBottom: 30 }} bold>
        {title}
      </Text>
      <View style={styles.sliderContainer} onLayout={handleLayout}>
        {renderLeftIcon()}
        <Slider
          style={{ width: '100%', height: 40 }}
          minimumValue={0}
          maximumValue={100}
          // thumbTintColor="#FF0000"
          // thumbImage={SliderThumb}
          // thumbTintColor="#000"
          value={value}
          step={1}
          onValueChange={(value) => setValue(value)}
        />
        {renderRightIcon()}

        <Text
          bold
          size={16}
          style={[
            styles.valueText,
            {
              left: (value / 100) * sliderWidth,
              color: 'rgba(6, 20, 40, 1)',
            },
          ]}>
          {`${value} ${unit}`}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sliderContainer: {
    width: '80%',
    alignItems: 'flex-start',
    position: 'relative',
    flexDirection: 'row',
  },
  valueText: {
    position: 'absolute',
    top: -20,
  },
});

export default CustomSlider;
