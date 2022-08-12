import React from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';
 
export default function App() {
 
  const showAlert = () => {
    Alert.alert('View Clicked ...');
  };
 
  return (
 
    <View style={styleSheet.MainContainer}>
 
      <View style={styleSheet.view}
        onStartShouldSetResponder={() => true}
        onResponderGrant={showAlert}
      >
 
        <Text style={{ fontSize: 28, color: 'white', textAlign: 'center' }}> 
          Set onPress onClick on View Component in React Native
        </Text>
 
      </View>
 
    </View>
  );
}
 
const styleSheet = StyleSheet.create({
 
  MainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
 
  view: {
    width: 350,
    height: 120,
    backgroundColor: 'coral',
    alignItems: 'center',
    justifyContent: 'center',
  }
});