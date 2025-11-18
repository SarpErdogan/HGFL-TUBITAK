import React from 'react';
import { View, Button } from 'react-native';

import { useScreenStore } from './store/store';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/Mebi';
import SettingsScreen from './screens/Search';

export default function App() {
  const { currentScreen, setScreen } = useScreenStore();

  const screens = {
    home: <HomeScreen />,
    mebi: <ProfileScreen />,
    search: <SettingsScreen />,
  };

  return (
      <View style={{ flex: 1 }}>
        {screens[currentScreen]}
    </View>
  );
}
