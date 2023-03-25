import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";

function WelcomeScreen({navigation}) {
    return (
        <View style={styles.container}>
        <Image 
        source={require('../assets/acorn-logo.png')} 
        style={styles.logo}
        />
        <TouchableOpacity
        onPress={buttonClickedHandler}
        style={styles.loginButton}>
        <Text style={styles.loginButtonText}>
        Sign In
        </Text>
        </TouchableOpacity>
        </View>
        );
    }
    
    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#EEE4FF',
            width: "100%",
            height: "100%"
        },
        logo: {
            width: 100,
            height: 130,
        },
        loginButton: {
            marginTop: 20,
            width: 150,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 40,
            backgroundColor: '#bface2',
        },
        loginButtonText: {
            fontWeight: 'bold',
            fontSize: 16,
            color: "#EEE4FF",        
        }
    })
    
    const buttonClickedHandler = () => {
        console.log("clicked");
        navigation.navigate('LoginScreen')
    }
    
    export default WelcomeScreen;