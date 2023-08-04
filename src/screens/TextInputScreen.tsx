import React, { useContext, useState } from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import styles from '../theme/appTheme';
import { TextInput } from 'react-native-gesture-handler'
import CustomSwitch from '../components/CustomSwitch';
import { useForm } from '../hooks/useForm';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {

    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);

    const { form, onChange, isSubscribed } = useForm({
        name: '',
        email: '',
        number: '',
        isSubscribed: false,
    });

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? 'padding' : 'height'}
        >
            <ScrollView>
                <View style={styles.globalMargin}>
                    <HeaderTitle title='TextInputs' />

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.text }}
                        placeholderTextColor={dividerColor}
                        placeholder='Ingrese su nombre' //ingrese su nombre
                        autoCorrect={false} // correción del teclado
                        autoCapitalize='words' // Mayuscula por cada palabra que le continue
                        keyboardAppearance={dark ? 'dark' : 'light'}
                        onChangeText={(value) => onChange(value, 'name')}
                    />

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.text }}
                        placeholderTextColor={dividerColor}
                        placeholder='Ingrese su email'
                        autoCorrect={false}
                        autoCapitalize='none'
                        keyboardAppearance={dark ? 'dark' : 'light'}
                        onChangeText={(value) => onChange(value, 'email')}
                        keyboardType='email-address'
                    />

                    <View style={stylesScreen.textRow}>
                        <Text style={{ ...stylesScreen.textSwitch, color: colors.text }}>suscribirse</Text>
                        <CustomSwitch
                            isOn={isSubscribed}
                            onChange={(value) => onChange(value, 'isSubscribed')}
                        />
                    </View>

                    <TextInput
                        style={{ ...stylesScreen.inputStyle, color: colors.text, borderColor: colors.text }}
                        placeholderTextColor={dividerColor}
                        placeholder='Ingrese su teléfono'
                        autoCorrect={false}
                        autoCapitalize='none'
                        onChangeText={(value) => onChange(value, 'number')}
                        keyboardAppearance={dark ? 'dark' : 'light'}
                        keyboardType='number-pad'
                    />
                    <HeaderTitle title={JSON.stringify(form, null, 5)} />
                    <HeaderTitle title={JSON.stringify(form, null, 5)} />
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default TextInputScreen


const stylesScreen = StyleSheet.create({
    inputStyle: {
        borderWidth: 1,
        height: 50,
        paddingHorizontal: 10,
        borderRadius: 10,
        marginVertical: 10
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 10,
    },
    viewJson: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textSwitch: {
        fontSize: 25,
        color: 'black',
    }
});
