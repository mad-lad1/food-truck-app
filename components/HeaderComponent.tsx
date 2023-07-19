
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { Dimensions } from 'react-native';


interface HeaderProps {
    title: string;
  }
  

const HeaderComponent : React.FC<HeaderProps> = ({title}) => {
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
      top: 0,
      backgroundColor: 'blue',
    },
    title: {
      fontFamily: 'Proxima Nova Bold It',
      textAlign: 'center',
      color: '#fff',
      fontSize: 20,
    },
  });

export default HeaderComponent;
// packages that have nice headers