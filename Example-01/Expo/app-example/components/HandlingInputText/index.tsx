import React, { FC, useState } from "react";
import { Platform } from 'react-native';
import { StyleSheet, Text, TextInput } from "react-native";

const HandlingInputText: FC = () => {
  const [text, setText] = useState<string>();

  return (
    <>
      <TextInput
        style={styles.textInput}
        placeholder="Type here to translate!"
        onChangeText={(txt) => setText(txt)}
        defaultValue={text}
      />

      <Text style={{ padding: 10, fontSize: 42 }}>
        {text
          ?.split(" ")
          .map((word) => word && "🍕")
          .join(" ")}
      </Text>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    marginTop: 50,
    borderWidth: 1,
    ...Platform.select({
      android: {
        borderColor: 'green',
        height: 40,
      },
      ios: {
        borderColor: '#000',
        height: 50
      },
      default: {
        borderColor: 'blue',
        height: 30
      }
    }),
  }
});

export default HandlingInputText;
