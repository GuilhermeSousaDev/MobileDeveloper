import React, { useCallback, useState } from "react";
import { Button } from "react-native";
import { Text, View } from "react-native";
import * as SecureStore from 'expo-secure-store';
import { RootStackScreenProps } from "../types";

const Home = ({ navigation }: RootStackScreenProps<"Home">) => {
  const [data] = useState<{ name: string, age: number }>({
    name: 'Guilherme', age: 17
  });

  const save = useCallback(async (key, value) => {
    await SecureStore.setItemAsync(key, value);
  }, []);

  const getKeyValue = useCallback(async (key) => {
    const value = await SecureStore.getItemAsync(key);

    return value
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

      <Button 
        title="Save ExpoStore" 
        onPress={() => save('name', data.name)} 
      />

      <Button 
        title="Get ExpoStore" 
        onPress={async () => console.log(await getKeyValue('name'))} 
      />
    </View>
  );
};

export default Home;
