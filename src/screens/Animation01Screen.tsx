import React, { useContext, useRef, useState } from 'react'
import { Animated, Button, StyleSheet, View } from 'react-native'
import useAnimation from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation01Screen = () => {

    const { fadeIn, fadeOut, opacity, position, startMovingPosition } = useAnimation();
    const { theme: { colors } } = useContext(ThemeContext);

    return (
        <View style={styles.container}>

            <Animated.View style={{
                ...styles.purpleBox,
                marginBottom: 20,
                opacity: opacity,
                backgroundColor: colors.primary,
                transform: [{
                    translateY: position
                }]
            }} />

            <View style={styles.viewButton}>
                <Button
                    title="fadeIn"
                    onPress={() => {
                        fadeIn()
                        startMovingPosition(-200, 900)
                    }}
                />
                <View style={{ marginHorizontal: 20 }} />
                <Button
                    title="fadeOut"
                    onPress={fadeOut}
                />
            </View>


        </View>
    )
}

export default Animation01Screen

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    purpleBox: {
        backgroundColor: '#5856d6',
        width: 150,
        height: 150,
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
});
