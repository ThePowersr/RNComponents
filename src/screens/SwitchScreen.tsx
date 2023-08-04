import React, { useContext, useState } from 'react'
import { Platform, StyleSheet, SwitchComponent, Text, View } from 'react-native'
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const SwitchScreen = () => {

    const { theme: { colors } } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(false);
    const toglleSwitch = () => setIsEnabled(!isEnabled);

    const [state, setState] = useState({
        isActive: false,
        isHungry: false,
        isHappy: false,
    })

    const onChange = (value: boolean, field: keyof typeof state) => {
        setState({
            ...state,
            [field]: value
        })
    }

    const { isActive, isHappy, isHungry } = state;

    return (
        <View style={{ marginHorizontal: 20, flex: 1 }}>

            <HeaderTitle title='Switches' />

            <View style={styles.textRow}>
                <Text style={{ ...styles.textSwitch, color: colors.text }}>isActive</Text>
                <CustomSwitch
                    isOn={isActive}
                    onChange={(value) => onChange(value, 'isActive')}

                />
            </View>
            <View style={styles.textRow}>
                <Text style={{ ...styles.textSwitch, color: colors.text }}>isHungry</Text>
                <CustomSwitch
                    isOn={isHungry}
                    onChange={(value) => onChange(value, 'isHungry')}
                />
            </View>
            <View style={styles.textRow}>
                <Text style={{ ...styles.textSwitch, color: colors.text }}>isHappy</Text>
                <CustomSwitch
                    isOn={isHappy}
                    onChange={(value) => onChange(value, 'isHappy')}
                />
            </View>


            <View style={styles.viewJson}>
                <Text style={{ ...styles.textSwitch, color: colors.text }}>
                    {JSON.stringify(state, null, 5)}
                </Text>
            </View>

        </View>
    )
}

export default SwitchScreen

const styles = StyleSheet.create({
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
    }

});
