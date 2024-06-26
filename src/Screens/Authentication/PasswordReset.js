import { View, Text, SafeAreaView, KeyboardAvoidingView, StatusBar, Platform, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import style, { height, width } from '../../theme/style'
import { BackIcon, EmailIcon, EyeIcon, EyeSlashIcon, NavBack } from '../../theme/Icons'
import { Colors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native'

const PasswordReset = () => {
  // ref inputs 
  const input1 = useRef()
  const input2 = useRef()

  const navigation = useNavigation();
  const [inputs, setInputs] = useState({
    password: "",
    repassword: "",
    showPassword: false,
    isFocus: 0
  })

  const handleShowPassword = () => setInputs({ ...inputs, showPassword: !inputs.showPassword })
  const handleFocus = (input) => setInputs({ ...inputs, isFocus: input })
  const handleChange = (input, { nativeEvent }) => {
    setInputs({
      ...inputs,
      [input]: nativeEvent.text
    })
  }

  const [isConfirm, setIsConfirm] = useState(false)
  const handleConfirm = () => setIsConfirm(!isConfirm)

  return (
    <SafeAreaView style={[style.area, { backgroundColor: Colors.secondary }]}>
      <View style={{ flex: 1, backgroundColor: Colors.bg }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{
          flex: 1,
          paddingTop: StatusBar.currentHeight,
        }}>
          <NavBack />
          {
            !isConfirm ?
              <View style={[style.main, {

              }]}>
                <View>
                  <Text style={[style.b18, { color: Colors.textdark, fontSize: width * 0.06 }]}>Password Reset</Text>
                </View>
                <View>
                  <Text style={[style.r14, { color: `#989898`, marginTop: 10, fontSize: width * 0.033 }]}>Your password has been successfully reset. click
                    confirm to set a new password</Text>
                </View>
                <View style={{ marginTop: 20 }}>
                  <TouchableOpacity
                    onPress={() => { handleConfirm() }}
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
                      Confirm
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              :
              <View style={[style.main, {

              }]}>
                <View>
                  <Text style={[style.b18, { color: Colors.textdark, fontSize: width * 0.06 }]}>Set a new password</Text>
                </View>
                <View>
                  <Text style={[style.r14, { color: `#989898`, marginTop: 10, fontSize: width * 0.033 }]}>Create a new password. Ensure it differs from
                    previous ones for security</Text>
                </View>
                <View>
                  <View>
                    <Text>
                      Password
                    </Text>
                    <View
                      style={{
                        position: "relative",
                        width: width * 0.9,
                        height: 50,
                        backgroundColor: "#fff",
                        borderColor: "#989898",
                        borderWidth: 1,
                        borderRadius: 12,
                      }}
                    >
                      <TextInput
                        ref={input1}
                        style={[style.input, {
                          marginTop: 10
                        }]}
                        placeholder="Enter Password"
                        placeholderTextColor="#989898"
                        secureTextEntry
                        onChange={(e) => { handleChange("password", e) }}
                      />
                      <TouchableOpacity
                        onPress={() => { handleShowPassword() }}
                        style={{
                          position: "absolute",
                          right: 10,
                          top: 10
                        }}
                      >
                        {
                          inputs.showPassword ?
                            <EyeIcon
                              style={{ width: 20, height: 20 }}
                              color="#989898"
                            />
                            :
                            <EyeSlashIcon
                              style={{ width: 20, height: 20 }}
                              color="#989898"
                            />
                        }
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                <View style={{ marginTop: 20 }}>
                  <TouchableOpacity
                    onPress={() => { handleConfirm() }}
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
                      Update Password
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
          }
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}


export default PasswordReset