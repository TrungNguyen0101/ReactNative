//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Button = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Button Submit</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
        borderRadius:2,
        padding:10,
        marginTop:20,
    },
    text:{
        fontSize:20,
        color:"white"   
    }
});

//make this component available to the app
export default Button;
