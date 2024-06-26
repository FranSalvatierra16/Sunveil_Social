import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar, Platform, KeyboardAvoidingView, Switch, Animated, TextInput, ImageBackground, Modal } from 'react-native';
import style, { height, width } from './../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, NavBack, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, Search, ShieldIcon, SupportAgentIcon, } from './../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from './../components/nav';
import DynamicSun from './../components/DynamicSun';
import { Avatar, IconButton, Stack, Surface } from '@react-native-material/core';
import { useDarkMode } from './../components/darkMode';
import Video from 'react-native-video';
import { LiveVideo } from './LiveVideo';
const LiveZone = () => {
    const navigation = useNavigation();
    const { dark, toggleDarkMode } = useDarkMode();
    const [isActive, setIsActive] = useState(false);
    const [video, setVideo] = useState(false);
    const activeSearch = () => {
        setIsActive(!isActive);
    }; const [paused, setPaused] = useState(false);
    const togglePlayPause = () => {
        setPaused(!paused);
    };
    const [muted, setMuted] = useState(true);
    const toggleMuted = () => {
        setMuted(!muted);
    };
    const handleHistoryClose = () => {
        setVideo(false)
    };
    return (
        <SafeAreaView style={[style.area, { backgroundColor: dark ? "#000000" : "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
                    flex: 1,
                    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                }}>


                    <View style={{ width: width, flex: 1, }}>
                        <View style={{ width: width, flex: 1, }}>
                            <View style={{ width: '100%', justifyContent: 'center' }}>

                                <NavBack />
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '3%' }}>
                                    <Text style={[style.s20, { color: dark ? '#ffffff' : '#000000', marginLeft: '5%' }]}>Watch Live</Text>
                                    <TouchableOpacity style={{ borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', marginRight: '5%' }} onPress={activeSearch}>
                                        <Image source={require('./../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                                    </TouchableOpacity>
                                </View>
                                <View style={{ width: 500, height: 1, marginTop: '3%', backgroundColor: dark ? '#ffffff' : '#323233' }} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', justifyContent: 'space-between', marginLeft: '10%', marginTop: '3%' }}>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('./../../img/heart1.png')} style={{}} />
                                        <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Following</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <ImageBackground source={require('./../../img/Ellipse_747.png')} style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', tintColor: '#F7B84B' }} >
                                            <Image source={require('./../../img/bruj.png')} style={{}} />
                                        </ImageBackground>
                                        <Text style={[style.r10, { color: '#F7B84B' }]} > Discover</Text>
                                    </View>
                                    <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image source={require('./../../img/Frame.png')} style={{}} />
                                        <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Browse</Text>
                                    </View>
                                </View>
                                {isActive ? (<View style={{ flexDirection: "row", alignItems: 'center', borderColor: dark ? '#ffffff' : '#000000', borderWidth: 1, borderRadius: 16, marginLeft: '5%', marginTop: 10, padding: 5, width: 327, height: 51 }}>
                                    <Image source={require('./../../img/search1.png')} style={{ width: 20, height: 20, marginLeft: 10, tintColor: dark ? "#ffffff" : "#000000" }} />
                                    <TextInput
                                        style={{
                                            borderWidth: 0,
                                            backgroundColor: 'transparent',
                                            width: '90%',
                                            paddingHorizontal: 10,
                                            color: dark ? "#ffffff" : "#000000",
                                        }}
                                        placeholder="Search live channels or streamers"
                                        placeholderTextColor={dark ? "#ffffff" : "#000000"}
                                    />
                                </View>) : (null)}

                            </View>
                            <View style={{ width: '100%', height: 200 }}>
                                <ScrollView horizontal={true} style={{}} >
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginLeft: 15, }}>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                    </View>
                                </ScrollView>
                            </View>
                            <View style={{ width: '100%', height: 100, marginTop: '2%' }}>
                                <ScrollView horizontal={true} style={{}} >
                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginLeft: 15, }}>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('./../../img/Overwatch.png')} style={{ height: 60, width: 60, borderRadius: 22 }} />
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <ImageBackground source={require('./../../img/cat3.png')} style={{ height: 60, width: 60, justifyContent: 'center', alignItems: 'center' }} >
                                                <Image source={require('./../../img/cat2.png')} style={{ borderRadius: 22 }} />
                                            </ImageBackground>
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('./../../img/Live1.png')} style={{ height: 60, width: 60, borderRadius: 22 }} />
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('./../../img/Live1.png')} style={{ height: 60, width: 60, borderRadius: 22 }} />
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('./../../img/Live1.png')} style={{ height: 60, width: 60, borderRadius: 22 }} />
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('./../../img/Live1.png')} style={{ height: 60, width: 60, borderRadius: 22 }} />
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                        <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('./../../img/Live1.png')} style={{ height: 60, width: 60, borderRadius: 22 }} />
                                            <Text style={[style.r10, { color: dark ? '#F4F3FC' : '#000000' }]}>Overwatch</Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>


                            <View style={{ width: '100%', height: 300 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center ', width: '90%', marginLeft: '5%', justifyContent: 'space-between' }}>
                                    <Text style={[style.s20, { color: dark ? '#DDE3F0' : '#000000' }]}>
                                        Top Streamers Live
                                    </Text>
                                    <Text style={[style.r10, { color: '#F7B84B', marginTop: '2%' }]}>
                                        View all
                                    </Text>
                                </View>
                                <ScrollView horizontal={true} style={{ top: '-20%' }} >

                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginLeft: 15, }}>
                                        <TouchableOpacity style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} onPress={() => navigation.navigate('LiveVideo')}>
                                            <Image source={require('./../../img/Live1.png')} borderRadius={16} style={{ height: '100%', width: '100%', }} />

                                        </TouchableOpacity>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                        <ImageBackground source={require('./../../img/Live1.png')} borderRadius={16} style={{ marginTop: '5%', height: 150, width: 270, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >

                                        </ImageBackground>
                                    </View>
                                </ScrollView>


                            </View>
                            {/* <Modal
                                visible={video}
                                animationType="slide"
                                transparent={true}
                                onRequestClose={() => setVideo(false)}
                            >
                                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'red' }} onPress={() => setVideo(false)}>
                                    <View style={{
                                        justifyContent: 'center',
                                        width: '90%',
                                        borderRadius: 20,
                                        marginLeft: '5%',
                                        position: 'absolute',
                                        top: '10%',
                                        height: '80%',
                                        backgroundColor: 'green',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                    }}>
                                        <Video
                                            source={require('./../../img/video2.mov')}
                                            borderRadius={8}
                                            style={{ flex: 1, height: '100%', width: '100%', borderRadius: 8 }}
                                            resizeMode="cover"
                                            repeat
                                            paused={paused}
                                            muted={muted}

                                            fullSreen
                                        />
                                    </View>
                                </TouchableOpacity>
                            </Modal> */}
                            {video ? (
                                <LiveVideo
                                    visible={true}
                                    onClose={handleHistoryClose}
                                />
                            ) : (null)}
                            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>

                                <Nav />
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    )
}

export default LiveZone