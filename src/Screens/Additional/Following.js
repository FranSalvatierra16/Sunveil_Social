import { View, Text, Image, Dimensions, TextInput, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, FlatList, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useState, useContext, useEffect, } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/color'
import style from '../../theme/style'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

import { AppBar, Button } from '@react-native-material/core';

import { EmailIcon, EyeIcon, Lock, NavBack } from '../../theme/Icons';
import DynamicInput from '../../components/Input';
import PasswordInput from '../../components/PasswordInput';
import { useAuth } from '../../context/AuthProvider';
import { Nav } from '../../components/nav';

const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width
export default function Following({ navigation }) {
    const [searchText, setSearchText] = useState('');
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [total, setTotal] = useState('');

    const handleSelect = (index) => {
        if (selectedButtons.includes(index)) {
            setSelectedButtons(selectedButtons.filter((item) => item !== index));
        } else {
            if (selectedButtons.length < 1) {
                setSelectedButtons([...selectedButtons, index]);
            }
        }
    };
    useEffect(() => {
        setTotal(seguidores.length);
    }, [seguidores]);
    const isButtonSelected = (index) => selectedButtons.includes(index);

    const toggleSubscription = (index) => {
        if (selectedButtons.includes(index)) {
            setSelectedButtons(selectedButtons.filter((item) => item !== index));
            setTotal(total + 1);
        } else {
            setSelectedButtons([...selectedButtons, index]);
            setTotal(total - 1);
        }
    };

    const getSubscriptionText = (index) => {
        return selectedButtons.includes(index) ? "Unsubscribed" : "Subscribed";
    };
    const seguidores = [
        { "id": 1, "nombre": "Juan Perez", "username": "juanperez", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 2, "nombre": "María López", "username": "marialopez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 3, "nombre": "Carlos García", "username": "carlosgarcia", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 4, "nombre": "Ana Martínez", "username": "anamartinez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 5, "nombre": "Laura Rodríguez", "username": "laurarodriguez", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 6, "nombre": "Pedro Sanchez", "username": "pedrosanchez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 7, "nombre": "Sofía Ramirez", "username": "sofiaramirez", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 8, "nombre": "Diego González", "username": "diegogonzalez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 9, "nombre": "Carmen Fernández", "username": "carmenfernandez", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 10, "nombre": "Luisa Navarro", "username": "luisanavarro", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 11, "nombre": "Javier Hernández", "username": "javierhernandez", "foto_perfil": require('../../../img/profile1.png') },
        { "id": 12, "nombre": "Marta Pérez", "username": "martaperez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 13, "nombre": "Pablo Jiménez", "username": "pablojimenez", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 14, "nombre": "Lucía Gutiérrez", "username": "luciagutierrez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 15, "nombre": "Andrés Castro", "username": "andrescastro", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 16, "nombre": "Elena Morales", "username": "elenamorales", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 17, "nombre": "Mario Ruiz", "username": "marioruiz", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 18, "nombre": "Isabel López", "username": "isabellopez", "foto_perfil": require('../../../img/Profile.png') },
        { "id": 19, "nombre": "Fernando Díaz", "username": "fernandodiaz", "foto_perfil": require('../../../img/Profile22.png') },
        { "id": 20, "nombre": "Lorena Ortiz", "username": "lorenaortiz", "foto_perfil": require('../../../img/Profile.png') }
    ]
    const filterFollower = searchText
        ? seguidores.filter(seguidor => seguidor.nombre.toLowerCase().includes(searchText.toLowerCase()))
        : seguidores;

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.background }]}>
            <View style={{ flex: 1, backgroundColor: Colors.background }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <View style={{ flex: 1 }}>
                    <View style={{ left: -20, marginBottom: '5%' }}>
                        <NavBack />
                    </View>
                    <View style={{ width: '100%', justifyContent: 'center', flexDirection: 'column', marginBottom: 10 }}>

                        <Text style={[style.r24, { color: '#212121', marginLeft: '1%', marginTop: '4%' }]}>Following</Text>
                        <Text style={[style.r16, { color: '#BDC1C6', marginLeft: '1%' }]}>{total} Following </Text>
                    </View>
                    <View style={{ position: 'relative', marginBottom: 10, backgroundColor: '#F8F9FA', width: '98%', height: 56, borderRadius: 12, justifyContent: 'center' }}>
                        <Image source={require('../../../img/search1.png')} style={{ position: 'absolute', top: 13, left: 10, width: 24, height: 24, tintColor: '#BDC1C6' }} />
                        <TextInput
                            style={[style.r16, {
                                paddingVertical: 10, paddingLeft: 40, color: '#BDC1C6'
                            }]}
                            placeholder="Following..."
                            value={searchText}
                            onChangeText={text => setSearchText(text)}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', width: '100%' }}>

                        <Text>Categories</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: 20, }}>


                                <TouchableOpacity

                                    style={{
                                        backgroundColor: 'gray',
                                        width: 20,
                                        height: 20,
                                        borderRadius: 99,
                                        overflow: 'hidden',
                                        left: -30,
                                        // Para recortar las imágenes si son más grandes que el contenedor
                                    }}
                                >


                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                        {filterFollower.map((seguidor, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[{ width: '98%', height: 50, alignItems: 'center', flexDirection: 'row', marginTop: 5 }, isButtonSelected(index)]}
                                onPress={() => handleSelect(index)}
                            >
                                <View style={{ width: '98%', height: 50, alignItems: 'center', flexDirection: 'row' }}>
                                    <Image source={seguidor.foto_perfil} style={{ width: 50, height: 50, borderRadius: 99 }} />
                                    <Text style={[style.r16, { color: '#000000', marginLeft: '5%' }]}>{seguidor.nombre}  </Text>
                                    <TouchableOpacity
                                        style={{
                                            width: 107,
                                            height: 36,
                                            borderRadius: 8,
                                            backgroundColor: selectedButtons.includes(index) ? 'transparent' : '#0E1013',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            position: 'absolute',
                                            right: -5,
                                            borderWidth: 2,
                                            borderColor: '#000000'
                                        }}
                                        onPress={() => toggleSubscription(index)}
                                    >
                                        <Text style={[style.r14, { color: selectedButtons.includes(index) ? '#000000' : '#FFFFFF' }]}>
                                            {getSubscriptionText(index)}
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </ScrollView>
                </View>
                <Nav />
            </View>

        </SafeAreaView >
    )
}

const styles = StyleSheet.create({

    selectedButton: {
        borderColor: "#1667EB",
        backgroundColor: '#E8F0FD'
    },

    style2: {
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 3,
        height: 50,

        borderColor: 'transparent',
        borderWidth: 2,
        borderRadius: 12,
    }
});