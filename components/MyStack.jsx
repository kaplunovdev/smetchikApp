import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../components/HomeScreen'
import { SmetaList } from '../components/SmetaList'
const Stack = createNativeStackNavigator();

export const MyStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Главная"
                    component={HomeScreen}
                />
                <Stack.Screen
                    name="Список смет"
                    component={SmetaList} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};