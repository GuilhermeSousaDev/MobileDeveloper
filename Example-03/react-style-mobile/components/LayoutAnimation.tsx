import React, { useCallback, useState } from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

export default function LayoutAnimationC() {
  const [pos, setPos] = useState<{ w: number, h: number }>({ w: 100, h: 100 });
  const [opacity, setOpacity] = useState<number>(0);

  const updateAnimation = useCallback(() => {
    LayoutAnimation.spring();
    setOpacity(1);
    setPos({ w: pos.w + 15, h: pos.h + 15 });
  }, [pos]);

  return (
    <View style={styles.container}>
      <View style={[styles.box, {width: pos.w, height: pos.h, opacity}]} />
      <TouchableOpacity onPress={updateAnimation}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});