import { View, StyleSheet, Pressable } from 'react-native';
import React, { forwardRef, useCallback, useMemo, useState } from 'react';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  useBottomSheet,
} from '@gorhom/bottom-sheet';
import RenderIcon from './RenderIcon';
import Text from './Text';
import { dynamicContent } from '../../utils/renderModalContent';

import { useNavigation, useRoute } from '@react-navigation/native';
import { lightTheme } from '../../constants/theme';
export type Ref = BottomSheetModal;
type props = {
  title: string;
  intialIndex: number;
};
const CustomBottomSheetModal = forwardRef<Ref, props>((props, ref) => {
  const route = useRoute();
  const screenName = route.name;
  const snapPoints = useMemo(() => ['50%', '75%', '95%'], []);

  const [isWomenScreen, setIsWomenScreen] = useState(false);
  const navigation = useNavigation();
  useMemo(() => {
    const currentRoute =
      navigation?.getState()?.routes[navigation?.getState()?.index]?.name;
    const womenScreens = ['PregnancyAndBirth'];
    setIsWomenScreen(womenScreens.includes(currentRoute));
  }, [navigation]);
  const CloseBtn = () => {
    const { close } = useBottomSheet();

    return (
      <Pressable onPress={() => close()}>
        <RenderIcon iconName="close" />
      </Pressable>
    );
  };
  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={1}
      />
    ),
    []
  );
  return (
    <BottomSheetModal
      style={{ flex: 1 }}
      ref={ref}
      index={props.intialIndex}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}>
      <View style={styles.container}>
        <View style={styles.header}>
          <CloseBtn />
          <Text
            size={16}
            bold
            style={{
              color: isWomenScreen ? lightTheme.colors.purpleColor : null,
            }}>
            {props.title}
          </Text>
        </View>
        <View style={styles.contentContainer}>
          {dynamicContent(screenName)}
        </View>
      </View>
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default CustomBottomSheetModal;
