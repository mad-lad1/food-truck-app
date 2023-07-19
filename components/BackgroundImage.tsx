import React, { ReactNode } from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';

type BackgroundImageProps = {
    source: any,
    children?: ReactNode
}

/**
 * @param source: Image source
 * @param children: Children components
 * @returns BackgroundImage component
 * @description Component that renders a background image with an overlay
 */
const BackgroundImage: React.FC<BackgroundImageProps> = ({ source, children }) => {
    return (
        <View style={styles.container}>
            <ImageBackground source={source} style={styles.backgroundImage}>
            </ImageBackground>
            <View style={styles.overlay}>
                {children}
            </View>
        </View>
    );
};

export default BackgroundImage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"
    },
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)', 
        justifyContent: "center",
        alignItems: "center"
    },
});
