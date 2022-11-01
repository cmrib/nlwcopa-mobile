import React from "react";
import { NativeBaseProvider, Center, Text } from "native-base";
import { THEME } from './src/styles/theme'
import { Loading } from './src/components/Loading'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { SignIn } from './src/screens/SignIn'


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>

      {!fontsLoaded ?
        <Loading />
        :
        <SignIn />
      }

    </NativeBaseProvider>
  );
}