import { View, Text, Image } from 'react-native'
import React from 'react'

const Logo = () => {
    const myImage = require('../../assets/icons/logofav.png')
  return (
    <View style={{position: "absolute"}}>
      <Image source={myImage}/>
    </View>
  )
}

export default Logo