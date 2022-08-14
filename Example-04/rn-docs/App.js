import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Accessible from './components/Accessible';
import GestureSystem from './components/GestureSystem';
import Home from './components/Home';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='home'>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="accessible" component={Accessible} />
        <Stack.Screen name="gestureSystem" component={GestureSystem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
