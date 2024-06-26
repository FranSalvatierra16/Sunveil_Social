import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, ImageBackground } from 'react-native'; // Agrega FlatList, Image y TouchableOpacity
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { Heart, Hearto, Pause, Play, Search, Send, Star, Staro } from '../../theme/Icons';
import UserProfile from '../../components/Pub';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { History, StoryUser } from '../../components/Story';
import { PhotoViewer } from '../../components/ViewPhotos';
import { Animated } from 'react-native';
import { Comment } from '../../components/Comment';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
import Video from 'react-native-video';
export default function ForYouFeed({ navigation }) {
    const [nameColor, setNameColor] = useState('black');
    const [buttonColors, setButtonColors] = useState([]);
    const [showScroll1, setShowScroll1] = useState(true);
    const [showScroll2, setShowScroll2] = useState(false);
    const [likes, setLikes] = useState(89);
    const [liked, setLiked] = useState(false);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [scrollScale, setScrollScale] = useState(1);
    const [dark, setDark] = useState(-1);
    const [modalVisible, setModalVisible] = useState(false);
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [openedIndexReplyI, setOpenedIndexReplyI] = useState(-1);
    const [openedIndexStarI, setOpenedIndexStarI] = useState(-1);
    const [openedIndexI, setOpenedIndexI] = useState(-1);
    const [seguido, setSeguido] = useState(-1);
    const [openedIndexReply, setOpenedIndexReply] = useState(-1);
    const [openedIndexStar, setOpenedIndexStar] = useState(-1);
    const scrollY = new Animated.Value(0);
    const scrollAnimation = new Animated.Value(1);
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
    const [comment, setComment] = useState("");
    const darkPress = () => {
        setDark(dark === -1 ? 0 : -1);
    };
    const [isModalVisible, setIsModalVisible] = useState(true);
    const [paused, setPaused] = useState(false);
    const togglePlayPause = () => {
        setPaused(!paused);
    };
    const toggleModal = () => {
        setIsModalVisible(false);
    }; const handleScroll2 = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );
    const handleOpenModal = () => {
        setModalVisible(true);
    };

    const handleCloseModal = () => {
        setModalVisible(false);
    };
    const userP = {
        id: 1,
        name: 'anita',
        username: 'username',
        image: require('../../../img/person/person1.jpg'),

        colorSol: Colors.sol1,
        text: 'Aca en la playa disfrutando del sol.'
    }
    const users = [

        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/history.png'),
            photos: [
                require('../../../img/historia1.jpg'),
                require('../../../img/historia2.jpg'),
                require('../../../img/historia3.webp'),
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Aca en la playa disfrutando del sol.',
            userType: 'sponsored'
        },
        {
            id: 2,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Disfrutando de una tarde tranquila en la costa.',
            userType: 'normal'
        },
        {
            id: 3,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),

                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Caminando por la orilla del mar.',
            userType: 'normal'
        },
        {
            id: 4,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Jugando con las olas en la playa.',
            userType: 'sponsored'
        },
        {
            id: 5,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Tomando fotos del atardecer en la costa.',
            userType: 'sponsored'
        },
        {
            id: 6,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Haciendo castillos de arena en la playa.',
            userType: 'normal'
        },
        {
            id: 7,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Bailando con amigos en la orilla del mar.',
            userType: 'normal'
        },
        {
            id: 8,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Haciendo un picnic en la playa.',
            userType: 'normal'
        },
        {
            id: 9,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Surfeando en las olas del mar.',
            userType: 'sponsored'
        },
        {
            id: 10,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Descansando bajo una sombrilla en la playa.',
            userType: 'sponsored'
        },
        {
            id: 11,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Haciendo un paseo en bote por la costa.',
            userType: 'normal'
        },
        {
            id: 12,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Observando cangrejos en la playa.',
            userType: 'normal'
        },
        {
            id: 13,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Haciendo yoga al amanecer en la playa.',
            userType: 'normal'
        },
        {
            id: 14,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Recogiendo conchas marinas en la orilla.',
            userType: 'normal'
        },
        {
            id: 15,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Haciendo un picnic familiar en la playa.',
            userType: 'normal'
        },
        {
            id: 16,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol3,
            text: 'Corriendo por la arena en la playa.',
            userType: 'normal'
        },
        {
            id: 17,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol2,
            text: 'Haciendo castillos de arena en la playa.',
            userType: 'normal'
        },
        {
            id: 18,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            photos: [
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png'),
                require('../../../img/profile1.png')
                // Agrega más fotos si es necesario
            ],
            colorSol: Colors.sol1,
            text: 'Disfrutando de un día soleado en la costa.',
            userType: 'sponsored'
        }


    ];
    const scroll1 = () => {
        setShowScroll1(true)
        setShowScroll2(false)
    };
    const scroll2 = () => {
        setShowScroll2(true)
        setShowScroll1(false)
    };
    const handleScroll = (event) => {
        const { y } = event.nativeEvent.contentOffset;
        const opacity = y <= 0 ? 1 : 1 - (y / 100);
        setScrollOpacity(opacity);

        // Calcula el factor de escala en función del desplazamiento
        const scale = Math.max(1 - y / 100, 0.5); // Puedes ajustar el valor 200 según tus necesidades
        setScrollScale(scale);
    };
    const [followStatus, setFollowStatus] = useState(Array(users.length).fill(false));

    const handlePressSeguir = (index) => {
        const newFollowStatus = [...followStatus]; // Copiar el estado actual
        newFollowStatus[index] = !newFollowStatus[index]; // Alternar el estado del índice dado
        setFollowStatus(newFollowStatus); // Actualizar el estado
    };
    // Puedes agregar más usuarios aquí
    const leftColumn = [];
    const rightColumn = [];
    users.forEach((user, index) => {
        const randomHeight = [100, 200, 300][Math.floor(Math.random() * 3)]; // Altura aleatoria entre 100, 200 y 300
        const imageComponent = (
            <View key={user.id} style={{ marginBottom: '2%', paddingLeft: 5 }}>
                <Image source={user.imagenH} style={{ width: '100%', height: randomHeight, resizeMode: 'cover', borderRadius: 8 }} />
            </View>
        );
        if (index % 2 === 0) {
            leftColumn.push(imageComponent);
        } else {
            rightColumn.push(imageComponent);
        }
    });

    const renderColumns = () => {
        const columns = [];
        for (let i = 0; i < Math.max(leftColumn.length, rightColumn.length); i++) {
            columns.push(
                <View key={i} style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                    {leftColumn[i]}
                    {rightColumn[i]}
                </View>
            );
        }
        return columns;
    };
    return (
        <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#FFFFFF' }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>

                    <View style={{ width: '100%', flex: 1, }}>

                        {showScroll1 && (
                            <ScrollView style={{ width: '100%', marginTop: '5%', marginBottom: '1%' }} stickyHeaderIndices={[1]}>
                                <View style={{ width: '40%', marginLeft: '30%', height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',marginTop:'5%' }}>
                                    <TouchableOpacity onPress={darkPress}>
                                        <Image source={require('../../../img/night.png')} style={{ width: 30, height: 30, tintColor: dark ? '#ffffff' : '#000000' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image source={userP.image} style={{ width: 52, height: 52, borderRadius: 999 }} />
                                    </TouchableOpacity>
                                    <DynamicSun sizeHeight='30' sizeWidth='30' />
                                </View>



                                <View style={{ backgroundColor: 'transparent' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%' }}>

                                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("FriendsFeed")}>
                                            <Text style={[style.s14, { color: '#A8A8A8' }]}>Friends</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>For You</Text>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: -200 }}>
                                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }}>
                                                <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} title="Mostrar Scroll 2" onPress={scroll2}>
                                                <Image source={require('../../../img/window.png')} style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000', }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>




                                {users.map((user) => (
                                    <View key={user.id}>
                                        <UserProfile
                                            profileImage={user.image}
                                            name={user.name}
                                            username={user.username}
                                            colorSol={user.colorSol}
                                            time="6hrs ago"
                                            imagenH={user.imagenH}
                                            textUser={user.text}
                                            colorPrincipal={dark ? 'black' : 'white'}
                                            colorSecundario={dark ? 'white' : 'black'}
                                            type={user.userType}
                                            seguido='si'
                                            dark={dark}
                                        />
                                    </View>
                                ))}

                            </ScrollView>

                        )}
                        {showScroll2 && (

                            <ScrollView style={{ width: '100%', marginTop: '5%', marginBottom: '1%' }}>
                                <View style={{ width: '40%', marginLeft: '30%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                                    <TouchableOpacity onPress={darkPress}>
                                        <Image source={require('../../../img/night.png')} style={{ width: 30, height: 30, tintColor: dark ? '#ffffff' : '#000000' }} />
                                    </TouchableOpacity>
                                    <TouchableOpacity >
                                        <Image source={userP.image} style={{ width: 52, height: 52, borderRadius: 999 }} />
                                    </TouchableOpacity>
                                    <DynamicSun sizeHeight='30' sizeWidth='30' colorPath={dark ? '#ffffff' : '#000000'} />
                                </View>



                                <View style={{ backgroundColor: 'transparent' }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%' }}>
                                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>Friends</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("ForYouFeed")}>
                                            <Text style={[style.s14, { color: '#A8A8A8' }]}>For you</Text>
                                        </TouchableOpacity>
                                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: -200 }}>
                                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }} onPress={() => navigation.navigate("SearchPage")}>
                                                <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                                            </TouchableOpacity>
                                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} title="Mostrar Scroll 2" onPress={scroll1}>
                                                <Image source={require('../../../img/window.png')} style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000', color: 'black' }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>


                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: '10%' }}>

                                    <View style={{ width: '48%' }}>
                                        {users.map((user, index) => {
                                            if (index % 2 !== 0) return null;
                                            const randomHeight = [200, 220, 240, 260, 280, 300][Math.floor(Math.random() * 6)];
                                            return (
                                                <View key={user.id} style={{ marginBottom: '2%', paddingLeft: 5, }}>
                                                    <View style={{ width: '50%', flexDirection: 'row', marginTop: '2%' }}>

                                                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>

                                                            <Text style={[style.r10, { color: '#616161', paddingLeft: 2, top: -5 }]}>30 seconds ago</Text>
                                                        </View>
                                                        <TouchableOpacity

                                                            style={{
                                                                position: 'absolute',
                                                                height: 20,
                                                                width: 20,

                                                                right: -90,
                                                                top: '52%',
                                                                marginTop: -15,
                                                                backgroundColor: 'transparent',


                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}

                                                        >
                                                            <View style={{ flexDirection: 'column' }}>
                                                                <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                                                <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5, marginVertical: 2 }} />
                                                                <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>

                                                    {index !== 2 ? (
                                                        <ImageBackground source={user.imagenH} borderRadius={8} style={{ width: '100%', height: randomHeight, resizeMode: 'cover', borderRadius: 8 }} >
                                                            {/* <Text style={[style.r10, { position: 'absolute', bottom: 5, left: 5, color: '#EFEFF1', }]}>{user.text}</Text> */}
                                                            <View style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }}>
                                                                <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, marginLeft: '5%', marginTop: '5%' }} />
                                                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={[style.b10, { color: '#ffffff', paddingLeft: 2 }]}>{user.name}</Text>

                                                                    </View>
                                                                    <Text style={[style.r10, { color: '#ffffff', top: -7 }]}>@{user.username}</Text>
                                                                </View>
                                                                <View style={{ position: 'absolute', top: 5, right: 5 }}>
                                                                </View>
                                                                <TouchableOpacity key={index} style={{ position: 'absolute', top: 8, right: 5 }} onPress={() => handlePressSeguir(index)}>
                                                                    {followStatus[index] ? (
                                                                        <DynamicSun
                                                                            colorCircle={user.colorSol}
                                                                            colorPath='white'
                                                                            sizeWidth={15}
                                                                            sizeHeight={15}
                                                                        />
                                                                    ) : (
                                                                        <View style={{ width: 10, height: 10, top: 5, borderRadius: 99, backgroundColor: user.colorSol }} />
                                                                    )}
                                                                </TouchableOpacity>
                                                            </View>

                                                        </ImageBackground>
                                                    ) : (

                                                        <View style={{ flex: 1 }}>
                                                            <Video
                                                                source={require('../../../img/video2.mov')}
                                                                borderRadius={8}
                                                                style={{ flex: 1, height: randomHeight, width: '100%', borderRadius: 8 }}
                                                                resizeMode="cover"
                                                                repeat
                                                                paused={paused}
                                                                muted
                                                            />
                                                            <TouchableOpacity
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: '90%',
                                                                    left: '90%',
                                                                    marginLeft: -20,
                                                                    marginTop: -20,
                                                                    backgroundColor: 'transparent',
                                                                    borderRadius: 20,
                                                                    padding: 10,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}
                                                                onPress={togglePlayPause}
                                                            >
                                                                {paused ? <Play size={20} color={'#FF9900'} /> : <Pause size={20} color={'#FF9900'} />}

                                                            </TouchableOpacity>
                                                            <View style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }}>
                                                                <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, marginLeft: '5%', marginTop: '5%' }} />
                                                                <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                                                    <View style={{ flexDirection: 'row' }}>
                                                                        <Text style={[style.b10, { color: '#ffffff', paddingLeft: 2 }]}>{user.name}</Text>

                                                                    </View>
                                                                    <Text style={[style.r10, { color: '#ffffff', top: -7 }]}>@{user.username}</Text>
                                                                </View>

                                                                <TouchableOpacity key={index} style={{ position: 'absolute', top: 5, right: 5 }} onPress={() => handlePressSeguir(index)}>
                                                                    {followStatus[index] ? (
                                                                        <DynamicSun
                                                                            colorCircle={user.colorSol}
                                                                            colorPath='white'
                                                                            sizeWidth={25}
                                                                            sizeHeight={25}
                                                                        />
                                                                    ) : (
                                                                        <View style={{ width: 10, height: 10, top: 5, borderRadius: 99, backgroundColor: user.colorSol }} />
                                                                    )}
                                                                </TouchableOpacity>
                                                            </View>
                                                        </View>

                                                    )
                                                    }
                                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>
                                                        {/* <View style={{ width: '40%', flexDirection: 'row', marginTop: '2%' }}>
                              <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, }} />
                              <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                <View style={{ flexDirection: 'row' }}>
                                  <Text style={[style.b10, { color: '#616161', paddingLeft: 2 }]}>{user.name}</Text>
                                  <View style={{ position: 'relative', top: 3, left: 2 }}>
                                    <DynamicSun
                                      colorCircle={user.colorSol}
                                      colorPath={Colors.solDefault}
                                      sizeWidth={10}
                                      sizeHeight={10}

                                    />
                                  </View>
                                </View>
                                <Text style={[style.r8, { color: '#616161', top: -7 }]}>@{user.username}</Text>
                              </View>

                            </View> */}
                                                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', left: 50 }}>
                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', }}
                                                                onPress={() => handlePressLikedI(index)}
                                                            >


                                                                {openedIndexI === index ? <Heart size={9} style={{ color: '#FE4040' }} /> : <Hearto size={9} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                                <Text style={{ marginLeft: '2%', fontSize: 9, color: openedIndexI ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                                onPress={() => handlePressReplyI(index)}
                                                            >

                                                                <Image source={openedIndexReplyI === index ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                                    style={{ width: 9, height: 9, tintColor: openedIndexReplyI === index ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                                />

                                                                <Text style={{ marginLeft: '2%', fontSize: 9, color: openedIndexReplyI === index ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                                onPress={handleOpenModal}

                                                            >

                                                                <Image source={require('../../../img/Comment2.png')}
                                                                    style={{ width: 9, height: 9, tintColor: dark ? '#ffffff' : '#000000' }}
                                                                />

                                                                <Text style={{ marginLeft: '2%', fontSize: 9, color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                                <Comment visible={modalVisible} onClose={handleCloseModal} />
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                            >

                                                                <Send
                                                                    size={9}
                                                                    style={{ color: dark ? '#ffffff' : '#000000', left: 25, transform: [{ rotate: '-45deg' }] }} />



                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{
                                                                    left: 30, top: 1
                                                                }}
                                                                onPress={() => handlePressStarI(index)}
                                                            >
                                                                {openedIndexStarI === index ? <Star size={9} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={9} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                            </TouchableOpacity>

                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginTop: '5%',
                                                        width: 100,
                                                        alignSelf: 'center',

                                                    }}>
                                                        <View style={{ flex: 1, height: 2, backgroundColor: dark ? '#ffffff' : '#000000', width: '100%' }}></View>

                                                    </View>
                                                </View>

                                            );
                                        })}
                                    </View>
                                    <View style={{ width: '48%' }}>
                                        {users.map((user, index) => {
                                            if (index % 2 == 0) return null;
                                            const randomHeight = [200, 220, 240, 260, 280, 300][Math.floor(Math.random() * 6)];
                                            return (
                                                <View key={user.id} style={{ marginBottom: '2%', paddingLeft: 5, }}>
                                                    <View style={{ width: '50%', flexDirection: 'row', marginTop: '2%' }}>

                                                        <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>

                                                            <Text style={[style.r10, { color: '#616161', paddingLeft: 2, top: -5 }]}>30 seconds ago</Text>
                                                        </View>
                                                        <TouchableOpacity

                                                            style={{
                                                                position: 'absolute',
                                                                height: 20,
                                                                width: 20,

                                                                right: -90,
                                                                top: '52%',
                                                                marginTop: -15,
                                                                backgroundColor: 'transparent',


                                                                justifyContent: 'center',
                                                                alignItems: 'center'
                                                            }}

                                                        >
                                                            <View style={{ flexDirection: 'column' }}>
                                                                <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                                                <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5, marginVertical: 2 }} />
                                                                <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <ImageBackground source={user.imagenH} borderRadius={8} style={{ width: '100%', height: randomHeight, resizeMode: 'cover', borderRadius: 8 }} >
                                                        {/* <Text style={[style.r10, { position: 'absolute', bottom: 5, left: 5, color: '#EFEFF1', }]}>{user.text}</Text> */}
                                                        <View style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }}>
                                                            <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, marginLeft: '5%', marginTop: '5%' }} />
                                                            <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                                                <View style={{ flexDirection: 'row' }}>
                                                                    <Text style={[style.b10, { color: '#ffffff', paddingLeft: 2 }]}>{user.name}</Text>

                                                                </View>
                                                                <Text style={[style.r10, { color: '#ffffff', top: -7 }]}>@{user.username}</Text>
                                                            </View>
                                                            <TouchableOpacity key={index} style={{ position: 'absolute', top: 8, right: 5 }} onPress={() => handlePressSeguir(index)}>
                                                                {followStatus[index] ? (
                                                                    <DynamicSun
                                                                        colorCircle={user.colorSol}
                                                                        colorPath='white'
                                                                        sizeWidth={15}
                                                                        sizeHeight={15}
                                                                    />
                                                                ) : (
                                                                    <View style={{ width: 10, height: 10, top: 5, borderRadius: 99, backgroundColor: user.colorSol }} />
                                                                )}
                                                            </TouchableOpacity>

                                                        </View>
                                                    </ImageBackground>
                                                    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>
                                                        {/* <View style={{ width: '40%', flexDirection: 'row', marginTop: '2%' }}>
                              <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, }} />
                              <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                <View style={{ flexDirection: 'row' }}>
                                  <Text style={[style.b10, { color: '#616161', paddingLeft: 2 }]}>{user.name}</Text>
                                  <View style={{ position: 'relative', top: 3, left: 2 }}>
                                    <DynamicSun
                                      colorCircle={user.colorSol}
                                      colorPath={Colors.solDefault}
                                      sizeWidth={10}
                                      sizeHeight={10}

                                    />
                                  </View>
                                </View>
                                <Text style={[style.r8, { color: '#616161', top: -7 }]}>@{user.username}</Text>
                              </View>

                            </View> */}
                                                        <View style={{ width: '100%', alignItems: 'center', flexDirection: 'row', left: 50 }}>
                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', }}
                                                                onPress={() => handlePressLikedI(index)}
                                                            >


                                                                {openedIndexI === index ? <Heart size={9} style={{ color: '#FE4040' }} /> : <Hearto size={9} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                                <Text style={{ marginLeft: '2%', fontSize: 9, color: openedIndexI ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                                onPress={() => handlePressReplyI(index)}
                                                            >

                                                                <Image source={openedIndexReplyI === index ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                                    style={{ width: 9, height: 9, tintColor: openedIndexReplyI === index ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                                />

                                                                <Text style={{ marginLeft: '2%', fontSize: 9, color: openedIndexReplyI === index ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                                onPress={handleOpenModal}

                                                            >

                                                                <Image source={require('../../../img/Comment2.png')}
                                                                    style={{ width: 9, height: 9, tintColor: dark ? '#ffffff' : '#000000' }}
                                                                />

                                                                <Text style={{ marginLeft: '2%', fontSize: 9, color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                                <Comment visible={modalVisible} onClose={handleCloseModal} />
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                            >

                                                                <Send
                                                                    size={9}
                                                                    style={{ color: dark ? '#ffffff' : '#000000', left: 25, transform: [{ rotate: '-45deg' }] }} />



                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{
                                                                    left: 30, top: 1
                                                                }}
                                                                onPress={() => handlePressStarI(index)}
                                                            >
                                                                {openedIndexStarI === index ? <Star size={9} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={9} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                            </TouchableOpacity>

                                                        </View>
                                                    </View>
                                                    <View style={{
                                                        flexDirection: 'row',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        marginTop: '5%',
                                                        width: 100,
                                                        alignSelf: 'center',

                                                    }}>
                                                        <View style={{ flex: 1, height: 2, backgroundColor: dark ? '#ffffff' : '#000000', width: '100%' }}></View>

                                                    </View>
                                                </View>

                                            );
                                        })}
                                    </View>
                                </View>

                            </ScrollView>

                        )}
                        <Nav navigation={navigation} />
                    </View>


                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userContainer: {
        margin: 3,
        alignItems: 'center',
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 100,
        overflow: 'hidden', // Para recortar la imagen correctamente
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ajusta la imagen para cubrir todo el espacio
    },

});
