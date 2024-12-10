import { Text, type TextProps, StyleSheet } from 'react-native';
import { GlobalStyles } from '../Themes/GlobalSyles';

interface Props extends TextProps {
  tamanio: 'grande' | 'peque';
};

export const Pantalla = ({children,tamanio, ...rest}:Props) => {
  return (
    <Text style={tamanio === 'grande' ? GlobalStyles.pantallaPrincipal : GlobalStyles.pantallaSecundaria} 
        {...rest}>
      {children}
    </Text>
  )
}  