import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
    const friends = [{
        name: "Shangela",
        originalSeason: "2, 3"
    }, {
        name: "Adore",
        originalSeason: "6"
    }, {
        name: "Katya",
        originalSeason: "7"
    }, {
        name: "Ongina",
        originalSeason: "1"
    }, {
        name: "Monique",
        originalSeason: "10"
    }, {
        name: "Shea",
        originalSeason: "9"
    }, {
        name: "Dela",
        originalSeason: "6"
    }, {
        name: "Loca",
        originalSeason: "1"
    }, {
        name: "Shannel",
        originalSeason: "1"
    }, {
        name: "Manila",
        originalSeason: "3"
    }, {
        name: "Latrice",
        originalSeason: "4"
    }, {
        name: "Alyssa",
        originalSeason: "5"
    }, {
        name: "Tatianna",
        originalSeason: "2"
    }, {
        name: "Coco",
        originalSeason: "5"
    }]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({ item }) => {
                return <>
                    <Text style={styles.textStyle}>
                        <Text>{item.name} </Text>
                        <Text>- Season {item.originalSeason}</Text>
                    </Text>
                </>
            }}
        />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        borderWidth: 1,
        fontWeight: 'bold',
        marginVertical: 50,
        padding: 20,
        textAlign: 'center',
        width: '100%'
    }
});

export default ListScreen;