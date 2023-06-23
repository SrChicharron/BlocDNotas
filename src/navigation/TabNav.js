import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Notas from '../screens/Notas';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

export default function TabNav() {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} 
        options={{
            tabBarLabel:"",
            tabBarIcon:({color,size})=>{
                return <AntDesign name="home" size={24} color={color} />
            }
        }}
        />
        <Tab.Screen name="Notas" component={Notas} 
        options={{
            tabBarLabel:"",
            tabBarIcon:({color,size})=>{
                return <FontAwesome name="sticky-note-o" size={24} color={color} />
            }
        }}
        />
    </Tab.Navigator>
  )
}

//