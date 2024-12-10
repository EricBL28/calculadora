// src/components/Teclado.tsx
import React from 'react';
import { View } from 'react-native';
import { BotonOperacion } from './BotonOperacion';
import { GlobalStyles } from '../Themes/GlobalSyles';

interface TecladoProps {
  construirNumero: (num: string) => void;
  clean: () => void;
  cambiarSigno: () => void;
  borrarDigito: () => void;
  operacionDividir: () => void;
  operacionMultiplicar: () => void;
  operacionRestar: () => void;
  operacionSumar: () => void;
  resultado: () => void;
}

export const Teclado: React.FC<TecladoProps> = ({
  construirNumero, clean, cambiarSigno, borrarDigito, operacionDividir,
  operacionMultiplicar, operacionRestar, operacionSumar, resultado
}) => {
  const botones = [
    [
      { label: 'C', action: clean },
      { label: '+/-', action: cambiarSigno },
      { label: 'del', action: borrarDigito },
      { label: '/', action: operacionDividir },
    ],
    [
      { label: '7', action: () => construirNumero('7') },
      { label: '8', action: () => construirNumero('8') },
      { label: '9', action: () => construirNumero('9') },
      { label: 'x', action: operacionMultiplicar },
    ],
    [
      { label: '4', action: () => construirNumero('4') },
      { label: '5', action: () => construirNumero('5') },
      { label: '6', action: () => construirNumero('6') },
      { label: '-', action: operacionRestar },
    ],
    [
      { label: '1', action: () => construirNumero('1') },
      { label: '2', action: () => construirNumero('2') },
      { label: '3', action: () => construirNumero('3') },
      { label: '+', action: operacionSumar },
    ],
    [
      { label: '0', action: () => construirNumero('0'), width: 180 },
      { label: '.', action: () => construirNumero('.') },
      { label: '=', action: resultado },
    ],
  ];

  return (
    <>
      {botones.map((fila, index) => (
        <View key={index} style={GlobalStyles.fila}>
          {fila.map(({ label, action, width = 80 }) => (
            <BotonOperacion key={label} label={label} width={width} onPress={action} />
          ))}
        </View>
      ))}
    </>
  );
};
