import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from '../components/shared/Text';
type ReminderItem = {
  title: string;
  description?: string;
  time: string;
};

const REMINDERS_DATA: ReminderItem[] = [
  {
    title: 'معاد الدواء',
    description: 'الساعه 5 مساءا',
    time: '06:45 am',
  },
  {
    title: 'معاد الدواء',
    description: 'الساعه 5 مساءا',
    time: '06:45 am',
  },
  {
    title: 'معاد الدواء',
    description: 'الساعه 5 مساءا',
    time: '06:45 am',
  },
];

const Reminders: React.FC = () => {
  const renderItem = (item: ReminderItem) => (
    <View style={styles.item}>
      <View style={styles.leftContent}>
        <Text bold size={15} style={{ color: '#1E1D1D' }}>
          {item.title}
        </Text>
        <Text size={15} style={{ color: '#1E1D1D' }}>
          {item.description}
        </Text>
      </View>
      <Text style={{ color: '#454545' }}>{item.time}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text size={18} bold>
        التذكيرات التالية
      </Text>
      {REMINDERS_DATA.map((item, index) => (
        <View key={index}>{renderItem(item)}</View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
  },
  leftContent: {
    justifyContent: 'center',
    width: '80%',
    backgroundColor: '#ECF4F5',
    borderRightWidth: 4,
    borderRightColor: '#37C0BE',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: 10,
  },
});

export default Reminders;
