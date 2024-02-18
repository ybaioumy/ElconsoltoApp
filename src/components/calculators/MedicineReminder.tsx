import { View, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
import Text from '../shared/Text';
import RenderIcon from '../shared/RenderIcon';
import { lightTheme } from '../../constants/theme';
import DropDown from '../shared/DropDown';
import Button from '../shared/Button';
export default function MedicineReminder() {
  const [selectedValue, setSelectedValue] = useState('');

  const handlePress = (value: string) => {
    setSelectedValue(value);
    // Do something with the selected value
  };
  return (
    <View style={styles.container}>
      <BottomSheetTextInput style={styles.input} placeholder="اسم الدواء" />
      <View>
        <DropDown
          data={['Dose1', 'Dose2', 'Dose3']}
          onPress={handlePress}
          selectedValue={selectedValue}
          label="جرعة"
        />
        <DropDown
          data={['Dose1', 'Dose2', 'Dose3']}
          onPress={handlePress}
          selectedValue={selectedValue}
          label="الجرعات السابقة"
        />
      </View>
      <View style={{ alignItems: 'center', width: '100%', gap: 22 }}>
        <Button width="large">
          <Text>حفظ و استمرار </Text>
        </Button>
        <Button width="large" type="secondary">
          <Text>حفظ و اضافة دواء اخر</Text>
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%', gap: 22 },
  input: {
    marginTop: 8,
    marginBottom: 10,
    borderRadius: 14,
    fontSize: 16,
    lineHeight: 20,
    padding: 10,
    backgroundColor: 'rgba(151, 151, 151, 0.25)',
    fontFamily: 'Droid',
  },
  toggle: {
    position: 'relative',
  },
});
