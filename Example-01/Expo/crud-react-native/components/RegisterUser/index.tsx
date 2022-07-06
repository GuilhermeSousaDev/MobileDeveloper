import React, { FC, useCallback, useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { IUsers } from "../../interfaces/IUsers";
import api from "../../services/Axios";
import styles from "./style";

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

export default RegisterUser;
