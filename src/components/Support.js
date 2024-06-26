import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, KeyboardAvoidingView, StyleSheet } from 'react-native';
import { Colors } from './../theme/color';
import style from './../theme/style';
import { NavBack, Search } from './../theme/Icons';
import { ImageBackground } from 'react-native';
import { Nav } from './nav';
import i18n from '../i18n';
import { useDarkMode } from './darkMode';

const height = Dimensions.get('screen').height;

export default function Support({ navigation }) {
    const { dark, toggleDarkMode } = useDarkMode();
    const [searchText, setSearchText] = useState('');
    const [comment, setComment] = useState("");



    return (
        <SafeAreaView style={[style.area, { backgroundColor: dark ? "#202020" : "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>

                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', }}>
                            <NavBack color={dark ? "#FEFEFE" : '#000000'} />
                            <Text style={[style.s22, { color: dark ? "#FEFEFE" : '#000000', marginTop: 20 }]}>{i18n.t('support.support')}</Text>
                            <Search size={24} style={{ marginTop: 20, marginRight: 20, color: dark ? "#FEFEFE" : '#000000' }} />
                        </View>
                        <ScrollView style={{ width: '100%', marginTop: '5%', height: '80%' }}>
                            <View style={{ width: '100%', backgroundColor: 'transparent', flexDirection: 'column', alignItems: 'center' }}>
                                <View style={{ alignItems: 'center', flexDirection: 'row', left: -40 }}>
                                    <Image source={require('./../../img/perfilS.png')} style={{ width: 48, height: 48, borderRadius: 99 }} />
                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <View style={{ width: 240, height: 104, borderRadius: 24, borderBottomLeftRadius: 4, backgroundColor: dark ? "#434343" : '#F5F5F5', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                            <Text style={[style.r14, { color: dark ? "#FEFEFE" : '#000000', }]}>{i18n.t('support.m1')}</Text>

                                        </View>
                                        <Text style={[style.r12, { color: dark ? "#DADADA" : '#757575', marginLeft: 10, marginTop: 5 }]}>08:20 AM</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center', flexDirection: 'row', right: -70, marginTop: 20 }}>

                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <View style={{ width: 200, height: 80, borderRadius: 24, borderBottomRightRadius: 4, backgroundColor: dark ? "#490517" : '#FFECEF', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                            <Text style={[style.r14, { color: dark ? "#FEFEFE" : '#DF1525', }]}>{i18n.t('support.m2')}</Text>

                                        </View>
                                        <Text style={[style.r12, { color: dark ? "#FEFEFE" : '#757575', marginLeft: 10, marginTop: 5 }]}>08:21 AM</Text>
                                    </View>
                                </View>
                                <View style={{
                                    alignItems: 'center', flexDirection: 'row', left: -40, marginTop: 20
                                }}>
                                    <ImageBackground source={require('./../../img/perfilS2.png')} style={{ width: 48, height: 48, borderRadius: 99 }} >
                                        <Image source={require('./../../img/IconP.png')} style={{ width: 16, height: 16, right: -35, top: 30 }} />
                                    </ImageBackground>
                                    <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                        <View style={{ width: 240, height: 152, borderRadius: 24, borderBottomLeftRadius: 4, backgroundColor: dark ? "#434343" : '#F5F5F5', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                            <Text style={[style.r14, { color: dark ? "#FEFEFE" : '#000000', }]}>{i18n.t('support.m3')}</Text>

                                        </View>
                                        <Text style={[style.r12, { color: dark ? "#DADADA" : '#757575', marginLeft: 10, marginTop: 5 }]}>08:22 AM</Text>
                                    </View>
                                </View>
                             
                            </View>
                        </ScrollView>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, backgroundColor: dark ? "#434343" : '#ffffff', flexDirection: 'row' }}>
                            <Image source={require('./../../img/camera1.png')} style={{ width: 20, height: 19, left: -10, tintColor: dark ? "#FEFEFE" : '#000000' }} />
                            <View style={{ flexDirection: 'row', width: 306, height: 42, borderRadius: 24, backgroundColor: dark ? "#202020" : '#F5F5F5', justifyContent: 'space-between', paddingLeft: 10, alignItems: 'center' }}>
                                <TextInput
                                    style={{ color: '#757575' }}
                                    value={comment}
                                    onChangeText={text => setComment(text)}
                                    placeholder={i18n.t('support.write')}
                                    placeholderTextColor="#6E707A"
                                    keyboardType="default"
                                />

                                <Image source={require('./../../img/carita.png')} style={{ width: 20, height: 20, right: 10, tintColor: dark ? "#FEFEFE" : '#000000' }} />
                            </View>
                        </View>
                        <Nav />
                    </View>
                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    );
}
