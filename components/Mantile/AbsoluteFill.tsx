import { View } from "react-native"
import { FunctionComponent, ReactNode } from "react";

type Prop = {
    children: ReactNode
};
const AbsoluteFill: FunctionComponent<Prop> = ({ children }) => {
    return <View style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }}>{children}</View>
}

export default AbsoluteFill;