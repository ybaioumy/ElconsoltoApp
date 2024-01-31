import React from 'react';
import { View, SectionList, StyleSheet, Pressable } from 'react-native';
import Text from '../components/shared/Text';
import RenderIcon from '../components/shared/RenderIcon';
interface NotificationItem {
  date: string;
  title: string;
  description: string;
}

const DATA: NotificationItem[] = [
  {
    date: 'January 30, 2024',
    title: 'امراض مزمنة ',
    description: '9 نصائح لمرضى السكري عند السفر إلى المصيف',
  },
  {
    date: 'January 30, 2024',
    title: 'امراض مزمنة',
    description: '9 نصائح لمرضى السكري عند السفر إلى المصيف',
  },
  {
    date: 'January 29, 2024',
    title: 'Notification 3',
    description: '9 نصائح لمرضى السكري عند السفر إلى المصيف',
  },
];

const Notifications: React.FC = () => {
  const groupedData = DATA.reduce((acc: { [key: string]: NotificationItem[] }, item: NotificationItem) => {
      if (!acc[item.date]) {
        acc[item.date] = [];
      }
      acc[item.date].push(item);
      return acc;
    },
    {}
  );

  const sections = Object.keys(groupedData).map((date) => ({
    title: date,
    data: groupedData[date],
  }));

  const renderItem = ({ item }: { item: NotificationItem }) => (
    <Pressable style={styles.item}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Pressable>
          <RenderIcon iconName="horizontalDots" />
        </Pressable>
        <Text isColorPrimary bold>
          {item.title}
        </Text>
      </View>
      <Text style={{ color: '#1D1D1D' }}>{item.description}</Text>
    </Pressable>
  );

  const renderSectionHeader = ({
    section: { title },
  }: {
    section: { title: string };
  }) => (
    <View style={styles.sectionHeader}>
      <Text size={16} style={styles.sectionHeaderText}>
        {title}
      </Text>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.title + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 18,
    borderRadius: 6,
  },
  sectionHeader: {
    // paddingRight: 20,
    // paddingTop: 7,
  },
  sectionHeaderText: {
    fontSize: 16,
    marginBottom: 9,
    // fontWeight: 'bold',
  },
});

export default Notifications;
