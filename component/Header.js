import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'

const Header = ({ drawer }) => {

    return (
        <View style={styles.container}>

            <Image
                source={require('../assets/logo.png')}
                style={styles.logo}
            />
            <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
                <Image
                    source={require('../assets/menu.png')}
                    style={styles.menu}
                />
            </TouchableOpacity>

        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        width: '90%',
        zIndex: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    logo: {
        width: 110,
        height: 20,
        resizeMode: 'contain',
    },
    menu: {
        height: 35,
        width: 35,
        resizeMode: 'contain',

    },
})

