import { View, Button, StyleSheet } from "react-native";
import FastImage from 'react-native-fast-image';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <FastImage 
                source={{ 
                    uri: 'https://unsplash.it/400/400?image=1',
                    priority: FastImage.priority.normal
                }}
                resizeMode={ FastImage.resizeMode.center }
            />

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