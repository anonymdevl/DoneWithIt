import React from 'react';
import { ImageBackground, StyleSheet, View, Image, Text } from 'react-native';
import AppButton from "../components/AppButton";

//const image = { uri: "https://reactjs.org/logo-og.png" };

function WelcomeScreen(props) {
    return (
        <ImageBackground 
        blurRadius={10}
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text style={styles.tagline}>Sell What You Don't Need!</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title="Login"></AppButton>
                <AppButton title="Register" color='secondary'></AppButton>
            </View>
        </ImageBackground> 
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end', 
        alignItems: 'center',
    },

    buttonsContainer: {
        padding: 20,
        width: '100%',
    },

    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    },

    logo: {
        width: 100,
        height: 100,
    },
    
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',   
    },

})

export default WelcomeScreen;