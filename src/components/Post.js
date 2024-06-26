import { View, Text, Image, Modal, Dimensions, TextInput, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Cross1 } from '../theme/Icons';
import { Nav } from './nav';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { options } from 'react-native-mmkv-storage/dist/src/utils';
export default function Post({ navigation }) {
    const [selectImage, setSelectImage] = useState('')
    let options = {
        storageOptions: {
            path: "image"
        }
    }
    const ImagePicker = () => {
        launchImageLibrary(options, response => (
            setSelectImage(response.assets[0].uri),
            console.log(response.assets[0].uri)
        ))
    }
    const handlePress = () => {

        navigation.goBack();
    };
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10, width: '100%', height: 700 }}>
                <TouchableOpacity style={{ right: 10 }} onPress={handlePress}>
                    <Cross1 size={20} />
                </TouchableOpacity>
                <View style={{ width: '100%', height: 400 }} >
                    <Image style={{ width: '100%', height: 400 }} source={{ uri: selectImage }} />
                </View>
                <TouchableOpacity
                    onPress={() => {
                        ImagePicker()
                    }}
                    style={{ width: 100, height: 40 }}>
                    <Text>Elegir imagen</Text>
                </TouchableOpacity>

            </View>
            <Nav navigation={navigation} />
        </View>
    );
} 
