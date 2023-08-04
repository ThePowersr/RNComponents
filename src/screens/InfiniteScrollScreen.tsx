import React, { useContext, useState } from 'react'
import { StyleSheet, Text, View, FlatList, ListRenderItemInfo, Image, ActivityIndicator } from 'react-native'
import HeaderTitle from '../components/HeaderTitle'
import FadeInImage from '../components/FadeInImage';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const InfiniteScrollScreen = () => {

    const { theme: { colors, dividerColor, dark } } = useContext(ThemeContext);

    const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

    const loadMore = () => {
        const newArray: number[] = [];
        for (let i = 0; i < 4; i++) {
            newArray[i] = numbers.length + i;
        }
        setNumbers([...numbers, ...newArray])
        // setTimeout(() => {
        //     setNumbers([...numbers, ...newArray])
        // }, 1500);
    }

    const renderItem = ({ item }: ListRenderItemInfo<number>) => {

        return (

            <FadeInImage
                uri={`https://picsum.photos/id/${item}/1024/1024`}
                style={{
                    width: '100%',
                    height: 400,
                }}
            />
            // <Image
            //     source={{ uri: `https://picsum.photos/id/${item}/500/400` }}
            //     style={{
            //         width: '100%',
            //         height: 400
            //     }}
            // />
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.globalMargin}>
                <HeaderTitle title="InfiniteScroll" />
            </View>
            <FlatList
                style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                data={numbers}
                keyExtractor={(item, index) => index + item.toString()}
                renderItem={(item) => renderItem(item)}
                onEndReached={loadMore}
                // onEndReachedThreshold={0.5}
                ListFooterComponent={() => (
                    <View style={{
                        height: 150,
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <ActivityIndicator size={25} color={colors.primary} />
                    </View>
                )}
            />
        </View>
    )
}

export default InfiniteScrollScreen

const styles = StyleSheet.create({
    textItem: {
        backgroundColor: 'green',
        height: 150,
    },
    globalMargin: {
        marginHorizontal: 20,
    },
});
