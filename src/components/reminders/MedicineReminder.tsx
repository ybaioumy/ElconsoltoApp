import { View, StyleSheet } from 'react-native';
import React from 'react';
import BottomSheet, { BottomSheetTextInput } from '@gorhom/bottom-sheet';
export default function MedicineReminder() {
  return (
    <View style={styles.container}>
      <BottomSheetTextInput style={styles.input} placeholder="اسم الدواء" />
      <View>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, width: '100%' },
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
});
