import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_400Medium, Montserrat_700Bold} from '@expo-google-fonts/montserrat'

import GeneralStatusBarColor from './src/components/GeneralStatusBarColor';

import Rotas from './src/rotas';

export default function App() {
  let [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_400Medium, Montserrat_700Bold
  });



  return (
    <>
      <GeneralStatusBarColor backgroundColor="#000" barStyle="light-content"/>
      <Rotas />
    </>
  );
}


