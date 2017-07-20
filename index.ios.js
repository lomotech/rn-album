// Import libraries to create a component
import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from "./src/components/Header";
import AlbumList from "./src/components/AlbumList";

// Create a component
const App = () => {
    return (
    <View>
        <Header headerText={'Albums'} />
        <AlbumList/>
    </View>
    );
};

// Render to device
AppRegistry.registerComponent('albums', () => App);
