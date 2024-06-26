import { View, Text, Image, Modal, Dimensions, TextInput, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import style from '../theme/style';
import { useDarkMode } from '../components/darkMode';

import { Colors } from '../theme/color';
import { EyeIcon, Plus } from '../theme/Icons';

export default function LiveVideo() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [histEst, setHistEst] = useState(-2);
    const [modalVisible, setModalVisible] = useState(true);
    const { dark, toggleDarkMode } = useDarkMode();

    const [paused, setPaused] = useState(true);
    const [muted, setMuted] = useState(true);
    const togglePlayPause = () => {
        setPaused(!paused);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };
    const handleCloseModal = () => {
        setModalVisible(false);
        if (onClose) {
            onClose();
        }
    };

    return (
        <SafeAreaView style={style.area}>
            <LinearGradient
                colors={['rgba(255, 255, 255, 1)', 'rgba(205, 205, 205, 1)', 'rgba(243, 243, 243, 1)']}
                style={{ flex: 1 }}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            >
                <View style={{ flex: 1 }}>
                    <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                        <View style={{ width: '100%', flex: 1 }}>
                            <View style={{ width: '90%', marginLeft: '5%', marginTop: '3%', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>

                                <TouchableOpacity style={{ width: 96, height: 36, borderRadius: 13, alignItems: 'center', flexDirection: 'row' }}>
                                    <LinearGradient
                                        colors={['rgba(193, 199, 228, 0.24)', 'rgba(0, 0, 0, 0.24)']}
                                        style={{ flex: 1, borderRadius: 13, height: 36, width: 96, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <View style={{ width: 15, height: 15, backgroundColor: 'rgba(219, 0, 0, 1)', borderRadius: 99 }}></View>
                                        <Text style={[style.r20, { marginLeft: '5%', color: 'rgba(255, 255, 255, 1)' }]}>Live</Text>
                                    </LinearGradient>
                                </TouchableOpacity>
                                <TouchableOpacity

                                    style={{

                                        height: 21.58,
                                        width: 21.58,
                                        borderRadius: 999,
                                        right: 30,


                                        backgroundColor: 'transparent',
                                        borderColor: 'white',
                                        borderWidth: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}

                                >
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5 }} />
                                        <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5, marginVertical: 2 }} />
                                        <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5 }} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', borderRadius: 13, marginTop: '3%', }}>
                                <ImageBackground
                                    source={require('./../../img/shooter.png')}
                                    borderRadius={8}
                                    style={{ height: 270, width: '100%' }}




                                />

                            </View>
                            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '5%' }}>
                                <Image source={require('./../../img/Profile.png')} style={{ width: 49, height: 49, borderRadius: 99 }} />
                                <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: '5%' }}>
                                    <Text style={[style.r18, { color: 'rgba(255, 255, 255, 1)' }]}>Counter Strike 2</Text>
                                    <Text style={[style.r13, { color: 'rgba(255, 255, 255, 1)' }]}>Daniellll.007</Text>
                                </View>
                                <Image source={require('./../../img/LikeLive.png')} style={{ width: 25, height: 25, marginLeft: '25%' }} />
                                <Image source={require('./../../img/saveLive.png')} style={{ width: 23, height: 23, marginLeft: '2%' }} />
                            </View>
                            <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '5%' }}>
                                <TouchableOpacity style={{ width: 131, height: 28, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(188, 185, 222, 0.24)', justifyContent: 'space-evenly' }}>
                                    <Plus size={20} color='white' />
                                    <Text style={[style.r18, { color: 'rgba(255, 255, 255, 1)' }]}>Follow</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 63, height: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginLeft: '45%' }}>
                                    <Text style={[style.r18, { color: 'rgba(255, 255, 255, 1)' }]}>12.6 K </Text>
                                    <EyeIcon size={20} color='white' />

                                </TouchableOpacity>
                            </View>
                            <Text style={[style.r24, { marginLeft: '5%', color: 'white', marginTop: '2%' }]}>Comment</Text>
                            <ScrollView style={{ flex: 1 }}>
                                <View style={{ width: '90%', marginLeft: '5%', height: 309, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                                    <LinearGradient
                                        colors={['rgba(193, 199, 228, 0.24)', 'rgba(0, 0, 0, 0.24)',]}
                                        style={{ flex: 1, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
                                        start={{ x: 0, y: 0 }}
                                        end={{ x: 1, y: 1 }}
                                    >
                                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '2%' }}>
                                            <Image source={require('./../../img/Profile.png')} style={{ width: 49, height: 49, borderRadius: 99 }} />
                                            <Text style={[style.r14, { marginLeft: '5%', color: 'rgba(255, 255, 255, 1)' }]}>Juniorfoxyy: baileyw7m on top</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '2%' }}>
                                            <Image source={require('./../../img/profile1.png')} style={{ width: 49, height: 49, borderRadius: 99 }} />
                                            <Text style={[style.r14, { marginLeft: '5%', color: 'rgba(255, 255, 255, 1)', width: '80%' }]}>українська кіберспортивна компанія, яка є #1 у Східній .......</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '2%' }}>
                                            <Image source={require('./../../img/Profile22.png')} style={{ width: 49, height: 49, borderRadius: 99 }} />
                                            <Text style={[style.r14, { marginLeft: '5%', color: 'rgba(255, 255, 255, 1)' }]}>你的遊戲非常好</Text>
                                        </View>
                                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '2%' }}>
                                            <Image source={require('./../../img/Profile.png')} style={{ width: 49, height: 49, borderRadius: 99 }} />
                                            <Text style={[style.r14, { marginLeft: '5%', color: 'rgba(255, 255, 255, 1)' }]}>Hai un livello elevato</Text>
                                        </View>
                                        <View style={{ width: '90%', marginLeft: '5%', marginTop: '2%', height: 1, backgroundColor: 'rgba(255, 255, 255, 0.5)' }}></View>
                                        <View style={{ flexDirection: 'row', width: '90%', alignItems: 'center', marginLeft: '5%', marginTop: '2%' }}>
                                            <Image source={require('./../../img/Profile22.png')} style={{ width: 49, height: 49, borderRadius: 99 }} />
                                            <TextInput style={{ width: 240, height: 33, marginLeft: '3%', borderRadius: 8, gap: 108, backgroundColor: 'rgba(255, 255, 255, 1)' }}
                                                placeholder='Add your comment'
                                                placeholderTextColor='rgba(0, 0, 0, 0.5)'
                                                place
                                            >
                                            </TextInput>
                                        </View>
                                    </LinearGradient>
                                </View>
                            </ScrollView>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </LinearGradient>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Fondo negro para el modal
    },

});
