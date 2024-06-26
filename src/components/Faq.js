import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { Colors } from './../theme/color';
import style from './../theme/style';
import { NavBack, Search } from './../theme/Icons';
import { Nav } from './nav';
import i18n from '../i18n';
import { useDarkMode } from './darkMode';

const height = Dimensions.get('screen').height;

export default function Faq({ navigation }) {
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [searchText, setSearchText] = useState('');
    const { dark, toggleDarkMode } = useDarkMode();

    const [comment, setComment] = useState("");
    

    const handlePress = (index) => {
        setOpenedIndex(openedIndex === index ? -1 : index);
    };
    const question = [
        {
            "id": 1,
            "pregunta": i18n.t('question.question1'),
            "respuesta": i18n.t('question.answer1'),
        },
        {
            "id": 2,
            "pregunta": i18n.t('question.question2'),
            "respuesta": i18n.t('question.answer1'),
        },
        {
            "id": 3,
            "pregunta": i18n.t('question.question3'),
            "respuesta": i18n.t('question.answer1'),
        },
        {
            "id": 4,
            "pregunta": i18n.t('question.question4'),
            "respuesta": i18n.t('question.answer1'),
        },
        {
            "id": 5,
            "pregunta": i18n.t('question.question5'),
            "respuesta": i18n.t('question.answer1'),
        }
    ];


    const filterQuestion = searchText
        ? question.filter(question => question.pregunta.toLowerCase().includes(searchText.toLowerCase()))
        : question;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#F8F9FA' }]}>
            <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>

                        <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', }}>
                            <NavBack color={dark ? "#FEFEFE" : '#000000'} />
                            <Text style={[style.s22, { color: dark ? "#FEFEFE" : '#000000', marginTop: 20 }]}>FAQ</Text>
                            <Search size={24} style={{ marginTop: 20, marginRight: 20, color: dark ? "#FEFEFE" : '#000000' }} />
                        </View>

                        <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
                            <Text style={[style.s22, { color: dark ? "#FEFEFE" : '#000000', }]}>{i18n.t('faq.how')}</Text>
                        </View>

                        <View style={{ marginBottom: 10, backgroundColor: dark ? "#434343" : '#F5F5F5', width: 342, height: 56, borderRadius: 12, flexDirection: 'row', alignItems: 'center' }}>
                            <Search size={24} style={{ marginLeft: '5%', color: dark ? "#FFFFFF" : '#000000' }} />
                            <TextInput
                                style={[style.r14, { marginLeft: '5%', width: '80%', borderColor: 'transparent', color: dark ? "#000000" : '#757575' }]}
                                placeholder={i18n.t('faq.keyboard')}
                                placeholderTextColor={dark ? "#DADADA" : '#757575'}
                                value={searchText}
                                onChangeText={text => setSearchText(text)}
                            />
                        </View>
                    
                        <ScrollView horizontal={true}>
                            <View style={{ alignContent: 'center', flexDirection: 'row' }}>
                                <View style={{ width: 144, height: 116, flexDirection: 'column', backgroundColor: dark ? "#103E63" : '#DFF1FF', borderRadius: 8, marginLeft: 10, justifyContent: 'center', paddingLeft: 10 }}>
                                    <Image source={require('./../../img/Vector1.png')} size={20} style={{ color: dark ? "#438FFF" : '#1573FE' }} />

                                    <View style={{ flexDirection: 'column', borderRadius: 8, }}>

                                        <Text style={[style.r14, { paddingTop: 15, color: dark ? "#EFEFEF" : '#616161' }]}>{i18n.t('faq.about')}</Text>
                                        <Text style={[style.s14, { color: dark ? "#FEFEFE" : '#000000', top: -7 }]}>{i18n.t('faq.get')} </Text>
                                    </View>
                                </View>
                                <View style={{ width: 144, height: 116, flexDirection: 'column', backgroundColor: dark ? "#2A4037" : '#E8FFEB', borderRadius: 8, marginLeft: 10, justifyContent: 'center', paddingLeft: 10 }}>
                                    <Image source={require('./../../img/Vector.png')} size={20} style={{ color: dark ? "#07F8B5" : '#1573FE' }} />

                                    <View style={{ flexDirection: 'column', borderRadius: 8, }}>

                                        <Text style={[style.r14, { paddingTop: 15, color: dark ? "#EFEFEF" : '#616161' }]}>{i18n.t('faq.about')}</Text>
                                        <Text style={[style.s14, { color: dark ? "#FEFEFE" : '#000000', top: -7 }]}>{i18n.t('faq.invest')}</Text>
                                    </View>
                                </View>

                                <View style={{ width: 144, height: 116, flexDirection: 'column', backgroundColor: dark ? "#FF5361" : '#FFECEF', borderRadius: 8, marginLeft: 10, justifyContent: 'center', paddingLeft: 10 }}>
                                    <Image source={require('./../../img/Vector3.png')} size={20} style={{ color: dark ? "#EFEFEF" : '#1573FE' }} />

                                    <View style={{ flexDirection: 'column', borderRadius: 8, }}>

                                        <Text style={[style.r14, { paddingTop: 15, color: dark ? "#EFEFEF" : '#616161' }]}>{i18n.t('faq.about')}</Text>
                                        <Text style={[style.s14, { color: dark ? "#FEFEFE" : '#000000', top: -7 }]}>{i18n.t('faq.get')}</Text>
                                    </View>
                                </View>

                            </View>
                        </ScrollView>
                        <View style={{ width: '88%', flexDirection: 'row', marginLeft: '6%', marginTop: '5%' }}>
                            <Text style={[style.s16, { color: dark ? "#FEFEFE" : '#000000' }]}>{i18n.t('faq.top')}</Text>
                            <TouchableOpacity style={{ position: 'absolute', right: 20 }}>
                                <Text style={[style.s16, { color: dark ? "#FF5361" : '#DF1525' }]}>{i18n.t('faq.view')}</Text>
                            </TouchableOpacity>
                        </View>
                        <ScrollView style={{ height: height * 0.5, marginTop: '5%' }}>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                {filterQuestion.map((q, index) => (
                                    <View key={index} style={{ width: 342, borderRadius: 8, borderWidth: 1, borderColor: '#D9D9D9', alignItems: 'center', flexDirection: 'row', marginTop: '2%', paddingLeft: '2%', height: openedIndex === index ? 129 : 79 }}>
                                        <View style={{ width: '90%', justifyContent: 'center', flexDirection: 'column' }}>
                                            <Text style={[style.s14, { color: dark ? "#FEFEFE" : '#000000' }]}>{q.pregunta}</Text>
                                            {openedIndex === index && <Text style={[style.r14, { color: dark ? "#DADADA" : '#000000' }]}>{q.respuesta}</Text>}
                                        </View>
                                        <TouchableOpacity onPress={() => handlePress(index)} style={{ width: 24, height: 24, marginLeft: '3%' }}>
                                            <Image
                                                source={openedIndex === index ? require('./../../img/minusP.png') : require('./../../img/plusP.png')}
                                                style={{ width: 12, height: openedIndex === index ? 3 : 12, tintColor: dark ? "#FF5361" : '#DF1525' }}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </View>

                        </ScrollView>
                        <Nav />
                    </View>
                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    );
}
