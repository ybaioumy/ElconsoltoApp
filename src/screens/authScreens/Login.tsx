import { StyleSheet, View } from 'react-native';
import React from 'react';
import TextInput from '../../components/shared/TextInput';
import RenderIcon from '../../components/shared/RenderIcon';
import Button from '../../components/shared/Button';
import Text from '../../components/shared/Text';
import { useNavigation } from '@react-navigation/native';

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.constainer}>
      <Text bold size={20}>
        تسجيل الدخول
      </Text>
      <View style={{ width: '100%' }}>
        <TextInput
          icon={<RenderIcon iconName="email" color="#000" />}
          label="البريد الالكترونى"
          placeholder="البريد الالكترونى"
        />
        <TextInput
          icon={<RenderIcon iconName="lock" color="#000" />}
          label="كلمة المرور"
          placeholder="*********"
        />
      </View>
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          gap: 22,
        }}>
        <Button type="primary" width="xlarge">
          <Text bold>تسجيل الدخول</Text>
        </Button>
        <Button
          type="secondary"
          width="xlarge"
          onPress={() => navigation.navigate('Register' as never)}>
          <Text bold> انشاء حساب</Text>
        </Button>
        <View style={{ flexDirection: 'row', gap: 30 }}>
          <RenderIcon iconName="facebook" />
          <RenderIcon iconName="google" />
          <RenderIcon iconName="apple" />
        </View>
      </View>
      <View style={{ alignItems: 'flex-end', alignSelf: 'flex-end' }}>
        <Button
          type="link"
          onPress={() => navigation.navigate('Favorites' as never)}>
          <Text bold size={17}>
            تخطى
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
