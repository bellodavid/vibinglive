import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboard from "../screens/Onboard/Onboard";
import AuthNavigator from "./Auth/AuthNavigator";
import CreateAccount from "../screens/Auth/SignUp/CreateAccount";
import TabNavigator from "./App/TabNavigator";
import AlbumScreen from "../screens/App/AlbumScreen";
import PlayerWidget from "../components/PlayerWidget/PlayerWidget";
import { auth } from "../firebase/config";
import Login from "../screens/Auth/Login/Login";
import { useNavigation } from "@react-navigation/native";
import PlayerScreen from "../screens/App/PlayerScreen";

export type RootStackParamList = {
  auth: undefined;
  albumScreen: undefined;
  onboard: undefined;
  tab: undefined;
  Player: undefined;
  Login: undefined;
  CreateAccount: undefined;
  MyModal: { userId: string; name: string };
};

const RootNavigator = () => {
  const RootStack = createNativeStackNavigator<RootStackParamList>();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const navigation = useNavigation();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user?.emailVerified) {
        setIsLoggedin(true);
      } else {
        setIsLoggedin(false);
      }
    });
    return unsubscribe;
  });

  return (
    <RootStack.Navigator>
      {isLoggedin ? (
        <RootStack.Group
          screenOptions={{
            headerShown: false,
          }}
        >
          <RootStack.Screen name="auth" component={AuthNavigator} />
        </RootStack.Group>
      ) : (
        <RootStack.Screen
          options={{
            headerShown: false,
          }}
          name="tab"
          component={TabNavigator}
        />
      )}
      <RootStack.Screen
        options={{ headerShown: false }}
        name="Player"
        component={PlayerScreen}
      />
      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="albumScreen"
        component={AlbumScreen}
      />

      <RootStack.Screen
        options={{
          headerShown: false,
        }}
        name="Login"
        component={Login}
      />
    </RootStack.Navigator>
  );
};
export default RootNavigator;
