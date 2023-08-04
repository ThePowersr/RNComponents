import { Theme } from "@react-navigation/native"

type ThemeAction =
    | { type: 'set_light_theme' }
    | { type: 'set_dark_theme' }

export interface ThemeState extends Theme {
    currentTheme: 'ligth' | 'dark',
    dividerColor: string;
}

export const lightTheme: ThemeState = {
    currentTheme: 'ligth',
    dark: false,
    dividerColor: 'rgba(0,0,0,0.6)',
    colors: {
        primary: 'red',
        background: '#f2f2f2',
        card: 'green',
        text: 'black',
        border: 'black',
        notification: 'teal',
    },
}

export const darkTheme: ThemeState = {
    currentTheme: 'ligth',
    dark: true,
    dividerColor: 'rgba(255,255,255,0.8)',
    colors: {
        primary: '#084F6A',
        background: 'black',
        card: 'green',
        text: 'white',
        border: 'black',
        notification: 'teal',
    },
}

export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
    switch (action.type) {
        case 'set_light_theme':
            return { ...lightTheme }
        case 'set_dark_theme':
            return { ...darkTheme }
        default:
            return state;
    }
}