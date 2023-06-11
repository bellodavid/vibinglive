import { View, Text, StyleSheet, ScrollView, TouchableOpacityBase } from 'react-native'
import React, { useState } from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'
import Information from '../../../components/Form/Information'
import Button from '../../../components/Form/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { Linking } from 'react-native'


const Verify = () => {
  const [verify, setVerify] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate('Login')
  }
  
 
  const openEmail = () => {
    Linking.openURL('mailto:')
  }

  return (
    <ScrollView style={styles.container}>
    <TouchableOpacity>
     
    <Icon 
      type="antdesign" 
      name="left" size={30} 
      color="white"
      containerStyle={{alignItems:"baseline", marginTop: 30, marginLeft: 10}}
      onPress={navigation.goBack}/>
    
      </TouchableOpacity>
    <View style={{marginTop: 30, marginLeft: 10,
    marginRight: 10}}>
    <Information title ="Verify your email " description = "Hi David! account verification code has been sent to your email address lad****@gmail.com" step =""/>
      
      
      <TouchableOpacity>
      <Button onPress={openEmail} description="Didn't receive email?" call="Click to resend" action="Open Email"/>
      </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Verify;

const styles = StyleSheet.create({
container: {
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
}
})