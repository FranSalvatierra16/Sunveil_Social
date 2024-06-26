import { Animated, Text, View } from "react-native";
import { useAuth } from "../context/AuthProvider";
import AuthStackNavigator from "./AuthStackNavigator";
import AppStackNavigator from "./StackNavigator";
import React, { useEffect } from "react";
import DynamicSun from "../components/DynamicSun";
import style from "../theme/style";
import { ActivityIndicator } from "@react-native-material/core";


const Navigator = () => {
  const { user, token, loading, height, width } = useAuth();

  return (
    <>
      {user ? <AuthStackNavigator /> : <AppStackNavigator />}
    </>
  );
};

export default Navigator;