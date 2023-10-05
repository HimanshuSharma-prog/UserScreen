import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colours } from './Colours'
import { animalData } from './data'

const ImageDiv = () => {
    const imgArr = animalData
    return (
        <>
            <View style={styles.cardDiv}>
                <View style={styles.card}>
                    <Text style={{
                        fontSize: 20,
                        color: colours.white
                    }}>5</Text>
                    <Text style={{
                        color: colours.white
                    }}>Posts</Text>
                </View>
                <View style={[styles.card, styles.borders]}>
                    <Text style={{
                        fontSize: 20,
                        color: colours.white
                    }}>10</Text>
                    <Text style={{
                        color: colours.white
                    }}>Followers</Text>
                </View>
                <View style={styles.card}>
                    <Text style={{
                        fontSize: 20,
                        color: colours.white
                    }}>3</Text>
                    <Text style={{
                        color: colours.white
                    }}>Following</Text>
                </View>
            </View>
            <View style={[styles.cardDiv, {
                justifyContent: 'space-between',
                paddingHorizontal: 20,
            }]}>
                <Text style={{
                    fontSize: 18,
                    color: colours.white,
                    paddingBottom: 5,
                    borderColor: colours.white,
                    borderBottomWidth: 1
                }}>Posts</Text>
                <Text style={{
                    fontSize: 18,
                    color: colours.white,
                    paddingBottom: 5
                }}>Stamp Book</Text>
                <Text style={{
                    fontSize: 18,
                    color: colours.white,
                    paddingBottom: 5
                }}>Community</Text>
            </View>
            <View style={styles.imgDiv}>
                {imgArr.map((elem) => (
                    <Image source={elem.img} style={{
                        width: '50%',
                        height: 200,
                        borderColor: colours.secondry,
                        borderWidth: 2
                    }} key={elem.id} />
                ))}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    cardDiv: {
        width: '100%',
        marginTop: 15,
        alignItems: "center",
        flexDirection: 'row'
    },
    card: {
        width: '33%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 3,
    },
    borders: {
        borderColor: colours.white,
        borderLeftWidth: 1,
        borderRightWidth: 1
    },
    imgDiv: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginVertical: 20
    }
})
export default ImageDiv