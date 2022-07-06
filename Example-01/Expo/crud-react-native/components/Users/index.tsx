import React, { FC, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { IDate } from "../../interfaces/IDate";
import api from "../../services/Axios";
import EditUser from "../EditUser";
import styles from "./style";

interface IUsers {
    user: {
        id: number;
        firstName: string;
        lastName: string;
        age: number;
        createdAt: Date;
        updatedAt: Date;
    }
}

const Users: FC<IUsers> = ({ user }) => {
    const [date, setDate] = useState<IDate>();
    const [show, setShow] = useState<boolean>(false);

    useEffect(() => {
        const date = new Date(user.createdAt);

        setDate({
            day: date.toLocaleDateString('default', { day: '2-digit' }),
            hours: date.getHours() < 10? `0${date.getHours()}` : date.getHours(),
            minutes: date.getMinutes() < 10? `0${date.getMinutes()}` : date.getMinutes(),
            seconds: date.getSeconds() < 10? `0${date.getSeconds()}` : date.getSeconds(),
        });
    }, []);

    return (
        <>
            <View style={styles.userView}>
                <Text>{ user.firstName } { user.lastName }</Text>
                <Text>{ user.age }</Text>
                <Text>{ date?.day }</Text>
                <Text>
                    { date?.hours }:
                    { date?.minutes }:
                    { date?.seconds }
                </Text>

                <Text style={styles.editUserArea}>
                    { show? 
                        <EditUser id={user.id} setShow={setShow} />
                        : '' 
                    }
                </Text>

                <Button 
                    title="Delete" 
                    onPress={async () => await api.delete(`api/${user.id}`)} 
                />
                <Button 
                    title="Edit"
                    onPress={() => setShow(!show)}
                />
            </View>
        </>
    )
}

export default Users;