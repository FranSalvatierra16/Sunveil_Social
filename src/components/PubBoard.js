import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

import { Bookmark, Bookmark2, Chatbubble, Cross, CrossCircle, EyeIcon, Heart, Send } from '../theme/Icons';
import style from '../theme/style';
import DynamicSun from './DynamicSun';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Modal } from 'react-native';


export default function PubBoard({ profileImage, name, username, colorSol, time, imagenH, textUser, colorPrincipal, colorSecundario }) {
    const [likes, setLikes] = useState(44389);
    const [liked, setLiked] = useState(false);
    const [estadoC, setEstadoC] = useState(false);
    const [estadoB, setEstadoB] = useState(true);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [modalVisible, setModalVisible] = useState(false);
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };
    const toggleLike = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    };
    const abrirModal = () => {
        setModalVisible(true);
    };

    const cerrarModal = () => {
        setModalVisible(false);
    };
    const activeButton = () => {

        setEstadoC(!estadoC);
        setEstadoB(!estadoB);
    }
    const handleButtonLayout = (event) => {
        const { x, y } = event.nativeEvent.layout;
        setButtonPosition({ x, y });
    };
    return (
        <View style={{ width: '100%', marginTop: '5%' }}>

            <View style={{ width: '92%', height: 438, marginTop: '5%', borderRadius: 15, overflow: 'hidden', borderColor: '#E7E7E7', marginLeft: '4%', borderWidth: 1 }}>
                <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                    <View style={{ width: '18%', aspectRatio: 1, marginRight: 10, borderRadius: 999 }}>
                        <Image source={profileImage} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                    </View>

                    <View style={styles.userInfoContainer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.b16, { marginBottom: 1 }]}>
                                {name}
                            </Text>
                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                <DynamicSun
                                    colorCircle={colorSol}
                                    colorPath={Colors.solDefault}
                                    sizeWidth={25}
                                    sizeHeight={25}
                                />
                            </View>
                        </View>
                        <Text style={styles.usernameText}>{time}</Text>
                    </View>


                    <TouchableOpacity
                        onLayout={handleButtonLayout}
                        style={{
                            position: 'absolute',
                            height: 21.58,
                            width: 21.58,
                            borderRadius: 999,
                            right: 30,
                            top: '52%',
                            marginTop: -15,
                            backgroundColor: 'transparent',
                            borderColor: 'transparent',
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                        onPress={abrirModal}
                    >
                        <View style={{ flexDirection: 'column' }}>
                            <View style={{ width: 3, height: 3, backgroundColor: colorSecundario, borderRadius: 2.5 }} />
                            <View style={{ width: 3, height: 3, backgroundColor: colorSecundario, borderRadius: 2.5, marginVertical: 2 }} />
                            <View style={{ width: 3, height: 3, backgroundColor: colorSecundario, borderRadius: 2.5 }} />
                        </View>
                    </TouchableOpacity>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={cerrarModal}
                    >
                        <TouchableOpacity
                            style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5)', justifyContent: 'flex-end' }}
                            onPress={cerrarModal}
                        >
                            <View style={{
                                position: 'absolute', width: 160,
                                height: 134, top: '40%'
                                , borderRadius: 9, right: 10, backgroundColor: '#292C35', flex: 1
                            }}>

                                <TouchableOpacity style={{ width: '96%', height: '31%', flexDirection: 'row', marginTop: '3%' }}>
                                    <Image source={require('./../../img/NotiM.png')} style={{ height: 25, width: 23, marginLeft: 5 }} />
                                    <View style={{ paddingLeft: 5 }}><Text style={[style.r10, { color: '#ffffff' }]}>Turn on Notifications</Text>
                                        <Text style={[style.l6, { color: '#ffffff' }]}>for this post</Text></View>
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: '96%', height: '31%', flexDirection: 'row', marginTop: '3%' }}>
                                    <Cross size={25} style={{ color: '#9B9B9B', paddingLeft: 3 }} />
                                    <View style={{ paddingLeft: 5 }}>
                                        <Text style={[style.r10, { color: '#ffffff' }]}>Hide Post</Text>
                                        <Text style={[style.l6, { color: '#ffffff' }]}>See few post like This</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ width: '96%', height: '31%', flexDirection: 'row', marginTop: '3%' }}>
                                    <CrossCircle size={25} style={{ color: '#9B9B9B', paddingLeft: 3 }} />
                                    <View style={{ paddingLeft: 5 }}><Text style={[style.r10, { color: '#ffffff' }]}>Flag this post</Text>
                                        <Text style={[style.l6, { color: '#ffffff' }]}>Stop Seen Post For This Page</Text></View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={cerrarModal} style={{ marginTop: 10 }}>
                                    <Text style={{ color: 'white' }}>Cerrar modal</Text>
                                </TouchableOpacity>

                            </View>
                        </TouchableOpacity>
                    </Modal>
                </View>
                <View style={{ width: '92%', height: '15%', marginLeft: '4%', justifyContent: 'center', marginTop: '3%' }}>
                    <Text style={[style.r16, { color: 'black' }]}>{textUser}{textUser}{textUser}{textUser}{textUser}{textUser}</Text>
                </View>
                <Image source={imagenH} style={{ height: '50%', width: '92%', marginLeft: '4%', borderRadius: 16, marginTop: '3%' }} />
                <View style={{ width: '92%', marginLeft: '4%', flexDirection: 'row', alignItems: 'center', marginTop: '3%' }}>
                    <TouchableOpacity onPress={toggleLike} style={{ marginRight: 2 }}>
                        <Image
                            source={liked ? require('./../../img/CorazonRojo.png') : require('./../../img/Corazon.png')}
                            style={{ width: 18.33, height: 16.94, tintColor: !liked ? colorSecundario : '#FE4040' }}
                        />
                    </TouchableOpacity>
                    <Text style={[style.m14, { color: colorSecundario }]}>{likes}</Text>

                    <TouchableOpacity style={{ marginLeft: 5, marginRight: 2 }}>
                        <Image
                            source={require('./../../img/Comment.png')}
                            style={{ width: 18.33, height: 16.94, tintColor: colorSecundario }}
                        />
                    </TouchableOpacity>
                    <Text style={[style.m14, { color: colorSecundario }]}>44873</Text>

                    <TouchableOpacity style={{ marginLeft: 5, marginRight: 2 }}>
                        <Image
                            source={require('./../../img/Send.png')}
                            style={{ width: 18.33, height: 16.94, }}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ position: 'absolute', right: 10 }} onPress={handlePress}>
                        {isPressed ? <Bookmark size={20} /> : <Bookmark2 size={20} style={{ color: 'black' }} />}
                    </TouchableOpacity>
                </View>
            </View>




        </View>
    );
};

const styles = StyleSheet.create({
    userInfoContainer: {
        flex: 1,
    },
    usernameText: {
        fontSize: 12,
        color: 'gray',

    }, touchableOpacityStyle: {
        position: 'absolute',
        height: 60,
        width: '100%',
        top: '96%',
        marginTop: -25,
        backgroundColor: 'transparent',
        justifyContent: 'center',

        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOpacity: 1,
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowRadius: 6,
            },
            android: {
                elevation: 30,
                backgroundColor: 'rgba(0, 0, 0, 0.2)',
            },
        }),
    },
    modalContainer: {
        // Centrar horizontalmente el modal
        width: 160,
        height: 134,
        borderRadius: 9,
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderColor: 'transparent',
        borderWidth: 1,
        alignItems: 'center',
        marginBottom: Platform.OS === 'ios' ? 30 : 0, // Ajuste para dispositivos iOS
    },
})