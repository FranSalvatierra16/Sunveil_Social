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

const Account = () => {
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
                                        Account

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
                                    <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', }}>

                                        <View style={{ flexDirection: 'column', width: '98%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>

                                            <Text style={[style.s14, { color: 'gray', marginLeft: '5%' }]}>Account Information </Text>
                                            <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'center', width: '100%', justifyContent: 'space-between', }}>

                                                    <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                                                        Username
                                                    </Text>
                                                    <Text style={[style.r16, { color: 'gray', marginLeft: 10 }]}>
                                                        @leonardoh2d
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
                                                    <View style={{ flexDirection: "row", alignItems: 'center', width: '98%', justifyContent: 'space-between', }}>

                                                        <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 5 }]}>
                                                            Phone
                                                        </Text>
                                                        <Text style={[style.r16, { color: 'gray', marginLeft: 10 }]}>
                                                            223456483
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('Account')}
                                                    >
                                                        <RightIcon size={20} color="#71777F" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                    <View style={{ flexDirection: "row", alignItems: 'center', width: '98%', justifyContent: 'space-between', }}>

                                                        <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 5 }]}>
                                                            Email
                                                        </Text>
                                                        <Text style={[style.r16, { color: 'gray', marginLeft: 10 }]}>
                                                            leo@2dstudios.com
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('Account')}
                                                    >
                                                        <RightIcon size={20} color="#71777F" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                    <View style={{ flexDirection: "row", alignItems: 'center', width: '98%', justifyContent: 'space-between', }}>

                                                        <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 5 }]}>
                                                            Country
                                                        </Text>
                                                        <Text style={[style.r16, { color: 'gray', marginLeft: 10 }]}>
                                                            United States
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('Account')}
                                                    >
                                                        <RightIcon size={20} color="#71777F" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                                <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                    <View style={{ flexDirection: "row", alignItems: 'center', width: '98%', justifyContent: 'space-between', }}>

                                                        <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 5 }]}>
                                                            Setup 2FA
                                                        </Text>
                                                        <Text style={[style.r16, { color: 'gray', marginLeft: 10 }]}>
                                                            6483
                                                        </Text>
                                                    </View>
                                                    <TouchableOpacity
                                                        onPress={() => navigation.navigate('Account')}
                                                    >
                                                        <RightIcon size={20} color="#71777F" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>

                                        </View>
                                    </View>


                                </View>

                                <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>



                                    <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>

                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                                                    <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                                                        Change your password
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
                                                        Desactive your Account
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
                                                        Request your Data
                                                    </Text>
                                                </View>
                                                <TouchableOpacity
                                                    onPress={() => setRequest(!request)}
                                                >
                                                    <RightIcon size={20} color="#71777F" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>


                                    </View>
                                    <Modal
                                        visible={request}
                                        animationType="slide"
                                        transparent={true}
                                        onRequestClose={() => setRequest(false)}
                                    >
                                        <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)' }} onPress={() => setRequest(false)}>
                                            <View style={{

                                                width: '100%',
                                                borderTopLeftRadius: 20,
                                                borderTopRightRadius: 20,

                                                position: 'absolute',
                                                top: '0%',
                                                height: '90%',
                                                backgroundColor: 'white',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}>
                                                <View style={{ width: '100%', flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: '5%' }}>
                                                    <TouchableOpacity onPress={() => setRequest(false)} style={{
                                                        height: 25, backgroundColor: 'transparent',
                                                        flexDirection: "row", alignItems: 'center',
                                                    }}>
                                                        <BackIcon size={24} color={dark ? "#FFFFFF" : '#000000'} />

                                                    </TouchableOpacity>
                                                    <Text style={[style.s14, { color: dark ? "#FFFFFF" : '#000000', right: '45%' }]}>
                                                        Request your data
                                                    </Text>
                                                    <TouchableOpacity onPress={toggleDarkMode} style={{ right: '10%' }}>

                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%' }}>
                                                    <Text style={[style.r13, { color: 'gray' }]}> You'll receive an email from our third-party {'\n'}
                                                        provider SendSafely to complete your request.
                                                    </Text>
                                                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 150, backgroundColor: 'rgba(217, 217, 217, 0.3)', borderRadius: 12, marginTop: '5%' }}>
                                                        <Text style={[style.s14, { color: dark ? "#FFFFFF" : '#000000' }]}>
                                                            Start request
                                                        </Text>
                                                    </TouchableOpacity>
                                                    <View style={{ width: '30%', height: 3, backgroundColor: 'black', marginTop: '99%' }}></View>
                                                </View>
                                            </View>
                                            {verify ? (
                                                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)' }} onPress={() => setVerify(false)}>
                                                    <View style={{

                                                        width: '100%',
                                                        borderTopLeftRadius: 20,
                                                        borderTopRightRadius: 20,

                                                        position: 'absolute',
                                                        top: '49%',
                                                        height: '38%',
                                                        backgroundColor: 'white',
                                                        flexDirection: 'column',
                                                        alignItems: 'center',
                                                    }}>
                                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 10, marginTop: '5%' }}>

                                                            <Text style={[style.s18, { color: dark ? "#FFFFFF" : '#000000' }]}>
                                                                Verify your email to continue
                                                            </Text>

                                                        </View>
                                                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%' }}>
                                                            <Text style={[style.r13, { color: 'gray' }]}> Before your rquest can be completed, we need to{'\n'}
                                                                verify your email adderess. Check the email address {'\n'}
                                                                linked to this Pinterest account to continue.
                                                            </Text>
                                                            <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', height: 50, width: 150, backgroundColor: '#FF9900', borderRadius: 12, marginTop: '5%' }} onPress={() => setVerify(false)}>
                                                                <Text style={[style.s14, { color: dark ? "#FFFFFF" : '#000000' }]}>
                                                                    Okay
                                                                </Text>
                                                            </TouchableOpacity>
                                                            <View style={{ width: '30%', height: 3, backgroundColor: 'black', marginTop: '20%' }}></View>
                                                        </View>
                                                    </View>
                                                </TouchableOpacity>
                                            ) : (null)}
                                        </TouchableOpacity>
                                    </Modal>

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

export default Account