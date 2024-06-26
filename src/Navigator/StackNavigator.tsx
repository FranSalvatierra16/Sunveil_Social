import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoarding from "../Screens/Authentication/OnBoarding";
import SignIn from "../Screens/Authentication/Login";
import SignUp from "../Screens/Authentication/SignUp";
import Welcome from "../Screens/Authentication/Welcome";
import ForgotPassword from "../Screens/Authentication/ForgotPassword";
import Login from "../Screens/Authentication/Login";
import County from "../Screens/Authentication/Country";
import Country from "../Screens/Authentication/Country";
import Preferences from "../Screens/Authentication/Preferences";
import Notifications from "../Screens/Authentication/Notification";
// import FriendsFeed from "../Screens/Feeds/FriendsFeed";

import FriendsFeedDark from "../Screens/Feeds/FriendsFeedDark";

import { Animated, View } from "react-native";
import style, { height, width } from "../theme/style";
import DynamicSun from "../components/DynamicSun";
import { Text } from "react-native";
import { randomColors } from "../theme/color";
import { useAuth } from "../context/AuthProvider";


// import FriednsBoard from "../Screens/Board/FriendsBoard";
// import ForYouBoard from "../Screens/Board/ForyouBoard";
import { Nav } from "../components/nav";





const Stack = createNativeStackNavigator();

export default function AppStackNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 4000);
  }, []);

  if (showSplashScreen) {
    return null; // Muestra el componente de pantalla de presentación mientras se carga la aplicación
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnBoarding">
        <Stack.Screen
          name="OnBoarding"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Country"
          component={Country}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Preferences"
          component={Preferences}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen

          name="FriendsFeed"
          component={FriendsFeed}
          options={{ headerShown: false }}
        />

        <Stack.Screen

          name="ForYouBoard"
          component={ForYouBoard}
          options={{ headerShown: false }}
        /> */}


        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>

    </NavigationContainer>
  );
}
