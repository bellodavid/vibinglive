import { View, Text, StyleSheet, ScrollView, TouchableOpacityBase } from 'react-native'
import React, { useState } from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'
import Information from '../../../components/Form/Information'
import Button from '../../../components/Form/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase/config'
import { sendPasswordResetEmail } from 'firebase/auth'


const Password = () => {
  const [value, setValue] = useState({
    email: "",
    error: ""
  });

  const navigation = useNavigation();
  
  

  const handleBackToLogin = () => {
    navigation.navigate('Login')
  }
  
  const handleForgotPassword = () => {
    sendPasswordResetEmail(auth, value.email).then(() => {
      setValue({
        ...value,
        error: "Password reset link sent to your email"
      })
      navigation.navigate('Verify')
    }). catch( error => {
      setValue({
        ...value,
        error: error.message
      })
    })
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
    <Information title ="Password" description = "Enter your registered email address below
    to receive password reset link"/>

<Text style={{ paddingBottom: 10, paddingLeft: 7, fontSize: 11, color: "red"}}>{value.error.includes('Firebase:')? value.error.replace('Firebase:','') : value.error}</Text>    
      <InputField 
      placeholder="Enter your email address"
      label ="Email Address"
      icon="mail"
      handler={value.email}
      setHandler={(text) => setValue({...value, email: text})}
      />
      
     <View >
      <Button onPress={handleForgotPassword} action="Submit"/>
      <Text style={{color: pallets.primary}} onPress={handleBackToLogin} style={styles.login}>Back to login</Text>
      </View>
      </View>
    </ScrollView>
  )
}

export default Password;

const styles = StyleSheet.create({
container: {
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
},
login: {
    position: "absolute",
    color: pallets.white,
    marginTop: 90,
    alignSelf: "center",

}
})