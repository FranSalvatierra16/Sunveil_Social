import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { ImageBackground } from 'react-native';
import { NavBack, Tick } from '../../theme/Icons';
import { useAuth } from '../../context/AuthProvider';
import i18n from '../../i18n';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Preferences({ navigation }) {
    const [selectedOption, setSelectedOption] = useState(null);
    const { inputs, setInputs, handleInputsChange } = useAuth();

    const imagePaths = [
        require('../../../img/politic.png'),
        require('../../../img/Education.png'),
        require('../../../img/Economy.png'),
        require('../../../img/Technology.png'),
        require('../../../img/food.png'),
        require('../../../img/Health.png'),
        require('../../../img/sports.png'),
        require('../../../img/Automotive.png'),
        require('../../../img/Fashion.png'),
        require('../../../img/Entertaint.png'),
        require('../../../img/politic.png'),
        require('../../../img/Education.png'),
        require('../../../img/Economy.png'),
        require('../../../img/Technology.png'),
        require('../../../img/food.png'),
        require('../../../img/Health.png'),
        require('../../../img/sports.png'),
        require('../../../img/Automotive.png'),
        require('../../../img/Fashion.png'),
        require('../../../img/Entertaint.png'),
        require('../../../img/politic.png'),
        require('../../../img/Education.png'),
        require('../../../img/Economy.png'),
        require('../../../img/Technology.png'),
        require('../../../img/food.png'),
        require('../../../img/Health.png'),
        require('../../../img/sports.png'),
        require('../../../img/Automotive.png'),
        require('../../../img/Fashion.png'),
        require('../../../img/Entertaint.png'),
        require('../../../img/Automotive.png'),
        require('../../../img/Fashion.png'),
        require('../../../img/Entertaint.png'),
    ];

    const titles = [
        i18n.t('titles.AIArt'),
        i18n.t('titles.ApparelTrends'),
        i18n.t('titles.BeautyProducts'),
        i18n.t('titles.Books&Writing'),
        i18n.t('titles.Cars&Trucks'),
        i18n.t('titles.Comedy'),
        i18n.t('titles.Dance'),
        i18n.t('titles.DIY&Crafts'),
        i18n.t('titles.Economy'),
        i18n.t('titles.Educational'),
        i18n.t('titles.Entrepreneurship'),
        i18n.t('titles.Fashion'),
        i18n.t('titles.Food'),
        i18n.t('titles.Gadgets&Electronics'),
        i18n.t('titles.Gifs'),
        i18n.t('titles.Health&Wellness'),
        i18n.t('titles.History'),
        i18n.t('titles.MarketTrends'),
        i18n.t('titles.Memes'),
        i18n.t('titles.Movies'),
        i18n.t('titles.Music&Video'),
        i18n.t('titles.News'),
        i18n.t('titles.OutdoorAdventures'),
        i18n.t('titles.Pets'),
        i18n.t('titles.Photography'),
        i18n.t('titles.Politics'),
        i18n.t('titles.Science'),
        i18n.t('titles.Software&Apps'),
        i18n.t('titles.SpaceExploration'),
        i18n.t('titles.Sports'),
        i18n.t('titles.Technology'),
        i18n.t('titles.Travel'),
        i18n.t('titles.WildLife'),

    ];

    const [selectedButtons, setSelectedButtons] = useState([]);

    const handleSelect = (index) => {
        if (selectedButtons.includes(index)) {
            setSelectedButtons(selectedButtons.filter((item) => item !== index));
        } else {
            if (selectedButtons.length < 100) {
                setSelectedButtons([...selectedButtons, index]);
            }
        }
    };

    const isButtonSelected = (index) => selectedButtons.includes(index);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                    <NavBack />
                    <View style={{ alignItems: 'center' }}>
                        <View style={{ width: '95%', height: 2, backgroundColor: '#F8F9FA', marginTop: '5%' }}>
                            <View style={{ width: '66%', height: '100%', backgroundColor: '#4CD864' }} />
                        </View>
                    </View>
                    <View style={[style.main, {}]}>

                        <View>
                            <Text style={[style.s18, { color: `${Colors.subt}`, marginTop: '6%', textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('preferences.which')}</Text>
                        </View>
                        <View>
                            <Text style={[style.r18, { color: '#9AA0A6', marginTop: '1%', textAlign: 'center', alignSelf: 'center' }]}> {i18n.t('preferences.pick')}</Text>
                        </View>
                        <ScrollView contentContainerStyle={styles.buttonContainer}>
                            {imagePaths.map((imagePath, index) => (
                                <TouchableOpacity
                                    key={index}
                                    style={[styles.button, isButtonSelected(index) && styles.selectedButton]}
                                    onPress={() => handleSelect(index)}
                                >
                                    <ImageBackground source={imagePath} style={styles.backgroundImage} resizeMode="cover">
                                        <Text style={[style.s18, { color: '#fff', paddingTop: 5, textAlign: 'left', alignSelf: 'flex-start', paddingLeft: 7 }]}>
                                            {titles[index]}
                                        </Text>
                                        {isButtonSelected(index) && (
                                            <View style={styles.selectedIndicator}>
                                                <Tick style={{ color: 'white' }} />
                                            </View>
                                        )}
                                    </ImageBackground>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>

                        {selectedButtons.length >= 8 && (
                            <TouchableOpacity onPress={() => {
                                console.log({
                                    ...inputs, preferences: selectedButtons.map((index) => titles[index])
                                });
                                setInputs({ ...inputs, preferences: selectedButtons.map((index) => titles[index]) });
                                navigation.navigate('Notifications')
                            }} style={[style.btn, { backgroundColor: Colors.subt, marginBottom: '5%' }]}>
                                <Text style={[style.s16, { color: '#fff' }]}>{i18n.t('preferences.continue')}</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    button: {
        width: '49%',
        aspectRatio: 1.73,
        height: 110,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: '3%',
        borderWidth: 2,
        borderColor: 'transparent',
        position: 'relative',
    },
    selectedButton: {
        borderColor: "#1667EB",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedIndicator: {
        position: 'absolute',
        top: '50%',
        right: 5,
        marginTop: -10,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1667EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
