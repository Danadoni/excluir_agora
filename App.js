import React from 'react'
import {Text, StyleSheet} from 'react-native'

export default function App () {

  return (

          <Text style = {css.texto}> Meu primeiro app </Text>


  );


}

const css = StyleSheet.create ( {

    texto : {
      fontSize: 40,
      color:"blue"
    }

 } )