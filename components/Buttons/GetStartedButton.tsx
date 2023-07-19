import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';


interface GetStartedButtonProps {
    onPress: () => void;
}

/**
 * A button that says "Get Started" and takes the user to the next screen
 * @param props
 * @param props.onPress - Function to call when the button is pressed
 * @returns A button that says "Get Started" and takes the user to the next screen
 */
const GetStartedButton: React.FC<GetStartedButtonProps> = ({ onPress }) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.buttonText}>Get Started</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        backgroundColor: '#28a745',
        paddingHorizontal: 120,
        paddingVertical: 20,
        position: 'absolute',
        bottom: 30,
        elevation: 3,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        borderWidth: 1,
        borderColor: '#28a7b0',
        
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'Proxima Nova Reg',
        textAlign: 'center',
    },
});

export default GetStartedButton;