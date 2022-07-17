import React, { useCallback, useState } from 'react';
import { Button, TextInput, View } from "react-native";
import { io, Socket } from 'socket.io-client';

export default function Chat() {
    const [message, setMessage] = useState<string>('');
    const [socket, setSocket] = useState<Socket>(io("ws://192.168.1.11:8081"));
    const [data] = useState<{ name: string, age: number }>({
      name: 'Guilherme', age: 17
    });

    const submitMessage = useCallback(() => {
        socket.emit('message', message);
        setMessage('');
    }, []);

    return(
        <View style={{ backgroundColor: '#fff' }}>
            <TextInput 
                value={message}
                autoCorrect={false} 
                onChangeText={message => setMessage(message)} 
            />

            <Button title="Send Message" onPress={submitMessage} />
        </View>
    )
}