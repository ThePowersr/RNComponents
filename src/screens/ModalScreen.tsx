import React, { useState } from 'react'
import { Button, Modal, Text, View } from 'react-native'
import styles from '../theme/appTheme'
import HeaderTitle from '../components/HeaderTitle'

const ModalScreen = () => {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <View style={styles.globalMargin}>
            <HeaderTitle title='Header Title' />

            <View>

                <Button
                    title='Modal'
                    onPress={() => setIsVisible(true)}
                />

                <Modal
                    animationType='fade'
                    visible={isVisible}
                    transparent={true}
                >
                    <View
                        style={{
                            flex: 1,
                            backgroundColor: 'rgba(0,0,0,0.3)',
                            justifyContent: 'center',
                            alignItems: 'center'

                        }}
                    >

                        <View
                            style={
                                {
                                    backgroundColor: 'white',
                                    width: 200,
                                    height: 200,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    shadowOffset: {
                                        width: 0,
                                        height: 10
                                    },
                                    shadowOpacity: 0.25,
                                    elevation: 10,
                                    borderRadius: 10,
                                }
                            }
                        >
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal</Text>
                            <Text style={{ fontSize: 20, fontWeight: '300', marginBottom: 20 }}>Cuerpo del modal</Text>
                            <Button
                                title='cerrar'
                                onPress={() => setIsVisible(false)}
                            />

                        </View>

                    </View>
                </Modal>
            </View>
        </View>
    )
}

export default ModalScreen
