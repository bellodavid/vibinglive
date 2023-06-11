import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon, Input } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth, db } from "../../../firebase/config";
import { pallets } from "../../../constant";
import Button from "../../../components/Form/Button";
import PasswordField from "../../../components/Form/PasswordField";
import Information from "../../../components/Form/Information";
import { addDoc, collection,  doc, setDoc } from "firebase/firestore";
const SignUp = () => {
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
    error: "",
  });

  const [password, setPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const [isLoading, setIsLoading] = useState(false);

  const navigation = useNavigation();

  const togglePasswordVisibility = () => {
    setPassword((prevState) => ({
      ...prevState,
      password: !prevState.password,
    }));
  };

  const toggleConfirmPasswordVisibility = () => {
    setPassword((prevState) => ({
      ...prevState,
      confirmPassword: !prevState.confirmPassword,
    }));
  };
 
  const handleSignUp = async () => {
    if (value.email === "" || value.password === "") {
      setValue({
        ...value,
        error: "Fill in all details correctly",
      });
      return;
    }

    if (value.password !== value.confirmPass) {
      setValue({
        ...value,
        error: "Passwords do not match",
      });
      return;
    }

    try {
      setIsLoading(true);
      const { user } = await createUserWithEmailAndPassword(
        auth,
        value.email,
        value.password
      );

      // Check if the user's email is verified
      if (!user.emailVerified) {

        await sendEmailVerification(user);
        navigation.navigate("Login");
      } else {
        // User's email is verified, navigate to login screen
        navigation.navigate("Login");
      }
    } catch (error) {
      setValue({
        ...value,
        error: error.message,
      });
      try {
        const docRef = await addDoc(collection(db, "users"),{
          displayName: value.name,
        });
        console.log("written", docRef.id)
      }catch (err) {
        console.error("Error adding document: ", e);
      }
    }

  
  };

  const signIn = () => {
    navigation.navigate("Login");
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity>
          <Icon
            type="antdesign"
            name="left"
            size={30}
            color="white"
            containerStyle={{
              alignItems: "baseline",
              marginTop: 30,
              marginLeft: 10,
            }}
            onPress={navigation.goBack}
          />
        </TouchableOpacity>

        <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
          <Information
            title="Sign Up"
            description="Welcome to VibingLIVE, which will accompany your mood for mix. Let's create an account now"
            step=""
          />

          <Text style={{ fontSize: 11, color: "red" }}>
            {value.error.includes("Firebase:")
              ? value.error.replace("Firebase:", "")
              : value.error}
          </Text>

          {/* <Input
            inputStyle={{ color: "white", paddingLeft: 10 }}
            inputContainerStyle={{
              borderWidth: 0,
              borderBottomWidth: 0,
              paddingLeft: 10,
              padding: 5,
              backgroundColor: pallets.input,
              borderColor: "white",
              borderRadius: 10,
            }}
            containerStyle={{ margin: 0 }}
            placeholder="Enter your name"
            leftIcon={{
              type: "Ionicons",
              name: "person-outline",
              color: pallets.darkGrey,
            }}
            onChangeText={(text) => setValue({ ...value, name: text })}
            label="Name"
            labelStyle={{ color: pallets.grey, paddingBottom: 10 }}
          /> */}

          <Input
            inputStyle={{ color: "white", paddingLeft: 10 }}
            inputContainerStyle={{
              borderWidth: 0,
              borderBottomWidth: 0,
              paddingLeft: 10,
              padding: 5,
              backgroundColor: pallets.input,
              borderColor: "white",
              borderRadius: 10,
            }}
            containerStyle={{ margin: 0 }}
            placeholder="Enter your email address"
            leftIcon={{
              type: "antdesign",
              name: "mail",
              color: pallets.darkGrey,
            }}
            onChangeText={(text) => setValue({ ...value, email: text })}
            label="Email Address"
            labelStyle={{ color: pallets.grey, paddingBottom: 10 }}
          />

          <PasswordField
            placeholder="Enter password"
            label="Password"
            leftIcon="lock"
            rightIcon={password.password ? "eye" : "eye-off"}
            handler={value.password}
            visibility={togglePasswordVisibility}
            setHandler={(text) => setValue({ ...value, password: text })}
            instruction="Minimum of 6 letters including numbers"
            secure={password.password ? true : false}
          />

          <Text style={{ marginLeft: 10, fontSize: 10, color: "red" }}>
            {value.password !== value.confirmPass
              ? "Password does not match"
              : null}
          </Text>
          <PasswordField
            label="Confirm Password"
            placeholder="Confirm your password"
            leftIcon="lock"
            rightIcon={password.confirmPassword ? "eye" : "eye-off"}
            visibility={toggleConfirmPasswordVisibility}
            handler={value.confirmPass}
            setHandler={(text) => setValue({ ...value, confirmPass: text })}
            instruction="Minimum of 6 letters including numbers"
            secure={password.confirmPassword ? true : false}
          />
          <Button
            pressIn={signIn}
            call="Sign in"
            description="You have an account?"
            onPress={handleSignUp}
            action="Create Account"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    width: "100%",
    backgroundColor: pallets.backgroundDarker,
  },
});
