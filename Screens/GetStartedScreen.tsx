import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import GetStartedButton from '../components/Buttons/GetStartedButton';

const GetStartedScreen = () => {
    return (
        <BackgroundImage
            source={require('../assets/images/pizza.jpg')}
        >
            <View style={styles.bottomHalfContainer}>
                <Text style={styles.text}>Fast Track to Freshness</Text>
                <View style={{ height: 100 }} />
                <GetStartedButton onPress={() => console.log('Get Started')} />
            </View>
        </BackgroundImage>
    )
};

const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 40,
        fontFamily: 'Proxima Nova Bold',
        textAlign: 'center',
        marginBottom: 20, 
    },
    bottomHalfContainer: {
        width: '100%',
        height: '40%',
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.8)', 
        borderWidth: 1,
        position: 'absolute',
        bottom: 0, 
        borderTopLeftRadius: 20, 
        borderTopRightRadius: 20, 
    },
});

export default GetStartedScreen;
