import React, { Component } from 'react';   
import { SafeAreaView, FlatList } from 'react-native';
import ArtistBox from './Artist'

export default class ArtistList extends Component<Props>{
    constructor(props){
        super(props);
        }
    
    render(){
        const DataMusic = this.props.artists;
    
    const renderItem = ({ item }) => (
        <ArtistBox name={item.name} image={item.image} listeners={item.listeners}/>
    );
    
    return (
        <SafeAreaView>
        <FlatList
            data={DataMusic}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
        </SafeAreaView>
    );
    }
}
