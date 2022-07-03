import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import api from './services/Axios';

export default function App() {
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<number>();

  const registerUserInDatabase = useCallback(async () => {
    const { data } = await api.post('api', {
      firstName,
      lastName,
      age,
    });
    
    console.log(data);
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('api');

      console.log(data);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        onChangeText={text => setFirstName(text)}
        placeholder="FirstName..."
      />
      <TextInput style={styles.textInput}
        onChangeText={text => setLastName(text)}
        placeholder="LastName..."
      />
      <TextInput style={styles.textInput}
        onChangeText={text => setAge(Number(text))}
        placeholder="Age..."
        keyboardType='numeric'
      />

      <TouchableOpacity style={styles.button} onPress={registerUserInDatabase}>
        <Text style={{ color: '#fff' }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
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
