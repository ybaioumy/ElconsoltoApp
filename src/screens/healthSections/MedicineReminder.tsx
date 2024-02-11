import { StyleSheet, View, Image } from 'react-native';
import React, { useRef, useState } from 'react';
import Button from '../../components/shared/Button';
import Text from '../../components/shared/Text';
import MedicineReminderImage from '../../images/calculators/medicationReminder.png';
import { BottomSheetModal, useBottomSheetModal } from '@gorhom/bottom-sheet';
import CustomBottomSheetModal from '../../components/shared/CustomBottomSheetModal';
const MedicineReminder = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = () => {
    bottomSheetRef.current?.present();
  };
  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  const handleCloseBottomSheet = () => {
    bottomSheetRef.current?.dismiss();
  };
  return (
    <View style={styles.container}>
      <Text size={16}>
        لا تفوت جرعة. تتزامن التذكيرات مع أجهزتك المحمولة الأخرى عند تسجيل
        الدخول بحسابك
      </Text>
      <View
        style={{
          flex: 0.8,
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <Image source={MedicineReminderImage} />
        <Button onPress={handlePresentModalPress}>
          <Text bold size={18}>
            التذكير بالدواء
          </Text>
        </Button>
      </View>
      <CustomBottomSheetModal title="تذكير بالدواء" ref={bottomSheetRef} />
    </View>
  );
};

export default MedicineReminder;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
});
