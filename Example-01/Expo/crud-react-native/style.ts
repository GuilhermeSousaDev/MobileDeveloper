import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    flatList: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      marginTop: 100
    },
    button: {
      color: '#fff', 
      marginTop: 15,
      borderColor: '#fff',
      borderWidth: 1,
      borderRadius: 5,
      padding: 10,
    },
    textInput: {
      width: 300,
      height: 50,
      backgroundColor: '#fff',
      borderRadius: 10,
      textAlign: 'center',
      marginTop: 10
    }
});

export default styles;