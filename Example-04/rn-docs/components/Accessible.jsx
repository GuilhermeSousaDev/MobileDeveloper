import { StyleSheet, View, Text } from 'react-native';

export default function Accessible() {
    return (
        <View style={styles.container} accessible={true}>
            <Text>Text 1</Text>
            <Text>Text 2</Text>
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