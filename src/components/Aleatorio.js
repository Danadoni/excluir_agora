import React from 'react'
import {Text,View} from 'react-native'


export default function Aleatorio(props){

  const numero = Math.random() * (props.max - props.min) + props.min;
return(
<View>

    <Text> O valor Sorteado {Math.floor(numero)}</Text>

</View>
)
}