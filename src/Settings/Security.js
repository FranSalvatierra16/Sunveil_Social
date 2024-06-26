import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, Switch, Modal, ImageBackground } from 'react-native';
import style, { height, width } from './../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from './../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from './../components/nav';
import DynamicSun from './../components/DynamicSun';
import { useAuth } from './../context/AuthProvider';
import i18n from './../i18n';
import { useDarkMode } from './../components/darkMode';

const Security = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { user, logout } = useAuth();
    const { dark, toggleDarkMode } = useDarkMode();
    const [request, setRequest] = useState(false);
    const [verify, setVerify] = useState(true);
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
                                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', }]}>
                                        Security + Access

                                    </Text>
                                    <Text style={[style.r14, { color: 'gray', }]}>
                                        @leonardoh2d

                                    </Text>
                                </View>
                                <TouchableOpacity onPress={toggleDarkMode} style={{}}>

                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{
                                width: '100%', flex: 1, marginTop: height * 0.05,
                            }}>
                                <View style={{
                                    width: '100%', flex: 1, alignItems: 'center', justifyContent: 'center',
                                }}>



                                </View>

                                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>



                                    <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>

                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                                                    <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                                                        Security
                                                    </Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('Privacy')}
                                                >
                                                    <RightIcon size={20} color="#71777F" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>


                                    </View>
                                    <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>

                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                                                    <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                                                        Apps and Sessions
                                                    </Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => navigation.navigate('Faq')}
                                                >
                                                    <RightIcon size={20} color="#71777F" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>


                                    </View>
                                    <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>

                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                                                    <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                                                        Connected Accounts
                                                    </Text>
                                                </View>
                                                <TouchableOpacity

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
                                        marginTop: '85%',
                                        paddingTop: height * 0.03,
                                    }}>
                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', gap: 5 }}>
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

export default Security