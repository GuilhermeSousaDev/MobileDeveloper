import { View, Button, StyleSheet } from "react-native";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button 
                title=" Accessible Screen" 
                onPress={() => navigation.navigate('accessible')} 
            />
            <Button 
                title="GestureSystem Screen" 
                onPress={() => navigation.navigate('gestureSystem')} 
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