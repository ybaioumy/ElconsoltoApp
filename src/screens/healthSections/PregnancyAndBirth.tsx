import { StyleSheet, View } from 'react-native';
import React, { useRef } from 'react';
import Text from '../../components/shared/Text';
import { Image } from 'expo-image';
import PregnancyImage from '../../images/calculators/pregnancy.png';
import Button from '../../components/shared/Button';
import CustomBottomSheetModal from '../../components/shared/CustomBottomSheetModal';
import { BottomSheetModal } from '@gorhom/bottom-sheet';

const PregnancyAndBirth = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const handlePresentModalPress = () => bottomSheetRef.current?.present();

  return (
    <View style={styles.container}>
      <Text>
        حاسبة الحمل و الولادة هذه الحاسبة تساعدك على تحديد مراحل الحمل المهمة
        وموعد الولادة المتوقع
      </Text>
      <Text size={16} bold>
        يجب تحديد تاريخ اول يوم لاخر دورة شهرية
      </Text>
      <View
        style={{
          width: '60%',
          flex: 0.8,
          alignSelf: 'center',
        }}>
        <Image
          style={styles.image}
          source={PregnancyImage}
          contentFit="contain"
          transition={1000}
        />
      </View>
      <Button style={{ alignSelf: 'center' }} onPress={handlePresentModalPress}>
        <Text>احسبي</Text>
      </Button>
      <CustomBottomSheetModal
        title="تاريخ اول يوم لاخر دورة شهرية "
        ref={bottomSheetRef}
        intialIndex={1}
      />
    </View>
  );
};

export default PregnancyAndBirth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
    // alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    // backgroundColor: '#0553',
  },
});
