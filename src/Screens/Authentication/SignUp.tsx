import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Platform, StatusBar, Dimensions, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { EmailIcon, EyeIcon, Lock, NavBack, Person } from '../../theme/Icons';
import DynamicInput from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import i18n from '../../i18n';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Login({ navigation }: { navigation: any }): React.JSX.Element {
  const [showPassword, setShowPassword] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSquarePress = () => {
    setAccepted(!accepted);
  };

  const handleUsernameChange = (text: any) => {
    setUsername(text);
  };

  const handleEmailChange = (text: string) => {
    setEmail(text);
  };

  const handleSignInPress = () => {
    navigation.navigate("Login");
  };

  const handleSignUp = () => {
    setUsername('');
    setEmail('');
    setPassword('');
    setAccepted(false);
    navigation.navigate("Welcome", { username });
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={[style.area, { backgroundColor: Colors.background }]}>
        <View style={{ flex: 1, backgroundColor: Colors.background }}>
          <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
            <View style={style.main}>
              <View style={{ position: 'absolute', top: 0 }}>
                <NavBack />
              </View>

              <View>
                <Text style={[style.b24, { color: '#000000', textAlign: 'center', alignSelf: 'center' }]}>SunVeil</Text>
              </View>
              <View>
                <Text style={[style.s18, { color: `${Colors.subt}`, marginTop: 20, textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('signup.let')}</Text>
              </View>
              <View>
                <Text style={[style.r16, { color: `${Colors.textdark}90`, marginTop: 0, textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('signup.join')}</Text>
              </View>
              <View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                    {i18n.t('signup.username')}
                  </Text>
                  <DynamicInput
                    placeholder="Username"
                    keyboardType="username"
                    icon={<Person />}
                    onChangeText={handleUsernameChange}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                    {i18n.t('signup.email')}
                  </Text>
                  <DynamicInput
                    placeholder="user@gmail.com"
                    keyboardType="email-address"
                    icon={<EmailIcon />}
                    onChangeText={handleEmailChange}
                  />
                </View>
                <View style={{ marginTop: 10 }}>
                  <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                    {i18n.t('signup.password')}
                  </Text>
                  <PasswordInput
                    placeholder=".........."
                    keyboardType="default"
                  />
                </View>
                <View style={{ marginTop: 20 }}>
                  <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                    {i18n.t('signup.password_again')}
                  </Text>
                  <PasswordInput
                    placeholder=".........."
                    keyboardType="default"
                  />
                </View>
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  style={[styles.square, accepted ? styles.accepted : null]}
                  onPress={handleSquarePress}
                />
                <Text style={[style.s12, {
                  flex: 1, color: '#9AA0A6',
                }]}>  {i18n.t('signup.terms_conditions')}
                </Text>
              </View>
              <TouchableOpacity onPress={handleSignUp} style={[style.btn, { backgroundColor: Colors.subt, marginTop: '10%' }]}>
                <Text style={[style.s16, { color: '#fff' }]}>{i18n.t('signup.sign_up')}</Text>
              </TouchableOpacity>
              <View style={[{ flexDirection: 'row', alignSelf: 'center', marginTop: '5%' }]}>
                <Text style={style.s16}>{i18n.t('signup.already_have_account')}{' '}</Text>
                <TouchableOpacity onPress={handleSignInPress}>
                  <Text style={[style.s16, { color: '#1667EB' }]}>{i18n.t('signup.sign_in')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.subt,
    marginTop: 10,
    height: 50,
    paddingLeft: 15, // Ajusta el padding izquierdo para el icono del candado
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  input: {
    backgroundColor: "transparent",
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  square: {
    width: 12,
    height: 11,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.subt,
    marginRight: 10,
  },
  accepted: {
    backgroundColor: '#FAFF07',
  },
  message: {
    flex: 1,
    fontSize: 14,
    color: '#9AA0A6',
    fontFamily: 'Manrope-Regular'
  },
});
