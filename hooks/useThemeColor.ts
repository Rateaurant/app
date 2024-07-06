import { useColorScheme } from 'react-native';
import { Color, Colors } from '@/constants/Colors';

export function useThemeColor(
    colorName: keyof Color
) {
    const theme = useColorScheme() ?? 'light';
    return Colors[theme][colorName];
}
