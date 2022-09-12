import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { useCallback, useRef } from 'react';

export default function NativeProps() {
    const inputRef = useRef();

    const editText = useCallback(() => {
        inputRef.current && inputRef.current.setNativeProps({ text: 'Edit Text' });
    }, []);

    return (
        <View>
            <TextInput ref={inputRef} />
            <TouchableOpacity onPress={editText}>
                <Text>Edit Text</Text>
            </TouchableOpacity>
        </View>
    )
}