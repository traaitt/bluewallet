import { DarkTheme, DefaultTheme, useTheme as useThemeBase } from '@react-navigation/native';
import { Appearance } from 'react-native';

export const BlueDefaultTheme = {
  ...DefaultTheme,
  closeImage: require('../img/close.png'),
  barStyle: 'dark-content',
  scanImage: require('../img/scan.png'),
  colors: {
    ...DefaultTheme.colors,
    borderWidth: 0.5,
    brandingColor: '#E0E0E0', // Light gray for branding to stand out
    customHeader: '#212121', // Slightly lighter than base for header distinction
    foregroundColor: '#E0E0E0', // Light gray for primary text
    borderTopColor: 'rgba(255, 255, 255, 0.1)', // Subtle white for borders
    buttonBackgroundColor: '#2A2A2A', // Dark gray for buttons
    buttonTextColor: '#E0E0E0', // Light gray for button text
    secondButtonTextColor: '#B0B0B0', // Medium gray for secondary button text
    buttonAlternativeTextColor: '#4A90E2', // Blue for alternative button text
    buttonDisabledBackgroundColor: '#333333', // Darker gray for disabled buttons
    buttonDisabledTextColor: '#666666', // Muted gray for disabled text
    inputBorderColor: '#424242', // Dark gray for input borders
    inputBackgroundColor: '#212121', // Slightly lighter than base for inputs
    alternativeTextColor: '#B0B0B0', // Medium gray for alternative text
    alternativeTextColor2: '#4A90E2', // Blue for secondary alternative text
    buttonBlueBackgroundColor: '#4A90E2', // Blue for blue buttons
    buttonGrayBackgroundColor: '#333333', // Dark gray for gray buttons
    incomingBackgroundColor: '#263238', // Dark teal for incoming messages
    incomingForegroundColor: '#4CAF50', // Green for incoming text
    outgoingBackgroundColor: '#37474F', // Dark gray-blue for outgoing messages
    outgoingForegroundColor: '#EF5350', // Red for outgoing text
    successColor: '#4CAF50', // Green for success
    failedColor: '#EF5350', // Red for errors
    placeholderTextColor: '#757575', // Medium gray for placeholders
    shadowColor: '#000000', // Black for shadows
    inverseForegroundColor: '#191919', // Base color for inverse text
    hdborderColor: '#4A90E2', // Blue for HD borders
    hdbackgroundColor: '#263238', // Dark teal for HD background
    lnborderColor: '#FFB300', // Amber for LN borders
    lnbackgroundColor: '#3E2723', // Dark amber for LN background
    background: '#191919', // Base dark theme color
    lightButton: '#333333', // Dark gray for light buttons
    ballReceive: '#263238', // Dark teal for receive balls
    ballOutgoing: '#37474F', // Dark gray-blue for outgoing balls
    lightBorder: '#424242', // Dark gray for light borders
    ballOutgoingExpired: '#333333', // Dark gray for expired balls
    modal: '#212121', // Slightly lighter than base for modals
    formBorder: '#424242', // Dark gray for form borders
    modalButton: '#db9ffd', // Blue for modal buttons
    darkGray: '#666666', // Darker gray for dark gray elements
    scanLabel: '#B0B0B0', // Medium gray for scan labels
    feeText: '#757575', // Medium gray for fee text
    feeLabel: '#263238', // Dark teal for fee labels
    feeValue: '#4CAF50', // Green for fee values
    feeActive: '#263238', // Dark teal for active fees
    labelText: '#757575', // Medium gray for label text
    cta2: '#4A90E2', // Blue for secondary CTAs
    outputValue: '#E0E0E0', // Light gray for output values
    elevated: '#212121', // Slightly lighter than base for elevated surfaces
    mainColor: '#4A90E2', // Blue for main color
    success: '#4CAF50', // Green for success
    successCheck: '#4A90E2', // Blue for success checks
    msSuccessBG: '#263238', // Dark teal for multi-success background
    msSuccessCheck: '#E0E0E0', // Light gray for multi-success check
    newBlue: '#4A90E2', // Blue for new blue elements
    redBG: '#37474F', // Dark gray-blue for red background
    redText: '#EF5350', // Red for red text
    changeBackground: '#3E2723', // Dark amber for change background
    changeText: '#FFB300', // Amber for change text
    receiveBackground: '#263238', // Dark teal for receive background
    receiveText: '#4CAF50', // Green for receive text
    navigationBarColor: '#212121', // Slightly lighter than base for nav bar
  },
};

export type Theme = typeof BlueDefaultTheme;

export const BlueDarkTheme: Theme = {
  ...DarkTheme,
  closeImage: require('../img/close-white.png'),
  scanImage: require('../img/scan-white.png'),
  barStyle: 'light-content',
  colors: {
    ...BlueDefaultTheme.colors,
    ...DarkTheme.colors,
    customHeader: '#000000',
    brandingColor: '#000000',
    borderTopColor: '#9aa0aa',
    background: '#000000',
    foregroundColor: '#191919',
    buttonDisabledBackgroundColor: '#3A3A3C',
    buttonBackgroundColor: '#3A3A3C',
    buttonTextColor: '#ffffff',
    lightButton: 'rgba(255,255,255,.1)',
    buttonAlternativeTextColor: '#ffffff',
    alternativeTextColor: '#9aa0aa',
    alternativeTextColor2: '#0A84FF',
    ballReceive: '#202020',
    ballOutgoing: '#202020',
    lightBorder: '#313030',
    ballOutgoingExpired: '#202020',
    modal: '#202020',
    formBorder: '#202020',
    inputBackgroundColor: '#262626',
    modalButton: '#000000',
    darkGray: '#3A3A3C',
    feeText: '#81868e',
    feeLabel: '#8EFFE5',
    feeValue: '#000000',
    feeActive: 'rgba(210,248,214,.2)',
    cta2: '#ffffff',
    outputValue: '#ffffff',
    elevated: '#121212',
    mainColor: '#0A84FF',
    success: '#202020',
    successCheck: '#0A84FF',
    buttonBlueBackgroundColor: '#202020',
    scanLabel: 'rgba(255,255,255,.2)',
    labelText: '#ffffff',
    msSuccessBG: '#8EFFE5',
    msSuccessCheck: '#000000',
    newBlue: '#007AFF',
    redBG: '#5A4E4E',
    redText: '#FC6D6D',
    changeBackground: '#5A4E4E',
    changeText: '#F38C47',
    receiveBackground: 'rgba(210,248,214,.2)',
    receiveText: '#37C0A1',
    navigationBarColor: '#3A3A3C',
  },
};

// Casting theme value to get autocompletion
export const useTheme = (): Theme => useThemeBase() as Theme;

export class BlueCurrentTheme {
  static colors: Theme['colors'];
  static closeImage: Theme['closeImage'];
  static scanImage: Theme['scanImage'];

  static updateColorScheme(): void {
    const isColorSchemeDark = Appearance.getColorScheme() === 'dark';
    BlueCurrentTheme.colors = isColorSchemeDark ? BlueDarkTheme.colors : BlueDefaultTheme.colors;
    BlueCurrentTheme.closeImage = isColorSchemeDark ? BlueDarkTheme.closeImage : BlueDefaultTheme.closeImage;
    BlueCurrentTheme.scanImage = isColorSchemeDark ? BlueDarkTheme.scanImage : BlueDefaultTheme.scanImage;
  }
}

BlueCurrentTheme.updateColorScheme();
