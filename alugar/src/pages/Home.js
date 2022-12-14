import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

import New from '../components/New';
import House from '../components/House';
import Recomendados from '../components/Recomendados';

export default function Home() {
  const navigation = useNavigation();

 return (
   <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#FFF'}}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather name='search' size={24} color='black'/>
          <TextInput placeholder='O que está procurando?' style={styles.input} />
        </View>
      </View>
      <View style={styles.contentNew}>
        <Text style={styles.title}>Novidades</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, }}>
        <New cover={require('../assets/house1.jpg')} name="Casa de Praia" description="Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas." onPress={() => navigation.navigate('detail')}/>

        <New cover={require('../assets/house2.jpg')} name="Casa Floripa" description="Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas." onPress={() => navigation.navigate('detail')}/>

        <New cover={require('../assets/house3.jpg')} name="Rancho SP" description="Casa nova uma quadra do mar, lugar seguro e monitorado 24 horas." onPress={() => navigation.navigate('detail')}/>
      </ScrollView>

      <View style={{flexDirection: 'row', marginBottom:10, alignItems: 'center'}}>
        <Text style={[styles.title, {marginTop: 20}]}>Próximo de você</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15, }}>
        <House cover={require('../assets/house4.jpg')}/>
        <House cover={require('../assets/house5.jpg')}/>
        <House cover={require('../assets/house6.jpg')}/>
      </ScrollView>

      <Text style={[styles.title, {marginTop: 20}]}>
        Dica do dia
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <Recomendados cover={require('../assets/house1.jpg')} house="Casa Floripa" offer="20%"/>
        <Recomendados cover={require('../assets/house2.jpg')} house="Casa São Paulo" offer="10%"/>
        <Recomendados cover={require('../assets/house6.jpg')} house="Rancho Praia" offer="15%"/>
      </ScrollView>
   </ScrollView>
  );
}

const styles = StyleSheet.create({
  header:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginVertical: 20,
  },
  inputArea:{
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FFF',
    paddingHorizontal: 10,
    height: 37,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  input:{
    fontFamily: 'Montserrat_500Medium',
    paddingHorizontal: 10,
    fontSize: 13,
    width: '90%',
  },
  contentNew:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
  },
  title:{
    paddingHorizontal: 15,
    fontFamily: 'Montserrat_700Bold',
    fontSize: 18,
    color: '#4f4a4a',
  }
})