import 'react-native-gesture-handler';
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../screens/Home';
import AddSong from '../screens/AddSong';

const Stack = createStackNavigator();

export default function StackNavigator() {
    return(
        <Stack.Navigator >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Add Song" component={AddSong}/>
        </Stack.Navigator>
    )
};