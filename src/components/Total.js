import React, { useState } from 'react';
import { View, Image, StyleSheet, Dimensions, SafeAreaView, StatusBar, KeyboardAvoidingView, TouchableOpacity, Text, ImageBackground, Modal, TextInput, ScrollView } from 'react-native';
import Swiper, { Pagination } from 'react-native-swiper';
import style from '../theme/style';
import { useDarkMode } from './darkMode';
import { Colors } from '../theme/color';
import { Nav } from './nav';
import { Facebook, Heart, Hearto, Link, Plus, PlusProfile, Send, Shared, WhatsApp } from '../theme/Icons';
import DynamicSun from './DynamicSun';
import Svg, { Path } from 'react-native-svg';
import { Comment } from './Comment';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 4;
const FullScreenImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const { dark } = useDarkMode();
    const [friends, setFriends] = useState(-1);
    const [modalEnviar, setModalEnviar] = useState(false);
    const [isLiked, setIsLiked] = useState(liked);
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [openedIndexReplyI, setOpenedIndexReplyI] = useState(-1);
    const [openedIndexStarI, setOpenedIndexStarI] = useState(-1);
    const [openedIndexI, setOpenedIndexI] = useState(-1);
    const [openedIndexReply, setOpenedIndexReply] = useState(-1);
    const [openedIndexStar, setOpenedIndexStar] = useState(-1);
    const [likes, setLikes] = useState(89);
    const [liked, setLiked] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const handleOpenModal = () => {
        setModalVisible(true);
    };
    const initialUsers = [

        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('./../../img/profile1.png'),
            imagenH: require('./../../img/history.png'),
            photos: [
                require('./../../img/historia1.jpg'),
                require('./../../img/historia2.jpg'),
                require('./../../img/historia3.webp'),
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Aca en la playa disfrutando del sol.',
            userType: 'sponsored',
            like: true,
            save: true,
            historia: true
        },
        {
            id: 2,
            name: 'Jam2',
            username: 'username',
            image: require('./../../img/profile2.png'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],

            colorSol: Colors.sol2,
            text: 'Disfrutando de una tarde tranquila en la costa.',
            userType: 'normal',
            like: true,
            save: true,
            historia: true

        },
        {
            id: 3,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),

                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Caminando por la orilla del mar.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 4,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Jugando con las olas en la playa.',
            userType: 'sponsored',
            like: true,
            save: true, historia: true
        },
        {
            id: 5,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Tomando fotos del atardecer en la costa.',
            userType: 'sponsored',
            like: true,
            save: true, historia: true
        },
        {
            id: 6,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Haciendo castillos de arena en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 7,
            name: 'anita',
            username: 'username',
            image: require('./../../img/profile1.png'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Bailando con amigos en la orilla del mar.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 8,
            name: 'Jam2',
            username: 'username',
            image: require('./../../img/profile2.png'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Haciendo un picnic en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 9,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Surfeando en las olas del mar.',
            like: true,
            save: true, historia: true,
            userType: 'sponsored'
        },
        {
            id: 10,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Descansando bajo una sombrilla en la playa.',
            userType: 'sponsored',
            like: true,
            save: true, historia: true
        },
        {
            id: 11,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Haciendo un paseo en bote por la costa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 12,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Observando cangrejos en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 13,
            name: 'anita',
            username: 'username',
            image: require('./../../img/profile1.png'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Haciendo yoga al amanecer en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 14,
            name: 'Jam2',
            username: 'username',
            image: require('./../../img/profile2.png'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Recogiendo conchas marinas en la orilla.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 15,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Haciendo un picnic familiar en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 16,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Corriendo por la arena en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 17,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Haciendo castillos de arena en la playa.',
            userType: 'normal',
            like: true,
            save: true, historia: true
        },
        {
            id: 18,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('./../../img/person/person1.jpg'),
            imagenH: require('./../../img/pub2.png'),
            photos: [
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png'),
                require('./../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Disfrutando de un día soleado en la costa.',
            userType: 'sponsored',
            like: true,
            save: true, historia: true
        }


    ];
    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const handlePressLiked = (index) => {
        setOpenedIndex(openedIndex === index ? -1 : index);
    };
    const handlePressStar = (index) => {
        setOpenedIndexStar(openedIndexStar === index ? -1 : index);
    };
    const handlePressReplyI = (index) => {
        setOpenedIndexReplyI(openedIndexReplyI === index ? -1 : index);
    };
    const handlePressLikedI = (index) => {
        setOpenedIndexI(openedIndexI === index ? -1 : index);
    };
    const handlePressStarI = (index) => {
        setOpenedIndexStarI(openedIndexStarI === index ? -1 : index);
    };
    const handlePressReply = (index) => {
        setOpenedIndexReply(openedIndexReply === index ? -1 : index);
    };
    const handleLike = () => {
        setIsLiked(!isLiked);

    };
    const [users, setUsers] = useState(initialUsers);
    const friendsPress = () => {
        setFriends(friends === -1 ? 0 : -1);
    };
    return (
        <View style={{ flex: 1 }}>
            <StatusBar backgroundColor={dark ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
            <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#ffffff' }]}>
                <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#FFFFFF' }}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                        <Swiper
                            direction={'vertical'}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper"
                        >
                            {users.map((user, index) => (
                                <View key={index} style={styles.slide}>
                                    <ImageBackground source={user.imagenH} style={styles.image}>

                                        {friends === 0 ? (
                                            <>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '25%', }}>
                                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>Friends</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={friendsPress}>
                                                        <Text style={[style.s14, { color: '#A8A8A8' }]}>For you</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </>
                                        ) : (
                                            <>
                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '25%', }}>
                                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={friendsPress}>
                                                        <Text style={[style.s14, { color: '#A8A8A8' }]}>Friends</Text>
                                                    </TouchableOpacity>
                                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>For You</Text>
                                                    </TouchableOpacity>
                                                </View>
                                            </>

                                        )}
                                        <View style={{ width: '100%', height: '10%', position: 'absolute', top: '65%', marginLeft: '5%', backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ width: '5%', aspectRatio: 1, marginRight: 10, borderRadius: 999 }}>
                                                <Image source={user.image} style={{ width: 46, height: 46, borderRadius: 999, marginTop: '10%', marginLeft: '5%' }} />
                                            </View>

                                            <View style={styles.userInfoContainer}>
                                                <View style={{ flexDirection: 'row', marginLeft: '20%', marginTop: '20%' }}>
                                                    <Text style={[style.b16, { marginBottom: 1, color: 'black' }]}>
                                                        {user.name}
                                                    </Text>
                                                    {friends === 0 ? (

                                                        <View style={{ position: 'relative', top: 3, left: 2 }}>
                                                            <DynamicSun
                                                                colorCircle={user.colorSol}
                                                                colorPath={'black'}
                                                                sizeWidth={20}
                                                                sizeHeight={20}

                                                            />
                                                        </View>
                                                    ) : (
                                                        <View style={{ position: 'relative', top: 3, left: 2, }}>
                                                            <View style={{ width: 15, height: 15, backgroundColor: user.colorSol, borderRadius: 99 }}></View>
                                                        </View>
                                                    )}
                                                </View>
                                                <Text style={[style.r12, { color: 'rgba(97, 97, 97, 1)', marginLeft: '15%' }]}>@{user.username}</Text>
                                            </View>

                                            <Text style={[style.r12, { fontSize: 12, color: '#7D7C7C', position: 'absolute', right: 60, top: '55%' }]}>2 hours</Text>
                                        </View>
                                        <View style={{ width: '70%', height: 50, top: '80%', marginLeft: '15%', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: 10, position: 'absolute', alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', }}
                                                onPress={() => handlePressLikedI(index)}
                                            >


                                                {openedIndexI === index ? <Heart size={19} style={{ color: '#FE4040' }} /> : <Hearto size={19} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                <Text style={{ marginLeft: '5%', fontSize: 19, color: openedIndexI ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                            </TouchableOpacity>



                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                onPress={handleOpenModal}

                                            >

                                                <Image source={require('./../../img/Comment2.png')}
                                                    style={{ width: 19, height: 19, tintColor: dark ? '#ffffff' : '#000000' }}
                                                />

                                                <Text style={{ marginLeft: '2%', fontSize: 19, color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                <Comment visible={modalVisible} onClose={handleCloseModal} />
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                onPress={() => setModalEnviar(!modalEnviar)}

                                            >

                                                <Send
                                                    size={19}
                                                    style={{ color: dark ? '#ffffff' : '#000000', left: 25, transform: [{ rotate: '-45deg' }] }} />



                                            </TouchableOpacity>
                                        </View>

                                    </ImageBackground>
                                </View>
                            ))
                            }
                        </Swiper >
                    </KeyboardAvoidingView >
                    <Modal
                        visible={modalEnviar}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalEnviar(false)}
                    >
                        <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)' }} onPress={() => setModalEnviar(false)}>
                            <View style={{
                                justifyContent: 'center',
                                width: '90%',
                                borderRadius: 20,
                                marginLeft: '5%',
                                position: 'absolute',
                                top: '10%',

                                backgroundColor: dark ? "#000000" : "#ffffff",
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity style={{ width: 60, height: 2, backgroundColor: '#BDC1C6', marginTop: '5%' }} ></TouchableOpacity>
                                <View style={{ flexDirection: "row", alignItems: 'center', borderColor: dark ? '#ffffff' : '#000000', borderWidth: 1, borderRadius: 16, marginLeft: '5%', marginTop: 10, marginBottom: '3%', padding: 5, width: 327, height: 51 }}>
                                    <Image source={require('./../../img/search1.png')} style={{ width: 20, height: 20, marginLeft: 10, tintColor: dark ? "#ffffff" : "#000000" }} />
                                    <TextInput
                                        style={{
                                            borderWidth: 0,
                                            backgroundColor: 'transparent',
                                            width: '90%',
                                            paddingHorizontal: 10,
                                            color: dark ? "#ffffff" : "#000000",
                                        }}
                                        placeholder="Search "
                                        placeholderTextColor={dark ? "#ffffff" : "#000000"}
                                    />
                                </View>
                                <ScrollView style={{ flex: 1, height: 400, marginBottom: '3%' }}>
                                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '96%', alignItems: 'center', justifyContent: 'center', marginLeft: '2%' }}>
                                        {initialUsers.map((user, index,) => (
                                            <>
                                                <View style={{ justifyContent: 'center', width: '32%', alignItems: 'center' }}>
                                                    <TouchableOpacity
                                                        key={index}
                                                        style={{
                                                            backgroundColor: '#ddd',
                                                            width: 70
                                                            , gap: 30,
                                                            height: 70,
                                                            borderRadius: itemWidth / 2,
                                                            overflow: 'hidden',
                                                            borderWidth: 1,
                                                            borderColor: user.colorSol,

                                                            margin: 5,
                                                        }}
                                                    >
                                                        <Image
                                                            source={user.image}
                                                            style={{
                                                                flex: 1,
                                                                width: '100%',
                                                                height: '100%',
                                                                resizeMode: 'cover',
                                                            }}

                                                        />

                                                    </TouchableOpacity>

                                                    <Text style={{ color: dark ? "#ffffff" : "#000000", }}>{user.username}</Text>
                                                </View>
                                            </>
                                        ))}
                                    </View >

                                </ScrollView>
                                <View style={{ height: 100, width: '96%', marginLeft: '2%', backgroundColor: 'transprarent', borderTopWidth: 1, borderTopColor: 'gray' }}>
                                    <ScrollView horizontal={true} >
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity


                                                    style={{
                                                        backgroundColor: dark ? '#1C1C1C' : '#F8F9FA',
                                                        width: 50
                                                        ,
                                                        height: 50,

                                                        borderRadius: 99,
                                                        justifyContent: 'center', alignItems: 'center',
                                                        margin: 5,
                                                    }}
                                                >
                                                    <PlusProfile size={20} color={dark ? 'white' : 'black'}

                                                    />

                                                </TouchableOpacity>

                                                <Text style={[style.r12, { color: dark ? 'white' : 'black' }]}>     Add {'\n'} to
                                                    history</Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity


                                                    style={{
                                                        backgroundColor: dark ? '#1C1C1C' : '#F8F9FA',
                                                        width: 50
                                                        ,
                                                        height: 50,

                                                        borderRadius: 99,
                                                        justifyContent: 'center', alignItems: 'center',
                                                        margin: 5,
                                                    }}
                                                >
                                                    <Shared size={20} color={dark ? 'white' : 'black'}

                                                    />




                                                </TouchableOpacity>

                                                <Text style={[style.r12, { color: dark ? 'white' : 'black' }]}> Share {'\n'}   on ...
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity


                                                    style={{
                                                        backgroundColor: dark ? '#1C1C1C' : '#F8F9FA',
                                                        width: 50
                                                        ,
                                                        height: 50,

                                                        borderRadius: 99,
                                                        justifyContent: 'center', alignItems: 'center',
                                                        margin: 5,
                                                    }}
                                                >
                                                    <Link size={20} color={dark ? 'white' : 'black'}

                                                    />


                                                </TouchableOpacity>

                                                <Text style={[style.r12, { color: dark ? 'white' : 'black' }]}> Copy {'\n'}   link
                                                </Text>
                                            </View>
                                        </View>

                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity


                                                    style={{
                                                        backgroundColor: dark ? '#1C1C1C' : '#F8F9FA',
                                                        width: 50
                                                        ,
                                                        height: 50,

                                                        borderRadius: 99,
                                                        justifyContent: 'center', alignItems: 'center',
                                                        margin: 5,
                                                    }}
                                                >
                                                    <WhatsApp size={20} color={dark ? 'white' : 'black'}

                                                    />


                                                </TouchableOpacity>

                                                <Text style={[style.r12, { color: dark ? 'white' : 'black' }]}> WhatsApp {'\n'}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity
                                                    style={{
                                                        backgroundColor: dark ? '#1C1C1C' : '#F8F9FA',
                                                        width: 50,
                                                        height: 50,
                                                        borderRadius: 99,
                                                        justifyContent: 'center', // Centrar verticalmente
                                                        alignItems: 'center',     // Centrar horizontalmente
                                                        margin: 5,
                                                    }}
                                                >
                                                    {dark ?
                                                        <Svg width="20" height="20" style={{}} >
                                                            <Path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z" stroke="white" />
                                                        </Svg> :
                                                        <Svg width="20" height="20" style={{}} >
                                                            <Path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z" />
                                                        </Svg>
                                                    }
                                                </TouchableOpacity>

                                                <Text style={[style.r12, { color: dark ? 'white' : 'black' }]}> X {'\n'}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                                <TouchableOpacity


                                                    style={{
                                                        backgroundColor: dark ? '#1C1C1C' : '#F8F9FA',
                                                        width: 50
                                                        ,
                                                        height: 50,

                                                        borderRadius: 99,
                                                        justifyContent: 'center', alignItems: 'center',
                                                        margin: 5,
                                                    }}
                                                >
                                                    <Facebook size={20} color={dark ? 'white' : 'black'}

                                                    />


                                                </TouchableOpacity>

                                                <Text style={[style.r12, { color: dark ? 'white' : 'black' }]}> Facebook {'\n'}
                                                </Text>
                                            </View>
                                        </View>
                                    </ScrollView>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </Modal >
                    <Nav navActive="feed" />
                </View >
            </SafeAreaView >
        </View >

    );

};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,

    },
});

export default FullScreenImageSlider;
