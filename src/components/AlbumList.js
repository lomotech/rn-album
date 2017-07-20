// import
import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Axios from 'axios';
import AlbumDetail from "./AlbumDetail";

// component
class AlbumList extends Component {
    // class level property
    state = {albums: []};

    componentWillMount() {
        Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}))
    }

    // helper
    renderAlbums() {
        return this.state.albums.map(album =>
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render() {
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

// export
export default AlbumList;