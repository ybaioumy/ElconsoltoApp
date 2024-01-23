import { View } from 'react-native';
import Text from '../components/shared/Text';
const dynamicContent = (screenName: string) => {
  let content: React.ReactNode;
  switch (screenName) {
    case 'home':
      content = (
        <View>
          <Text>Home</Text>
        </View>
      );
      break;
    case 'search':
      content = (
        <View>
          <Text>Search</Text>
        </View>
      );
      break;
    case 'profile':
      content = (
        <View>
          <Text>Profile</Text>
        </View>
      );
      break;
    default:
      content = (
        <View>
          <Text>Home</Text>
        </View>
      );
      break;
  }
  return content;
};
export { dynamicContent };
