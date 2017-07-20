// import
import React from 'react';
import {Image, Linking, Text, View} from 'react-native';
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

// component
const AlbumDetail = ({album}) => {
    const {
        artist,
        image,
        thumbnail_image,
        title,
        url,
    } = album;
    const {
        headerContentStyle,
        headerTextStyle,
        imageStyle,
        thumbnailContainerStyle,
        thumbnailStyle,
    } = styles;

    return (
        <Card>
            <CardSection>
                <View style={thumbnailContainerStyle}>
                    <Image
                        style={thumbnailStyle}
                        source={{uri: thumbnail_image}}
                    />
                </View>
                <View style={headerContentStyle}>
                    <Text style={headerTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image
                    style={imageStyle}
                    source={{uri: image}}
                />
            </CardSection>
            <CardSection>
                <Button
                    onPress={() => Linking.openURL(url)}
                    title="Buy Now"
                />
            </CardSection>
        </Card>
    );
};

// style
const styles = {
    headerContentStyle: {
        justifyContent: 'space-around',
        flexDirection: 'column'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
};

// export
export default AlbumDetail;