import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ArtistList from './ListArtists'
import {getMusicData} from './Api'

export default class HomeView extends Component {
    state = {
        artist: null
    }
    
    componentDidMount() {
        getMusicData().then(data => this.setState({ artists: data }))
    }
    render() {
        const artists = this.state.artists

        return(
            <View style={StyleSheet.container}>
                {artists && <ArtistList artists={artists}/>}
            </View>
        );
    }
}