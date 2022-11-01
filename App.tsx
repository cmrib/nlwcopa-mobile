import React from "react";
import { NativeBaseProvider, Center, Text } from "native-base";
import { THEME } from './src/styles/theme'


export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <Center flex={1} bgColor="gray.900" alignItems="center" justifyContent="center">
        <Text color="yellow.500" fontSize={24}>Hello World</Text>
      </Center>
    </NativeBaseProvider>
  );
}