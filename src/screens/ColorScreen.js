import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <View>
            <Button onPress={() => {
                setColors([...colors, randomRGB()]);
            }} title="Add a Color" />

            <FlatList
                keyExtractor={color => color}
                data={colors}
                renderItem={({ item }) => {
                    return (
                        <View style={{ alignSelf: 'center', marginTop: 20, width: 100, height: 100, backgroundColor: item }} />
                    )
                }}
            />
        </View>
    )
}

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;