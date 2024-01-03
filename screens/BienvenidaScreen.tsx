import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function BienvenidaScreen({navigation}:any) {
  return (
    <View>
      <Text>BienvenidaScreen</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Tab')}>
            <Text style={{color:'white', fontSize:40}}>Continuar</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})