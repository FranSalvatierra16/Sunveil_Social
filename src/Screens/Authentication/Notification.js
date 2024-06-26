import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, Animated, Alert, ScrollView } from 'react-native';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { ImageBackground } from 'react-native';
import { useAuth } from '../../context/AuthProvider';
import { NavBack } from '../../theme/Icons';
import i18n from '../../i18n';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Notifications({ navigation }) {
    const [isActivated, setIsActivated] = useState(false);
    const [positionValue, setPositionValue] = useState(new Animated.Value(0));
    const [backgroundColor, setBackgroundColor] = useState(false)
    const { inputs, setInputs, handleInputsChange, register } = useAuth();

    const toggleActivation = () => {
        setIsActivated(!isActivated);
        setBackgroundColor(!isActivated)
        Animated.timing(positionValue, {
            toValue: isActivated ? 0 : 24,
            duration: 200,
            useNativeDriver: false,
        }).start();
    };

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                    <NavBack />
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: '95%', height: 2, backgroundColor: '#F8F9FA', marginTop: '5%' }}>
                            <View style={{ width: '90%', height: '100%', backgroundColor: '#4CD864' }} />
                        </View>
                    </View>
                    <View style={[style.main, {}]}>
                        <View style={{
                            marginTop: '20%',
                            height: 160,
                            width: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Image
                                source={require('../../../img/campana.png')}
                                style={{
                                    width: '50%',
                                    height: '50%',
                                    resizeMode: 'contain',
                                }}
                            />
                        </View>
                        <View>
                            <Text style={[style.b34, { color: `${Colors.subt}`, marginTop: '3%', textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('notifications.turn')}</Text>
                        </View>
                        <View>
                            <Text style={[style.l17, { color: '#000000', marginTop: '5%', textAlign: 'center', alignSelf: 'center' }]}> {i18n.t('notifications.enable')}</Text>
                        </View>

                        <View style={{ flex: 1, alignItems: 'center', marginTop: '10%' }}>
                            <View style={{ width: 325, height: 67, borderRadius: 8, elevation: 5, shadowColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 200, height: '100%', justifyContent: 'center', paddingLeft: 2, paddingTop: 10 }}>
                                        <Text style={[style.r16, { color: '#000000', textAlign: 'left' }]}>{i18n.t('notifications.turn1')}</Text>
                                    </View>
                                    <TouchableOpacity onPress={toggleActivation}>
                                        <ImageBackground
                                            source={isActivated ? require('../../../img/Container.png') : require('../../../img/Container1.png')}
                                            style={{
                                                width: 52,
                                                height: 32,
                                                top: 3,

                                            }}
                                        >
                                            <Animated.View style={{ transform: [{ translateX: positionValue }] }}>
                                                <Image source={require('../../../img/Knob.png')} style={{ width: 45, height: 45, top: -4, left: -8 }} />
                                            </Animated.View>
                                        </ImageBackground>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </View>

                        <TouchableOpacity onPress={async () => {
                            navigation.navigate('Login');
                            // let res = await register(inputs);
                            // if (!res) {
                            //     return Alert.alert('Error', 'Something went wrong, please try again');
                            // }
                            // navigation.navigate('Login');
                        }} style={[style.btn, { backgroundColor: Colors.subt, marginBottom: '5%' }]}>
                            <Text style={[style.s16, { color: '#fff' }]}>{i18n.t('notifications.continue')}</Text>
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
</ScrollView>
    );
} 