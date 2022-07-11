import React from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { RootStackScreenProps } from "../types";

const Home = ({ navigation }: RootStackScreenProps<'Home'>) => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text>Home Page</Text>
            <Button 
                title="About"
                onPress={() => navigation.navigate('About', { name: 'Guilherme' })}
            />

            <Button 
                title="Change Title"
                onPress={() => navigation.setOptions({ title: 'Init' })}
            />
        </View>
    )
}

export default Home;