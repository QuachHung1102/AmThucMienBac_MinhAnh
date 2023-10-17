import React, { useCallback, useEffect, useState, } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { StatusBar } from 'expo-status-bar';
// import NavBot from './components/Nav_bot/NavBot';

// import Ionicons from 'react-native-vector-icons/Ionicons';
// import Ionicons from '@expo/vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Font from 'expo-font';
// import { useFonts } from 'expo-font';
import TabBarScreen from './screens/TabBarScreen';
import GetFontss from './utilities/functions/Fonts';

/**-------------------------- **/
const RootStack = createNativeStackNavigator();
SplashScreen.preventAutoHideAsync();
export default function App() {
  // Cái này của navBot
  // const [navBotActive, setNavBotActive] = useState(1);
  const [appIsReady, setAppIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync(GetFontss());
        await new Promise((resolve) => {
          setTimeout(resolve, 2000);
        })
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  console.log(appIsReady);

  return (
    <>
      <StatusBar style='auto' backgroundColor='#FFF3D3' />
      <NavigationContainer onReady={onLayoutRootView}>
        <RootStack.Navigator>
          <RootStack.Group screenOptions={{ headerShown: false }}>
            <RootStack.Screen name='TabScreen' component={TabBarScreen} />
          </RootStack.Group>
          {/* <RootStack.Group screenOptions={{ presentation: 'modal' }}>
          <RootStack.Screen name='DishIngredients' component={DishIngredients} />
        </RootStack.Group> */}
        </RootStack.Navigator>
      </NavigationContainer>
    </>
  );
}