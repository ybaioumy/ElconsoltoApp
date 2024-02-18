import { Pressable, StyleSheet, View, FlatList } from 'react-native';
import React from 'react';
import Text from '../../components/shared/Text';
import TextInput from '../../components/shared/TextInput';
import Card from '../../components/shared/Card';
import RenderIcon from '../../components/shared/RenderIcon';
type Medcine = {
  id: number;
  name: string;
  description: string;
};
const EncyclopediaOfMedicines = () => {
  const commonMedicine = [
    {
      id: 1,
      name: 'ويكيفينيت 50 مجم 30 قرص (أرمودافينيل)',
      description: 'WAKEFINATE 50 MG 30 TAB (Armodafinil)',
    },
    {
      id: 2,
      name: 'ويكيفينيت 50 مجم 30 قرص (أرمودافينيل)',
      description: 'WAKEFINATE 50 MG 30 TAB (Armodafinil)',
    },
    {
      id: 3,
      name: 'ويكيفينيت 50 مجم 30 قرص (أرمودافينيل)',
      description: 'WAKEFINATE 50 MG 30 TAB (Armodafinil)',
    },
  ];
  const renderItem = ({ item }: { item: Medcine }) => {
    return (
      <Pressable key={item.id} style={{ paddingVertical: 10 }}>
        <Text isColorPrimary>{item.name}</Text>
        <Text style={{ color: '#9C9C9C' }}>{item.description}</Text>
      </Pressable>
    );
  };
  //TODO: add search functionality
  return (
    <View style={styles.container}>
      <Text>
        موسوعة الأدوية تحتوي على معلومات مفصلة عن الأدوية المتوفرة في المجال
        الطبي حيث تشمل وصف عام عن الدواء، طريقة التناول، الجرعات، الآثار
        الجانبية وموانع الإستعمال
      </Text>
      <Text style={{ color: '#828282', marginTop: 16 }} size={11}>
        جميع المعلومات المنشورة عن الأدوية مبنية فقط على النشرات الطبية للدواء
        ولا يجوز اعتبارها بديلاً لإستشارة الطبيب
      </Text>
      <Card color="#E7F1F2CC" width="100%">
        <Text style={{ marginBottom: 10 }} bold>
          بحث باسم الدواء
        </Text>
        <TextInput
          placeholder="بحث"
          backgroundColor="#fff"
          searchInput
          icon={<RenderIcon iconName="search" color="#878B91" />}
        />
      </Card>
      <Text size={18} bold style={{ color: '#1C3C50' }}>
        الادوية الاكثر شيوعا
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={commonMedicine}
        renderItem={renderItem}
        keyExtractor={(item) => `${item.id}`}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1, backgroundColor: '#EEEEEE' }} />
        )}
      />
    </View>
  );
};

export default EncyclopediaOfMedicines;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 16,
  },
});
