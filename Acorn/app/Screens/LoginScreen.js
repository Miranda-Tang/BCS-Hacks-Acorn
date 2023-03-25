import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
// import HomeCalendarScreen from "./app/Screens/HomeCalendarScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function LoginScreen({navigation}) {
  const [username, onChangeUsername] = React.useState();
  const [password, onChangePassword] = React.useState()
  
  return (
    <View style={styles.container}>
    <Image
    source={require("../assets/acorn-logo-login.png")}
    style={styles.logo}
    />
    <Text style={styles.text}>acorn</Text>
    <TextInput
    style={styles.input}
    onChangeText={onChangeUsername}
    value={username}
    placeholder="Username"
    placeholderTextColor="#d3d3d3"
    
    />
    <TextInput
    style={styles.input}
    onChangeText={onChangePassword}
    value={password}
    secureTextEntry={true}
    placeholder="Password"
    placeholderTextColor="#d3d3d3"
    />
    <TouchableOpacity
    onPress={buttonClickedHandler}
    style={styles.submitButon}>
    <Text style={styles.submitButtonText}>
    Sign In
    </Text>
    </TouchableOpacity>      
    </View>
    );
  }
  
  const buttonClickedHandler = () => {
    navigation.navigate('HomeCalendarScreen')
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#f5f5f5",
      width: "100%",
      height: "100%",
      justifyContent: "center",
      alignItems: "center",
    },
    logo: {
      height: 120,
      width: 120,
    },
    text: {
      color: "#655DBB",
      fontWeight: "bold",
      fontSize: 27,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 40
    },
    submitButon: {
      marginTop: 20,
      width: 150,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 40,
      backgroundColor: '#655DBB',
    },
    submitButtonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: "#EEE4FF",   
    }
  });
  
  export default LoginScreen;
  