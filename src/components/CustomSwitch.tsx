import React, { useContext, useState } from 'react'
import { Platform } from 'react-native';
import { Switch } from 'react-native-gesture-handler'
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    isOn: boolean;
    onChange: (value: boolean) => void;
}

const CustomSwitch = ({ isOn, onChange }: Props) => {

    const { theme: { colors } } = useContext(ThemeContext);

    const [isEnabled, setIsEnabled] = useState(isOn);
    const toglleSwitch = () => {
        setIsEnabled(!isEnabled);
        onChange(!isEnabled);
    }

    return (
        <Switch
            trackColor={{ false: "#D9D9DB", true: colors.primary }}
            thumbColor={(Platform.OS === 'android') ? colors.primary : ''}
            onValueChange={toglleSwitch}
            value={isEnabled}
        />
    )
}

export default CustomSwitch
