import { useState } from 'react';
import { StyleSheet, View, Text, Alert, Button } from 'react-native';

export default function Accessible() {
    const [count, setCount] = useState(0);

    return (
        <View 
            style={styles.container} 
            onPress={() => Alert.alert('Alert...')}
            accessible={true} 
            accessibilityLabel='Tap me'
            accessibilityHint='Show Alert'
            accessibilityLanguage='pt-PT'
        >
            <Text>Text 1</Text>
            <Text>Text 2</Text>

            <Button title="Change Count" onPress={() => setCount(count + 1)} />

            <View accessibilityLiveRegion='assertive'>
                <Text>{ count }</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});