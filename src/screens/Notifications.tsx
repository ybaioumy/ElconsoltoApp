import { StyleSheet, View } from 'react-native';
import React from 'react';
import Text from '../components/shared/Text';
import TextInput from '../components/shared/TextInput';
import RenderIcon from '../components/shared/RenderIcon';

const Notifications = () => {
  return (
    <View style={styles.container}>
      <TextInput
        label="اسم المستخدم"
        placeholder="New user"
        // secureTextEntry for password
        icon={<RenderIcon iconName="person" />}
      />
    </View>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
});
