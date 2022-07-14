import React, { useEffect, useState } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { io, Socket } from "socket.io-client";
import { RootStackScreenProps } from "../types";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
    const [server, setServer] = useState<Socket>(io('http://localhost:8081'));
    const [data] = useState<{ name: string, age: number }>({
      name: 'Guilherme', age: 17
    });

    useEffect(() => {
        server.on('connection', (socket) => {
            console.log('client connected ' + socket.id)
        })
    }, []);

  return (
    <View style={{ backgroundColor: "#fff" }}>
      <Text>Home Page</Text>
      <Button
        title="About"
        onPress={() => navigation.navigate("About", { name: "Guilherme" })}
      />

      <Button
        title="Change Title"
        onPress={() => navigation.setOptions({ title: "Init" })}
      />

      <Button title="Socket emit" onPress={() => server.emit('message', data)} />
    </View>
  );
};

export default Home;
