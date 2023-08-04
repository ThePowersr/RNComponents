import { StyleSheet } from "react-native";
import { ThemeContext } from "../context/themeContext/ThemeContext";
import { useContext } from "react";

const styles = StyleSheet.create({
    globalMargin: {
        marginHorizontal: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'black'
    },
    app: {
        color: 'black'
    }
});

export default styles;
