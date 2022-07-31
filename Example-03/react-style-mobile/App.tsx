import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagesBackground from './components/ImageBackground';
import Touchables from './components/Touchable';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImageBackground" component={ImagesBackground} />
        <Stack.Screen name="Touchables" component={Touchables} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
