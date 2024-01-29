import React, { useCallback, useMemo, useRef, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import Text from './Text';
import Button from './Button';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { dynamicContent } from '../../utils/renderModalContent';
import { useRoute } from '@react-navigation/native';
const withModalProvider = (Component: React.FC) => () =>
  (
    <BottomSheetModalProvider>
      <Component />
    </BottomSheetModalProvider>
  );
export const BottomModal = () => {
  const route = useRoute();
  const screenName = route.name;
  //#region state
  const [enablePanDownToClose, setEnablePanDownToClose] = useState(true);
  const [enableDismissOnClose, setEnableDismissOnClose] = useState(true);
  //#endregion

  // refs
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%', '100%'], []);

  //#region callbacks
  const handleChange = useCallback((index: number) => {
    // eslint-disable-next-line no-console
    console.log('index', index);
  }, []);
  const handleDismiss = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('on dismiss');
  }, []);
  const handleDismissPress = useCallback(() => {
    bottomSheetRef.current!.dismiss();
  }, []);
  const handleClosePress = useCallback(() => {
    bottomSheetRef.current!.close();
  }, []);
  const handleExpandPress = useCallback(() => {
    bottomSheetRef.current!.expand();
  }, []);
  const handleCollapsePress = useCallback(() => {
    bottomSheetRef.current!.collapse();
  }, []);
  const handlePresentPress = useCallback(() => {
    bottomSheetRef.current!.present();
  }, []);

  // renders

  return (
    <View style={styles.container}>
      <Button onPress={handlePresentPress} type="link">
        <Text>open modal</Text>
      </Button>
      <Button onPress={handleDismissPress}>
        <Text>close modal</Text>
      </Button>

      <Button onPress={handleClosePress}>
        <Text>close modal</Text>
      </Button>

      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        enablePanDownToClose={enablePanDownToClose}
        enableDismissOnClose={enableDismissOnClose}
        onDismiss={handleDismiss}
        onChange={handleChange}>
        <View>{dynamicContent(screenName)}</View>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    // padding: 24,
  },
});

export default withModalProvider(BottomModal);
