import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImagesBackground from './components/ImageBackground';
import Touchables from './components/Touchable';
import Home from './components/Home';
import { RootStackParamList } from './types';
import Animation from './components/Animation';
import SlideAnimation from './components/SlideAnimation';
import LayoutAnimationC from './components/LayoutAnimation';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ImagesBackground" component={ImagesBackground} />
        <Stack.Screen name="Touchables" component={Touchables} />
        <Stack.Screen name="Animations" component={Animation} />
        <Stack.Screen name="SlideAnimation" component={SlideAnimation} />
        <Stack.Screen name="LayoutAnimation" component={LayoutAnimationC} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
