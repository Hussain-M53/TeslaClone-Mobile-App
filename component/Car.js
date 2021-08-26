import React from 'react'
import { ImageBackground, StyleSheet, Text, View, Dimensions, StatusBar } from 'react-native'
import ButtonSection from './ButtonSection'

const Car = ({ name, image, taglineCTA, tagline }) => {
    return (
        <View style={styles.carContainer}>
            <ImageBackground source={image} style={styles.image} />
            <View style={styles.title}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.tagline}>
                    {tagline}
                    {" "}
                    <Text style={styles.taglineCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style={styles.buttonSection}>
                {/* primary is button with black bgcolor and white color */}
                <ButtonSection data={"Custom Order"} type={"primary"} />
                {/* secondary is button with white bgcolor and black color */}
                <ButtonSection data={"Existing Inventory"} type={"secondary"} />
            </View>
        </View>
    )
}

export default Car

const styles = StyleSheet.create({
    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height + StatusBar.currentHeight,
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    title: {
        width: '100%',
        position: 'absolute',
        top: 150,
        alignItems: 'center'

    },
    name: {
        fontSize: 35,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    tagline: {
        fontSize: 15,
        fontWeight: 'normal',
        textAlign: 'center'
    },
    taglineCTA: {
        textDecorationLine: 'underline',

    },
    buttonSection: {
        position: 'absolute',
        bottom: 25,
        width: '90%',
        alignItems: 'center'

    }
})
