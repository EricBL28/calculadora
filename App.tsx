import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { Pantalla } from './src/components/Pantalla';
import { BotonOperacion } from './src/components/BotonOperacion';
import { useCalculadora } from './src/hooks/useCalculadora';
import { GlobalStyles } from './src/Themes/GlobalSyles';

interface Props {
  color: 'operacion' | 'numero' | 'otro';
}

export default function App() {
  const {
    formula, numeroAnterior, construirNumero, clean,
    cambiarSigno,
    borrarDigito,
    operacionDividir,
    operacionMultiplicar,
    operacionRestar,
    operacionSumar,
    resultado,
  } = useCalculadora();

  const botones: Array<Array<{ label: string; color: Props['color']; onPress: () => void; width?: number }>> = [
    [
      { label: 'C', color: 'otro', onPress: clean },
      { label: '+/-', color: 'otro', onPress: cambiarSigno },
      { label: 'del', color: 'otro', onPress: borrarDigito },
      { label: '/', color: 'operacion', onPress: operacionDividir },
    ],
    [
      { label: '7', color: 'numero', onPress: () => construirNumero('7') },
      { label: '8', color: 'numero', onPress: () => construirNumero('8') },
      { label: '9', color: 'numero', onPress: () => construirNumero('9') },
      { label: 'x', color: 'operacion', onPress: operacionMultiplicar },
    ],
    [
      { label: '4', color: 'numero', onPress: () => construirNumero('4') },
      { label: '5', color: 'numero', onPress: () => construirNumero('5') },
      { label: '6', color: 'numero', onPress: () => construirNumero('6') },
      { label: '-', color: 'operacion', onPress: operacionRestar },
    ],
    [
      { label: '1', color: 'numero', onPress: () => construirNumero('1') },
      { label: '2', color: 'numero', onPress: () => construirNumero('2') },
      { label: '3', color: 'numero', onPress: () => construirNumero('3') },
      { label: '+', color: 'operacion', onPress: operacionSumar },
    ],
    [
      { label: '0', color: 'numero', width: 180, onPress: () => construirNumero('0') },
      { label: '.', color: 'numero', onPress: () => construirNumero('.') },
      { label: '=', color: 'operacion', onPress: resultado },
    ],
  ];

  return (
    <View style={GlobalStyles.container}>
      <Pantalla tamanio="grande" numberOfLines={1} adjustsFontSizeToFit>
        {formula}
      </Pantalla>
      <Pantalla tamanio="peque" numberOfLines={1} adjustsFontSizeToFit>
        {formula === numeroAnterior ? '' : numeroAnterior}
      </Pantalla>
      <StatusBar style="auto" />

      {botones.map((fila, index) => (
        <View key={index} style={GlobalStyles.fila}>
          {fila.map(({ label, color, onPress, width = 80 }) => (
            <BotonOperacion key={label} label={label} color={color} onPress={onPress} width={width} />
          ))}
        </View>
      ))}
    </View>
  );
}
