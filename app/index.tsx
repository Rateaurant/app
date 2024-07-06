import { NavigationContext } from "@/constants/Context"
import { useThemeColor } from "@/hooks/useThemeColor"
import { useContext, useEffect } from "react"
import { Image, ImageBackground, TouchableOpacity, View } from "react-native"
import { Text } from "@/components/Mantile"
import { Logger } from "@/scripts/logger"

export default function Index() {
    Logger.info("Index: Call")
    useEffect(() => {
        Logger.info("Index: Load")
    }, [])

    const { get: _, set: setCurrentScreen } = useContext(NavigationContext);

    return (
        <ImageBackground
            source={require('@/assets/LandingBackgroundArt.png')}
            resizeMode="repeat"
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Image
                source={require('@/assets/LogoHorizontal.png')}
                style={{ marginBottom: 40 }}
            />
            <View style={{
                borderRadius: 15,
                backgroundColor: useThemeColor('whiteHalf'),
                padding: 20,
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",
                shadowColor: useThemeColor('dark'),
                shadowOpacity: 0.25,
                shadowRadius: 15,
            }}>
                <Text style={{
                    color: useThemeColor('primary'),
                    fontSize: 80,
                    fontWeight: 600,
                    textAlign: "center",
                }}>Manage</Text>
                <Text style={{
                    color: useThemeColor('dark'),
                    fontSize: 30,
                    fontWeight: 600,
                    marginBottom: 10,
                    textAlign: "center",
                }}>your restaruant</Text>
                <Text style={{
                    color: useThemeColor('dark'),
                    fontSize: 16,
                    marginBottom: 50,
                    width: "70%",
                    textAlign: "center",
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt velit eros, eu elementum enim tempus nec. Integer arcu augue</Text>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentScreen(1);
                    }}
                    style={{
                        backgroundColor: useThemeColor('primary'),
                    }}
                ><Text style={{
                    color: useThemeColor('whiteFull'),
                    fontSize: 25,
                    padding: 10,
                    paddingTop: 5,
                    paddingBottom: 5,
                    textAlign: "center",
                }}>Get Started</Text></TouchableOpacity>
            </View>
        </ImageBackground>
    )
}