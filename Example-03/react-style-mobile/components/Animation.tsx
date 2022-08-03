import React, { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Text } from "react-native";

export default function Animation() {
    const [opacityAnim] = useState(new Animated.Value(0));
    const [scaleAnim] = useState(new Animated.Value(0));
    
    useEffect(() => {
        Animated.sequence([
            Animated.timing(opacityAnim, {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 3000,
                easing: Easing.bounce,
                useNativeDriver: true
            }),
        ]).start();
    }, [opacityAnim, scaleAnim]);

    return (
        <Animated.View style={[ styles.container, { opacity: opacityAnim } ]}>
            <Text style={styles.box}>Box</Text>

            <Animated.View style={[ styles.box, { transform: [{ scale: scaleAnim }] }]}>
                <Text>Box 2</Text>
            </Animated.View>

            
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        padding: 20,
        backgroundColor: 'blue',
        borderRadius: 10,
        width: 200,
        height: 200,
        marginTop: 10
    }
});