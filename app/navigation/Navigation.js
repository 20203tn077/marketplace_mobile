import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CategoryStack from './CategoryStack'
import SubcategoryStack from './SubcategoryStack'

const Drawer = createDrawerNavigator()

export default function Navigation() {

    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Category" component={CategoryStack} />
                <Drawer.Screen name="Subcategory" component={SubcategoryStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})