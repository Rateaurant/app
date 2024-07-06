import { createContext, Dispatch, FunctionComponent, ReactNode, SetStateAction, useState } from "react";
import { MenuProp } from "./menus/props";
import { ImageSourcePropType } from "react-native";
import { NavigationContext } from "@/constants/Context";

type Screen = {
    name: string;
    component: ReactNode;
}
type Prop = {
    NavigationMenu?: { component: FunctionComponent<MenuProp>, icons: ImageSourcePropType[] };
    screens: Screen[];
};
const Navigation: FunctionComponent<Prop> = ({ NavigationMenu, screens }) => {
    const [currentScreen, setCurrentScreen] = useState(0);
    return <NavigationContext.Provider value={{ get: currentScreen, set: setCurrentScreen }}>
        {NavigationMenu ? <NavigationMenu.component
            icons={NavigationMenu.icons}
            names={screens.map((screen) => screen.name)}
        /> : <></>}
        {screens.find((_, index) => index == currentScreen)?.component}
    </NavigationContext.Provider>
}

export default Navigation;