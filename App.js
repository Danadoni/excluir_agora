import React from 'react'
import {Text, StyleSheet,Button} from 'react-native'

export default function App () {

  return (

          <Text style = {css.texto}> Meu primeiro app </Text>
          <Button title='Olá' ></Button>


  );


}

const css = StyleSheet.create ( {

    texto : {
      fontSize: 40,
      color:"blue"
    }

 } )