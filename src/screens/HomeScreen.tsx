import React, { useContext, useState } from 'react'
import { Appearance, NativeModules, Text, View } from 'react-native'
import { FlatList, Switch } from 'react-native-gesture-handler'
import styles from '../theme/appTheme';
import { FlatListMenuItem } from '../components/FlatListMenuItem';
import { menuItems } from '../data/menuItems';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import SwitchWithIcons, { Switchable } from 'react-native-switch-with-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
const sol = require('../../images/169367.png');
const moon = require('../../images/4445942.png');
import { ThemeContext } from '../context/themeContext/ThemeContext';



const HomeScreen = () => {

    const { setDarkTheme, setLightTheme } = useContext(ThemeContext);

    const { top } = useSafeAreaInsets();

    const [isEnabled, setIsEnabled] = useState(false);

    const inicial = () => {
        if (Appearance.getColorScheme() == 'light') {
            setIsEnabled(false)
            return isEnabled;
        } else {
            setIsEnabled(true)
            return isEnabled;
        };
    }

    const cambios = () => {
        setIsEnabled(!isEnabled);
        if (!isEnabled) {
            setDarkTheme()
        } else {
            setLightTheme()
        };
    }

    return (
        <View style={{ flex: 1, ...styles.globalMargin }}>

            <FlatList
                data={menuItems}
                renderItem={({ item }) => <FlatListMenuItem menuItem={item} />}
                keyExtractor={(item) => item.name}
                ListHeaderComponent={() => (
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                    }}>
                        <HeaderTitle title='Opciones de Menú' />
                        <View style={{ marginTop: top }}>
                            <SwitchWithIcons
                                value={isEnabled}
                                onValueChange={cambios}
                                icon={{ true: moon, false: sol }}
                                iconColor={{ true: "yellow", false: "yellow" }}
                                animationDuration={1300}
                                thumbColor={{ true: "rgb(4, 38, 67)", false: "rgb(23, 19, 19)" }}
                            />
                        </View>
                    </View>
                )}
                ItemSeparatorComponent={() => <ItemSeparator />}
            />
        </View>
    )
}

export default HomeScreen
