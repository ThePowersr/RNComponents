import 'react-native-gesture-handler';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import React, { useContext } from 'react';
import { Navigator } from './src/navigator/Navigator';
import styles from './src/theme/appTheme';
import { ThemeContext, ThemeProvider } from './src/context/themeContext/ThemeContext';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'react-native';

// const customTheme: Theme = {
// 	dark: true,
// 	colors: {
// 		...DefaultTheme.colors
// 		// primary: string;
// 		// background: string;
// 		// card: string;
// 		// text: string;
// 		// border: string;
// 		// notification: string;
// 	}
// }

const App = () => {

	return (
		<ThemeProvider>
			<Navigator />
		</ThemeProvider>
	)
}

export default App
