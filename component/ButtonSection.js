import React from 'react'
import { StyleSheet, Text, View, Pressable, TouchableOpacity, TouchableHighlight, TouchableHighlightBase } from 'react-native'

const ButtonSection = ({ data, type }) => {
    const backgroundColor = type === "primary" ? '#171A20CC' : '#FFFFFFA6';
    const color = type === "primary" ? '#FFFFFF' : '#171A20';
    return (
        <View style={styles.button}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.button, { backgroundColor: backgroundColor }]}>
                <Text style={[styles.content, { color: color }]}>{data}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonSection

const styles = StyleSheet.create({
    button: {
        width: '95%',
        marginTop: 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50
    },
    content: {
        padding: 15,
    }
})
