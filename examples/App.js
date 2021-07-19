import React from 'react';
import StoryBookUI from './storybook';
import { useFonts } from 'expo-font';

export default () => {
  const [loaded] = useFonts({
    'Lexend-Bold': require('./assets/fonts/Lexend-Bold.ttf'),
    'Lexend-Regular': require('./assets/fonts/Lexend-Regular.ttf'),
    'Lexend-Medium': require('./assets/fonts/Lexend-Medium.ttf'),
  });

  if (!loaded) return null;

  return <StoryBookUI />;
};