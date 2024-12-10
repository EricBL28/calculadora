import { Pressable, Text ,TextProps} from "react-native";
import { GlobalStyles } from "../Themes/GlobalSyles";
import * as Haptics from 'expo-haptics'

interface Props {
    label: string,
    width?: number,
    onPress?: () => void;
}
interface Props extends TextProps{color: 'operacion' | 'numero' | 'otro'}

export const BotonOperacion = ({label, width=80,color, onPress}:Props) => {
    const accion = (() => {
        if (onPress) onPress()
        Haptics.selectionAsync();

      })
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width},color === 'operacion' ?GlobalStyles.BotonOperacion:null, color ==='numero' ?GlobalStyles.botonNumero:null, color === 'otro' ?GlobalStyles.BotonOtro:null

                ]}
                onPress={onPress}>{label}
                
            </Text>
        </Pressable>
    )
};
;