import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';

export default function Recomendados(props) {
 return (
    <ImageBackground source={props.cover} style={styles.container} blurRadius={4}>
        <Text style={[styles.house, styles.shadow]}>
           {props.house}
        </Text>
        <Text style={[styles.description , styles.shadow]}>
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
        marginBottom: 40,
        backgroundColor: 'black',
        marginLeft: 3,
        padding: 12,
        marginTop: 20,
    },
    house:{
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
        fontSize: 15,
    },
    description:{
        fontFamily: 'Montserrat_700Bold',
        color: '#FFF',
    },
    shadow:{
        textShadowOffset: {width: 1, height: 1},
        textShadowRadius: 3,
        textShadowColor: '#000',
    }
})