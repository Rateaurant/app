import { NavigationContext, StoreContext } from "@/constants/Context"
import { useThemeColor } from "@/hooks/useThemeColor";
import { useContext, useEffect } from "react";
import { ImageBackground, TouchableOpacity, View, Image } from "react-native";
import { Text } from "@/components/Mantile";
import Input from "@/components/Mantile/Input";
import { Logger } from "@/scripts/logger";

export default () => {
    Logger.info("Signup: Call")
    useEffect(() => {
        Logger.info("Signup: Load")
    }, [])

    const { get: _, set: setCurrentScreen } = useContext(NavigationContext);
    const { email, password, username } = useContext(StoreContext);
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
                source={require('@/assets/LogoVertical.png')}
                style={{ marginBottom: 80 }}
            />
            <View style={{
                borderRadius: 15,
                backgroundColor: useThemeColor('whiteHalf'),
                padding: 20,
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
                alignItems: "center",
                gap: 20,
                shadowColor: useThemeColor('dark'),
                shadowOpacity: 0.25,
                shadowRadius: 15,
            }}>
                <Text style={{
                    color: useThemeColor('primary'),
                    fontSize: 60,
                    fontWeight: 600,
                    textAlign: "center",
                }}>Sign Up</Text>
                <Input placeholder="Email" onChangeText={(text) => email.set(text)} />
                <Input placeholder="Password" onChangeText={(text) => password.set(text)} />
                <Input placeholder="Username" onChangeText={(text) => username.set(text)} />
                <TouchableOpacity onPress={() => setCurrentScreen(2)}>
                    <Text style={{
                        color: useThemeColor('primary'),
                        fontSize: 15,
                    }}>Already have an account?</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => {
                        setCurrentScreen(3);
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
                    paddingLeft: 40,
                    paddingRight: 40,
                }}>Sign Up</Text></TouchableOpacity>
            </View>
        </ImageBackground>
    )
}