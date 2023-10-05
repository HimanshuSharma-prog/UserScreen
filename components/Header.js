import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import { colours } from './Colours'
import { animalData } from './data'

const Header = () => {
    const data = animalData
    return (
        <View style={styles.header}>

            <View style={styles.background}></View>
            <View style={{
                alignItems: 'center',
                padding:10
            }}>
                <TouchableOpacity
                    style={styles.btn}
                >
                    <Text style={{
                        fontSize: 16,
                        color: colours.white
                    }}>Following</Text>
                </TouchableOpacity>
                <View style={styles.imgDiv}>
                    <Image source={require('../assets/images/p2.png')}
                        style={{
                            width: 150,
                            height: 200
                        }}
                    />
                </View>
            </View>
            <View style={styles.details}>
                <Text style={styles.name}>Himanshu Sharma</Text>
                <Text style={styles.title}>Full Stack Developer 💻</Text>
            </View>
            <ScrollView style={styles.stories} horizontal>
                {data.map((elem) => (
                    <View style={styles.card} key={elem.id}>
                        <Image source={elem.img}
                            style={{
                                width: 70,
                                height: 70,
                                borderRadius: 35,
                            }}
                        />
                        <Text style={{
                            color: colours.white,
                            marginTop: 5
                        }}>{elem.name}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        position: 'relative',
        paddingTop:40,
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: colours.blue,
        width: '100%',
        height: '40%',
        borderBottomLeftRadius: 40,
        borderBottomEndRadius: 40
    },
    btn: {
        alignSelf: 'flex-end',
        height: 35,
        alignItems: "center",
        justifyContent: 'center',
        paddingHorizontal: 20,
        borderRadius: 23,
        backgroundColor: colours.dark,
    },
    imgDiv: {
        width: 200,
        height: 200,
        borderRadius: 100,
        padding: 5,
        backgroundColor: colours.dark,
        overflow: 'hidden',
        alignItems: "center",
        justifyContent: 'center',
        borderColor: colours.blue,
        borderWidth: 1
    },
    details: {
        alignItems: 'center',
        padding: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colours.white,
        marginBottom: 5
    },
    title: {
        color: colours.white
    },
    card: {
        alignItems: "center",
        margin: 5
    }
})


export default Header