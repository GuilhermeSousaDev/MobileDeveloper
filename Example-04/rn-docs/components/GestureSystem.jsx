import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";

export default function GestureSystem() {
    const [items] = useState(['apple', 'orange', 'banana']);

    return (
        <View style={styles.container}>
            <View
                onStartShouldSetResponder={() => true}
                onMoveShouldSetResponder={() => true}
                onResponderGrant={() => Alert.alert('Alert...')}
                onResponderMove={evt => console.log(evt)}
            >
                <Text>Gesture System</Text>
            </View>
            <FlatList 
                data={items}
                renderItem={({ item }) => (
                    <View 
                        onMoveShouldSetResponder={() => true}
                        onResponderMove={ev => console.log(ev)}
                    >
                        <Text>{ item }</Text>
                    </View>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        height: 600
    },
});