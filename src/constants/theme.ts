import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { Platform } from 'react-native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    primary: '#37C0BE',
    background: '#F9F9F9',
    secondary: '#1C3C50',
    primaryText: '#333',
    secondaryText: '#A7A7A7',
    purpleColor: '#B66B8A',
    lowOpacity: '#D9F1F3',
    ligthGray: '#E7F1F2',
    semiTransparent: 'rgba(0, 0, 0, 0.5)',
    boxShadow: 'rgba(0, 0, 0,0.1)',
    // gradinatPurple: linger gradint  background: linear-gradient(180deg, #4A2938 -22.21%, #AD5C7D 97.14%);
    //primayGradint :background: linear-gradient(180deg, #1C3C50 -22.32%, #26A4A2 106.34%, #35B6B6 109.34%);
  },
  shadow: Platform.select({
    ios: {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
    },
    android: {
      shadowColor: 'rgba(0, 0, 0, 0.1)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 3.84,
      elevation: 3,
    },
  }),
};
