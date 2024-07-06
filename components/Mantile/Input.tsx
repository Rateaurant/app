import { Text, TextInput } from "react-native"
import { ComponentProps, FunctionComponent, ReactNode, useState } from "react";
import { useThemeColor } from "@/hooks/useThemeColor";

type Prop = ComponentProps<typeof TextInput> & {
};
const Input: FunctionComponent<Prop> = ({ style, onFocus, onBlur, ...rest }) => {
    const colors = [
        useThemeColor('dark'),
        useThemeColor('primary')
    ];
    const [colorIndex, setColorIndex] = useState(0);
    return <TextInput
        style={[{
            backgroundColor: useThemeColor('whiteDark'),
            padding: 15,
            outlineStyle: "none",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderBottomColor: colors[colorIndex],
            borderBottomWidth: 2,

            fontFamily: 'BalooBhai2',
        }]}
        onFocus={(e) => {
            setColorIndex(1);
            if (onFocus) {
                onFocus(e);
            }
        }}
        // https://stackoverflow.com/questions/37542422/opposite-of-onfocus-in-react
        onBlur={(e) => {
            setColorIndex(0)
            if (onBlur) {
                onBlur(e);
            }
        }}
        {...rest}
    />
}

export default Input;