import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}></View>
      <View style={[styles.box, styles.children]}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
      <View style={styles.box}></View>
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
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignContent: 'space-around',
    flexWrap: 'wrap',
    paddingTop: 50,
    paddingBottom: 50
  },
  box: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    borderRadius: 15
  },
  children: {
    alignSelf: 'center',
    backgroundColor: 'blue'
  }
});
