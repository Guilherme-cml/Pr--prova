import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/stack";
import React from "react";

import Home from './src/screens/home/Home'
import Users from './src/screens/usuarios/Users'
import Posts from './src/screens/posts_usuarios/Posts'
import Lista from './src/screens/lista_usuarios/Lista'

const Stack = createNativeStackNavigator();

export default function Router() {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home"> 
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Users" component={Users} />
                <Stack.Screen name="Posts" component={Posts} />
                <Stack.Screen name="Lista" component={Lista} />
            </Stack.Navigator>
        </NavigationContainer>





    )
    
}