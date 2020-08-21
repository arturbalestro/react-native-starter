import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
    switch (action.type) {
        case 'change_increment':
            return {...state, counter: state.counter + action.payload }
        case 'change_decrement':
            return {...state, counter: state.counter - action.payload }
        default:
            return state;
    }
}

const CounterScreen = () => {
    const initialState = {counter: 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    const {counter} = state;
    return (
        <View>
            <Text style={styles.title}>Counter</Text>
            <Button onPress={() => dispatch({ type: 'change_increment', payload: 2 })} title="increase" />
            <Button onPress={() => dispatch({ type: 'change_decrement', payload: 2 })} title="decrease" />
            <Text>Current count is: {counter}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 45
    }
});

export default CounterScreen;