import { 
  StyleSheet, 
  Text, 
  TouchableHighlight, 
  TouchableNativeFeedback, 
  TouchableOpacity, 
  View 
} from "react-native";

export default function Touchables() {
  return (
    <View>
      <TouchableHighlight>
          <Text style={styles.button}>Press</Text>
        </TouchableHighlight>
        <TouchableNativeFeedback>
          <Text style={styles.button}>Press</Text>
        </TouchableNativeFeedback>
        <TouchableOpacity>
          <Text style={styles.button}>Press</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000',
    color: '#fff'
  }
});