import React, { useEffect, useState } from 'react';
import { Animated, Easing, StyleSheet, Text } from "react-native";

export default function Animation() {
    const [fadeAnim] = useState(new Animated.Value(0));
    const [scale] = useState(new Animated.Value(0));
    
    useEffect(() => {
        Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 10000,
                useNativeDriver: true
            }
        ).start();

        Animated.timing(scale, {
            toValue: 1,
            duration: 3000,
            easing: Easing.bounce,
            useNativeDriver: true
        }).start();
    }, [fadeAnim])

    return (
        <Animated.View 
            style={[
                styles.container, 
                { 
                    opacity: fadeAnim,
                }
            ]}>
            <Text style={styles.box}>Box</Text>
            <Animated.View style={[ styles.box, { transform: [{ scale }] }]}>
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