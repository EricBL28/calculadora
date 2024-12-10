import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/Themes/GlobalSyles';

export default function App() {

  const { formula, numeroAnterior, construirNumero, clean, cambiarSigno, borrarDigito,
    operacionDividir, operacionMultiplicar, operacionRestar, operacionSumar, resultado } = useCalculadora();

  return (

    <View style={GlobalStyles.container}>
      <Pantalla tamanio = 'grande' numberOfLines={1} adjustsFontSizeToFit>{formula}</Pantalla>

      {formula === numeroAnterior ? (
        <Pantalla tamanio = 'peque' numberOfLines={1} adjustsFontSizeToFit></Pantalla>
      ) : (
        <Pantalla tamanio = 'peque' numberOfLines={1} adjustsFontSizeToFit>{numeroAnterior}</Pantalla>
      )}
      
      <StatusBar style="auto" />

      <View style={GlobalStyles.fila}>
        <BotonOperacion label='C' color = 'otro' onPress={clean}></BotonOperacion>
        <BotonOperacion label='+/-' color ='otro' onPress={cambiarSigno}></BotonOperacion>
        <BotonOperacion label='del' color = 'otro' onPress={borrarDigito}></BotonOperacion>
        <BotonOperacion label='/' color ='operacion' onPress={operacionDividir}></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='7' color ='numero' onPress={() => construirNumero('7')}></BotonOperacion>
        <BotonOperacion label='8' color ='numero' onPress={() => construirNumero('8')}></BotonOperacion>
        <BotonOperacion label='9' color ='numero' onPress={() => construirNumero('9')}></BotonOperacion>
        <BotonOperacion label='x' color ='operacion' onPress={operacionMultiplicar}></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='4' color ='numero' onPress={() => construirNumero('4')}></BotonOperacion>
        <BotonOperacion label='5' color ='numero' onPress={() => construirNumero('5')}></BotonOperacion>
        <BotonOperacion label='6' color ='numero' onPress={() => construirNumero('6')}></BotonOperacion>
        <BotonOperacion label='-' color ='operacion' onPress={operacionRestar}></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='1' color ='numero' onPress={() => construirNumero('1')}></BotonOperacion>
        <BotonOperacion label='2' color ='numero' onPress={() => construirNumero('2')}></BotonOperacion>
        <BotonOperacion label='3' color ='numero' onPress={() => construirNumero('3')}></BotonOperacion>
        <BotonOperacion label='+' color ='operacion' onPress={operacionSumar}></BotonOperacion>
      </View>
      <View style={GlobalStyles.fila}>
        <BotonOperacion label='0' width={180}  color ='numero' onPress={() => construirNumero('0')}></BotonOperacion>
        <BotonOperacion label='.' color ='numero' onPress={() => construirNumero('.')}></BotonOperacion>
        <BotonOperacion label='=' color ='operacion' onPress={resultado}></BotonOperacion>
      </View>
    </View>


  );
}
;
