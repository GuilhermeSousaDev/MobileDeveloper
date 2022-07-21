import React, { useCallback, useEffect, useState } from 'react';
import { AsyncStorage, Button, TextInput, View } from "react-native";
import io, { connect, Socket } from 'socket.io-client';

export default function Chat() {
    const [message, setMessage] = useState<string>('');
    const [socket, setSocket] = useState<Socket>();
    const [data] = useState<{ name: string, age: number }>({
      name: 'Guilherme', age: 17
    });

    useEffect(() => {
        setSocket(io('http://192.168.1.7:8081'));
    }, []);

    const connectNativeSocket = useCallback(() => {
        socket?.emit('chat message', data);
    }, []);

    return(
        <View style={{ backgroundColor: '#fff' }}>
            <TextInput 
                value={message}
                autoCorrect={false} 
                onChangeText={message => setMessage(message)} 
            /> 

            <Button title="Conect NativeSocket" onPress={connectNativeSocket} />
        </View>
    )
}