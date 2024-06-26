import React, { useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { NavBack, Search } from '../../theme/Icons';
import { Nav } from '../../components/nav';
import i18n from '../../i18n';
import { useDarkMode } from '../../components/darkMode';

const height = Dimensions.get('screen').height;

export default function Language({ navigation }) {
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [searchText, setSearchText] = useState('');
    const { dark, toggleDarkMode } = useDarkMode();
    const [state, setState] = useState(-1);
    const [comment, setComment] = useState("");
    const [selectedLanguage, setSelectedLanguage] = useState(null);
    const darkPress = () => {
        setDark(dark === -1 ? 0 : -1);
    };

    const handleLanguagePress = (language) => {
        setSelectedLanguage(language);
        i18n.locale = language.code;
        setState(state === language.id ? -1 : language.id);
    };


    const Languages = [
        { id: 1, name: 'English', code: 'en' },
        { id: 2, name: 'Spanish', code: 'es' },
        { id: 3, name: 'French', code: 'fr' },
        { id: 4, name: 'German', code: 'de' },
        { id: 5, name: 'Italian', code: 'it' },
        { id: 6, name: 'Portuguese', code: 'pt' },
        { id: 7, name: 'Russian', code: 'ru' },
        { id: 8, name: 'Japanese', code: 'ja' },
        { id: 9, name: 'Chinese (Simplified)', code: 'zh-Hans' },
        { id: 10, name: 'Chinese (Traditional)', code: 'zh-Hant' },
        { id: 11, name: 'Arabic', code: 'ar' },
        { id: 12, name: 'Korean', code: 'ko' },
        { id: 13, name: 'Hindi', code: 'hi' },
        { id: 14, name: 'Turkish', code: 'tr' },
        // Añade más idiomas según sea necesario
    ];
    const LanguagesP = [
        { id: 1, name: 'English', code: 'en' },
        { id: 2, name: 'Spanish', code: 'es' },

    ];
    return (
        <SafeAreaView style={[style.area, { backgroundColor:dark ? '#000000' : '#F8F9FA'}]}>
            <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <TouchableOpacity onPress={darkPress}>
                            <Text>Presiona aquí</Text>
                        </TouchableOpacity>
                        <View style={{ width: '100%', flexDirection: 'row', }}>
                            <NavBack color={dark ? "#FEFEFE" : '#000000'} />
                            <Text style={[style.s22, { color: dark ? "#FEFEFE" : '#000000', marginTop: 20, marginLeft: '25%' }]}>Language</Text>

                        </View>
                        <View style={{ alignItems: 'flex-start', width: '100%', marginTop: '2%', paddingLeft: '5%' }}>
                            <Text style={[style.b18, { color: dark ? "#FEFEFE" : '#000000', }]}>Suggested</Text>
                            {LanguagesP.map((language) => (
                                <View key={language.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '2%' }}>
                                    <Text style={[style.r16, { color: dark ? "#FEFEFE" : '#000000', }]}>{language.name} ({language.code})</Text>
                                    <TouchableOpacity
                                        style={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 99,
                                            backgroundColor: selectedLanguage === language ? (state === language.id ? '#DFF1FF' : '#1573FE') : (state === language.id ? 'blue' : 'transparent'),
                                            borderColor: state === language.id ? 'transparent' : '#1573FE',
                                            borderWidth: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            right: 5
                                        }}
                                        onPress={() => setState(state === language.id ? -1 : language.id)}
                                    >
                                        <View style={{ width: 12, height: 12, borderRadius: 99, backgroundColor: state === language.id ? 'transparent' : '#DFF1FF', }} />
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                        <View style={{ width: '80%', height: 1, backgroundColor: 'gray', marginTop: '5%' }}></View>
                        <View style={{ alignItems: 'flex-start', width: '100%', marginTop: '2%', paddingLeft: '5%' }}>
                            <Text style={[style.b18, { color: dark ? "#FEFEFE" : '#000000', }]}>Others</Text>
                            <ScrollView style={{ maxHeight: height * 0.5, marginTop: '2%' }}>
                                {Languages.map((language) => (
                                    <View key={language.id} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginTop: '2%' }}>
                                        <Text style={[style.r16, { color: dark ? "#FEFEFE" : '#000000', }]}>{language.name} ({language.code})</Text>
                                        <TouchableOpacity
                                            style={{
                                                width: 20,
                                                height: 20,
                                                borderRadius: 99,
                                                backgroundColor: selectedLanguage === language ? (state === language.id ? '#DFF1FF' : '#1573FE') : (state === language.id ? 'blue' : 'transparent'),
                                                borderColor: state === language.id ? 'transparent' : '#1573FE',
                                                borderWidth: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                right: 5
                                            }}
                                            onPress={() => handleLanguagePress(language)}
                                        >
                                            <View style={{ width: 12, height: 12, borderRadius: 99, backgroundColor: state === language.id ? 'transparent' : '#DFF1FF', }} />
                                        </TouchableOpacity>
                                    </View>
                                ))}
                            </ScrollView>
                        </View>
                        <Nav />
                    </View>
                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    );
}
