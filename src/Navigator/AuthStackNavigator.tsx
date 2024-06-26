import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FriendsFeed from "../Screens/Feeds/FriendsFeed";
import { useAuth } from "../context/AuthProvider";
import { Animated, Text, View } from "react-native";
import style, { height, width } from "../theme/style";
import DynamicSun from "../components/DynamicSun";
import { randomColors } from "../theme/color";
import UserProfile from "../components/Pub";
import UserProfileScreen from "../Screens/Profile/UserProfile";
import FriednsBoard from "../Screens/Board/FriendsBoard";
import ForYouBoard from "../Screens/Board/ForyouBoard";
import UserSettings from "../Screens/Profile/UserSettings";
import PersonalZone from "../Screens/Profile/PersonalZone";

import Country from "../Screens/Authentication/Country";
import ForYouFeed from "../Screens/Feeds/ForYouFeed";

import Activity from "../Screens/Additional/Activity";

import Interactions from "../Screens/Interactions/Interactions";

import SearchPage from "../Screens/Additional/SearchPage";
import Inboxmsj from "../Screens/Messages/Inboxmsj";
const profileImage = 'imagen.jpg'; // Debes definir profileImage antes de usarlo en la declaración del objeto
const username2 = 'usuario';

const followPriv = false;

const artBoard = 'false';

import Following from "../Screens/Additional/Following";
import Faq from "../components/Faq";
import Support from "../components/Support";
import Post from "../components/Post";
import Language from "../Screens/Additional/Languaje";
import LiveZone from "../personalZone/WatchLive";
import AudioRecord from "react-native-audio-record";
import Account from "../Settings/Account";
import Security from "../Settings/Security";
import SV from "../Settings/SVpro";
import Camera from "../Screens/Action/Camera";
import Privacy from "../Settings/Privacy";
import FullScreenImageSlider from "../components/Total";
import LiveVideo from "../personalZone/LiveVideo";
import Duel from "../personalZone/Duel";
import CameraHist from "../Screens/Action/CameraHist";
import ProfileUserFoll from "../Screens/Profile/ProfileFoll";








const Stack = createNativeStackNavigator();

export default function AuthStackNavigator() {
  const [showSplashScreen, setShowSplashScreen] = useState(true);
  const { loading, } = useAuth();

  useEffect(() => {
    setTimeout(() => {
      setShowSplashScreen(false);
    }, 3000);
  }, []);
  const sunRef = React.useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(sunRef, {
        toValue: 1,
        duration: 2000,  // Duración de la rotación
        useNativeDriver: true,  // Utilizar el controlador nativo
      })
    ).start();
  }, []);
  const spin = sunRef.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg']  // Grados de rotación
  });
  const LoadingScreen = () => {
    return (
      <View style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: width,
        height: height,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255,255,255 ,1)",
      }}>
        <View style={{
          justifyContent: "center",
          alignItems: "center",
        }}>
          <Animated.View style={{ transform: [{ rotate: spin }], }}>
            <DynamicSun sizeHeight={"80"} sizeWidth={"80"} colorCircle={randomColors()} colorPath="#333" />
          </Animated.View>
        </View>
      </View>
    );
  }
  if (showSplashScreen || loading) {
    return <LoadingScreen />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="FriendsFeed" component={FriendsFeed} />
        <Stack.Screen name="ForYouFeed" component={ForYouFeed} />

        <Stack.Screen name="FriendsBoard" component={FriednsBoard}
          initialParams={{ artBoard }} />
        <Stack.Screen name="ForYouBoard" component={ForYouBoard} />
        <Stack.Screen name="UserProfileScreen" component={UserProfileScreen} />
        <Stack.Screen name="UserSettings" component={UserSettings} />
        <Stack.Screen name="PersonalZone" component={PersonalZone} />
        <Stack.Screen name="Country" component={Country} />
        <Stack.Screen name="LiveZone" component={LiveZone} />
        <Stack.Screen name="SearchPage" component={SearchPage} />
        <Stack.Screen name="Inboxmsj" component={Inboxmsj} />
        <Stack.Screen name="Activity" component={Activity} />
        <Stack.Screen name="Language" component={Language} />
        <Stack.Screen name="Post" component={Post} />

        <Stack.Screen name="Following" component={Following} />
        <Stack.Screen name="Faq" component={Faq} />
        <Stack.Screen name="Total" component={FullScreenImageSlider} />
        <Stack.Screen name="Support" component={Support} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Security" component={Security} />
        <Stack.Screen name="Privacy" component={Privacy} />
        <Stack.Screen name="SV" component={SV} />
        <Stack.Screen name="Interactions" component={Interactions} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="LiveVideo" component={LiveVideo} />
        <Stack.Screen name="Duel" component={Duel} />
        <Stack.Screen name="CamHist" component={CameraHist} />
        <Stack.Screen
          name="ProfileFoll"
          component={ProfileUserFoll}
          initialParams={{ profileImage, username2, followPriv }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
