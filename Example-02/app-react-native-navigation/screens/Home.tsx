import React, { useEffect } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import { io } from "socket.io-client";
import { RootStackScreenProps } from "../types";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
    useEffect(() => {
        const server = io('http://localhost:8081');

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
    </View>
  );
};

export default Home;
