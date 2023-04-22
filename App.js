import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';
import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { MusicDB } from './data/MusicDB';

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

export default function App() {
  const musicDB = new MusicDB();
  musicDB.createMusicTable();
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

