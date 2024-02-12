import { View } from 'react-native';
import Text from '../components/shared/Text';
import MedicineReminder from '../components/reminders/MedicineReminder';
const dynamicContent = (screenName: string) => {
  // console.log(screenName);
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
    case 'MedicineReminder':
      content = <MedicineReminder />;
      break;
    default:
      content = (
        <View>
          <Text>else</Text>
        </View>
      );
      break;
  }
  return content;
};
export { dynamicContent };
