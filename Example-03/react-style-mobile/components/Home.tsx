import React from 'react';
import { View, Text, Button } from "react-native";

type IParams = {
    route: {
        params: {
            name: string;
        }
    },
    navigation: {
        navigate: (screen: string, params?: any) => void;
    }
}

export default function Home({ navigation, route }: IParams) {
    return (
        <View>
            <Text>Home</Text>
            <Button 
                title="Touchables Screen" 
                onPress={() => navigation.navigate('Touchables', { name: 'Touch' })} />
            <Button 
                title="ImagesBackground Screen"
                onPress={() => navigation.navigate('ImagesBackground')}
            />
            <Button 
                title="Animations Screen"
                onPress={() => navigation.navigate('Animations')}
            />
        </View>
    )
}