import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native';

interface FooterProps {
    title: string;
  }
  

  const FooterComponent : React.FC<FooterProps> = ({title}) => {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
};

const styles = StyleSheet.create({
    header: {
      height: 60,
      width: '100%',
      padding: 15,
      position: 'absolute',
      bottom: 0,
      backgroundColor: 'orange',
    },
    title: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
    },
  });

  export default FooterComponent;