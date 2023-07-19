import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import BackgroundImage from '../components/BackgroundImage';
import { TouchableOpacity } from 'react-native';
import BackButton from '../components/Buttons/Backbutton';
/**
 * @description Authentication screen
 * this will be used to login and register users
 * @returns {JSX.Element}
 * @example <AuthScreen />
 */
const AuthScreen = () => {
    
    return (
        <BackgroundImage
            source={require('../assets/images/pizza.jpg')}
        >
            
            <BackButton iconName='arrow-back' />
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor={'#888'}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    placeholderTextColor={'#888'}
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.dontHaveAccount}>
                <Text style={styles.dontHaveAccountText}>
                    Don't have an account?
                </Text>
                <TouchableOpacity>
                    <Text style={styles.registerText}>Create One</Text>
                </TouchableOpacity>
            </View>

        </BackgroundImage>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        borderRadius: 30,
        width: '80%',
        padding: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 10,
        paddingLeft: 10,
        backgroundColor: 'white'
    },
    button: {
        backgroundColor: '#f4511e',
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fonttFamily: 'Proxima Nova Bold'
    },
    dontHaveAccount: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        position: 'absolute',
        bottom: 20
    },
    dontHaveAccountText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Proxima Nova Bold'
    },
    registerText: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Proxima Nova Bold',
        marginLeft: 10
    }
});

export default AuthScreen;
