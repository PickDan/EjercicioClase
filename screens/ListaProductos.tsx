import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

//Use state
const [productoid, setproductoid] = useState(0)
const [objeto, setobjeto] = useState('')
const [precio, setprecio] = useState(0)

export default function ListaProductos() {
  return (
    <View>
      <Text>ListaProductos</Text>
      <TextInput
      placeholder='Id del producto: '
      keyboardType='numeric'
      onChangeText={(texto)=>(setproductoid(+texto))}
      />
      <Text>{productoid}</Text>
      <Text>    </Text>
      <TextInput
      placeholder='Nombre del producto: '
      onChangeText={(texto)=>(setobjeto(texto))}
      />
      <Text>{objeto}</Text>
      <Text>    </Text>
      <TextInput
      placeholder='Precio del producto: '
      keyboardType='numeric'
      onChangeText={(texto)=>(setprecio(+texto))}
      />
      <Text>{precio}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    
})