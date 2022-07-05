import React, { FC, useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import api from "../../services/Axios";

interface IUsers {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    createdAt: Date;
    updatedAt: Date;
}

interface IProp {
  setShow: React.Dispatch<React.SetStateAction<boolean>>
}

const RegisterUser: FC<IProp> = ({ setShow }) => {   
  const [firstName, setFirstName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [age, setAge] = useState<number>();

  const registerUserInDatabase = useCallback(async () => {
    await api.post<IUsers>('api', { firstName, lastName, age });

    setFirstName('');
    setLastName('');
    setAge(undefined);

    setShow(false);
  }, [firstName, lastName, age]);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
        placeholder="FirstName..."
      />
      <TextInput
        style={styles.textInput}
        value={lastName}
        onChangeText={(text) => setLastName(text)}
        placeholder="LastName..."
      />
      <TextInput
        style={styles.textInput}
        value={age?.toString()}
        onChangeText={(text) => setAge(Number(text))}
        placeholder="Age..."
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={registerUserInDatabase}>
        <Text style={{ color: "#fff" }}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        zIndex: 1
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

export default RegisterUser;
