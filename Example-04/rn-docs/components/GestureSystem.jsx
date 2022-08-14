import { Alert, StyleSheet, Text, View } from "react-native";

export default function GestureSystem() {
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