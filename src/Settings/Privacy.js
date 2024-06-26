import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, Switch, Modal, ImageBackground, Animated } from 'react-native';
import style, { height, width } from './../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from './../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from './../components/nav';
import DynamicSun from './../components/DynamicSun';
import { useAuth } from './../context/AuthProvider';
import i18n from './../i18n';
import { useDarkMode } from './../components/darkMode';
import { usePrivate } from '../components/Private';

const Privacy = () => {
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const { user, logout } = useAuth();
    const { dark, toggleDarkMode } = useDarkMode();
    const { homePrivate, togglePrivateHome } = usePrivate();
    const { boardPrivate, togglePrivateBoard } = usePrivate();
    const [request, setRequest] = useState(false);
    const [verify, setVerify] = useState(true);
    const [isActivated, setIsActivated] = useState(homePrivate);
    const [positionValue, setPositionValue] = useState(new Animated.Value(0));
    const [backgroundColor, setBackgroundColor] = useState(false)
    const { inputs, setInputs, handleInputsChange, register } = useAuth();
    const [isActivated1, setIsActivated1] = useState(false);
    const [positionValue1, setPositionValue1] = useState(new Animated.Value(0));
    const [backgroundColor1, setBackgroundColor1] = useState(false)
    useEffect(() => {
        setIsActivated(homePrivate);

        // Actualiza la posición de Animated Value basada en homePrivate
        Animated.timing(positionValue, {
            toValue: homePrivate ? 0 : 24,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [homePrivate, positionValue]);

    const toggleActivation = () => {
        togglePrivateHome(); // Invoca la función para cambiar el estado de homePrivate

        // Obtén el estado actualizado de homePrivate
        const isActive = !homePrivate;

        setIsActivated(isActive);
        setBackgroundColor(isActive);

        Animated.timing(positionValue, {
            toValue: isActive ? 0 : 24,
            duration: 200,
            useNativeDriver: false,
        }).start();

    };
    useEffect(() => {
        setIsActivated1(boardPrivate);

        // Actualiza la posición de Animated Value basada en homePrivate
        Animated.timing(positionValue1, {
            toValue: boardPrivate ? 0 : 24,
            duration: 200,
            useNativeDriver: false,
        }).start();
    }, [boardPrivate, positionValue1]);

    const toggleActivationBoard = () => {
        togglePrivateBoard(); // Invoca la función para cambiar el estado de homePrivate

        // Obtén el estado actualizado de homePrivate
        const isActive = !boardPrivate;

        setIsActivated1(isActive);
        setBackgroundColor1(isActive);

        Animated.timing(positionValue1, {
            toValue: isActive ? 0 : 24,
            duration: 200,
            useNativeDriver: false,
        }).start();

    };

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
                                <View style={{ justifyContent: 'center', alignItems: 'center', left: -10 }}>
                                    <Text style={[style.b16, { color: dark ? "#FFFFFF" : '#000000', }]}>
                                        Privacy
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
                                                        Home privacy
                                                    </Text>
                                                </View>
                                                <TouchableOpacity onPress={toggleActivation}>
                                                    <ImageBackground
                                                        source={homePrivate ? require('./../../img/Container1.png') : require('./../../img/Container.png')}
                                                        style={{
                                                            width: 52,
                                                            height: 32,
                                                            top: 0,

                                                        }}
                                                    >
                                                        <Animated.View style={{ transform: [{ translateX: positionValue }] }}>
                                                            <Image source={require('./../../img/Knob.png')} style={{ width: 45, height: 45, top: -4, left: -8 }} />
                                                        </Animated.View>
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                            </View>
                                        </View>


                                    </View>
                                    <View style={{ flexDirection: 'column', width: '96%', justifyContent: 'center', paddingTop: 10, borderTopWidth: 1, borderColor: 'gray' }}>

                                        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                                            <View style={{ width: width - 20, flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginVertical: 10 }}>
                                                <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>

                                                    <Text style={[style.r16, { color: dark ? "#FFFFFF" : '#000000', marginLeft: 10 }]}>
                                                        Board privacy
                                                    </Text>
                                                </View>
                                                <TouchableOpacity onPress={toggleActivationBoard}>
                                                    <ImageBackground
                                                        source={boardPrivate ? require('./../../img/Container1.png') : require('./../../img/Container.png')}
                                                        style={{
                                                            width: 52,
                                                            height: 32,
                                                            top: 0,

                                                        }}
                                                    >
                                                        <Animated.View style={{ transform: [{ translateX: positionValue1 }] }}>
                                                            <Image source={require('./../../img/Knob.png')} style={{ width: 45, height: 45, top: -4, left: -8 }} />
                                                        </Animated.View>
                                                    </ImageBackground>
                                                </TouchableOpacity>
                                            </View>
                                        </View>


                                    </View>
                                    <View style={{ width: '80%', justifyContent: 'center', alignItems: 'center', marginLeft: '8%', marginTop: '5%' }}>
                                        <Text style={[style.r12, { color: 'gray', marginBottom: '5%' }]}>If your account is public, anyone both within and outside of Instagram can view your profile and posts, even those who do not have an Instagram account.</Text>

                                        <Text style={[style.r12, { color: 'gray', marginBottom: '5%' }]}>If your account is private, only approved followers can see the content you share, such as your photos or videos on location pages and hashtags, as well as your followers and following lists.</Text>
                                        <Text style={[style.r12, { color: 'gray', marginBottom: '5%' }]}>If you're under 18, for added security, your account is set to private by default.</Text>
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

export default Privacy