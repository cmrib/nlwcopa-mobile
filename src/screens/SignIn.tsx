import { Center, Text, Icon } from 'native-base'
import React from 'react'
import Logo from '../assets/logo.svg'
import { Button } from '../components/Button'
import { Fontisto } from '@expo/vector-icons';
import { useAuth } from '../hooks/useAuth'

export function SignIn() {
    const { signIn, user } = useAuth()

    return (
        <Center flex={1} bgColor="gray.900" alignItems="center" justifyContent="center" p={7}>
            <Logo width={212} height={40} />
            <Button
                title="entrar com google"
                type="SECONDARY"
                leftIcon={<Icon as={Fontisto} name="google" size="md" color="white" />}
                mt={12}
                onPress={signIn}
            />

            <Text
                color="white"
                textAlign="center"
                mt={4}
            >
                Não utilizamos nenhuma informação além {'\n'} do seu e-mail para criação de sua conta.
            </Text>
        </Center>
    )
}