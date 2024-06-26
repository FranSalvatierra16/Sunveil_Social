import { View, Text, Image, Dimensions, TextInput, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, FlatList, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useState, useContext, useEffect, } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/color'
import style from '../../theme/style'


import { AppBar, Button } from '@react-native-material/core';

import { EmailIcon, EyeIcon, Lock, NavBack } from '../../theme/Icons';
import DynamicInput from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import { useAuth } from '../../context/AuthProvider';
import i18n from '../../i18n';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Login({ navigation }: { navigation: any }): React.JSX.Element {
  const { user, token, login } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [edited, setEdited] = useState(false);

  const [inputs, setInputs] = useState({
    email: "123@123.com",
    password: "One23456@",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const verifyErrors = (toVerify: String) => {
    switch (toVerify) {
      case "email":
        if (inputs.email === "") {
          setErrors({ ...errors, email: "Email is required" });
          break;
        }
        if (!inputs.email.includes("@")) {
          setErrors({ ...errors, email: "Invalid email" });
          break;
        }
        setErrors({ ...errors, email: "" });
        break;
      case "password":
        if (inputs.password === "") {
          ({ ...errors, password: i18n.t('login.password_required') })
          break;
        }
        if (inputs.password.length < 8) {
          setErrors({ ...errors, password: i18n.t('login.password_length') });
          break;
        }
        if (!inputs.password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
          setErrors({ ...errors, password: i18n.t('login.password_complexity') });
          break;
        }
        setErrors({ ...errors, password: "" });
        break;
      default:
        break;
    }
  };

  const handleChanges = (name: string, value: string) => {
    setEdited(true);
    setInputs({ ...inputs, [name]: value });
    console.log(inputs);
  }
  const handleSignUpPress = () => {
    // Nav to sign up
    navigation.navigate("SignUp");
  };

  const handleLoginPress = async () => {
    if (errors.email !== "" || errors.password !== "") return;
    if (inputs.email === "" || inputs.password === "") return;
    // Call login function context
    const res = await login(inputs.email, inputs.password);
    console.log(res);
  };

  const passwordInput = React.createRef<TextInput>();
  const emailInput = React.createRef<TextInput>();

  useEffect(() => {
    if (edited)
      verifyErrors("email");
  }, [inputs.email]);

  useEffect(() => {
    if (edited)
      verifyErrors("password");
  }, [inputs.password]);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.background }]}>
      <View style={{ flex: 1, backgroundColor: Colors.background }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
        }}>
          <NavBack />
          <ScrollView style={{
            height: StatusBar.currentHeight ? height - StatusBar.currentHeight : height - 200,
          }}>
            <View style={[style.main, {

            }]}>
              <View>
                <Text style={[style.b24, { color: '#000000', textAlign: 'center', alignSelf: 'center' }]}>SunVeil</Text>
              </View>
              <View>
                <Text style={[style.s18, { color: `${Colors.subt}`, marginTop: 20, textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('login.let')}</Text>
              </View>
              <View>
                <Text style={[style.r16, { color: `${Colors.textdark}90`, marginTop: 0, textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('login.join')}
                </Text>
              </View>
              <View>
                <View style={{ marginTop: 20 }}>
                  <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                    {i18n.t('login.email')}
                  </Text>
                  <DynamicInput
                    placeholder="user@gmail.com"
                    keyboardType="email-address"
                    icon={<EmailIcon />}
                    onChangeText={(text: string) => handleChanges('email', text)}
                    ref={emailInput}
                    onSubmitEditing={() => { passwordInput.current?.focus(); }}
                    value={inputs.email}
                  />
                  {
                    errors.email !== "" ? <Text style={[style.r10, { color: 'red', marginTop: 5 }]}>{errors.email}</Text> : null
                  }
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                    {i18n.t('login.password')}
                  </Text>
                  <PasswordInput
                    placeholder="Enter your password"
                    keyboardType="default"
                    onChangeText={(text: string) => { handleChanges('password', text); }}
                    ref={passwordInput}
                    onSubmitEditing={() => handleLoginPress()}
                    value={inputs.password}
                  />
                  {
                    errors.password !== "" ? <Text style={[style.r10, { color: 'red', marginTop: 5 }]}>{errors.password}</Text> : null
                  }
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')} style={{ alignItems: 'flex-end' }}>
                  <Text style={[style.s14, { color: `${Colors.subt}`, marginTop: 5, textAlign: 'right' }]}>{i18n.t('login.forgot_password')}</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => handleLoginPress()} style={[style.btn, { backgroundColor: Colors.subt, marginTop: '5%', marginBottom: '5%' }]}>
                <Text style={[style.s16, { color: '#fff' }]}> {i18n.t('login.login')}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.container}>
              <View style={styles.line}></View>
              <Text style={[style.s16, { marginHorizontal: 10, color: '#DADCE0' }]}> {i18n.t('login.or')}</Text>
              <View style={styles.line}></View>
            </View>
            <View style={{ flex: 1, justifyContent: 'center' }}>
              <TouchableOpacity
                onPress={() => handleLoginPress()}
                style={[
                  style.btn,
                  {
                    backgroundColor: 'transparent',
                    borderColor: '#E8EAED',
                    borderRadius: 12,
                    alignSelf: 'center',
                    marginTop: '5%',
                    width: '80%',
                    borderWidth: 1,
                    flexDirection: 'row', // Alinea la imagen y el texto en una fila
                    alignItems: 'center', // Centra verticalmente los elementos hijos
                  },
                ]}
              >
                <Image
                  source={require('../../../img/apple.jpg')}
                  style={{ width: 34, height: 34, marginRight: 10 }} // Ajusta el tamaño según tu imagen
                />
                <Text style={[style.b16, { color: '#111' }]}> {i18n.t('login.apple')}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleLoginPress()}
                style={[
                  style.btn,
                  {
                    backgroundColor: 'transparent',
                    borderColor: '#E8EAED',
                    borderRadius: 12,
                    alignSelf: 'center',
                    marginTop: '5%',
                    width: '80%',
                    borderWidth: 1,
                    flexDirection: 'row', // Alinea la imagen y el texto en una fila
                    alignItems: 'center', // Centra verticalmente los elementos hijos
                  },
                ]}
              >
                <Image
                  source={require('../../../img/google.jpg')}
                  style={{ width: 24, height: 24, marginRight: 10 }} // Ajusta el tamaño según tu imagen
                />
                <Text style={[style.b16, { color: '#111111' }]}> {i18n.t('login.google')}</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.signUpContainer}>
              <Text style={style.s16}> {i18n.t('login.havent')}{' '}</Text>
              <TouchableOpacity onPress={handleSignUpPress}>
                <Text style={[style.s16, { color: '#1667EB' }]}> {i18n.t('login.signup')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '5%',
    width: '95%',
    alignSelf: 'center',

  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DADCE0',
  },
  signUpContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '10%', // Margen superior del 10%
    marginBottom: '10%', // Margen inferior del 10%
    alignSelf: 'center',
  },
});