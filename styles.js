import {StyleSheet} from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#60B2E5',
    dark: '#1E1E24',
    secondary: '#FC6471',
    accent: '#71A2B6'
  }
};

const commonStyles = StyleSheet.create({
  Card: {
    backgroundColor: '#4f5b62',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  Text: {
    color: 'white'
  }
});

export {commonStyles, theme};