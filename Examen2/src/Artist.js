import React, { Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';


export default class ArtistBox extends Component<Props> {
    
    details = (dataArtist) =>{
        const name = dataArtist.name
        const image = dataArtist.image
        const listeners = dataArtist.listeners
        return(
            Actions.details({nameArtist:name, imageArtist:image, listenersArtist:listeners })
        )
    }
    render() {
        const {image, name, listeners} = this.props
        return (
            <View style={styles.containerNav}>
                <TouchableOpacity             
                style={styles.button}
                onPress={()=>{
                    this.details(this.props)
                }}
                > 
                    <View style={styles.artistBox}>
                        <Image style={styles.image} source={{uri: image}} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{name}</Text> 
                            <Text style={styles.name}>{listeners}</Text> 
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            )
        }
    }

const styles = StyleSheet.create({
    artistBox: {
        marginTop: 5,
        margin: 5,
        backgroundColor: '"rgba(190,255,220,.8)"',
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
    button: {
        alignItems: "center",
        backgroundColor: "#DDDDDD",
    }, 
});