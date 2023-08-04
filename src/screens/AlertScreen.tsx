import React from 'react'
import { Alert, Button, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import styles from '../theme/appTheme'
import prompt from 'react-native-prompt-android';

const AlertScreen = () => {

    const showAlert = () => {
        Alert.alert(
            "titulo",
            "Este es el mensaje de la alerta",
            [
                {
                    text: 'cancel',
                    onPress: () => console.log("cancel Pressed"),
                    style: 'destructive',
                },
                { text: 'OK', onPress: () => console.log('OK Pressed') }
            ]
        )
    };

    const showPrompt = () => {
        // Alert.prompt(
        //     'Está seguro?',
        //     'Esta acción no se puede revertir',
        //     (valor: string) => console.log('info: ', valor),
        //     'plain-text',
        //     'Hola mundo',

        // )
        prompt(
            'Enter password',
            'Enter your password ',
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: password => console.log('OK Pressed, password: ' + password) },
            ],
            {
                type: 'secure-text',
                cancelable: false,
                defaultValue: 'test',
                placeholder: 'placeholder'
            }
        );
    };

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Alerts' />

            <Button
                title="Mostrar Alerta"
                onPress={showAlert}
            />

            <View style={{ height: 10 }} />

            <Button
                title="Mostrar Prompt"
                onPress={showPrompt}
            />
        </View>
    )
}

export default AlertScreen
