import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    const queens = [
        {
            imageSource: require("../../assets/shangela.png"),
            name: "Shangela",
            season: "2, 3"
        },
        {
            imageSource: require("../../assets/adore.png"),
            name: "Adore",
            season: "6"
        },
        {
            imageSource: require("../../assets/katya.png"),
            name: "Katya",
            season: "7"
        }, {
            name: "Ongina",
            season: "1"
        }, {
            name: "Monique",
            season: "10"
        }, {
            name: "Shea",
            season: "9"
        }, {
            name: "Dela",
            season: "6"
        }, {
            name: "Loca",
            season: "1"
        }, {
            name: "Shannel",
            season: "1"
        }, {
            name: "Manila",
            season: "3"
        }, {
            name: "Latrice",
            season: "4"
        }, {
            name: "Alyssa",
            season: "5"
        }, {
            name: "Tatianna",
            season: "2"
        }, {
            name: "Coco",
            season: "5"
        }, {
            name: "Thorgy",
            season: "8"
        }
    ]

    return (
        <View>
            <Text style={styles.title}>Gallery</Text>
            <FlatList
                keyExtractor={queen => queen.name}
                data={queens}
                renderItem={({ item }) => {
                    return (
                        <ImageDetail
                            src={item.imageSource}
                            title={item.name}
                            seasonInfo={item.season}
                        />
                    )
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45,
        marginBottom: 10,
        textAlign: 'center'
    }
});

export default ImageScreen;