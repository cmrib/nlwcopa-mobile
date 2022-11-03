import React from "react";
import { NativeBaseProvider } from "native-base";
import { THEME } from './src/styles/theme'
import { Loading } from './src/components/Loading'
import { useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { SignIn } from './src/screens/SignIn'
import { StatusBar } from "native-base";
import { AuthContextProvider } from "./src/context/AuthContext";


export default function App() {

  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_500Medium, Roboto_700Bold })

  return (
    <NativeBaseProvider theme={THEME}>

      <AuthContextProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />

        {!fontsLoaded ?
          <Loading />
          :
          <SignIn />
        }

      </AuthContextProvider>
    </NativeBaseProvider>
  );
}