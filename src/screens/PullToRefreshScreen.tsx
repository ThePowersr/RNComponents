import React, { useContext } from 'react'
import { View, ScrollView } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import styles from '../theme/appTheme';
import { useState } from 'react';
import { RefreshControl } from 'react-native-gesture-handler';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {

    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);

    const [refreshing, setRefreshing] = useState(false);
    const [data, setData] = useState<string>();

    const onRefresh = () => {
        setRefreshing(true);

        setTimeout(() => {
            setRefreshing(false)
            setData('Hola mundo')
        }, 1500);
    }


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    progressViewOffset={10}
                    progressBackgroundColor={dividerColor}
                    colors={[colors.text]}
                    tintColor={dark ? 'white' : 'black'}
                //style={{ backgroundColor: '#5856D6' }}
                />
            }
            style={refreshing ? { marginTop: 20 } : null}
        >

            <View style={styles.globalMargin}>
                <HeaderTitle title="Pull to refresh" />
                {
                    data && <HeaderTitle title={data} />
                }
            </View>

        </ScrollView>
    )
}

export default PullToRefreshScreen
