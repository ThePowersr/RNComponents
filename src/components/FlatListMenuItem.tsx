import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { MenuItem } from '../Interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation, useTheme } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
    menuItem: MenuItem,
}

export const FlatListMenuItem = ({ menuItem }: Props) => {

    const { name, icon } = menuItem;
    //const { colors } = useTheme();

    const { theme: { colors } } = useContext(ThemeContext)


    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navigation.navigate(menuItem.component)}
        >
            <View style={styles.container}>
                <Icon
                    name={icon}
                    color={colors.primary}
                    size={23}
                />
                <Text style={{ ...styles.itemText, color: colors.text }}>
                    {name}
                </Text>
                <View style={{ flex: 1 }} />
                <Icon
                    name='chevron-forward-outline'
                    color={colors.primary}
                    size={23}
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    itemText: {
        marginLeft: 10,
        fontSize: 19,
    }
});
