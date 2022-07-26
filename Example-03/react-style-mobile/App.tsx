import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  }
});
