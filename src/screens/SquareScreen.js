import React, { useReducer } from "react";
import { StyleSheet, View, Button } from "react-native";
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 10;

const reducer = (state, action) => {
    switch (action.colorToChange) {
        case 'red':
            return state.red + action.amount > 255 || state.red + action.amount < 0 ? state : { ...state, red: state.red + action.amount };
        case 'green':
            return state.green + action.amount > 255 || state.green + action.amount < 0 ? state : { ...state, green: state.green + action.amount };
        case 'blue':
            return state.blue + action.amount > 255 || state.blue + action.amount < 0 ? state : { ...state, blue: state.blue + action.amount };
        default:
            return state;
    }
}

const SquareScreen = () => {
    const initialState = { red: 0, green: 0, blue: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    const { red, green, blue } = state;

    return (
        <View>
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'red', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'red', amount: -1 * COLOR_INCREMENT })}
                color="Red"
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'green', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'green', amount: -1 * COLOR_INCREMENT })}
                color="Green"
            />
            <ColorCounter
                onIncrease={() => dispatch({ colorToChange: 'blue', amount: COLOR_INCREMENT })}
                onDecrease={() => dispatch({ colorToChange: 'blue', amount: -1 * COLOR_INCREMENT })}
                color="Blue"
            />

            <View style={{ alignSelf: 'center', marginTop: 20, width: 100, height: 100, backgroundColor: `rgb(${red}, ${green}, ${blue})` }} />
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

export default SquareScreen;