import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, ImageBackground, Modal, TextInput } from 'react-native';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { Ban, Chatbubble, Dislike1, Facebook, Heart, Hearto, Like1, Link, Mute, Pause, Play, PlusProfile, Search, Send, Shared, Star, Staro, Vol, WhatsApp } from '../../theme/Icons';
import UserProfile from '../../components/Pub';
import Svg, { Path } from 'react-native-svg';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { History, StoryUser } from '../../components/Story';
import { PhotoViewer } from '../../components/ViewPhotos';
import { Animated } from 'react-native';
import { Comment } from '../../components/Comment';
import Video from 'react-native-video';

import { useDarkMode } from '../../components/darkMode';
import { ListItem } from '@react-native-material/core';

const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 4;

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function FriendsFeed({ navigation }) {
  const [nameColor, setNameColor] = useState('black');

  const [showScroll1, setShowScroll1] = useState(true);
  const [showScroll2, setShowScroll2] = useState(false);
  const [shrinkView, setShrinkView] = useState(false);
  const scrollY = new Animated.Value(0);
  const scrollAnimation = new Animated.Value(1);
  const { dark, toggleDarkMode } = useDarkMode();
  const [friends, setFriends] = useState(-1);
  const [buttonColors, setButtonColors] = useState([]);
  const [likes, setLikes] = useState(89);
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [isChatBubbleHovered, setIsChatBubbleHovered] = useState(false);
  const [isRetweetHovered, setIsRetweetHovered] = useState(false);
  const [isHeartHovered, setIsHeartHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(liked);
  const [openedIndex, setOpenedIndex] = useState(-1);
  const [openedIndexReplyI, setOpenedIndexReplyI] = useState(-1);
  const [openedIndexStarI, setOpenedIndexStarI] = useState(-1);
  const [openedIndexI, setOpenedIndexI] = useState(-1);
  const [openedIndexReply, setOpenedIndexReply] = useState(-1);
  const [openedIndexStar, setOpenedIndexStar] = useState(-1);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
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
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handlePressRt = () => {
    setIsRetweetHovered(!isRetweetHovered); // Cambia el estado cuando se presiona el botón
  };
  const handlePress = () => {
    setIsPressed(!isPressed);
  };

  const darkPress = () => {
    setDark(dark === -1 ? 0 : -1);
  };
  const friendsPress = () => {
    setFriends(friends === -1 ? 0 : -1);
  };
  const [modalEnviar, setModalEnviar] = useState(false);
  const handleScroll1 = () => {
    setShowScroll1(!showScroll1)
    setShowScroll2(!showScroll2)
  };
  const handleScroll2 = () => {
    setShowScroll1(!showScroll1)
    setShowScroll2(!showScroll2)
  };
  const handleScroll = event => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const shrinkOffset = 100;
    setShrinkView(offsetY > shrinkOffset);
  }; const [paused, setPaused] = useState(true);
  const togglePlayPause = () => {
    setPaused(!paused);
  };
  const handleButtonLayout = (event) => {
    const { x, y } = event.nativeEvent.layout;

    setButtonPosition({ x, y });

  };
  const [muted, setMuted] = useState(true);
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };
  const userP = {
    id: 1,
    name: 'anita',
    username: 'username',
    image: require('../../../img/person/person1.jpg'),

    colorSol: Colors.sol1,
    text: 'Aca en la playa disfrutando del sol.'
  }
  const initialUsers = [

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
      userType: 'normal',
      like: true,
      save: true,
      historia: true,
      profile: true
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
      userType: 'normal',
      like: true,
      save: true,
      historia: true,
      video: 'si',
      profile: false
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      video: 'si',
      profile: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: false
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true, video: 'si',
      profile: false
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
      userType: 'sponsored',
      like: true,
      save: true, historia: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: false
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
      like: true,
      save: true, historia: true,
      userType: 'sponsored',
      profile: false
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
      userType: 'sponsored',
      like: true,
      save: true, historia: true,
      profile: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: false
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: false
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: true
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: false
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
      userType: 'normal',
      like: true,
      save: true, historia: true,
      profile: true
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
      userType: 'sponsored',
      like: true,
      save: true, historia: true,
      profile: false
    }


  ];
  const [historyVisible, setHistoryVisible] = useState(false);
  const [lastPress, setLastPress] = useState(0);




  const [users, setUsers] = useState(initialUsers);
  const [likeClick, setLikeClick] = useState(Array(users.length).fill(false));
  const handlePress1 = (index) => {
    const currentTime = new Date().getTime();
    const delay = 1900; // Tiempo en milisegundos para considerar un doble clic

    if (currentTime - lastPress < delay) {
      // Doble clic detectado
      handlePressLikedI(index)
      const newLikeClick = [...likeClick];
      newLikeClick[index] = true;
      setLikeClick(newLikeClick);

      setTimeout(() => {
        // Después de 2 segundos, restablecer el estado likeClick solo para el índice actual
        const resetLikeClick = [...newLikeClick];
        resetLikeClick[index] = false;
        setLikeClick(resetLikeClick);
      }, 2000);
      console.log('2')
      setPaused(!paused)
      // Aquí puedes activar el botón o realizar la acción que desees
    } else {
      // Clic simple
      setPaused(!paused)
      console.log('1')
    }

    setLastPress(currentTime);
  };
  const handlePress2 = (index) => {
    const currentTime = new Date().getTime();
    const delay = 1900; // Tiempo en milisegundos para considerar un doble clic

    if (currentTime - lastPress < delay) {
      // Doble clic detectado
      handlePressLikedI(index)
      const newLikeClick = [...likeClick];
      newLikeClick[index] = true;
      setLikeClick(newLikeClick);

      setTimeout(() => {
        // Después de 2 segundos, restablecer el estado likeClick solo para el índice actual
        const resetLikeClick = [...newLikeClick];
        resetLikeClick[index] = false;
        setLikeClick(resetLikeClick);
      }, 2000);
      console.log('2')

      // Aquí puedes activar el botón o realizar la acción que desees
    } else {
      // Clic simple

      console.log('1')
    }

    setLastPress(currentTime);
  };
  const updateLike = (selectedItemId, newState) => {
    // Encuentra el índice del usuario dentro del arreglo
    const userIndex = users.findIndex(user => user.id === selectedItemId);

    // Verifica si se encontró el usuario
    if (userIndex !== -1) {
      // Crea un nuevo objeto con el 'like' actualizado
      const updatedUser = { ...users[userIndex], like: newState };

      // Crea un nuevo arreglo de usuarios con el usuario actualizado
      const updatedUsers = [...users.slice(0, userIndex), updatedUser, ...users.slice(userIndex + 1)];

      // Actualiza el estado 'users' con el arreglo actualizado
      setUsers(updatedUsers);
    }
  }; const updateSave = (selectedItemId1, newState) => {
    // Encuentra el índice del usuario dentro del arreglo
    const userIndex = users.findIndex(user => user.id === selectedItemId1);

    // Verifica si se encontró el usuario
    if (userIndex !== -1) {
      // Crea un nuevo objeto con el 'like' actualizado
      const updatedUser = { ...users[userIndex], save: newState };

      // Crea un nuevo arreglo de usuarios con el usuario actualizado
      const updatedUsers = [...users.slice(0, userIndex), updatedUser, ...users.slice(userIndex + 1)];

      // Actualiza el estado 'users' con el arreglo actualizado
      setUsers(updatedUsers);
    }
  };

  const [followStatus, setFollowStatus] = useState(Array(users.length).fill(false));

  const handlePressSeguir = (index) => {
    const newFollowStatus = [...followStatus]; // Copiar el estado actual
    newFollowStatus[index] = !newFollowStatus[index]; // Alternar el estado del índice dado
    setFollowStatus(newFollowStatus); // Actualizar el estado
  };
  const [banner, setBanner] = useState(Array(users.length).fill(true))
  const handleBanner = (index) => {
    const newBannerStatus = [...banner]; // Copiar el estado actual
    newBannerStatus[index] = !newBannerStatus[index]; // Alternar el estado del índice dado
    setBanner(newBannerStatus); // Actualizar el estado
  };

  const [selectedUser, setSelectedUser] = useState(null);



  const handleImagePress = (user) => {

    setSelectedUser(user);



  };
  const handleHistoryClose = userId => {

    setUsers(users.map(user => {
      if (user.id === userId) {
        return { ...user, historia: false };
      }
      return user;
    }));
    setSelectedUser(null); // También resetea el usuario seleccionado
  };
  const [randomHeights, setRandomHeights] = useState([]);

  useEffect(() => {
    const generateRandomHeights = () => {
      const heights = users.map(() => [200, 220, 240, 260, 280, 300][Math.floor(Math.random() * 6)]);
      setRandomHeights(heights);
    };

    // Llamar a la función de generación de alturas aleatorias una vez

    generateRandomHeights();
  }, []);
  const leftColumn = [];
  const rightColumn = [];

  const [scrolledDown, setScrolledDown] = useState(false);

  const handleScroll5 = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 50) { // Cambia el valor según sea necesario
      setScrolledDown(true);
    } else {
      setScrolledDown(false);
    }
  };
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
    <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#ffffff' }]}>

      <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#ffffff' }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1, height: '100%' }}>
            {showScroll1 && (
              <View style={{ width: '100%', flex: 1, height: '100%', marginTop: '2%' }}>



                {scrolledDown ? (<>
                  <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: '3%' }}>
                    <DynamicSun sizeHeight='30' sizeWidth='30' colorPath={dark ? '#ffffff' : '#000000'} />
                  </View>
                </>) : (<>
                  <View style={{ width: '40%', marginLeft: '30%', justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                    <TouchableOpacity onPress={toggleDarkMode}>
                      <Image source={require('../../../img/night.png')} style={{ width: 30, height: 30, tintColor: dark ? '#ffffff' : '#000000' }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Inboxmsj")}
                    >
                      <Image source={userP.image} style={{ width: 52, height: 52, borderRadius: 999 }} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 30, width: 30 }} onPress={() => navigation.navigate("Total")}>
                      <DynamicSun sizeHeight='30' sizeWidth='30' colorPath={dark ? '#ffffff' : '#000000'} />
                    </TouchableOpacity>
                  </View>
                </>


                )}





                <View style={{ backgroundColor: 'transparent' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%' }}>
                    {friends === 0 ?
                      (
                        <><TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>Friends</Text>
                        </TouchableOpacity>
                          <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={friendsPress}>
                            <Text style={[style.s14, { color: '#A8A8A8' }]}>For you</Text>
                          </TouchableOpacity>
                          <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: -200 }}>

                            <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }} onPress={() => navigation.navigate("SearchPage")}>
                              <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: 18, height: 18, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} title="Mostrar Scroll 2" onPress={handleScroll2}>
                              <Image source={require('../../../img/window.png')} style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000', }} />
                            </TouchableOpacity>
                          </View></>) :
                      (<><TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={friendsPress}>
                        <Text style={[style.s14, { color: '#A8A8A8' }]}>Friends</Text>
                      </TouchableOpacity>
                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>For You</Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: -200 }}>

                          <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }} onPress={() => navigation.navigate("SearchPage")}>
                            <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                          </TouchableOpacity>
                          <TouchableOpacity style={{ width: 18, height: 18, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} title="Mostrar Scroll 2" onPress={handleScroll2}>
                            <Image source={require('../../../img/window.png')} style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000', }} />
                          </TouchableOpacity>
                        </View>
                      </>)}


                  </View>
                </View>
                <ScrollView style={{ flex: 1 }} onScroll={handleScroll5} >
                  <View style={{ flex: 1 }}>
                    {friends === 0 ? (
                      <View style={{ width: '95%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ marginLeft: 1, alignItems: 'center', position: 'relative' }}>
                          <TouchableOpacity style={[styles.imageContainer, { borderColor: 'transparent', top: -10 }]}>
                            <Image source={userP.image} style={styles.image} />
                          </TouchableOpacity>
                          <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: userP.colorSol, position: 'absolute', top: 35, right: 6, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={[style.b14, { color: 'white' }]}>+</Text>
                          </TouchableOpacity>

                        </View>

                        <ScrollView
                          horizontal={true}
                          contentContainerStyle={styles.scrollView}
                        >
                          {users.map((user, index) => (
                            <View key={user.id} >
                              {user.historia ? (
                                <>
                                  <TouchableOpacity
                                    style={{
                                      width: 60,
                                      height: 60,
                                      borderRadius: 100,
                                      overflow: 'hidden',
                                      borderWidth: 3,
                                      justifyContent: 'center',
                                      alignItems: 'center',
                                      borderColor: user.colorSol,
                                      marginLeft: 5
                                    }}
                                    onPress={() => handleImagePress(user)}
                                  >
                                    <Image source={user.image} style={{ height: '100%', width: '100%' }} />
                                  </TouchableOpacity>
                                  {selectedUser && selectedUser.id === user.id && (
                                    <History
                                      visible={true}
                                      imageUri={selectedUser.imagenH}
                                      imagenP={selectedUser.image}
                                      username={selectedUser.username}
                                      time="20m"
                                      colorSol={selectedUser.colorSol}
                                      photos={selectedUser.photos}
                                      length1={selectedUser.photos.length}
                                      onClose={() => handleHistoryClose(user.id)}
                                    />
                                  )}
                                </>
                              ) : (null)}

                            </View>

                          ))}
                        </ScrollView>
                      </View>) : (null)}


                  </View>

                  {users.map((item) => (
                    <UserProfile
                      key={item.id}
                      video={item.video}
                      profileImage={item.image}
                      name={item.name}
                      username={item.username}
                      colorSol={item.colorSol}
                      time="6hrs ago"
                      imagenH={item.imagenH}
                      textUser={item.text}
                      colorPrincipal={dark ? 'black' : 'white'}
                      colorSecundario={dark ? 'white' : 'black'}
                      type={item.userType}
                      seguido='si'
                      dark={dark}
                      friends={friends}
                      like={false}
                      saved={false}
                      updateLike={(newValue) => updateLike(ListItem.id, newValue)}
                      updateSave={(newValue1) => updateSave(item, newValue1)}
                      handleButtonLayout={handleButtonLayout}
                      valorX={buttonPosition.x}
                      profile={item.profile}
                    />
                  ))}





                </ScrollView>
              </View>

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
                  <TouchableOpacity style={{ height: 30, width: 30 }} onPress={() => navigation.navigate("UserProfileScreen")}>
                    <DynamicSun sizeHeight='30' sizeWidth='30' colorPath={dark ? '#ffffff' : '#000000'} />
                  </TouchableOpacity>
                </View>



                <View style={{ backgroundColor: 'transparent' }}>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%' }}>
                    {friends === 0 ?
                      (
                        <><TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>Friends</Text>
                        </TouchableOpacity>
                          <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={friendsPress}>
                            <Text style={[style.s14, { color: '#A8A8A8' }]}>For you</Text>
                          </TouchableOpacity></>) :
                      (<><TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={friendsPress}>
                        <Text style={[style.s14, { color: '#A8A8A8' }]}>Friends</Text>
                      </TouchableOpacity>
                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                          <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>For You</Text>
                        </TouchableOpacity>
                      </>)}

                    <View style={{ flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', position: 'absolute', right: -200 }}>

                      <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }} onPress={() => navigation.navigate("SearchPage")}>
                        <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                      </TouchableOpacity>
                      <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={handleScroll1}>
                        <Image source={require('../../../img/window.png')} style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000', }} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
                {friends === 0 ? (<View style={{ width: '95%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ marginLeft: 1, alignItems: 'center', position: 'relative' }}>
                    <TouchableOpacity style={[styles.imageContainer, { borderColor: 'transparent' }]}>
                      <Image source={userP.image} style={styles.image} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: 20, height: 20, backgroundColor: userP.colorSol, position: 'absolute', top: 44, right: 6, borderRadius: 4, justifyContent: 'center', alignItems: 'center' }}>
                      <Text style={[style.b14, { color: 'white' }]}>+</Text>
                    </TouchableOpacity>

                  </View>

                  <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.scrollView}
                  >
                    {users.map((user, index) => (
                      <View key={user.id} >
                        {user.historia ? (
                          <>
                            <TouchableOpacity
                              style={{
                                width: 60,
                                height: 60,
                                borderRadius: 100,
                                overflow: 'hidden',
                                borderWidth: 3,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderColor: user.colorSol,
                                marginLeft: 5
                              }}
                              onPress={() => handleImagePress(user)}
                            >
                              <Image source={user.image} style={{ height: '100%', width: '100%' }} />
                            </TouchableOpacity>
                            {selectedUser && selectedUser.id === user.id && (
                              <History
                                visible={true}
                                imageUri={selectedUser.imagenH}
                                imagenP={selectedUser.image}
                                username={selectedUser.username}
                                time="20m"
                                colorSol={selectedUser.colorSol}
                                photos={selectedUser.photos}
                                length1={selectedUser.photos.length}
                                onClose={() => handleHistoryClose(selectedUser.id)} // Agrega esta prop
                              />
                            )}
                          </>
                        ) : (null)}

                      </View>

                    ))}
                  </ScrollView>
                </View>) : (null)}


                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: '10%' }}>

                  <View style={{ width: '48%', padding: '2%', flex: 1 }}>
                    <ScrollView style={{ flex: 1 }}>
                      {users.map((user, index) => {

                        if (index % 2 !== 0) return null;
                        const randomHeight = randomHeights[index];
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
                                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => setModalVisible2(true)}>
                                  <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                  <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5, marginVertical: 2 }} />
                                  <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                </TouchableOpacity>
                              </TouchableOpacity>
                            </View>
                            {index !== 2 ? (
                              <TouchableOpacity style={{ width: '100%', height: randomHeight, resizeMode: 'cover', borderRadius: 8 }} onPress={() => handlePress2(index)}>
                                <ImageBackground source={user.imagenH} borderRadius={8} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 8 }} >
                                  {likeClick[index] ? (
                                    <>
                                      <Image
                                        source={require('../../../img/CorazonRojo.png')}
                                        style={{
                                          width: 30, height: 30, position: 'absolute',
                                          top: '45%',
                                          left: '45%', tintColor: '#FE4040'
                                        }}
                                      />
                                    </>
                                  ) : (null)}
                                  {banner[index] ? (
                                    <TouchableOpacity style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }} onPress={() => handleBanner(index)}>
                                      <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, marginLeft: '5%', marginTop: '5%' }} />
                                      <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                        <View style={{ flexDirection: 'row' }}>
                                          <Text style={[style.b10, { color: '#ffffff', paddingLeft: 2 }]}>{user.name}</Text>
                                        </View>
                                        <Text style={[style.r10, { color: '#ffffff', top: -7 }]}>@{user.username}</Text>
                                      </View>
                                      {friends === 0 ? (
                                        <View style={{ position: 'absolute', top: 5, right: 5 }}>
                                          <DynamicSun
                                            colorCircle={user.colorSol}
                                            colorPath='white'
                                            sizeWidth={25}
                                            sizeHeight={25}
                                          />
                                        </View>
                                      ) : (
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
                                      )}
                                    </TouchableOpacity>
                                  ) : (
                                    <TouchableOpacity style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }} onPress={() => handleBanner(index)}>
                                      <Text style={[style.r10, { color: 'white' }]}>{user.text} </Text>
                                    </TouchableOpacity>
                                  )}
                                </ImageBackground>
                              </TouchableOpacity>
                            ) : (

                              <TouchableOpacity style={{ flex: 1 }} onPress={() => handlePress1(index)}>

                                <Video
                                  source={require('../../../img/video2.mov')}
                                  borderRadius={8}
                                  style={{ flex: 1, height: randomHeight, width: '100%', borderRadius: 8 }}
                                  resizeMode="cover"
                                  repeat
                                  paused={paused}
                                  muted={muted}

                                  fullSreen
                                />
                                {likeClick[index] ? (
                                  <>
                                    <Image
                                      source={require('../../../img/CorazonRojo.png')}
                                      style={{
                                        width: 30, height: 30, position: 'absolute',
                                        top: '45%',
                                        left: '45%', tintColor: '#FE4040'
                                      }}
                                    />
                                  </>
                                ) : (null)}
                                <TouchableOpacity
                                  style={{
                                    position: 'absolute',
                                    top: '10%',
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
                                  onPress={toggleMuted}
                                >
                                  {muted ? <Mute size={20} color={'gray'} /> : <Vol size={20} color={'gray'} />}

                                </TouchableOpacity>
                                {banner[index] ? (
                                  <TouchableOpacity style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }} onPress={() => handleBanner(index)}>
                                    <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, marginLeft: '5%', marginTop: '5%' }} />
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                      <View style={{ flexDirection: 'row' }}>
                                        <Text style={[style.b10, { color: '#ffffff', paddingLeft: 2 }]}>{user.name}</Text>

                                      </View>
                                      <Text style={[style.r10, { color: '#ffffff', top: -7 }]}>@{user.username}</Text>
                                    </View>
                                    {friends === 0 ? (<View style={{ position: 'absolute', top: 5, right: 5 }}>
                                      <DynamicSun
                                        colorCircle={user.colorSol}
                                        colorPath='white'
                                        sizeWidth={25}
                                        sizeHeight={25}

                                      />
                                    </View>) : (<TouchableOpacity key={index} style={{ position: 'absolute', top: 8, right: 5 }} onPress={() => handlePressSeguir(index)}>
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
                                    </TouchableOpacity>)}


                                  </TouchableOpacity>
                                ) : (
                                  <TouchableOpacity style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }} onPress={() => handleBanner(index)}>
                                    <Text style={[style.r10, { color: 'white' }]}>{user.text} </Text>
                                  </TouchableOpacity>
                                )}
                              </TouchableOpacity>

                            )
                            }
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>

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

                                  onPress={() => setModalEnviar(!modalEnviar)}

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
                    </ScrollView>
                  </View>
                  <View style={{ width: '48%', padding: '2%', flex: 1 }}>
                    <ScrollView >
                      {users.map((user, index) => {
                        if (index % 2 == 0) return null;
                        const randomHeight = randomHeights[index];
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
                                <TouchableOpacity style={{ flexDirection: 'column' }} onPress={() => setModalVisible2(true)}>
                                  <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                  <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5, marginVertical: 2 }} />
                                  <View style={{ width: 2, height: 2, backgroundColor: dark ? 'white' : 'black', borderRadius: 2.5 }} />
                                </TouchableOpacity>
                              </TouchableOpacity>
                            </View>

                            <TouchableOpacity style={{ width: '100%', height: randomHeight, resizeMode: 'cover', borderRadius: 8 }} onPress={() => handlePress2(index)}>
                              <ImageBackground source={user.imagenH} borderRadius={8} style={{ width: '100%', height: '100%', resizeMode: 'cover', borderRadius: 8 }} >
                                {/* <Text style={[style.r10, { position: 'absolute', bottom: 5, left: 5, color: '#EFEFF1', }]}>{user.text}</Text> */}
                                {likeClick[index] ? (
                                  <>
                                    <Image
                                      source={require('../../../img/CorazonRojo.png')}
                                      style={{
                                        width: 30, height: 30, position: 'absolute',
                                        top: '45%',
                                        left: '45%', tintColor: '#FE4040'
                                      }}
                                    />
                                  </>
                                ) : (null)}
                                {banner[index] ? (
                                  <TouchableOpacity style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }} onPress={() => handleBanner(index)}>
                                    <Image source={user.image} style={{ width: 20, height: 20, borderRadius: 99, marginLeft: '5%', marginTop: '5%' }} />
                                    <View style={{ flexDirection: 'column', justifyContent: 'flex-start', }}>
                                      <View style={{ flexDirection: 'row' }}>
                                        <Text style={[style.b10, { color: '#ffffff', paddingLeft: 2 }]}>{user.name}</Text>

                                      </View>
                                      <Text style={[style.r10, { color: '#ffffff', top: -7 }]}>@{user.username}</Text>
                                    </View>
                                    {friends === 0 ? (<View style={{ position: 'absolute', top: 5, right: 5 }}>
                                      <DynamicSun
                                        colorCircle={user.colorSol}
                                        colorPath='white'
                                        sizeWidth={25}
                                        sizeHeight={25}

                                      />
                                    </View>) : (<TouchableOpacity key={index} style={{ position: 'absolute', top: 8, right: 5 }} onPress={() => handlePressSeguir(index)}>
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
                                    </TouchableOpacity>)}


                                  </TouchableOpacity>
                                ) : (
                                  <TouchableOpacity style={{ width: '60%', flexDirection: 'row', position: 'absolute', bottom: 10, marginLeft: '5%', backgroundColor: 'rgba(128, 128, 128, 0.5)', borderRadius: 8 }} onPress={() => handleBanner(index)}>
                                    <Text style={[style.r10, { color: 'white' }]}>{user.text} </Text>
                                  </TouchableOpacity>
                                )}


                              </ImageBackground>
                            </TouchableOpacity>
                            <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>

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

                                  onPress={() => setModalEnviar(!modalEnviar)}

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
                    </ScrollView>
                  </View>
                </View>

              </ScrollView>

            )}
            <Modal
              visible={modalVisible2}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setModalVisible2(false)}
            >
              <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => setModalVisible2(false)}>
                <View style={{
                  justifyContent: 'center',
                  width: '90%',
                  borderRadius: 20,
                  marginLeft: '5%',
                  position: 'absolute',
                  top: 250,
                  height: 100,
                  backgroundColor: 'rgba(217, 217, 217, 0.3)',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                      <Dislike1 size={25} />
                      <Text>Not Interested</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <ImageBackground source={require('../../../img/RecReport.png')} style={{ width: 25, height: 25, justifyContent: 'center', }}>
                        <Image source={require('../../../img/CrossR.png')} style={{ height: 10, width: 10, left: '22%' }} />
                      </ImageBackground>
                      <Text>Report</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            </Modal>
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
                    <Image source={require('../../../img/search1.png')} style={{ width: 20, height: 20, marginLeft: 10, tintColor: dark ? "#ffffff" : "#000000" }} />
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

          </View>


        </KeyboardAvoidingView>
        <Nav navActive="feed" style={{ position: 'absolute', bottom: '10%' }} />
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
    width: 60,
    height: 60,
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
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue',
  },
});
