import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import ImagesBackground from './components/ImageBackground';
import Touchables from './components/touchable';

export default function App() {
  return (
    <ScrollView>
      <ImagesBackground />
      <Touchables />
      <StatusBar style="auto" />
    </ScrollView>
  );
}
