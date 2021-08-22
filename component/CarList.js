import React from 'react'
import { StyleSheet, View, Dimensions, FlatList } from 'react-native'
import cars from './cars'
import Car from './Car';
const CarList = () => {

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={(item) => item.name}
                snapToAlignment={"center"}
                showsVerticalScrollIndicator={false}
                decelerationRate={"fast"}
                snapToInterval={Dimensions.get('window').height}
                data={cars}
                renderItem={({ item }) => <Car name={item.name} image={item.image} tagline={item.tagline} taglineCTA={item.taglineCTA} />
                }
            />
           
        </View>
    )
}

export default CarList

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
})
