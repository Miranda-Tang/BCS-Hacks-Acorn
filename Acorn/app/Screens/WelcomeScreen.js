import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text} from "react-native";

function WelcomeScreen() {
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
        backgroundColor: '#655DBB',
      },
      loginButtonText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: "#EEE4FF",        
      }
  })

  const buttonClickedHandler = () => {

  }

export default WelcomeScreen;