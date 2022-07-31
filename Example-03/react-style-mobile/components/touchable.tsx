import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  TouchableNativeFeedback, 
  TouchableOpacity, 
  View 
} from "react-native";

type IParams = {
  route: {
    params: {
      name: string;
    }
  }
}

export default function Touchables({ route }: IParams) {
  const [show, setShow] = useState<boolean>(false);
  const [params] = useState<string>(route.params.name);
  
  return (
    <View>
      <TouchableHighlight onLongPress={() => show === false ? setShow(true) : setShow(false)}>
          <Text style={styles.button}>Press</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback>
          <Text style={styles.button}>Press</Text>
        </TouchableNativeFeedback>
        <TouchableOpacity>
          <Text style={styles.button}>Press</Text>
      </TouchableOpacity>

      <Text>{ show ? params : '' }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    color: '#fff'
  }
});