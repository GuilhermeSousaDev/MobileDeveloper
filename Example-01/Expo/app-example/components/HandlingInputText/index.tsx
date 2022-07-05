import React, { FC, useState } from "react";
import { Text, TextInput } from "react-native";

const HandlingInputText: FC = () => {
  const [text, setText] = useState<string>();

  return (
    <>
      <TextInput
        style={{ height: 40, borderColor: "#000" }}
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

export default HandlingInputText;
