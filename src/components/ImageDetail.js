import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ImageDetail = ({ src, title, seasonInfo }) => {
    return (
        <View style={styles.view}>
            <Image style={styles.image} source={src} />
            <Text style={styles.list}>{title}</Text>
            <Text style={styles.list}>Season: {seasonInfo}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    view: {
        marginVertical: 10,
        paddingVertical: 10,
        borderWidth: 1
    },
    image: {
        alignSelf: 'center',
        marginTop: 10
    },
    list: {
        fontSize: 25,
        textAlign: 'center'
    }
});

export default ImageDetail;