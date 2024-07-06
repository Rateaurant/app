import { View, Text, Image, TouchableOpacity } from "react-native"
import { FunctionComponent, useContext } from "react";
import { MenuProp } from "./props";
import { useThemeColor } from "@/hooks/useThemeColor";
import { NavigationContext } from "../Navigation";

const BottomBar: FunctionComponent<MenuProp> = ({ names, icons }) => {
    const { currentScreen: _, setCurrentScreen } = useContext(NavigationContext);
    const whiteHalf = useThemeColor('whiteHalf');
    const dim = 32;
    return <View style={{
        position: "absolute",
        bottom: 0,
        height: "10%",
        width: "100%",
        flex: 1,
        flexDirection: "row"
    }}>{icons.map((icon, index) => (
        <TouchableOpacity
            onPress={() => {
                setCurrentScreen(index)
            }}
            key={index}
            style={{
                backgroundColor: whiteHalf,
                flex: 1,
                gap: 10,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}
        >
            <Image source={icon} style={{ width: dim, height: dim, alignSelf: 'center' }} />
            <Text style={{ fontSize: 16, fontWeight: 600 }}>{names[index]}</Text>
        </TouchableOpacity>
    ))}</View>
}

export default BottomBar;