import { Text } from "react-native"
import { ComponentProps, FunctionComponent, ReactNode } from "react";

type Prop = ComponentProps<typeof Text> & {
    children: ReactNode
};
const TextComponent: FunctionComponent<Prop> = ({ children, style, ...rest }) => {
    return <Text {...rest} style={[{
        fontFamily: 'BalooBhai2',
    }, style]}>{children}</Text>
}

export default TextComponent;