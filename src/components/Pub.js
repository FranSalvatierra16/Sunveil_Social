import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Dimensions, TextInput, ScrollView, Animated } from 'react-native';

import { ArrowDown, ArrowRight, ArrowUp, ArrowUp1, Ban, Chatbubble, Cross, Cross1, CrossCircle, Dislike1, EyeIcon, Facebook, Heart, Like, Like1, Link, Mute, Pause, Play, Plus, PlusIcon, PlusProfile, ReportIcon, Right, Send, Shared, Star, Staro, Threads, Tick1, Vol, WhatsApp } from '../theme/Icons';
import style from '../theme/style';
import DynamicSun from './DynamicSun';
import Svg, { Path } from 'react-native-svg';
import { Modal } from 'react-native';
import { Comment } from './Comment';
import Video from 'react-native-video'
import { Colors } from '../theme/color';
import { ForceTouchGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/forceTouchGesture';

import WebView from 'react-native-webview';
import { GestureHandlerRootView, PanGestureHandler, State } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 4;
export default function UserProfile({ video, profileImage, name, username, colorSol, time, imagenH, textUser, colorPrincipal, colorSecundario, type, seguido, dark, friends, like, saved, updateLike, updateSave, handleButtonLayout, valorX, reportState, profile }) {
  const [likes, setLikes] = useState(44389);
  const [liked, setLiked] = useState(like);
  const [likeClick, setLikeClick] = useState(false);
  const [estadoC, setEstadoC] = useState(false);
  const [modalEnviar, setModalEnviar] = useState(false);
  const [addHistory, setAddHistory] = useState(false);
  const [interested, setInterested] = useState(true);
  const [report, setReport] = useState(false);
  const [adVisible, setIsAdVisible] = useState(false);
  const [estadoB, setEstadoB] = useState(true);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(saved);
  const [paused, setPaused] = useState(true);
  const [commentWrite, setCommentWrite] = useState(true);
  const [mod1, setMod1] = useState(false);
  const navigation = useNavigation();
  const [userData, setUserData] = useState({
    name: 'Juan',
    username: 'Perez',
    image: require('./../../img/profile2.png'),
    colorSol: Colors.sol1,
    commentP: [

    ],
  });

  const upHistory = () => {
    setAddHistory(!addHistory)
    setModalEnviar(false)
    console.log(addHistory)
  }
  const [currentIndex, setCurrentIndex] = useState(0);
  const [reportState1, setReportState1] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleAdClick = () => {
    setIsAdVisible(true);
    // Estado para controlar la visibilidad del WebView
  };
  const togglePlayPause = () => {
    setPaused(!paused);
  };
  const [textReport, setTextReport] = useState('');
  const selectReport = (option) => {
    setReport(false);
    setModalVisible(false)
    setTextReport(option)

  };
  const [commentVotes, setCommentVotes] = useState({});
  const [commentVotes2, setCommentVotes2] = useState({});
  const likeComment1 = (index) => {
    setCommentVotes(prevVotes => ({
      ...prevVotes,
      [index]: 'like'
    }));
  };
  const likeComment2 = (index) => {
    setCommentVotes2(prevVotes => ({
      ...prevVotes,
      [index]: 'like'
    }));
  };
  const [scale, setScale] = useState(1);

  const onGestureEvent = event => {
    setScale(event.nativeEvent.scale);
  };

  const onHandlerStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const newScale = Math.min(Math.max(scale, 0.5), 3);
      setScale(newScale);
    }
  };
  const handleReply = (commentIndex, replyContent) => {
    // Crear una nueva respuesta
    const newReply = {
      date: new Date(),
      content: replyContent,
      name: userData.name,
      username: userData.username,
      image: userData.image,
      colorSol: Colors.sol1,
      type: userData.type
    };

    // Copiar el array de comentarios para modificarlo
    const updatedComments = [...comments];

    // Añadir la nueva respuesta al comentario correspondiente
    updatedComments[commentIndex].commentP.push(newReply);

    // Actualizar el estado de los comentarios con el comentario modificado
    setComments(updatedComments);
    setText1('');
    setCommentWrite(!commentWrite)
    console.log(commentWrite)
  };
  const dislikeComment1 = (index) => {
    setCommentVotes(prevVotes => ({
      ...prevVotes,
      [index]: 'dislike'
    }));
  }
  const dislikeComment2 = (index) => {
    setCommentVotes2(prevVotes => ({
      ...prevVotes,
      [index]: 'dislike'
    }));
  }
  const initialUsers = [

    {
      id: 1,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      colorSol: Colors.sol1,
    },
    {
      id: 2,
      name: 'Jam2',
      username: 'username',
      image: require('./../../img/profile2.png'),

      colorSol: Colors.sol2,
    },
    {
      id: 3,
      name: 'Usuario 1',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol1,
    },
    {
      id: 4,
      name: 'Usuario 2',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol2,
    },
    {
      id: 5,
      name: 'Usuario 1',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol3,
    },
    {
      id: 6,
      name: 'Usuario 2',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol1,
    },
    {
      id: 7,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      colorSol: Colors.sol2,
    },
    {
      id: 8,
      name: 'Jam2',
      username: 'username',
      image: require('./../../img/profile2.png'),
      colorSol: Colors.sol1,
    },
    {
      id: 9,
      name: 'Usuario 1',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol3,
    },
    {
      id: 10,
      name: 'Usuario 2',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol2,
    },
    {
      id: 11,
      name: 'Usuario 1',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol1,
    },
    {
      id: 12,
      name: 'Usuario 2',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      colorSol: Colors.sol3,
    },
  ]
  const [envios, setEnvios] = useState(Array.from({ length: initialUsers.length }, () => false));

  const toggleEnvio = (index) => {
    const newEnvios = [...envios];
    newEnvios[index] = !newEnvios[index];
    setEnvios(newEnvios);
  };
  const [openedIndex, setOpenedIndex] = useState(-1);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [commentActive, setCommentActive] = useState(false);
  const [learn, setLearn] = useState(false);
  const [comment1, setComment1] = useState(false);
  const [loadComment, setLoadComment] = useState(true);
  const [notLike, setNotLike] = useState(false);
  const [spam, setSpam] = useState(false);
  const handleOpenModal = () => {
    setModalVisible1(true);
  };

  const handleReport = () => {

    setReportState1(false)
    setModalVisible(false)
  };
  const handlePress10 = (index) => {
    setOpenedIndex(openedIndex === index ? -1 : index);
    setCommentWrite(!commentWrite)

  };
  const [muted, setMuted] = useState(true);
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const handleCloseModal = () => {
    setModalVisible1(false);
  };
  const handlePress = () => {
    setIsPressed(!isPressed);

    const newSaveState = !saved;

    // Cambiar el estado de like dentro del componente UserProfile
    updateSave(newSaveState);
  };
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  const [comments, setComments] = useState([
    {
      date: new Date('2024-03-01'), content: 'Is AI-powered threat detection really keeping us safer, or just turning cities into panopticons? Feels like a slippery slope', id: 1,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      colorSol: Colors.sol1,
      commentP: [
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        }
      ],
      type: 'user', audio: 'no',
    },

    {
      date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      colorSol: Colors.sol2, commentP: [
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        }
      ],
      type: 'user', audio: 'no',
    },
    {
      date: new Date('2024-03-02'), content: 'Segundo comentario', id: 1,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      colorSol: Colors.sol3, commentP: [
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        }
      ],
      type: 'user', audio: 'no',
    },
    {
      date: new Date('2024-03-01'), content: 'Is AI-powered threat detection really keeping us safer, or just turning cities into panopticons? Feels like a slippery slope', id: 1,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      colorSol: Colors.sol1, commentP: [
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        },
        {
          date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
          name: 'anita',
          username: 'username',
          image: require('./../../img/profile1.png'),
          colorSol: Colors.sol2
        }
      ],
      type: 'user', audio: 'no',
    },

  ]);

  const reportLike = () => {
    selectReport("It's spam")
    setNotLike(true)
    setReport(false)
  }
  const reportSpam = () => {
    selectReport("It's spam")
    setSpam(true)
    setReport(false)
  }
  const adUrl = 'https://www.digitalocean.com/community/tutorials/react-react-native-navigation-es'; // URL de la publicidad
  const handleComment = () => {
    const newComment = {
      date: new Date(),
      content: text,
      name: userData.name,
      username: userData.username,
      image: userData.image,
      colorSol: Colors.sol1,
      commentP: userData.commentP,
      type: userData.type
    };
    setComments([...comments, newComment]);
    setText('');
  };
  const toggleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
    const newLikeState = !like;
    // Cambiar el estado de like dentro del componente UserProfile
    updateLike(newLikeState);
  };
  const abrirModal = () => {
    setModalVisible(true);
    setReport(false)
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };
  const activeButton = () => {

    setEstadoC(!estadoC);
    setEstadoB(!estadoB);
  }

  const [lastPress, setLastPress] = useState(0);
  const handlePress1 = (index) => {
    const currentTime = new Date().getTime();
    const delay = 800;

    if (currentTime - lastPress < delay) {

      setLiked(!liked);
      setLikeClick(true);

      setTimeout(() => {
        setLikeClick(false);
      }, 2000);
      console.log('2')


    } else {

      setPaused(!paused)
      console.log('1')
    }

    setLastPress(currentTime);
  };
  const handlePress2 = (index) => {
    const currentTime = new Date().getTime();
    const delay = 1500;

    if (currentTime - lastPress < delay) {

      setLiked(!liked);

      setLikeClick(true);

      setTimeout(() => {
        setLikeClick(false);
      }, 2000);



    } else {



    }

    setLastPress(currentTime);
  };
  const onPressHandler = () => {
    // Pasando valores como parámetros al navegar a la pantalla 'ProfileFoll'
    navigation.navigate('ProfileFoll', { profileImage: profileImage, username2: username, followPriv: profile });

  };
  return (
    <>
      {interested ? (
        <View style={{
          width: '92%', marginLeft: '4%', marginTop: '5%', transform: [{ perspective: 1000 },], backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', borderRadius: 12
        }}>

          <View style={{ flexDirection: 'row', width: '96%', marginLeft: '2%', marginTop: '1%' }}>
            <TouchableOpacity style={{ width: '5%', aspectRatio: 1, marginRight: 10, borderRadius: 999 }} onPress={onPressHandler}>
              <Image source={profileImage} style={{ width: 40, height: 40, borderRadius: 999, marginTop: '10%', marginLeft: '5%' }} />
            </TouchableOpacity>

            <View style={styles.userInfoContainer}>
              <View style={{ flexDirection: 'row', marginLeft: '4%' }}>
                <Text style={[style.b16, { marginBottom: 1, color: dark ? '#F8F8F8' : '#2F2E2E' }]}>
                  {name}
                </Text>
                {friends === 0 ? (

                  <View style={{ position: 'relative', top: 3, left: 2 }}>
                    <DynamicSun
                      colorCircle={colorSol}
                      colorPath={colorSecundario}
                      sizeWidth={20}
                      sizeHeight={20}

                    />
                  </View>
                ) : (
                  <View style={{ position: 'relative', top: 3, left: 2, }}>
                    <View style={{ width: 10, height: 10, backgroundColor: colorSol, borderRadius: 99 }}></View>
                  </View>
                )}
              </View>
              <Text style={styles.usernameText}>@{username}</Text>
            </View>

            <Text style={[style.r12, { fontSize: 12, color: '#7D7C7C', position: 'absolute', right: 60, top: '35%' }]}>{time}</Text>
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
                borderColor: colorSecundario,
                borderWidth: 1,
                justifyContent: 'center',
                alignItems: 'center'
              }}
              onPress={abrirModal}
            >
              <View style={{ flexDirection: 'row' }}>
                <View style={{ width: 3, height: 3, backgroundColor: colorSecundario, borderRadius: 2.5 }} />
                <View style={{ width: 3, height: 3, backgroundColor: colorSecundario, borderRadius: 2.5, marginHorizontal: 2 }} />
                <View style={{ width: 3, height: 3, backgroundColor: colorSecundario, borderRadius: 2.5 }} />
              </View>
            </TouchableOpacity>

            <Modal
              visible={modalVisible}
              animationType="slide"
              transparent={true}
              onRequestClose={() => setModalVisible(false)}
            >
              <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => setModalVisible(false)}>
                <View style={{
                  justifyContent: 'center',
                  width: '100%',
                  borderRadius: 20,
                  position: 'absolute',
                  top: reportState ? 400 : valorX,
                  height: 100,
                  backgroundColor: 'rgba(217, 217, 217, 0.3)',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>



                  {report ? (
                    <View style={{ height: 600, }}>
                      <Swiper
                        showsPagination={false}
                        style={styles.wrapper}
                        loop={false}
                        index={currentIndex}
                        onIndexChanged={index => setCurrentIndex(index)}
                        direction={'vertical'}
                      >


                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', borderRadius: 12, width: '94%', marginLeft: '3%' }}>
                          <Text style={[style.s16,]}>Report</Text>

                          <Text style={[style.r14, { color: 'white' }]}>Why are you reporting this post? </Text>
                          <Text style={[style.r12, { color: 'gray' }]}>Your report is anonymous, except if you're reporting an {'\n'} intellectual property infringement. If someone is in {'\n'} immediate danger, call the local emergency services - {'\n'} don't wait.</Text>

                          <ScrollView style={{ width: '100%', marginTop: '3%' }}>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(1)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>I just don't like it</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(2)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>It's spam</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(3)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Nudity or sexual activity</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(4)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Hate speech or symbols</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(6)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Bullyng or harassment</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(5)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>False information</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(7)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Violance or dangerous organizations</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => setCurrentIndex(8)}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Scam or fraud</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => selectReport("Intellectual property violation")}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Intellectual property violation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => selectReport("Sale of illegal or regulated goods")}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sale of illegal or regulated goods</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={() => selectReport("Suicide or self-injury")}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Suicide or self-injury</Text>
                            </TouchableOpacity>
                          </ScrollView>

                        </View>

                        <View style={{ width: '100%', flex: 1, height: 600 }}>

                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Thanks for letting us know</Text>
                              <Text style={[style.r12, { color: 'gray' }]}>We uses these reports to show you less of this kind {'\n'}of content in the future.</Text>
                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Other steps you can stake</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Block tycsports</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Restrict tycsports</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Unfollow tycsports</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Mute tycsports</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Learn more about Instagram's Community Guidelines</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                        <View style={{ width: '100%', flex: 1, height: 600 }}>

                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>

                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Why are you reporting this post?</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Nudity or pornography</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sexual axploitation or solicitation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sharing private images</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Involves a child</Text>
                            </TouchableOpacity>

                          </View>
                        </View>
                        <View style={{ width: '100%', flex: 1, height: 600 }}>
                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>

                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Why are you reporting this post?</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Nudity or pornography</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sexual axploitation or solicitation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sharing private images</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Involves a child</Text>
                            </TouchableOpacity>

                          </View>
                        </View>
                        <View style={{ width: '100%', flex: 1, height: 600 }}>
                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>
                            </View>
                            <Text style={[style.s14, { color: 'white', marginTop: '5%', marginLeft: '5%' }]}>Hate speech or symbols guidelines</Text>
                            <Text style={[style.r12, { color: 'white', marginTop: '15%' }]}>We remove:</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginTop: '3%' }}>
                              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'gray', marginRight: 5 }} />
                              <Text style={[style.r12, { color: 'gray' }]}>Photos or videos of hate speech or symbols</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginTop: '3%' }}>
                              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'gray', marginRight: 5 }} />
                              <Text style={[style.r12, { color: 'gray' }]}>Post with captions that encourage violence or{'\n'} attack anyone based on who they are</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginTop: '3%' }}>
                              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'gray', marginRight: 5 }} />
                              <Text style={[style.r12, { color: 'gray' }]}>Specific threats or physical harm, theft or{'\n'} vandalism.</Text>
                            </View>
                            <TouchableOpacity style={{
                              width: '80%', backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 12, marginTop: '10%'
                            }} onPress={handleReport}>
                              <Text style={[style.s1, { color: 'white' }]}>Submit report</Text>
                            </TouchableOpacity>
                          </View>

                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>

                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Why are you reporting this post?</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Violent threat</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Animal abuse</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Death or servere injury</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Dangerous organizations or individuals</Text>
                            </TouchableOpacity>

                          </View>
                        </View>
                        <View style={{ flex: 1 }}>

                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>

                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Why are you reporting this post?</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Nudity or pornography</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sexual axploitation or solicitation</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Sharing private images</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Involves a child</Text>
                            </TouchableOpacity>

                          </View>
                        </View>
                        <View style={{ flex: 1 }}>

                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>

                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Who is being bullied or harassed?</Text>
                            <Text style={[style.r12, { color: 'gray' }]}>You report, is anonymous, except if you ´re reporting an{'\n'}intellectual property infringement. If someone is in{'\n'} immediate danger, call the local emergency services - {'\n'} don´t wait.</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Me</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Someone  I know</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Someone else</Text>
                            </TouchableOpacity>

                          </View>
                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r14, { color: 'white' }]}>Report</Text>

                            </View>
                            <Text style={[style.s14, { color: 'white', marginTop: '5%', marginLeft: '5%' }]}>Why are you reporting this post?</Text>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Health</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Politics</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Soccial issue</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Digitally created or altered
                              </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: '100%', marginTop: '5%' }} onPress={handleReport}>
                              <View style={{ width: '100%', height: 1, backgroundColor: 'gray' }}></View>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Something else</Text>
                            </TouchableOpacity>

                          </View>
                        </View>
                        <View style={{ flex: 1 }}>
                          <View style={{ width: '94%', justifyContent: 'center', alignItems: 'center', height: 600, backgroundColor: 'black', marginLeft: '3%', borderRadius: 12 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                              <Text style={[style.r16, { color: 'white' }]}>Thanks for letting us knowYou´re about to submit an anonymous  {'\n'}report about account´s post for scam or{'\n'} fraud. </Text>
                              <Text style={[style.r14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Scam or fraud falls under the Scam or fraud {'\n'} guidelines</Text>
                            </View>
                            <Text style={[style.s14, { color: 'gray', marginTop: '5%', marginLeft: '5%' }]}>Other steps you can stake</Text>
                            <Text style={[style.r12, { color: 'white', marginTop: '15%' }]}>We define scam or fraud as things like:</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginTop: '3%' }}>
                              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'gray', marginRight: 5 }} />
                              <Text style={[style.r12, { color: 'gray' }]}>Buying, selling or trading fake rewievs, {'\n'} passwords, personal data, counterfeit {'\n'} currency or exam materials.</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginTop: '3%' }}>
                              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'gray', marginRight: 5 }} />
                              <Text style={[style.r12, { color: 'gray' }]}>Fixing matches or bets</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '5%', marginTop: '3%' }}>
                              <View style={{ width: 5, height: 5, borderRadius: 2.5, backgroundColor: 'gray', marginRight: 5 }} />
                              <Text style={[style.r12, { color: 'gray' }]}>Running fake businesses or misleadingb{'\n'} schemes to take people´s money or {'\n'} belongings</Text>
                            </View>
                            <TouchableOpacity style={{
                              width: '80%', backgroundColor: 'blue', justifyContent: 'center', alignItems: 'center', height: 50, borderRadius: 12, marginTop: '10%'
                            }} onPress={handleReport}>
                              <Text style={[style.s1, { color: 'white' }]}>Submit report</Text>
                            </TouchableOpacity>
                          </View>
                        </View>
                      </Swiper>
                    </View>
                  ) : (
                    <>
                      {reportState1 ? (<View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                        <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }} onPress={() => setInterested(false)}>
                          <Dislike1 size={25} />
                          <Text>Not Interested</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => setReport(true)}>
                          <ReportIcon size={30} color={'red'} />
                          <Text>Report</Text>

                        </TouchableOpacity>
                      </View>) : (
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>

                          <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }} onPress={() => setReport(true)}>
                            <ReportIcon size={30} color={'red'} />
                            <Text>Publication already reprinted</Text>

                          </TouchableOpacity>
                        </View>
                      )}
                    </>
                  )}


                </View>
              </TouchableOpacity>
            </Modal>
            {addHistory ? (
              <Modal
                visible={addHistory}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setAddHistory(false)}
              >
                <TouchableOpacity style={{ width: '100%', height: '90%', backgroundColor: '#FF9900', }} onPress={() => setMod1(!mod1)}>
                  <TouchableOpacity
                    style={{
                      width: 40,
                      height: 10,
                      borderRadius: 20, // Mitad del ancho y alto para hacer un círculo perfecto
                      backgroundColor: 'rgba(217, 217, 217, 0.3)',
                      left: '5%',
                      position: 'absolute',
                      marginTop: '10%',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                    onPress={() => setAddHistory(false)}
                  >
                    <Cross size={30} color={'white'} />
                  </TouchableOpacity>
                  {mod1 ? (
                    <>
                      <GestureHandlerRootView style={{ marginTop: '30%', width: '80%', marginLeft: '10%', height: 500 }}>
                        <PanGestureHandler onGestureEvent={onGestureEvent}
                          onHandlerStateChange={onHandlerStateChange}>
                          <Image
                            source={imagenH}
                            style={[styles.image,
                            {
                              transform: [
                                { perspective: 200 },
                                { scale: scale },
                                { translateX: -50 * (scale - 1) },
                                { translateY: -50 * (scale - 1) },
                              ],
                            },]}
                          />

                        </PanGestureHandler>
                        <Text style={[style.s16, { color: 'white', marginLeft: '15%', marginTop: '2%' }]}>{username}</Text>
                      </GestureHandlerRootView>
                    </>
                  ) : (
                    <View style={{ backgroundColor: 'white', borderRadius: 12, width: '80%', height: '70%', marginTop: '30%', marginLeft: '10%', }}>
                      <View style={{ width: '40%', flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}>
                        <Image source={profileImage} style={{ marginLeft: '5%', height: 30, width: 30, borderRadius: 99 }} />
                        <Text style={[style.s16, { color: 'black', marginLeft: '5%', marginTop: '2%' }]}>{username}</Text>
                      </View>
                      <Image source={imagenH} style={{ height: '78%', width: '100%', marginTop: '5%' }} />
                      <View style={{ width: '70%', flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>

                        <Text style={[style.s14, { color: 'black', marginLeft: '5%', }]}>{username}</Text>
                        <Text style={[style.r12, { color: 'black', marginLeft: '5%', }]}>{textUser}</Text>
                      </View>
                    </View>
                  )}
                  <TouchableOpacity style={{
                    width: 40, height: 40, borderRadius: 99, backgroundColor: 'rgba(217, 217, 217, 0.3)', left: '85%', position: 'absolute', top: '90%', justifyContent: 'center', alignItems: 'center'
                  }} >
                    <ArrowRight size={30} color={'white'} />
                  </TouchableOpacity>
                </TouchableOpacity>
              </Modal>
            ) : (null)}
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

                      {initialUsers.map((user, index) => (
                        <View style={{ justifyContent: 'center', width: '32%', alignItems: 'center' }} key={index}>
                          <TouchableOpacity
                            style={{
                              backgroundColor: '#ddd',
                              width: 70,
                              gap: 30,
                              height: 70,
                              borderRadius: itemWidth / 2,
                              overflow: 'hidden',
                              borderWidth: 1,
                              borderColor: user.colorSol,
                              margin: 5,
                            }}
                            onPress={() => toggleEnvio(index)}
                          >
                            {envios[index] && (
                              <ImageBackground
                                source={user.image}
                                style={{
                                  flex: 1,
                                  width: '100%',
                                  height: '100%',
                                  resizeMode: 'cover',
                                }}
                              >
                                <View style={{ width: 20, height: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 99, backgroundColor: 'green', top: 40, position: 'absolute', left: 43 }}>
                                  <Tick1 size={20} />
                                </View>
                              </ImageBackground>
                            )}
                            {!envios[index] && (
                              <Image
                                source={user.image}
                                style={{
                                  flex: 1,
                                  width: '100%',
                                  height: '100%',
                                  resizeMode: 'cover',
                                }}
                              />
                            )}
                          </TouchableOpacity>
                          <Text style={{ color: dark ? "#ffffff" : "#000000" }}>{user.username}</Text>
                        </View>
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
                            onPress={upHistory}
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
                            <Shared size={20} color={dark ? 'white' : 'black'}

                            /> <Shared size={20} color={dark ? 'white' : 'black'}

                            /> <Shared size={20} color={dark ? 'white' : 'black'}

                            /> <Shared size={20} color={dark ? 'white' : 'black'}

                            /> <Shared size={20} color={dark ? 'white' : 'black'}

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
          </View >
          {
            type === 'normal' ? (
              <>
                {video === 'si' ? (
                  <View style={{ width: '100%', height: 320, marginTop: '5%', borderRadius: 16, overflow: 'hidden' }}>
                    {/* <ImageBackground source={imagenH} style={{ width: '100%', height: '100%', borderRadius: 16 }}> */}
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity style={{ flex: 1 }} onPress={handlePress1}>

                        <Video
                          source={require('./../../img/video2.mov')}
                          borderRadius={8}
                          style={{ height: '100%', width: '100%', flex: 1 }}
                          resizeMode="cover"
                          repeat
                          paused={paused}
                          muted={muted}

                          fullSreen
                        />
                        {likeClick ? (
                          <>
                            <Image
                              source={require('./../../img/CorazonRojo.png')}
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
                            top: '5%',
                            left: '95%',
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
                            top: '95%',
                            left: '95%',
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
                          {muted ? <Mute
                            size={20} color={'gray'} /> : <Vol size={20} color={'gray'} />}

                        </TouchableOpacity>

                      </TouchableOpacity>
                    </View>

                    {estadoB && (
                      <TouchableOpacity
                        style={{
                          position: 'absolute',
                          height: 21.58,
                          width: 21.58,
                          borderRadius: 999,
                          right: '50%',
                          top: '96%',
                          marginTop: -15,
                          backgroundColor: 'transparent',
                          borderColor: 'white',
                          borderWidth: 1,
                          justifyContent: 'center',
                          alignItems: 'center'
                        }}
                        onPress={activeButton}
                      >
                        <View style={{ flexDirection: 'row' }} >
                          <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5 }} />
                          <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5, marginHorizontal: 2 }} />
                          <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5 }} />
                        </View>
                      </TouchableOpacity>
                    )}
                    {estadoC && (
                      <TouchableOpacity
                        style={styles.touchableOpacityStyle}
                        onPress={activeButton}
                      >
                        <View style={styles.textViewStyle}>
                          <Text style={{ top: -15, left: 10, color: '#EFEFF1' }}>{textUser}</Text>
                        </View>
                      </TouchableOpacity>

                    )}


                  </View>
                ) : (
                  <>
                    <TouchableOpacity style={{ width: '98%', height: 320, marginTop: '5%', borderRadius: 16, overflow: 'hidden', marginLeft: '1%', }} onPress={handlePress2}>

                      <ImageBackground source={imagenH} style={{ width: '100%', height: '100%', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>

                        {likeClick ? (
                          <>
                            <Image
                              source={require('./../../img/CorazonRojo.png')}
                              style={{ width: 30, height: 30, tintColor: '#FE4040' }}
                            />
                          </>
                        ) : (null)}


                      </ImageBackground>
                      {estadoB && (
                        <TouchableOpacity
                          style={{
                            position: 'absolute',
                            height: 21.58,
                            width: 21.58,
                            borderRadius: 999,
                            right: '50%',
                            top: '96%',
                            marginTop: -15,
                            backgroundColor: 'transparent',
                            borderColor: 'white',
                            borderWidth: 1,
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                          onPress={activeButton}
                        >
                          <View style={{ flexDirection: 'row' }} >
                            <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5 }} />
                            <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5, marginHorizontal: 2 }} />
                            <View style={{ width: 3, height: 3, backgroundColor: 'white', borderRadius: 2.5 }} />
                          </View>
                        </TouchableOpacity>
                      )}
                      {estadoC && (
                        <TouchableOpacity
                          style={styles.touchableOpacityStyle}
                          onPress={activeButton}
                        >
                          <View style={styles.textViewStyle}>
                            <Text style={{ top: -15, left: 10, color: '#EFEFF1' }}>{textUser}</Text>
                          </View>
                        </TouchableOpacity>

                      )}
                    </TouchableOpacity>
                  </>
                )}
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>

                  <TouchableOpacity onPress={toggleLike} style={{ marginRight: 2 }}>
                    <Image
                      source={liked ? require('./../../img/CorazonRojo.png') : require('./../../img/Corazon.png')}
                      style={{ width: 18.33, height: 16.94, tintColor: !liked ? colorSecundario : '#FE4040' }}
                    />
                  </TouchableOpacity>
                  <Text style={[style.m14, { color: colorSecundario, marginLeft: '1%', marginTop: '1%' }]}>{likes}</Text>

                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }} onPress={() => setCommentActive(!commentActive)}>

                    <Chatbubble size={20} style={{ color: colorSecundario }}
                    />


                  </TouchableOpacity>
                  <Text style={[style.m14, { color: colorSecundario, marginLeft: '1%', marginTop: '1%' }]}>44873</Text>
                  {video === 'si' ? (
                    <>
                      <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }} >

                        <EyeIcon size={20} style={{ color: colorSecundario }}
                        />


                      </TouchableOpacity>
                      <Text style={[style.m14, { color: colorSecundario, marginLeft: '1%', marginTop: '1%' }]}>44</Text>
                    </>
                  ) : (null)}






                  <Comment visible={modalVisible1} onClose={handleCloseModal} />


                  <TouchableOpacity style={{ marginLeft: 5, marginRight: 2 }} onPress={() => setModalEnviar(!modalEnviar)}>
                    <Image
                      source={require('./../../img/Send.png')}
                      style={{ width: 18.33, height: 16.94, tintColor: colorSecundario }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 30, top: 4 }}
                    onPress={handlePress}
                  >
                    {isPressed ? <Star size={18} style={{ color: colorSecundario }} /> : <Staro size={18} style={{ color: colorSecundario }} />}
                  </TouchableOpacity>
                </View>

                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '5%',
                  width: 240,
                  alignSelf: 'center',
                }}>
                  <View style={{ flex: 1, height: 2, backgroundColor: colorSecundario, width: '100%' }}></View>

                </View>
              </>
            ) : (
              <>

                <TouchableOpacity style={{ width: '98%', height: 320, marginTop: '5%', borderRadius: 16, overflow: 'hidden', marginLeft: '1%', }} onPress={handlePress2}>

                  <ImageBackground source={imagenH} style={{ width: '100%', height: '100%', borderRadius: 16, justifyContent: 'center', alignItems: 'center' }}>

                    {likeClick ? (
                      <>
                        <Image
                          source={require('./../../img/CorazonRojo.png')}
                          style={{ width: 30, height: 30, tintColor: '#FE4040' }}
                        />
                      </>
                    ) : (null)}


                  </ImageBackground>
                </TouchableOpacity>
                <TouchableOpacity style={{ width: '100%', height: 40, backgroundColor: '#FF9900', alignItems: 'center', flexDirection: 'row', borderRadius: 16 }} onPress={handleAdClick}>
                  <Text style={[style.b14, { color: 'white', position: 'absolute', left: 20 }]}>Shop Now</Text>
                  <Right size={20} style={{ color: 'white', position: 'absolute', right: 20 }} />
                </TouchableOpacity>

                {adVisible ? (
                  <>
                    <Modal
                      visible={adVisible}
                      animationType="slide"
                      transparent={true}
                      onRequestClose={() => setIsAdVisible(false)}
                    >
                      <TouchableOpacity style={{ width: '100%', height: '100%' }} >
                        <TouchableOpacity style={{ marginTop: '15%', marginLeft: '10 %' }} onPress={() => setIsAdVisible(!adVisible)}>
                          <Cross size={35} />
                        </TouchableOpacity>
                        <View style={{ backgroundColor: 'red', height: '75%', width: '100%' }}>

                          <WebView
                            source={{ uri: adUrl }}
                            style={{ height: 700, width: '100%' }}
                          />
                        </View>

                      </TouchableOpacity>
                    </Modal>
                  </>
                ) : (null)}

                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10 }}>
                  <TouchableOpacity onPress={toggleLike} style={{ marginRight: 2 }}>
                    <Image
                      source={liked ? require('./../../img/CorazonRojo.png') : require('./../../img/Corazon.png')}
                      style={{ width: 18.33, height: 16.94, tintColor: !liked ? colorSecundario : '#FE4040' }}
                    />
                  </TouchableOpacity>
                  <Text style={[style.m14, { color: colorSecundario, marginLeft: '1%', marginTop: '1%' }]}>{likes}</Text>

                  <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }} onPress={() => setCommentActive(!commentActive)}>

                    <Chatbubble size={20} style={{ color: colorSecundario }}
                    />


                  </TouchableOpacity>

                  <Text style={[style.m14, { color: colorSecundario, marginLeft: '1%', marginTop: '1%' }]}>44873</Text>
                  <Comment visible={modalVisible1} onClose={handleCloseModal} />
                  <TouchableOpacity style={{ marginLeft: 5, marginRight: 2 }} onPress={() => setModalEnviar(!modalEnviar)}>
                    <Image
                      source={require('./../../img/Send.png')}
                      style={{ width: 18.33, height: 16.94, tintColor: colorSecundario }}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={{ position: 'absolute', right: 30, top: 4 }}
                    onPress={handlePress}
                  >
                    {isPressed ? <Star size={18} style={{ color: colorSecundario }} /> : <Staro size={18} style={{ color: colorSecundario }} />}
                  </TouchableOpacity>
                </View>
                <View style={{ justifyContent: 'center', width: '94%', marginLeft: '3%', marginTop: '2%' }}>
                  <Text style={{ color: colorSecundario }} >{textUser}</Text>
                </View>
                <View style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '3%',
                  width: 240,
                  alignSelf: 'center',
                }}>
                  <View style={{ flex: 1, height: 1, backgroundColor: colorSecundario, width: '100%' }}></View>

                </View>
              </>
            )
          }
          {commentActive ? (
            <>
              <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', marginLeft: '10%', }}>
                {/* <TouchableOpacity onPress={() => setLoadComment(!loadComment)}><Text>Load More</Text></TouchableOpacity> */}
                {/* {loadComment ? (
              <>
                {
                  comments.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 1).map((comment, index) => (
                    <>
                      <View key={index} style={{ width: '98%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
                        <Image source={comment.image} style={{ height: 32, width: 32, borderRadius: 99, marginTop: '3%' }} />
                        <View key={index} style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                          <View key={index} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
                            <Text style={[style.r14, { color: '#0E1013' }]}>{comment.name}</Text>
                            <View style={{ position: 'relative', top: 0, left: 2 }}>
                              <DynamicSun
                                colorCircle={comment.colorSol}
                                colorPath={Colors.solDefault}
                                sizeWidth={10}
                                sizeHeight={10}
                              />
                            </View>
                          </View>
                          <Text style={[style.r12, { color: '#0E1013' }]}>{comment.content}</Text>

                        </View>
                        <TouchableOpacity onPress={() => likeComment1(index)} style={{ marginTop: '10%' }}>
                          {commentVotes[index] === 'like' ? <ArrowUp1 size={15} color={'green'} /> : <ArrowUp1 size={15} />}
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dislikeComment1(index)} style={{ marginTop: '10%' }}>
                          {commentVotes[index] === 'dislike' ? <ArrowDown size={15} color={'red'} /> : <ArrowDown size={15} />}
                        </TouchableOpacity>

                      </View>
                      <View style={{ width: '100%', marginLeft: '10%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                        <TouchableOpacity style={{ marginLeft: '2%' }} onPress={() => handlePress10(index)}>
                          <Text style={[style.r12, { color: '#8E8E8E' }]}>View replies({comment.commentP.length})</Text>
                        </TouchableOpacity>

                      </View>
                      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}></View>

                      {openedIndex === index && <View>{
                        comment.commentP.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                          <>
                            <View key={index} style={{ width: '74%', marginLeft: '20%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
                              <Image source={comment.image} style={{ height: 32, width: 32, borderRadius: 99, marginTop: '3%' }} />
                              <View key={index} style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                <View key={index} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
                                  <Text style={[style.s14, { color: '#0E1013' }]}>{comment.name}</Text>
                                  <View style={{ position: 'relative', top: 0, left: 2 }}>
                                    <DynamicSun
                                      colorCircle={comment.colorSol}
                                      colorPath={Colors.solDefault}
                                      sizeWidth={10}
                                      sizeHeight={10}

                                    />
                                  </View>

                                </View>
                                <Text style={[style.r12, { color: '#0E1013' }]}>{comment.content}</Text>
                              </View>
                              <TouchableOpacity onPress={() => likeComment1(index)} style={{ marginTop: '10%' }}>
                                {commentVotes[index] === 'like' ? <ArrowUp1 size={15} color={'green'} /> : <ArrowUp1 size={15} />}
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => dislikeComment1(index)} style={{ marginTop: '10%' }}>
                                {commentVotes[index] === 'dislike' ? <ArrowDown size={15} color={'red'} /> : <ArrowDown size={15} />}
                              </TouchableOpacity>
                            </View>
                            <View style={{ width: '100%', marginLeft: '10%', flexDirection: 'row', alignItems: 'center' }}>
                              <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                            </View>




                          </>



                        ))
                      }
                        <View style={{ height: 30, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                          <View style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#F8F9FA', height: 34, borderRadius: 12, flexDirection: 'row', marginTop: 20 }}>

                            <TextInput
                              style={styles.input}
                              onChangeText={setText}
                              value={text}
                              placeholder="Add a comment"
                              placeholderTextColor="#6E707A"
                              keyboardType="default"
                            />

                            <TouchableOpacity onPress={() => setCommentActive(!commentActive)}>
                              <Image source={require('./../../img/Sendbutton.png')} style={{ width: 24, height: 24, right: -20 }} />
                            </TouchableOpacity>
                          </View>
                        </View>

                      </View>
                      }
                    </>
                  ))
                }

              </>
            )

              : ( */}
                <>
                  {comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                    <>
                      <View key={index} style={{ width: '98%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
                        <Image source={comment.image} style={{ height: 32, width: 32, borderRadius: 99, marginTop: '3%' }} />
                        <View key={index} style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                          <View key={index} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
                            <Text style={[style.r14, { color: '#0E1013' }]}>{comment.name}</Text>
                            <View style={{ position: 'relative', top: 0, left: 2 }}>
                              <DynamicSun
                                colorCircle={comment.colorSol}
                                colorPath={Colors.solDefault}
                                sizeWidth={10}
                                sizeHeight={10}
                              />
                            </View>
                          </View>
                          <Text style={[style.r12, { color: '#0E1013' }]}>{comment.content}</Text>

                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                          <TouchableOpacity onPress={() => likeComment1(index)} style={{}}>
                            {commentVotes[index] === 'like' ? <ArrowUp1 size={15} color={'green'} marginTop={'10%'} /> : <ArrowUp1 size={15} />}
                          </TouchableOpacity>
                          {commentVotes[index] === 'like' ? <Text>1287</Text> : (null)}
                        </View>
                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                          <TouchableOpacity onPress={() => dislikeComment1(index)} style={{}}>
                            {commentVotes[index] === 'dislike' ? <ArrowDown size={15} color={'red'} marginTop={'10%'} /> : <ArrowDown size={15} marginTop={'10%'} />}
                          </TouchableOpacity>
                          {commentVotes[index] === 'dislike' ? <Text>1287</Text> : (null)}
                        </View>
                      </View>
                      <View style={{ width: '100%', marginLeft: '10%', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                        <TouchableOpacity style={{ marginLeft: '2%' }} onPress={() => handlePress10(index)}>
                          <Text style={[style.r12, { color: '#8E8E8E' }]}>View replies({comment.commentP.length})</Text>
                        </TouchableOpacity>

                      </View>
                      <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center' }}></View>

                      {openedIndex === index && <View>{
                        comment.commentP.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                          <>
                            <View key={index} style={{ width: '74%', marginLeft: '20%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
                              <Image source={comment.image} style={{ height: 32, width: 32, borderRadius: 99, marginTop: '3%' }} />
                              <View key={index} style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                <View key={index} style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
                                  <Text style={[style.s14, { color: '#0E1013' }]}>{comment.name}</Text>
                                  <View style={{ position: 'relative', top: 0, left: 2 }}>
                                    <DynamicSun
                                      colorCircle={comment.colorSol}
                                      colorPath={Colors.solDefault}
                                      sizeWidth={10}
                                      sizeHeight={10}

                                    />
                                  </View>

                                </View>
                                <Text style={[style.r12, { color: '#0E1013' }]}>{comment.content}</Text>
                              </View>
                              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                <TouchableOpacity onPress={() => likeComment1(index)} style={{}}>
                                  {commentVotes[index] === 'like' ? <ArrowUp1 size={15} color={'green'} marginTop={'10%'} /> : <ArrowUp1 size={15} />}
                                </TouchableOpacity>
                                {commentVotes[index] === 'like' ? <Text>1287</Text> : (null)}
                              </View>
                              <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                                <TouchableOpacity onPress={() => dislikeComment1(index)} style={{}}>
                                  {commentVotes[index] === 'dislike' ? <ArrowDown size={15} color={'red'} marginTop={'10%'} /> : <ArrowDown size={15} marginTop={'10%'} />}
                                </TouchableOpacity>
                                {commentVotes[index] === 'dislike' ? <Text>1287</Text> : (null)}
                              </View>
                            </View>
                            <View style={{ width: '100%', marginLeft: '10%', flexDirection: 'row', alignItems: 'center' }}>
                              <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                            </View>




                          </>



                        ))
                      }
                        <View style={{ height: 30, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                          <View style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#F8F9FA', height: 34, borderRadius: 12, flexDirection: 'row', marginTop: 20 }}>

                            <TextInput
                              style={styles.input}
                              onChangeText={setText1}
                              value={text1}
                              placeholder="Add a comment"
                              placeholderTextColor="#6E707A"
                              keyboardType="default"
                            />

                            <TouchableOpacity onPress={() => handleReply(index, text1)}>
                              <Image source={require('./../../img/Sendbutton.png')} style={{ width: 24, height: 24, right: -20 }} />
                            </TouchableOpacity>
                          </View>
                        </View>

                      </View >
                      }
                    </>


                  ))}

                </>
                {/* )} */}
              </View>
              {commentWrite ? (<View style={{ height: 30, width: '100%', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
                <View style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#F8F9FA', height: 34, borderRadius: 12, flexDirection: 'row', marginTop: 20 }}>

                  <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Add a comment"
                    placeholderTextColor="#6E707A"
                    keyboardType="default"
                  />

                  <TouchableOpacity onPress={handleComment}>
                    <Image source={require('./../../img/Sendbutton.png')} style={{ width: 24, height: 24, right: -20 }} />
                  </TouchableOpacity>
                </View>
              </View>) : (null)}

            </>
          ) : (null)
          }
        </View >
      ) : (null)}
    </>
  );
};


const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    marginLeft: '3%'
  },
  usernameText: {
    fontSize: 12,
    color: '#ABABAB',
    marginLeft: '4%'

  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
    resizeMode: 'contain', // Or 'cover' if necessary
    // backgroundColor: 'lightgray', // Optional
    // borderWidth: 1,
    // borderColor: '#ccc', // Optional
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
  }, container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
})