import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, CameraIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PlusIcon, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import { useAuth } from '../../context/AuthProvider';
import { TextInput } from 'react-native';

const Inboxmsj = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1, }}>
            <View style={{ width: '100%', flex: 1, }}>
              <View style={{ width: '100%', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                  height: 25, backgroundColor: 'transparent', marginLeft: 10, position: 'relative',
                  flexDirection: "row", alignItems: 'center', justifyContent: 'center',
                }}>
                  <BackIcon size={24} color="#000000" />
                  <Text style={[style.m18, { color: '#000000', marginLeft: 10 }]}>
                    Inbox
                  </Text>
                </TouchableOpacity>
                <View>
                  <TouchableOpacity
                    style={{
                      borderColor: '#000000',
                      borderWidth: 1,
                      borderRadius: 10,
                      padding: 2,
                    }}
                  >
                    <PlusIcon size={22} color="#000000" />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <CameraIcon size={22} color="#000000" />
                  </TouchableOpacity>
                  <TouchableOpacity>

                  </TouchableOpacity>
                </View>
              </View>
              <ScrollView style={{
                width: '100%', flex: 1, marginTop: height * 0.05,
              }}>
                <View style={{
                  flexDirection: "row", alignItems: 'center',
                  backgroundColor: '#f2f2f2', borderRadius: 10, marginHorizontal: 10, padding: 5,
                }}>
                  <TextInput
                    style={{
                      borderWidth: 0,
                      backgroundColor: 'transparent',
                      width: '90%',
                      paddingHorizontal: 10,
                      color: '#000000',
                    }}
                    placeholder="Search"
                    placeholderTextColor="#00000090"
                  />
                  <Image source={require('../../../img/search1.png')} style={{ width: 20, height: 20, }} />
                </View>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: height * 0.5,
                  }}
                >
                  <Text style={[style.r24, { color: '#7C7878', marginTop: 20, fontSize: 40 }]}>
                    Discover{'\n'}Anything ?
                  </Text>
                </View>
              </ScrollView>
            </View>
            <Nav navActive="profile" />
          </View>
        </KeyboardAvoidingView>
      </View >
    </SafeAreaView >
  )
}

export default Inboxmsj