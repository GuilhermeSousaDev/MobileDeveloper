import React from "react";
import { Text, View } from "react-native";
import { IParams } from "../types";

const About = ({ route }: IParams) => {
    return (
        <View style={{ backgroundColor: '#fff' }}>
            <Text>About Page Params { route.params.name }</Text>
        </View>
    )
}

export default About;