import { Pressable, Text, StyleSheet } from "react-native";
import { GlobalStyles } from "../Themes/GlobalSyles";

interface Props {
    label: string,
    width: number,
    onPress?: () => void;
}

export const BotonOperacion = ({label, width, onPress}:Props) => {
    return (
        <Pressable>
            <Text 
                style={[GlobalStyles.boton, {width}]}
                onPress={onPress}>{label}</Text>
        </Pressable>
    )
};
;