import React, { Component } from 'react';
import { StyleSheet, View, Button, Image} from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
    constructor(props){
        super(props)
        this.state = {
        text1: 'Villanueva'
        }
    }
    validar = () => {
        console.log("Presionaste el boton")
        Actions.home({text1: this.state.text1})
    }
    render() {
        return (
        <View style={styles.container}>
        <Image
            source={require('../img/lentes.png')}
            style={styles.image}>
        </Image>
        <Button title="Entrar" onPress={this.validar}></Button>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height: 200,
        width: 200,
        marginBottom: 25
    }
});
