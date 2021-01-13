import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import NavigationBar from 'react-native-navbar';
import {Actions} from 'react-native-router-flux';



const rightButtonConfig = {
    title: 'Next',
    handler: () => alert('hello!'),
};
const titleConfig = {
    title: 'Hello, world',
};
const leftButtonConfig ={
    title: 'Previous',
    handler: ()=> Actions.home()
}
function Details(props){
    const nameArtist = props.nameArtist
    const listenersArtist = props.listenersArtist
    const imageArtist = props.imageArtist

    return(
        <View>
            <View style={styles.containerNav}>
                <NavigationBar
                title={titleConfig}
                rightButton={rightButtonConfig}
                leftButton={leftButtonConfig}
                />
            </View>
            <View style={styles.artistBox}>
                <Image style={styles.image} source={{uri: imageArtist}} />
                <View style={styles.info}>
                    <Text style={styles.name}>{nameArtist}</Text> 
                    <Text style={styles.name}>{listenersArtist}</Text> 
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    artistBox: {
        marginTop: 5,
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation:2
    },
    image: {
        width: 150,
        height: 150
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    },
    containerNav: {
        marginTop:15,
        paddingTop:10,
        margin: 5,
    },
})

export default Details