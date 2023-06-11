import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboard from '../../screens/Onboard/Onboard';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import CreateAccount from '../../screens/Auth/SignUp/CreateAccount';
import Verify from '../../screens/Auth/Login/Verify';
import Login from '../../screens/Auth/Login/Login';
import Password from '../../screens/Auth/Login/Password';


export type RootStackParamList = {
    onboard: undefined;
    MyModal: { userId: string; name: string}
    SignUp: { name: string};
    CreateAccount: { name: string};
    Verify: { name: string};
    Login: { name: string};
    Password: { name: string};
   
  }

const AuthNavigator = () => {
const Auth = createNativeStackNavigator<RootStackParamList>();

  return (
   <Auth.Navigator>
    <Auth.Group screenOptions={{
      headerShown: false
    }}>
    <Auth.Screen name="onboard"  component={Onboard} />
    <Auth.Screen name="SignUp" component={SignUp} />
    <Auth.Screen name="CreateAccount" component={CreateAccount} />
    <Auth.Screen name="Verify" component={Verify} />  
    <Auth.Screen name="Login" component={Login} />
    <Auth.Screen name="Password" component={Password} />

    </Auth.Group>
   
    
   </Auth.Navigator>
  )
}

export default AuthNavigator