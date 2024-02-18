import { View } from 'react-native';
import Text from '../components/shared/Text';
// import MedicineReminder from '../components/calculators/MedicineReminder';
import MedicineReminder from '../components/calculators/MedicineReminder';
import PregnancyAndBirth from '../components/calculators/PragnancyAndBirth';
const dynamicContent = (screenName: string) => {
  console.log(screenName);
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
    case 'PregnancyAndBirth':
      content = <PregnancyAndBirth />;
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
