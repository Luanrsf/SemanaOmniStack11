import React from "react";
import {createStackNavigator}from "@react-navigation/stack";
import {NavigationContainer} from "@react-navigation/native";
import incidents from "../src/pages/incidents/index";
import detail from "../src/pages/detail/index";



const AppStack = createStackNavigator();

export default function routes(){
    return(
<NavigationContainer>
    <AppStack.Navigator screenOptions={{headerShown:false}}>
        <AppStack.Screen name="incidents" component={incidents}/>
        <AppStack.Screen name="detail" component={detail}/>
    </AppStack.Navigator>
</NavigationContainer>

    );

}