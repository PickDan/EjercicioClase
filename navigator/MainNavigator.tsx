import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';
import BienvenidaScreen from '../screens/BienvenidaScreen';
import ListaProductos from '../screens/ListaProductos';
import RegistroProductos from '../screens/RegistroProductos';
import Integrantes from '../screens/Integrantes';
import { NavigationContainer } from '@react-navigation/native';

const Tab=createBottomTabNavigator();
const Stack=createStackNavigator();

function MyTabs() {
    return (
      <Tab.Navigator>
          <Tab.Screen name = "Bienvenida" component={BienvenidaScreen}/>
          <Tab.Screen name = "Lista de Productos" component={ListaProductos}/>
          <Tab.Screen name = "Registro de productos" component={RegistroProductos}/>
          <Tab.Screen name = "Integrantes" component={Integrantes}/>
  
      </Tab.Navigator>
    )
  }

function MyStack(){
    return(
        <Stack.Navigator>
            <Stack.Screen name = 'Bienvenida' component={BienvenidaScreen}/>
        </Stack.Navigator>
    )
}
export default function MainNavigator() {
    return (
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
  }
const styles = StyleSheet.create({})