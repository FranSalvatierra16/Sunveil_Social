import { View, Text, SafeAreaView, KeyboardAvoidingView, StatusBar, Platform, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import style, { height, width } from '../../theme/style'
import { BackIcon, EmailIcon, EyeIcon, EyeSlashIcon, NavBack } from '../../theme/Icons'
import { Colors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native'

const ForgotPassword = () => {
  const navigation = useNavigation();
  const [isFocusEmail, setIsFocusEmail] = useState(false)
  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
      <View style={{ flex: 1, backgroundColor: Colors.bg }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
        }}>
          <NavBack />
          <View style={[style.main, {

          }]}>
            <View>
              <Text style={[style.b18, { color: Colors.textdark, fontSize: width * 0.06 }]}>Forgot Password</Text>
            </View>
            <View>
              <Text style={[style.r14, { color: `#989898`, marginTop: 10, fontSize: width * 0.033 }]}>Enter your email address to reset your password</Text>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={[style.r14, { color: `${Colors.textdark}` }]}>
                Your Email
              </Text>
              <View style={{
                position: 'relative',
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
                height: 50,
                paddingLeft: 30,
                borderColor: isFocusEmail ? "#2A2A2A" : "#E1E1E1",
                borderWidth: 2,
                borderRadius: 12
              }}>
                <EmailIcon color={`#2A2A2A`} style={{ position: 'absolute', top: 15, left: 10, width: 20, height: 20 }} />
                <TextInput
                  style={{ backgroundColor: "transparent" }}
                  placeholder="Enter your email address"
                  placeholderTextColor={`${Colors.textdark}60`}
                  keyboardType="email-address"
                  onFocus={() => {
                    setIsFocusEmail(true)
                  }}
                  onBlur={() => {
                    setIsFocusEmail(false)
                  }}
                />
              </View>
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate('CheckYourEmail') }}
                style={{
                  backgroundColor: "#2A2A2A",
                  borderRadius: 12,
                  height: 50,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text
                  style={[style.m16, {
                    color: "#fff"
                  }]}
                >
                  Reset Password
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}


export default ForgotPassword