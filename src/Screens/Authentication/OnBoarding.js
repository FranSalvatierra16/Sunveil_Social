import React, { useState, useRef } from 'react';
import { View, Text, SafeAreaView, Dimensions, StatusBar, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthProvider';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import DynamicSun from '../../components/DynamicSun';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n';
import onBoarding from '../../components/locales/es/onBoarding';

const width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

export default function OnBoarding() {
  const navigation = useNavigation();
  const { login, loading } = useAuth();

  const [inputs, setInputs] = useState({
    email: '123@123.com',
    password: 'One23456@'
  });
  const { t } = useTranslation;
  const [errors, setErrors] = useState({});
  const inputEmail = useRef(null);
  const inputPassword = useRef(null);

  const handleInputChange = (name, text) => {
    setInputs({ ...inputs, [name]: text });
  };

  const handleLogin = async () => {
    try {
      let res = await login(inputs.email, inputs.password);
      const { token, user } = res.data;
      if (!token) throw new Error('Invalid credentials');
      setInputs({ email: '', password: '' });
      navigation.navigate('Login');
    } catch (error) {
      setErrors(error.response.data.errors);
    }
  };

  const handleLoginPress = () => {
    navigation.navigate("Login");
  };
  const handleSignUpPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <SafeAreaView style={[style.area, { backgroundColor: "#1F242E" }]}>
      <StatusBar translucent={true} backgroundColor='transparent' />

      <View style={{ flex: 1, backgroundColor: "#1F242E", justifyContent: 'flex-start', alignItems: 'center' }}>
        <View style={{ position: 'absolute', top: '10%' }}>
          <DynamicSun
            colorCircle="#EFDA69"
            colorPath="#FFFFFF"
            sizeWidth={width * 0.25}
            sizeHeight={height * 0.25} // Ajusta la altura del sol según sea necesario
          />
        </View>
        <View style={{ marginHorizontal: 25, flex: 1, width: '95%', justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ alignItems: 'center' }}>
            <Text style={[style.b56, { color: Colors.textwhite, paddingTop: '5%', fontSize: 54, textAlign: "center" }]}>SunVeil</Text>
          </View>

          <TouchableOpacity onPress={handleLoginPress} style={[style.btn, { backgroundColor: Colors.background, marginTop: '10%', width: '80%', alignItems: 'center', justifyContent: 'center' }]}>
            <Text style={[style.s16, { color: Colors.subt, textAlign: 'center' }]}>{i18n.t("onBoarding.login")}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUpPress} style={[style.btn, { backgroundColor: 'transparent', marginTop: 20, width: '80%', alignItems: 'center', justifyContent: 'center', borderColor: Colors.background, borderWidth: 1 }]}>
            <Text style={[style.s16, { color: Colors.background, textAlign: 'center' }]}>{i18n.t("onBoarding.get_started")}</Text>
          </TouchableOpacity>


          <Text style={[style.s13, { marginTop: 15, lineHeight: 20, color: `${Colors.bg}90` }]}>
            {' '}{i18n.t("onBoarding.terms_and_privacy")}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
