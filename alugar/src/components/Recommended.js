import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recommended(props) {
 return (
    <ImageBackground source={props.cover} style={styles.container} blurRadius={2}>
        <Text style={styles.house}>
           {props.house}
        </Text>
        <Text style={styles.description}>
            {props.offer}
        </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    container:{
        height: 130,
        width: 230,
        marginRight: 20,
        borderRadius: 10,
        marginBottom: 40,
        opacity: 0.8,
        backgroundColor: 'black',
        marginLeft: 3,
        padding: 12,
        marginTop: 20,
    },
    house:{
        fontFamily: 'Montserrat_700Bold',

    }
})