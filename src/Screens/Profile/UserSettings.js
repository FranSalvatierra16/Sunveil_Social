import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, Switch } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { useAuth } from '../../context/AuthProvider';
import i18n from '../../i18n';
import { useDarkMode } from '../../components/darkMode';

const UserSettings = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { user, logout } = useAuth();
  const { dark, toggleDarkMode } = useDarkMode();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#ffffff' }]}>
      <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1, }}>
            <View style={{ width: '100%', flex: 1, }}>
              <View style={{ width: '100%', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                  height: 25, backgroundColor: 'transparent', marginLeft: 10, position: 'relative',
                  flexDirection: "row", alignItems: 'center', justifyContent: 'center',
                }}>
                  <BackIcon size={24} color={dark ? "#FFFFFF" : '#000000'} />

                </TouchableOpacity>
                <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', }]}>
                  {i18n.t('profileSettings.settings')}
                </Text>
                <TouchableOpacity onPress={toggleDarkMode} style={{ right: '10%' }}>
                  <Image source={require('../../../img/night.png')} style={{ width: 30, height: 30, tintColor: dark ? '#ffffff' : '#000000' }} />
                </TouchableOpacity>
              </View>
              <ScrollView style={{
                width: '100%', flex: 1, marginTop: height * 0.05,
              }}>
                <View style={{
                  width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center',
                }}>
                  <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', }}>


                    <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>
                      <Text style={[style.s14, { color: 'gray' }]}> Main</Text>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <Person size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Account
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Account')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                          <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                            <PrivacyIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                            <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                              Security + Access
                            </Text>
                          </View>
                          <TouchableOpacity
                            onPress={() => navigation.navigate('Security')}
                          >
                            <RightIcon size={20} color="#71777F" />
                          </TouchableOpacity>
                        </View>
                      </View>

                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <ShieldIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Profile Visibility
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('UserSettings')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <QrCodeIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Languague
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('UserSettings')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <BellImportantIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Accessibility
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('UserSettings')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <LanguageIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            SV Badge
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Language')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>



                </View>

                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>



                  <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>
                    <Text style={[style.s14, { color: 'gray' }]}>For Sellers </Text>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <HelpIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Upgrade to a Seller
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Faq')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <SupportAgentIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Verification Status
                          </Text>

                        </View>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('Support')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>
                    <Text style={[style.s14, { color: 'gray' }]}>SV Pro </Text>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <HelpIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Upgrade to SV Pro
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('SV')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <SupportAgentIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Verification Status
                          </Text>

                        </View>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('Support')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>

                  </View>
                  <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>
                    <Text style={[style.s14, { color: 'gray' }]}>Support</Text>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <HelpIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            Get help
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Faq')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <SupportAgentIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            See terms of Service
                          </Text>

                        </View>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('Support')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <HelpIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            See User Agreedment
                          </Text>
                        </View>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('Faq')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                          <SupportAgentIcon size={22} color={dark ? "#FFFFFF" : '#000000'} />
                          <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                            See Privacy Policy
                          </Text>

                        </View>

                        <TouchableOpacity
                          onPress={() => navigation.navigate('Support')}
                        >
                          <RightIcon size={20} color="#71777F" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>

                  <View style={{
                    width: '100%',
                    borderTopColor: '#E5E5E5',
                    borderTopWidth: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: height * 0.1,
                    paddingTop: height * 0.03,
                  }}>
                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
                      {/* <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                      <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                        <MoonIcon size={22} color="#000000" />
                        <Text style={[style.r16, { color: '#000000', marginLeft: 10 }]}>
                          Switch to dark mode
                        </Text>
                      </View>
                      <View>
                        <Switch
                          trackColor={{ false: '#71777F', true: '#4CD964' }}
                          thumbColor={isEnabled ? '#FFFFFF' : '#FFFFFF'}
                          ios_backgroundColor="#71777F"
                          shouldRasterizeIOS // for performance
                          onValueChange={toggleSwitch}
                          value={isEnabled}
                        />
                      </View>
                    </View> */}
                      <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                        <TouchableOpacity style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }} onPress={logout}>
                          <LogoutIcon size={22} color="#FE0D0D" style={{
                            transform: [{ rotate: '180deg' }],
                          }} />
                          <Text style={[style.r16, { color: '#FE0D0D', marginLeft: 10 }]}>
                            {i18n.t('profileSettings.logout')}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </View>
              </ScrollView>
            </View>

          </View>
        </KeyboardAvoidingView>
      </View >
      <Nav navActive="profile" style={{ bottom: 0 }} />
    </SafeAreaView >
  )
}

export default UserSettings