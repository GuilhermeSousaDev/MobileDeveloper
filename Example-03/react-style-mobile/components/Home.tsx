import React from 'react';
import { View, Text, Button, StyleSheet } from "react-native";

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
        <View style={styles.container}>
            <Text>Screens</Text>
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
            <Button 
                title="SlideAnimation Screen"
                onPress={() => navigation.navigate('SlideAnimation')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        
    }
});