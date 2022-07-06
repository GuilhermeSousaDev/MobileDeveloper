import React, { FC, useCallback, useEffect, useState } from "react";
import { Button, Text, TextInput, View } from "react-native";
import { IUsers } from "../../interfaces/IUsers";
import api from "../../services/Axios";
import styles from "./style";

interface IProp {
    id: number;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;
}

const EditUser: FC<IProp> = ({ id, setShow }) => {
    const [user, setUser] = useState<IUsers>();
    const [firstName, setFirstName] = useState<string>();
    const [lastName, setLastName] = useState<string>();
    const [age, setAge] = useState<number>();

    useEffect(() => {
        (async () => {
            const { data } = await api.get<IUsers>(`api/${id}`);

            setUser(data);
        })();
    }, []);

    const handleUpdateUser = useCallback(async () => {
        const userData = {
            firstName: firstName === undefined? user?.firstName : firstName,
            lastName: lastName === undefined? user?.lastName : lastName,
            age: age === undefined? user?.age : age,
        }

        await api.put(`api/${id}`, userData);

        setShow(false);
    }, [firstName, lastName, age, user]);

    return (
        <View style={styles.container}>
            <View style={styles.editArea}>
                <Text>Edit User - { user?.firstName }</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="FirsName"
                    defaultValue={user?.firstName}
                    onChangeText={text => setFirstName(text)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="LastName"
                    defaultValue={user?.lastName}
                    onChangeText={text => setLastName(text)}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Age"
                    defaultValue={user?.age.toString()}
                    keyboardType="numeric"
                    keyboardAppearance="dark"
                    onChangeText={text => setAge(Number(text))}
                />
            </View>
            <Button title="Confirm" onPress={handleUpdateUser} />
        </View>
    )
}

export default EditUser;