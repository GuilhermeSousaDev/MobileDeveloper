import React, { useEffect } from "react";
import { Platform } from 'react-native';
import HandlingInputText from "./components/HandlingInputText";
import List from "./components/List";

export default function App() {
  useEffect(() => {
    console.log({
      plataform: Platform.OS,
      version: Platform.Version,
      constants: Platform.constants,
      TV: Platform.isTV
    });
  }, []);

  return (
    <>
      <HandlingInputText />
      <List />
    </>
  );
}
