import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '../screens/MainScreen';
import AddDataScreen from '../screens/AddDataScreen';

const Stack = createNativeStackNavigator();

function Navigator() {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
           <Stack.Screen name="MainScreen" component={MainScreen}/>
           <Stack.Screen name="AddDataScreen" component={AddDataScreen}/>
        </Stack.Navigator>
    );
}

export default Navigator;