import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { Icon, Input } from '@rneui/themed'
import { pallets } from '../../constant'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'

const HeaderSearch = () => {
  const [value, setValue] = useState('')
  const [active, setActive] =useState(false)

  const handleClick = () => {
    setActive(!active)
  }
  return (
    <View style={{display: "flex", flexDirection:"row", justifyContent:"space-between"}}>
      <Icon 
      containerStyle={{paddingTop: 10, paddingLeft:10}} 
      type="antdesign" name="left" size={30} color="white"/>
      {active ?  <Input 
      placeholder='Search'
      leftIcon={ <Icon type="antdesign" name="search1" size={24} color="white"/>} 
      inputStyle={{color: 'white', paddingLeft: 10 }}
      inputContainerStyle={styles.search}
      containerStyle={{width: 290}}

      /> : null
}

      <View style={{display: "flex", flexDirection:"row", paddingTop: 10,
      paddingRight: 10,}}>
        <TouchableOpacity onPress={handleClick}>
      <Icon type="antdesign" name="search1" size={30} color="white"/>
      </TouchableOpacity>
      <EvilIcons style={{paddingLeft: 10}} name="user" size={35} color="white"/>
      </View>
    </View>
  )
}

export default HeaderSearch

const styles = StyleSheet.create({
search: {
  borderRadius: 10,
  backgroundColor: pallets.backgroundDarker,
  borderBottomWidth: 0, 

  paddingLeft: 10
}
})