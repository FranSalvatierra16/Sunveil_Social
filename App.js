import { StatusBar, StyleSheet, View, AppState, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStackNavigator from './src/Navigator/StackNavigator';
import { AuthProvider } from './src/context/AuthProvider';
import Navigator from './src/Navigator';
import { DarkModeProvider } from './src/components/darkMode';
import { PrivateProvider } from './src/components/Private';
import RNFS from 'react-native-fs';

export default function App() {
  const [isScreenshotTaken, setIsScreenshotTaken] = useState(false);
  const screenshotsDirectory = RNFS.ExternalDirectoryPath + '/DCIM/Screenshots';

  const [prevFilesLength, setPrevFilesLength] = useState(0);

  useEffect(() => {
    // ...

    const checkScreenshots = async () => {
      try {
        const files = await RNFS.readdir(screenshotsDirectory);
        if (files.length > prevFilesLength) {
          console.log('Se ha detectado un cambio en el directorio de capturas de pantalla.');
          setIsScreenshotTaken(true);
        }
        setPrevFilesLength(files.length);
      } catch (error) {
        console.error('Error al observar el directorio de capturas de pantalla:', error);
      }
    };

    // ...
  }, [prevFilesLength]);


  return (
    <DarkModeProvider>
      <PrivateProvider>
        <AuthProvider>
          <View style={[styles.container, isScreenshotTaken && styles.screenshotContainer]}>
            <StatusBar />
            <Navigator />
          </View>
        </AuthProvider>
      </PrivateProvider>
    </DarkModeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  screenshotContainer: {
    backgroundColor: 'black',
  },
});
