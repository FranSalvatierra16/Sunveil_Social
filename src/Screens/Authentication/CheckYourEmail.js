import { View, Text, SafeAreaView, KeyboardAvoidingView, StatusBar, Platform, TextInput, Button, TouchableOpacity } from 'react-native'
import React, { useRef, useState } from 'react'
import style, { height, width } from '../../theme/style'
import { BackIcon, EmailIcon, EyeIcon, EyeSlashIcon, NavBack } from '../../theme/Icons'
import { Colors } from '../../theme/color'
import { useNavigation } from '@react-navigation/native'

const CheckYourEmail = () => {
  const navigation = useNavigation();
  const [isFocusEmail, setIsFocusEmail] = useState(false)

  const [codeInputs, setCodeInputs] = useState([
    {
      value: "",
      isfocus: false,
    },
    {
      value: "",
      isfocus: false,
    },
    {
      value: "",
      isfocus: false,
    },
    {
      value: "",
      isfocus: false,
    },
    {
      value: "",
      isfocus: false,
    },
  ])

  const handleChange = (index, { nativeEvent }) => {
    let value = nativeEvent.text
    // console.log({ index, value })
    if (value === "" && index !== 0) {
      inputsRef[index - 1].current.focus()
      setCodeInputs([
        ...codeInputs.map((item, idx) => {
          if (index === idx) return {
            value: "",
            isfocus: false,
          }
          if (index - 1 === idx) return {
            ...item,
            isfocus: true
          }
          return {
            ...item,
            isfocus: false
          }
        })])
      return
    }
    if (value.length === 2 && index === codeInputs.length - 1) return
    setCodeInputs([
      ...codeInputs.map((item, idx) => {
        if (index === idx) {
          return {
            value: value,
            isfocus: true
          }
        } else {
          return {
            ...item,
            isfocus: false
          }
        }
      })
    ])
    if (index !== codeInputs.length - 1 && value !== "")
      inputsRef[index + 1].current.focus()
  }

  // ref inputs 
  const input1 = useRef()
  const input2 = useRef()
  const input3 = useRef()
  const input4 = useRef()
  const input5 = useRef()

  const inputsRef = [
    input1,
    input2,
    input3,
    input4,
    input5,
  ]
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
              <Text style={[style.b18, { color: Colors.textdark, fontSize: width * 0.06 }]}>Check Your Email</Text>
            </View>
            <View>
              <Text style={[style.r14, { color: `#989898`, marginTop: 10, fontSize: width * 0.033 }]}>We sent a reset link to <Text style={style.b14}>contact@dscode...com</Text> enter 5 digit code that mentioned in the email</Text>
            </View>
            <View style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: "center"
            }}>
              {
                codeInputs.map((item, index) => {
                  return (
                    <View
                      key={index}
                      style={{
                        width: width * 0.17,
                        padding: width * 0.01
                      }}>
                      <TextInput
                        keyboardType='numeric'
                        ref={inputsRef[index]}
                        onChange={text => handleChange(index, text)}
                        value={item.value}
                        style={{
                          width: "100%",
                          backgroundColor: "transparent",
                          borderColor: item.isfocus ? "#333" : "#ddd",
                          borderWidth: 1,
                          borderRadius: 12,
                          textAlign: "center"
                        }}
                        onFocus={() => setCodeInputs([
                          ...codeInputs.map((item, idx) => {
                            if (index === idx) {
                              return {
                                ...item,
                                isfocus: true
                              }
                            } else {
                              return {
                                ...item,
                                isfocus: false
                              }
                            }
                          })
                        ])}
                      />
                    </View>
                  )
                })
              }
            </View>
            <View style={{ marginTop: 20 }}>
              <TouchableOpacity
                onPress={() => { navigation.navigate('PasswordReset') }}
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
                  Verify Code
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}


export default CheckYourEmail