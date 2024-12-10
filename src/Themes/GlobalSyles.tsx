import { StyleSheet } from "react-native";
import { Color } from "./Colors";
import { Tamanio } from "./Tamanios";


export const GlobalStyles = StyleSheet.create({
    pantallaPrincipal: {
        fontSize: Tamanio.pantallaPrincipalFontSize,
        textAlign: 'right',
        width: Tamanio.pantallaPrinciapalWidth,
    },
    pantallaSecundaria: {
        fontSize: Tamanio.pantallaSecundariaFontSize,
        textAlign: 'right',
        width: Tamanio.pantallaSecundariaWidth,
    },
    boton: {
        width:Tamanio.botonWidth,
        textAlign: 'center',
        padding: Tamanio.botonPadding,
        fontSize: Tamanio.botonFontSize,
        fontWeight: Tamanio.botonFontWeigth,
        borderColor: Color.bordeColor,
        borderWidth: Tamanio.botonBorderWidth,
        borderRadius:Tamanio.botonRadius,
    },
    container: {
        flex: 1,
        backgroundColor: Color.fondo,
        alignItems:  'center',
        justifyContent: 'flex-end',
        paddingBottom:20,
    },
    fila: {
        flexDirection: 'row',
        justifyContent: "space-around",
        marginBottom:Tamanio.filaMarginBottom,
        paddingHorizontal:10,
        width: '100%',
    },
    textoBoton: { 
        color: '#FFFFFF', 
        fontSize: 18, 
    },
    resultado: {
        fontSize: 48, 
        marginBottom: 20, 
    },
    botonNumero: {
        backgroundColor:Color.colorBotonNumero,
    },
    BotonOperacion:{
        backgroundColor:Color.colorBotonOperacion,
    },
    BotonOtro:{
        backgroundColor:Color.colorBotonOtro,
    },
  });
  