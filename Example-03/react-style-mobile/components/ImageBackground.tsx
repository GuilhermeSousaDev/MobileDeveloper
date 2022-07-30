import { ImageBackground, StyleSheet, View } from "react-native";

export default function ImagesBackground() {
    return (
        <ImageBackground source={require('../image.jpeg')} style={styles.container}>
            <View onTouchEnd={(e) => console.log(e)} style={styles.box}></View>
            <View style={[styles.box, styles.children]}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <ImageBackground source={require('../image.jpeg')} style={[styles.box, styles.border]}></ImageBackground>
        </ImageBackground>
    )
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
  },
  border: {
    borderRadius: 15
  },
});