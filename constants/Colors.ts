/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

export type Color = {
    primary: string;
    whiteFull: string;
    whiteHalf: string;
    whiteDark: string;
    dark: string;
}

export const Colors: { light: Color, dark: Color } = {
    light: {
        primary: '#f08000',
        whiteFull: '#ffffff',
        whiteHalf: '#f9f9f9',
        whiteDark: '#e6e6e6',
        dark: '#000000'
    },
    dark: {
        //todo maybe
        primary: '#f08000',
        whiteFull: '#ffffff',
        whiteHalf: '#f9f9f9',
        whiteDark: '#e6e6e6',
        dark: '#000000'
    },
};
