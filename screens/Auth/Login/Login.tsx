import { View, Text, StyleSheet, ScrollView, TouchableOpacityBase, ActivityIndicator, Platform } from 'react-native'
import React, { useState } from 'react'
import { pallets } from '../../../constant'
import InputField from '../../../components/Form/InputField'
import Information from '../../../components/Form/Information'
import Button from '../../../components/Form/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../../../firebase/config'
import { signInWithEmailAndPassword } from 'firebase/auth'
import PasswordField from '../../../components/Form/PasswordField'


const Login = () => {
  const [ value, setValue ] = useState({
    email: '',
    password: '',
    error: '',

  })

   const [password, setPassword] =React.useState(false)
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = React.useState(false)
  const size = Platform.OS === 'ios'? 'large': 70
  const handlePassword = () => {
    navigation.navigate('Password')
  }
  
  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  const togglePasswordVisibility = () => {
    setPassword(!password)
  }
  const handleSignIn = async() => {
   setIsLoading(true)
   await signInWithEmailAndPassword(auth, value.email, value.password)
    .then((userCredential) => {
      console.log('signed in')
      const user = userCredential.user
      console.log(user)
      if (!user?.emailVerified) {
        alert('Please verify your email address')
        isLoading(false)
      }else{
        navigation.navigate('Home')
      }
     
    }). catch(error => {
      setValue({
        ...value,
        error: error.message
      });
      setIsLoading(false)
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
       <View style={{marginTop: 30, marginLeft: 10, marginRight: 10}}>
       
    <Information title ="Login" description = "Welcome back to VibingLIVE, time to listen to the music you want and 
    enjoy the music"/>
       
    <Text style={{ paddingBottom: 10, paddingLeft: 7, fontSize: 11, color: "red"}}>{value.error.includes('Firebase:')? value.error.replace('Firebase:','') : value.error}</Text>    
      <InputField 
      placeholder="Enter your email address"
      label ="Email Address"
      icon="mail"
      handler={value.email}
      setHandler={(text) => setValue({...value, email: text})} />
      
 
      <PasswordField
      label="Password"
      placeholder="Enter password"
      leftIcon="lock"
      rightIcon={password? "eye" : "eye-off"}
      secure={password? true:false}
      visibility={togglePasswordVisibility}
      handler={value.password}
      setHandler={(text) => setValue({...value, password: text}) }
       />
      <Text onPress={handlePassword} style={styles.password}>Forgot password?</Text>
      {isLoading && (

        <ActivityIndicator style={{position: "absolute", alignSelf: "center", height: "100%", zIndex: 1}} size={size} color="#ffff" />
        )}
     <View >
      <Button onPress={handleSignIn} pressIn={handleSignUp} call ="Sign up" description='You have account?' action="Login"/>
      
      </View>
     
      </View>
   
    </ScrollView>
  )

}

export default Login;

const styles = StyleSheet.create({
container: {
  flex: 1,
  height: "100%",
  width: "100%",
  backgroundColor: pallets.backgroundDarker
},
password: {
    color: pallets.primary,
    top: -17,
    alignSelf: "flex-end",
    paddingRight: 15
}
})