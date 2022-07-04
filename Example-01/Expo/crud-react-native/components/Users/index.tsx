import React, { FC, useEffect, useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

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

interface IDate {
    day: string;
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
}

const Users: FC<IUsers> = ({ user }) => {
    const [date, setDate] = useState<IDate>();

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
                <Button title="Excluir" />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    userView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#000',
        borderWidth: 1,
        padding: 10,
        marginTop: 10,
        width: 300,
    }
})

export default Users;