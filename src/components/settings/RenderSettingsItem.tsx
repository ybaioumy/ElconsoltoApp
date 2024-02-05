import React, { useState } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SectionItem, Section } from '../../types/types';
import Text from '../shared/Text';
import RenderIcon from '../shared/RenderIcon';
import Button from '../shared/Button';
import CustomSwitch from '../shared/Switch';
const RenderItem = ({
  item,
  index,
  section,
}: {
  item: SectionItem;
  index: number;
  section: Section;
}) => {
  const [switchesState, setSwitchesState] = useState<boolean[]>([]);

  const navigation = useNavigation();
  const handlePress = () => {
    if (item.screen) {
      navigation.navigate(item.screen as never);
    }
  };

  const handleSwitchToggle = (index: number) => {
    // console.log(index);
    setSwitchesState((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });
  };
  const isLastItemInSection = index === section.data.length - 1;
  return (
    <View
      style={[
        styles.itemContainer,
        { borderBottomWidth: isLastItemInSection ? 0 : 1 },
      ]}>
      {item.screen ? (
        <Pressable
          onPress={handlePress}
          style={{
            alignItems: 'center',
            flexDirection: 'row-reverse',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <View
            style={{
              alignItems: 'center',
              flexDirection: 'row-reverse',
              gap: 17,
            }}>
            <RenderIcon iconName={item.icon} color="rgba(28, 60, 80, 1)" />
            <Text
              style={[styles.itemLabel, { color: 'rgba(51, 51, 51, 1)' }]}
              size={12}>
              {item.label}
            </Text>
          </View>
          <View>
            <Button type="link">
              <RenderIcon iconName="leftArrow" color="rgba(130, 130, 130, 1)" />
            </Button>
          </View>
        </Pressable>
      ) : (
        //handle if link is clicked
        <>
          <View style={{ alignItems: 'center', flexDirection: 'row', gap: 17 }}>
            <Text
              style={[styles.itemLabel, { color: 'rgba(51, 51, 51, 1)' }]}
              size={12}>
              {item.label}
            </Text>
            <RenderIcon iconName={item.icon} color="rgba(28, 60, 80, 1)" />
          </View>
          <View>
            {item.linkType ? null : (
              <CustomSwitch
                value={switchesState[index]}
                onChange={() => handleSwitchToggle(index)}
              />
            )}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    width: '100%',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
    paddingVertical: 17,
    // borderBottomWidth: 1,
    borderBottomColor: 'rgba(123, 123, 123, 0.15)',
  },
  itemLabel: {
    marginLeft: 16,
  },
});

export default RenderItem;
