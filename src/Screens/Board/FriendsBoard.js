import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, ImageBackground, TextInput, PermissionsAndroid, PanResponder } from 'react-native'; // Agrega FlatList, Image y TouchableOpacity
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { ArrowDown, ArrowUp, ArrowUp1, Ban, Bookmark, Bookmark2, Chatbubble, Cross, CrossCircle, Dislike1, Facebook, Font, Heart, Hearto, ImageC, ImageSimple, Like1, Link, Mute, Paleta, Pause, Play, Plus, PlusProfile, ReportIcon, Retweet, Search, Send, Shared, Star, Staro, Underline, Vol, WhatsApp } from '../../theme/Icons';
import UserProfile from '../../components/Pub';
import Svg, { Path } from 'react-native-svg';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { StoryUser } from '../../components/Story';
import PubBoard from '../../components/PubBoard';
import { Modal } from 'react-native';
import Video from 'react-native-video';
import { addScreenshotListener, removeScreenshotListener } from 'react-native-detector';

import { useDarkMode } from '../../components/darkMode';
import ViewShot from "react-native-view-shot";
import Swiper from 'react-native-swiper';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 4;
const FriednsBoard = ({ route }) => {
    const { artBoard } = route.params;
    const [nameColor, setNameColor] = useState('#000000');
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [scrollScale, setScrollScale] = useState(1);
    const [buttonColors, setButtonColors] = useState([]);
    const [liked, setLiked] = useState(false); // Estado para controlar si el corazón está marcado como "liked"
    const [likes, setLikes] = useState(345); // Estado para controlar la cantidad de likes
    const [estadoC, setEstadoC] = useState(false);
    const [estadoB, setEstadoB] = useState(true);
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalEnviar, setModalEnviar] = useState(false);
    const [addHistory, setAddHistory] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [isPressed, setIsPressed] = useState(false);
    const [isChatBubbleHovered, setIsChatBubbleHovered] = useState(false);
    const [isRetweetHovered, setIsRetweetHovered] = useState(false);
    const [isHeartHovered, setIsHeartHovered] = useState(false);
    const { dark, toggleDarkMode } = useDarkMode();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuOpenColor, setIsMenuOpenColor] = useState(false);
    const scrollViewRef = useRef();
    const [comment, setComment] = useState("");
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [openedIndexReplyI, setOpenedIndexReplyI] = useState(-1);
    const [openedIndexStarI, setOpenedIndexStarI] = useState(-1);
    const [openedIndexI, setOpenedIndexI] = useState(-1);
    const [openedIndexReply, setOpenedIndexReply] = useState(-1);
    const [openedIndexStar, setOpenedIndexStar] = useState(-1);
    const [paused, setPaused] = useState(true);
    const [friends, setFriends] = useState(-1);
    const [muted, setMuted] = useState(true);
    const [star1, setStar1] = useState(false);
    const [commentActive, setCommentActive] = useState(false);
    const [learn, setLearn] = useState(false);
    const [comment1, setComment1] = useState(false);
    const [loadComment, setLoadComment] = useState(true);
    const [commentWrite, setCommentWrite] = useState(true);
    const [commentVotes, setCommentVotes] = useState({});
    const [commentVotes2, setCommentVotes2] = useState({});
    const [cont, setCont] = useState(1);
    const [capturaDetectada, setCapturaDetectada] = useState(false);

    useEffect(() => {
        if (artBoard === 'true' && cont === 1) {
            setModalVisible5(true);

            setCont(2)
        }
    });
    const [swipedDown, setSwipedDown] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderRelease: (evt, gestureState) => {
      // Si el desplazamiento vertical es hacia abajo y es lo suficientemente grande
      if (gestureState.dy > 50) {
        setSwipedDown(true);
      }
    },
  });

  const handleCloseModal = () => {
    // Aquí puedes agregar cualquier lógica adicional antes de cerrar el modal
    setSwipedDown(false); // Reinicia el estado del gesto de deslizamiento hacia abajo
setLearn(false)
  };

  useEffect(() => {
    if (swipedDown) {
      handleCloseModal();
    }
  }, [swipedDown]);

    useEffect(() => {
        const userDidScreenshot = () => {
            console.log('User took screenshot');
            // You can handle the screenshot event here (e.g., show an alert).
        };

        const listener = addScreenshotListener(userDidScreenshot);

        return () => {
            removeScreenshotListener(listener);
        };
    }, []);
    const likeComment1 = (index) => {
        setCommentVotes(prevVotes => ({
            ...prevVotes,
            [index]: 'like'
        }));
    };

    const onCapture = (uri) => {
        setShowOverlay(true);
        setTimeout(() => setShowOverlay(false), 2000); // Oculta el overlay después de 2 segundos
        console.log("Captura de pantalla detectada:", uri);
    };
    const likeComment2 = (index) => {
        setCommentVotes2(prevVotes => ({
            ...prevVotes,
            [index]: 'like'
        }));
    };
    const arcActive = () => {
        setArco(!arco);
    };
    const [isBold, setIsBold] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [imagenSimple, setImagenSimple] = useState(true);
    const toggleUnderline = () => {
        setIsUnderline(!isUnderline);
    };

    const [selectedFont, setSelectedFont] = useState('Poppins-Bold');
    const [selectedColor1, setSelectedColor1] = useState('black');
    // Función para manejar la selección de la fuente
    const handleFontSelection = (font) => {
        setSelectedFont(font);
    };
    const handleColorSelection = (font) => {
        setSelectedColor1(font);
    };
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const toggleMenuColor = () => {
        setIsMenuOpenColor(!isMenuOpenColor);
    }; const handleSelectFont = (font) => {
        setSelectedFont(font);
        setIsMenuOpen(false);
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
    const upHistory = () => {
        setAddHistory(true)
        setModalEnviar(false)
        console.log(addHistory)
    }
    const darkPress = () => {
        setDark(dark === -1 ? 0 : -1);
    };

    const [text, setText] = useState('');
    const [text1, setText1] = useState('');


    const [currentIndex, setCurrentIndex] = useState(0);

    const onPressHandler = () => {
        // Pasando valores como parámetros al navegar a la pantalla 'ProfileFoll'
        navigation.navigate('ProfileFoll', { profileImage: profileImage, username2: username, follow: 1 });

    };
    const handleReport = () => {

        setReportState1(false)
        setModalVisible2(false)
    };
    const commentCreator = {

        date: new Date('2024-03-01'), content: 'Is AI-powered threat detection really keeping us safer, or just turning cities into panopticons? Feels like a slippery slope', id: 1,
        name: 'anita',
        username: 'username',
        image: require('../../../img/profile1.png'),
        colorSol: Colors.sol1,
        commentP: [
            {
                date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                name: 'anita',
                username: 'username',
                image: require('../../../img/profile1.png'),
                colorSol: Colors.sol2
            },
            {
                date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                name: 'anita',
                username: 'username',
                image: require('../../../img/profile1.png'),
                colorSol: Colors.sol2
            },
            {
                date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                name: 'anita',
                username: 'username',
                image: require('../../../img/profile1.png'),
                colorSol: Colors.sol2
            }
        ],
        type: 'creator',
    }
    const [arco, setArco] = useState(false);
    const [report, setReport] = useState(false);
    const [textReport, setTextReport] = useState('');
    const [reportState1, setReportState1] = useState(true);
    const selectReport = (option) => {
        setReport(false);
        setModalVisible2(false)
        setTextReport(option)

    };
    const [comments, setComments] = useState([
        {
            date: new Date('2024-03-01'), content: 'Is AI-powered threat detection really keeping us safer, or just turning cities into panopticons? Feels like a slippery slope', id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            colorSol: Colors.sol1,
            commentP: [
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                }
            ],
            type: 'user', audio: 'no',
        },

        {
            date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            colorSol: Colors.sol2, commentP: [
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                }
            ],
            type: 'user', audio: 'no',
        },
        {
            date: new Date('2024-03-02'), content: 'Segundo comentario', id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            colorSol: Colors.sol3, commentP: [
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                }
            ],
            type: 'user', audio: 'no',
        },
        {
            date: new Date('2024-03-01'), content: 'Is AI-powered threat detection really keeping us safer, or just turning cities into panopticons? Feels like a slippery slope', id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            colorSol: Colors.sol1, commentP: [
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                },
                {
                    date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
                    name: 'anita',
                    username: 'username',
                    image: require('../../../img/profile1.png'),
                    colorSol: Colors.sol2
                }
            ],
            type: 'user', audio: 'no',
        },

    ]);
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
    const useText = () => {
        setText('');
    };
    const toggleMuted = () => {
        setMuted(!muted);
    };
    const togglePlayPause = () => {
        setPaused(!paused);
    };
    const friendsPress = () => {
        setFriends(friends === -1 ? 0 : -1);
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

    const handlePressScroll = () => {
        // Desplaza al principio del ScrollView
        scrollViewRef.current.scrollTo({ y: 0, animated: true });
    };
    const handlePressRt = () => {
        setIsRetweetHovered(!isRetweetHovered); // Cambia el estado cuando se presiona el botón
    };
    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    const [userData, setUserData] = useState({
        name: 'Juan',
        username: 'Perez',
        image: require('../../../img/profile2.png'),
        colorSol: Colors.sol1,
        commentP: [

        ],
    });
    const Comment = {
        date: new Date(),
        content: ''
    };

    const initialUsers = [

        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            colorSol: Colors.sol1,
        },
        {
            id: 2,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),

            colorSol: Colors.sol2,
        },
        {
            id: 3,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol1,
        },
        {
            id: 4,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol2,
        },
        {
            id: 5,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol3,
        },
        {
            id: 6,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol1,
        },
        {
            id: 7,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            colorSol: Colors.sol2,
        },
        {
            id: 8,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            colorSol: Colors.sol1,
        },
        {
            id: 9,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol3,
        },
        {
            id: 10,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol2,
        },
        {
            id: 11,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol1,
        },
        {
            id: 12,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            colorSol: Colors.sol3,
        },
    ]

    const toggleLike = () => {
        setLiked(!liked); // Cambia el estado de liked al opuesto del valor actual
        setLikes(liked ? likes - 1 : likes + 1); // Incrementa o decrementa la cantidad de likes según el estado actual de liked
    };
    const abrirModal1 = () => {
        setModalVisible1(true);
    };
    const abrirModal2 = () => {
        setModalVisible2(true);
    };
    const cerrarModal = () => {
        setModalVisible5(false);
    };
    const abrirModal5 = () => {
        setModalVisible5(true);
    };
    const cerrarModal5 = () => {
        setModalVisible5(false);
    };
    const activeButton = () => {

        setEstadoC(!estadoC);
        setEstadoB(!estadoB);
    }
    const handleButtonLayout = (event) => {
        const { x, y } = event.nativeEvent.layout;
        setButtonPosition({ x, y });
    };
    const userP = {
        id: 1,
        name: 'anita',
        username: 'username',
        image: require('../../../img/person/person1.jpg'),
        imagenH: require('../../../img/pub2.png'),
        colorSol: Colors.sol1,
        text: 'Aca en la playa disfrutando del sol.'

    }
    const users = [
        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'With my dog.',
            frase: 'Life is better at the beach.',
            tipo: 'video',
            forma: 'imagen',
            cit: 'citado'
        },
        {
            id: 2,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Relaxing on a quiet afternoon by the coast.',
            frase: 'The sea breeze is music to the soul.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 3,
            name: 'User 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Strolling along the seashore.',
            frase: 'The best memories are made with your feet in the sand.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 4,
            name: 'User 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Playing with the waves at the beach.',
            frase: 'Happiness comes in waves.',
            tipo: 'articulo',
            forma: 'imagen',
            cit: 'img'
        },
        {
            id: 5,
            name: 'User 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Taking photos of the sunset by the coast.',
            frase: 'Sunsets are proof that endings can be beautiful too.',
            tipo: 'articulo',
            forma: 'imagen',
            cit: 'img'

        },
        {
            id: 6,
            name: 'User 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Building sandcastles on the beach.',
            frase: 'Life is short, build sandcastles.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 7,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Dancing with friends at the seashore.',
            frase: 'Dance like no one is watching.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 8,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Having a picnic on the beach.',
            frase: 'Life is a picnic, enjoy every moment.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 9,
            name: 'User 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Surfing on the ocean waves.',
            frase: 'Life is better when you surf.',
            tipo: 'articulo'
        },
        {
            id: 10,
            name: 'User 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Resting under an umbrella on the beach.',
            frase: 'Chill vibes only.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 11,
            name: 'User 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Taking a boat ride along the coast.',
            frase: 'Adventure awaits on the high seas.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 12,
            name: 'User 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Observing crabs on the beach.',
            frase: 'Natures little wonders.',
            tipo: 'articulo',
            forma: 'imagen',
            cit: 'img'
        },
        {
            id: 13,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Practicing yoga at sunrise on the beach.',
            frase: 'Inhale the future, exhale the past.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 14,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Collecting seashells on the shore.',
            frase: 'Every shell has a story.',
            tipo: 'articulo',
            forma: 'imagen',
            cit: 'img'
        },
        {
            id: 15,
            name: 'User 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Having a family picnic on the beach.',
            frase: 'Family time is beach time.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 16,
            name: 'User 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Running on the sand at the beach.',
            frase: 'Leave only footprints, take only memories.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 17,
            name: 'User 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Building sandcastles on the beach.',
            frase: 'Life is short, play in the sand.',
            tipo: 'publicacion',
            forma: 'texto'

        },
        {
            id: 18,
            name: 'User 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Enjoying a sunny day by the coast',
            tipo: 'publicacion',
            forma: 'texto'

        }
    ];


    const handleScroll = (event) => {
        const { y } = event.nativeEvent.contentOffset;
        const opacity = y <= 0 ? 1 : 1 - (y / 100);
        setScrollOpacity(opacity);

        // Calcula el factor de escala en función del desplazamiento
        const scale = Math.max(1 - y / 100, 0.5); // Puedes ajustar el valor 200 según tus necesidades
        setScrollScale(scale);
    };


    return (
        <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#ffffff' }]}>

            <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#FFFFFF' }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>


                    {showOverlay ? (
                        <View style={{ position: 'absolute', top: 0, left: 0, bottom: 0, right: 0, backgroundColor: 'black', opacity: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ color: 'white' }}>No se puede capturar la pantalla</Text>
                        </View>
                    ) : (

                        <ViewShot style={{ flex: 1 }} onCapture={onCapture}>

                            <View style={{ width: '100%', flex: 1, }}>

                                <View style={{ position: 'absolute', right: 20, flexDirection: 'row' }}>
                                    <Image source={require('../../../img/settingsios.png')} style={{ width: 20, height: 20, tintColor: dark ? '#ffffff' : '#000000', marginRight: 10 }} />
                                    <TouchableOpacity style={{ borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', }} onPress={() => navigation.navigate("SearchPage")}>
                                        <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                                    </TouchableOpacity>
                                </View>
                                <ScrollView ref={scrollViewRef} style={{ width: '100%', marginTop: '5%', marginBottom: '1%' }} stickyHeaderIndices={[1]}>

                                    <View style={{ width: '40%', marginLeft: '30%', height: 50, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                                        <TouchableOpacity onPress={toggleDarkMode}>
                                            <Image source={require('../../../img/night.png')} style={{ width: 30, height: 30, tintColor: dark ? '#ffffff' : '#000000' }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity >
                                            <Image source={userP.image} style={{ width: 52, height: 52, borderRadius: 999, tintColor: dark ? '#ffffff' : '#000000' }} />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ height: 30, width: 30 }} onPress={() => navigation.navigate("UserProfileScreen")}>
                                            <DynamicSun sizeHeight='30' sizeWidth='30' colorPath={dark ? '#ffffff' : '#000000'} />
                                        </TouchableOpacity>
                                    </View>



                                    <View style={{ backgroundColor: 'transparent' }}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '3%' }}>
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
                                            <View style={{ justifyContent: 'flex-end', marginLeft: '90%' }}>
                                                <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 50, top: -10, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={abrirModal5}>
                                                    <Plus size={20} style={{ color: '#000000' }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                        {friends ? (null) : (<View style={{ justifyContent: 'center', width: '100%', alignItems: 'center', marginTop: '3%' }}>
                                            <TouchableOpacity style={{ width: 90, height: 30, borderRadius: 50, backgroundColor: 'orange', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }} onPress={handlePressScroll}>
                                                <ArrowUp size={15} style={{ color: 'white' }} />
                                                <Text style={{ color: 'white' }} >New posts</Text>
                                            </TouchableOpacity>
                                        </View>)}

                                    </View>




                                    <View style={{ width: '92%', backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', marginLeft: '4%', flexDirection: 'row', marginTop: '2%', borderRadius: 15 }}>
                                        <TouchableOpacity style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }} onPress={() => navigation.navigate('ProfileFoll', { profileImage: userP.image, username2: userP.username, follow: 1 })}>
                                            <Image source={userP.image} style={{ width: 48, height: 48, borderRadius: 999 }} />
                                        </TouchableOpacity>
                                        <View style={{ width: '80%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[style.s16, {
                                                    marginLeft: '2%',
                                                    color: dark ? '#000000' : '#000000'
                                                }]}>{userP.name}</Text>

                                                {friends === 0 ?
                                                    (
                                                        <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                            <DynamicSun
                                                                colorCircle={userP.colorSol}
                                                                colorPath={Colors.solDefault}
                                                                sizeWidth={25}
                                                                sizeHeight={25}
                                                            />
                                                        </View>) : (
                                                        <View style={{ position: 'relative', top: 8, left: 10, }}>
                                                            <View style={{ width: 10, height: 10, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                        </View>
                                                    )}
                                            </View>
                                            <Text style={[style.r16, { marginLeft: '2%', color: dark ? '#ffffff' : '#536471', top: -5 }]}>@{userP.username}</Text>
                                            <Text style={[style.i16, { color: dark ? '#ffffff' : '#000000', marginTop: '3%' }]}>Exactly</Text>
                                            <View style={{ width: '92%', height: 120, backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', borderRadius: 10, marginTop: '2%', flexDirection: 'column', marginBottom: '10%' }}>
                                                <View style={{ width: '90%', aspectRatio: 1, marginRight: 10, borderRadius: 999, flexDirection: 'row' }}>
                                                    <Image source={userP.image} style={{ width: 15, height: 15, borderRadius: 999, marginTop: '1%', marginLeft: '1%' }} />
                                                    <Text style={[style.b14, { marginLeft: '2%', color: dark ? '#ffffff' : 'gray' }]}>{userP.name}</Text>
                                                    <Text style={[style.b12, { marginLeft: '2%', color: dark ? '#ffffff' : 'gray' }]}>@{userP.username}</Text>
                                                    {friends === 0 ?
                                                        (
                                                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                                <DynamicSun
                                                                    colorCircle={userP.colorSol}
                                                                    colorPath={Colors.solDefault}
                                                                    sizeWidth={15}
                                                                    sizeHeight={15}
                                                                />
                                                            </View>) : (
                                                            <View style={{ position: 'relative', top: 6, left: 2, }}>
                                                                <View style={{ width: 6, height: 6, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                            </View>
                                                        )}
                                                </View>
                                                <Text style={[style.i13, { position: 'absolute', top: 25, marginLeft: '2%', color: dark ? '#ffffff' : '#000000' }]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</Text>

                                            </View>

                                            <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', position: 'absolute', top: 200, right: 30, justifyContent: 'center' }}>



                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                                    onPress={toggleLike}
                                                >


                                                    {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                    <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                    onPress={handlePressRt}
                                                >

                                                    <Image source={isRetweetHovered ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                        style={{ width: 22, height: 22, tintColor: !isRetweetHovered ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                    />

                                                    <Text style={{ marginLeft: '2%', color: isRetweetHovered ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                    onPress={() => setCommentActive(!commentActive)}

                                                >

                                                    <Image source={require('../../../img/Comment2.png')}
                                                        style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000' }}
                                                    />

                                                    <Text style={{ marginLeft: '4%', color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                    onPress={() => setModalEnviar(!modalEnviar)}

                                                >

                                                    <Send
                                                        size={18}
                                                        style={{ color: dark ? '#ffffff' : '#000000', transform: [{ rotate: '-45deg' }] }} />



                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ position: 'absolute', right: 0, top: 4 }}
                                                    onPress={handlePress}
                                                >
                                                    {isPressed ? <Star size={18} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                </TouchableOpacity>

                                            </View>
                                            {commentActive ? (
                                                <>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', marginLeft: '10%', }}>
                                                        <TouchableOpacity onPress={() => setLoadComment(!loadComment)}><Text>Load More</Text></TouchableOpacity>
                                                        {loadComment ? (
                                                            <>
                                                                {
                                                                    comments.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 1).map((comment, index) => (
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
                                                                        </View>
                                                                    ))
                                                                }

                                                            </>
                                                        )

                                                            : (
                                                                <>
                                                                    {comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
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

                                                                        </View>

                                                                    ))}

                                                                </>
                                                            )}
                                                    </View>
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

                                                            <TouchableOpacity onPress={handleComment}>
                                                                <Image source={require('../../../img/Sendbutton.png')} style={{ width: 24, height: 24, right: -20 }} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>
                                                </>
                                            ) : (null)}
                                        </View>
                                    </View>


                                    <View style={{ width: '92%', marginTop: '1%', borderRadius: 15, overflow: 'hidden', backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', marginLeft: '4%', }}>
                                        <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                                            <TouchableOpacity style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }} onPress={() => navigation.navigate('ProfileFoll', { profileImage: userP.image, username2: userP.username, follow: 1 })}>
                                                <Image source={userP.image} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                                            </TouchableOpacity>

                                            <View style={styles.userInfoContainer}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Text style={[style.b16, { marginBottom: 1, color: dark ? '#ffffff' : 'gray' }]}>
                                                        {userP.name}
                                                    </Text>
                                                    {friends === 0 ?
                                                        (
                                                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                                <DynamicSun
                                                                    colorCircle={userP.colorSol}
                                                                    colorPath={Colors.solDefault}
                                                                    sizeWidth={25}
                                                                    sizeHeight={25}
                                                                />
                                                            </View>) : (
                                                            <View style={{ position: 'relative', top: 0, left: 20, }}>
                                                                <View style={{ width: 10, height: 10, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                            </View>
                                                        )}

                                                </View>

                                            </View>


                                            <TouchableOpacity
                                                onLayout={handleButtonLayout}
                                                style={{
                                                    position: 'absolute',
                                                    height: 21.58,
                                                    width: 21.58,
                                                    borderRadius: 999,
                                                    right: 0,
                                                    top: '52%',
                                                    marginTop: -15,
                                                    backgroundColor: 'transparent',
                                                    borderColor: 'transparent',
                                                    borderWidth: 1,
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                                onPress={abrirModal2}
                                            >
                                                <View style={{ flexDirection: 'column' }}>
                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5, marginVertical: 2 }} />
                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                </View>
                                            </TouchableOpacity>
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
                                                        top: buttonPosition.y + 250,
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
                                            {addHistory ? (
                                                <Modal
                                                    visible={addHistory}
                                                    animationType="slide"
                                                    transparent={true}
                                                    onRequestClose={() => setAddHistory(false)}
                                                >
                                                    <View style={{ width: '100%', height: '100%', backgroundColor: 'red', }} >

                                                        <Image source={userP.imagenH} style={{ marginTop: '20%', width: '80%', marginLeft: '10%', height: '50%' }} />
                                                    </View>
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
                                                                                backgroundColor: dark ? '#1C1C1C' : '#FDFDFD',
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
                                                                                backgroundColor: dark ? '#1C1C1C' : '#FDFDFD',
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
                                                                                backgroundColor: dark ? '#1C1C1C' : '#FDFDFD',
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
                                                                                backgroundColor: dark ? '#1C1C1C' : '#FDFDFD',
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
                                                                                backgroundColor: dark ? '#1C1C1C' : '#FDFDFD',
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
                                                                                backgroundColor: dark ? '#1C1C1C' : '#FDFDFD',
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
                                        <ImageBackground source={userP.imagenH} borderRadius={10} style={{ height: 272, width: '96%', marginLeft: '5%', marginTop: '5%', }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginLeft: '5%', marginTop: '5%' }}>
                                                <TouchableOpacity style={{ backgroundColor: 'white', width: 51, height: 26, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text>Article</Text></TouchableOpacity>
                                                <TouchableOpacity style={{ backgroundColor: 'white', width: 34, height: 34, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }} onPress={() => setStar1(!star1)}>
                                                    <>
                                                        {star1 ? (
                                                            <>
                                                                <Star size={16} color={'rgba(190, 11, 11, 1)'} />
                                                            </>
                                                        ) : (
                                                            <>
                                                                <Star size={16} color={'rgba(213, 205, 205, 1)'} />
                                                            </>
                                                        )}
                                                    </>
                                                </TouchableOpacity>
                                            </View>
                                            <TouchableOpacity
                                                style={styles.touchableOpacityStyle}

                                            >
                                                <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '10%' }}>
                                                    <Text style={[style.r16, { top: -15, left: 10, color: '#EFEFF1' }]}>{userP.text}</Text>
                                                    <Text style={[style.r12, {
                                                        top: -15, left: 10, color: 'rgba(172, 172, 172, 1)'
                                                    }]}>1 day ago</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </ImageBackground>

                                        <View>
                                            {learn ? (
                                                <>
                                                    <View style={{ flex: 1, }}  {...(Platform.OS === 'ios' ? panResponder.panHandlers : {})} > 

                                                        <TouchableOpacity
                                                            style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}
                                                        >
                                                            <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', marginLeft: '4%', }]}> Read less </Text>
                                                            <Send size={14} style={{ color: dark ? '#ffffff' : '#000000', marginBottom: 1, }} />
                                                        </TouchableOpacity>

                                                        <View style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', marginLeft: '5%' }}>
                                                            <Text style={[style.s18, { color: dark ? '#ffffff' : '#000000' }]}>Ways to get rid of monotony in business life</Text>
                                                            <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Sed semper est ex, id dictum eros suscipit sit amet. Nam sed gravida nisl. Aliquam efficitur gravida rutrum. Nunc lectus est, ultrices nec elit ac, laoreet finibus nulla.</Text>
                                                            <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Curabitur ante arcu, ornare ut finibus porta, ullamcorper ac lectus. Donec ut congue libero, non fringilla mi.</Text>
                                                            <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Pellentesque efficitur elit in convallis tempor. Integer vel iaculis neque. Aliquam tempus arcu in magna efficitur, quis consectetur est consequat.</Text>
                                                            <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Nunc quam ex, dictum et aliquet eget, condimentum a nibh. Maecenas tincidunt varius molestie. Pellentesque rutrum ac dolor nec suscipit.</Text>
                                                            <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: '5%', marginBottom: '0%' }}>
                                                                <View style={{ width: '45%', marginRight: '5%', height: 210, backgroundColor: 'rgba(231, 222, 222, 1)', borderRadius: 16 }} />
                                                                <View style={{ width: '45%', height: 210, backgroundColor: 'rgba(231, 222, 222, 1)', borderRadius: 16 }} />
                                                            </View>
                                                        </View>


                                                        {comment1 ?
                                                            (
                                                                <>
                                                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '3%' }}>
                                                                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                                                            <Text style={[style.s14, { color: dark ? '#FFFFFF' : '#000000' }]}>Recent</Text>
                                                                        </TouchableOpacity>
                                                                        <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={() => setComment1(!comment1)}>
                                                                            <Text style={[style.s14, { color: '#A8A8A8' }]}>Popular</Text>
                                                                        </TouchableOpacity>
                                                                        <View style={{ justifyContent: 'flex-end', marginLeft: '90%' }}>
                                                                            <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 50, top: -10, backgroundColor: dark ? '#FFFFFF' : '#000000', justifyContent: 'center', alignItems: 'center' }} onPress={abrirModal5}>
                                                                                <Text style={{ color: dark ? '#000000' : '#ffffff' }} >6</Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                    <ScrollView style={{ flex: 1, width: '100%', marginBottom: '10%' }}>
                                                                        <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', backgroundColor: dark ? 'white' : 'black' }}>
                                                                            {comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                                                                                <>
                                                                                    <View key={index} style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%', marginBottom: '5%' }}>
                                                                                        <Image source={comment.image} style={{ height: 52, width: 52, borderRadius: 99, marginTop: '3%' }} />
                                                                                        <View key={index} style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>

                                                                                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                                                                                                <Text style={[style.s14, { color: '#8E8E8E' }]}>{comment.name}</Text>
                                                                                                <Text style={[style.r12, {
                                                                                                    color: 'rgba(105, 99, 99, 1)'
                                                                                                }]}>2 min ago</Text>
                                                                                            </View>
                                                                                            <Text style={[style.r12, { color: '#8E8E8E' }]}>{comment.content} </Text>
                                                                                            <TouchableOpacity
                                                                                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                                                onPress={toggleLike}
                                                                                            >


                                                                                                {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#000000' : '#ffffff' }} />}


                                                                                                <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#000000' : '#ffffff' }}>{likes}</Text>
                                                                                            </TouchableOpacity>
                                                                                        </View>






                                                                                    </View>

                                                                                    <View style={{ width: '90%', height: 2, backgroundColor: '#989898', marginTop: '10% ', }} />


                                                                                </>

                                                                            ))}

                                                                        </View>
                                                                    </ScrollView></>) :
                                                            (<><View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '3%' }}>
                                                                <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={() => setComment1(!comment1)}>
                                                                    <Text style={[style.s14, { color: '#A8A8A8' }]}>Recent</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Text style={[style.s14, { color: dark ? '#FFFFFF' : '#000000' }]}>Popular</Text>
                                                                </TouchableOpacity>
                                                                <View style={{ justifyContent: 'flex-end', marginLeft: '90%' }}>
                                                                    <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 50, top: -10, backgroundColor: dark ? '#FFFFFF' : '#000000', justifyContent: 'center', alignItems: 'center' }} onPress={abrirModal5}>
                                                                        <Text style={{ color: dark ? '#000000' : '#ffffff' }} >4</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                                <ScrollView style={{ flex: 1, width: '100%', marginBottom: '10%' }}>
                                                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', backgroundColor: dark ? 'white' : 'black' }}>
                                                                        {comments.sort((a, b) => b.likesCount - a.likesCount).map((comment, index) => (
                                                                            <React.Fragment key={index}>
                                                                                <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%', }}>
                                                                                    <Image source={comment.image} style={{ height: 52, width: 52, borderRadius: 99, marginTop: '3%' }} />
                                                                                    <View style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                                                                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                                                                                            <Text style={[style.s14, { color: '#8E8E8E' }]}>{comment.name}</Text>
                                                                                            <Text style={[style.r12, { color: 'rgba(105, 99, 99, 1)' }]}>2 min ago</Text>
                                                                                        </View>
                                                                                        <Text style={[style.r12, { color: '#8E8E8E' }]}>{comment.content}</Text>
                                                                                        <TouchableOpacity
                                                                                            style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                                            onPress={toggleLike}
                                                                                        >
                                                                                            {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#000000' : '#ffffff' }} />}
                                                                                            <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#000000' : '#ffffff' }}>{comment.likesCount}</Text>
                                                                                        </TouchableOpacity>
                                                                                    </View>
                                                                                </View>
                                                                                <View style={{ width: '90%', height: 2, backgroundColor: '#989898', marginTop: '10%' }} />
                                                                            </React.Fragment>
                                                                        ))}
                                                                    </View>
                                                                </ScrollView>
                                                            </>)}

                                                    </View>
                                                    {swipedDown && <Text>La imagen fue deslizada hacia abajo.</Text>}
                                                </>
                                            ) : (<>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', marginBottom: '10%' }} onPress={() => setLearn(!learn)}
                                                >
                                                    <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', marginLeft: '4%', }]}> Read more </Text>
                                                    <Send size={14} style={{ color: dark ? '#ffffff' : '#000000', marginBottom: 1, }} />
                                                </TouchableOpacity>
                                            </>)}
                                            <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', position: 'absolute', top: learn ? '98%' : '50%', right: 30, justifyContent: 'center' }}>



                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                                    onPress={toggleLike}
                                                >


                                                    {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                    <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                    onPress={handlePressRt}
                                                >

                                                    <Image source={isRetweetHovered ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                        style={{ width: 22, height: 22, tintColor: !isRetweetHovered ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                    />

                                                    <Text style={{ marginLeft: '2%', color: isRetweetHovered ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }} onPress={() => setCommentActive(!commentActive)}>

                                                    <Chatbubble size={20} style={{ color: dark ? 'white' : 'black' }}
                                                    />

                                                    <Text style={{ marginLeft: '4%', color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                >

                                                    <Send
                                                        size={18}
                                                        style={{ color: dark ? '#ffffff' : '#000000', transform: [{ rotate: '-45deg' }] }} />



                                                </TouchableOpacity>
                                                <TouchableOpacity
                                                    style={{ position: 'absolute', right: 0, top: 4 }}
                                                    onPress={handlePress}
                                                >
                                                    {isPressed ? <Star size={18} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                </TouchableOpacity>

                                            </View>
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
                                                                                    <TouchableOpacity onPress={() => likeComment2(index)} style={{ marginTop: '10%' }}>
                                                                                        {commentVotes2[index] === 'like' ? <ArrowUp1 size={15} color={'green'} /> : <ArrowUp1 size={15} />}
                                                                                    </TouchableOpacity>
                                                                                    <TouchableOpacity onPress={() => dislikeComment2(index)} style={{ marginTop: '10%' }}>
                                                                                        {commentVotes2[index] === 'dislike' ? <ArrowDown size={15} color={'red'} /> : <ArrowDown size={15} />}
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
                                                                                    onChangeText={setText1}
                                                                                    value={text1}
                                                                                    placeholder="Add a comment"
                                                                                    placeholderTextColor="#6E707A"
                                                                                    keyboardType="default"
                                                                                />

                                                                                <TouchableOpacity onPress={() => handleReply(index, text1)}>
                                                                                    <Image source={require('../../../img/Sendbutton.png')} style={{ width: 24, height: 24, right: -20 }} />
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
                                                                <Image source={require('../../../img/Sendbutton.png')} style={{ width: 24, height: 24, right: -20 }} />
                                                            </TouchableOpacity>
                                                        </View>
                                                    </View>) : (null)}

                                                </>
                                            ) : (null)
                                            }
                                        </View>



                                    </View>
                                    <View>
                                        <Modal visible={learn}
                                            animationType="slide"
                                            transparent={true}
                                            onRequestClose={() => setLearn(false)}
                                        >


                                            <View style={{
                                                justifyContent: 'center',
                                                width: '90%',
                                                borderRadius: 20,
                                                marginLeft: '5%',
                                                position: 'absolute',
                                                top: '5%',
                                                height: 700,
                                                backgroundColor: dark ? "#000000" : "#ffffff",
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                            }}>
                                                <ScrollView style={{ flex: 1, width: '100%', marginBottom: '10%' }}>
                                                    <View style={{ width: '92%', marginTop: '1%', borderRadius: 15, overflow: 'hidden', backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', marginLeft: '4%', }}>
                                                        <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                                                            <TouchableOpacity style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }} onPress={() => navigation.navigate('ProfileFoll', { profileImage: userP.image, username2: userP.username, follow: 1 })}>
                                                                <Image source={userP.image} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                                                            </TouchableOpacity>

                                                            <View style={styles.userInfoContainer}>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                    <Text style={[style.b16, { marginBottom: 1, color: dark ? '#ffffff' : 'gray' }]}>
                                                                        {userP.name}
                                                                    </Text>
                                                                    {friends === 0 ?
                                                                        (
                                                                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                                                <DynamicSun
                                                                                    colorCircle={userP.colorSol}
                                                                                    colorPath={Colors.solDefault}
                                                                                    sizeWidth={25}
                                                                                    sizeHeight={25}
                                                                                />
                                                                            </View>) : (
                                                                            <View style={{ position: 'relative', top: 0, left: 20, }}>
                                                                                <View style={{ width: 15, height: 15, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                                            </View>
                                                                        )}

                                                                </View>

                                                            </View>


                                                            <TouchableOpacity
                                                                onLayout={handleButtonLayout}
                                                                style={{
                                                                    position: 'absolute',
                                                                    height: 21.58,
                                                                    width: 21.58,
                                                                    borderRadius: 999,
                                                                    right: 0,
                                                                    top: '52%',
                                                                    marginTop: -15,
                                                                    backgroundColor: 'transparent',
                                                                    borderColor: 'transparent',
                                                                    borderWidth: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}
                                                                onPress={abrirModal2}
                                                            >
                                                                <View style={{ flexDirection: 'column' }}>
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5, marginVertical: 2 }} />
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                                </View>
                                                            </TouchableOpacity>

                                                        </View>
                                                        <ImageBackground source={userP.imagenH} borderRadius={10} style={{ height: 272, width: '96%', marginLeft: '5%', marginTop: '5%', }}>
                                                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%', marginLeft: '5%', marginTop: '5%' }}>
                                                                <TouchableOpacity style={{ backgroundColor: 'white', width: 51, height: 26, borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}><Text>Article</Text></TouchableOpacity>
                                                                <TouchableOpacity style={{ backgroundColor: 'white', width: 34, height: 34, borderRadius: 99, justifyContent: 'center', alignItems: 'center' }} onPress={() => setStar1(!star1)}>
                                                                    <>
                                                                        {star1 ? (
                                                                            <>
                                                                                <Star size={16} color={'rgba(190, 11, 11, 1)'} />
                                                                            </>
                                                                        ) : (
                                                                            <>
                                                                                <Star size={16} color={'rgba(213, 205, 205, 1)'} />
                                                                            </>
                                                                        )}
                                                                    </>
                                                                </TouchableOpacity>
                                                            </View>
                                                            <TouchableOpacity
                                                                style={styles.touchableOpacityStyle}

                                                            >
                                                                <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '10%' }}>
                                                                    <Text style={[style.r16, { top: -15, left: 10, color: '#EFEFF1' }]}>{userP.text}</Text>
                                                                    <Text style={[style.r12, {
                                                                        top: -15, left: 10, color: 'rgba(172, 172, 172, 1)'
                                                                    }]}>1 day ago</Text>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </ImageBackground>

                                                        <View>
                                                            {learn ? (
                                                                <>

                                                                    <TouchableOpacity
                                                                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: '5%' }}
                                                                        onPress={() => setLearn(false)}
                                                                        {...(Platform.OS === 'ios' ? panResponder.panHandlers : {})} 
                                                                    >
                                                                        <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', marginLeft: '4%', }]}> Read less </Text>
                                                                        <Send size={14} style={{ color: dark ? '#ffffff' : '#000000', marginBottom: 1, }} />
                                                                    </TouchableOpacity>

                                                                    <View style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', marginLeft: '5%' }}>
                                                                        <Text style={[style.s18, { color: dark ? '#ffffff' : '#000000' }]}>Ways to get rid of monotony in business life</Text>
                                                                        <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Sed semper est ex, id dictum eros suscipit sit amet. Nam sed gravida nisl. Aliquam efficitur gravida rutrum. Nunc lectus est, ultrices nec elit ac, laoreet finibus nulla.</Text>
                                                                        <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Curabitur ante arcu, ornare ut finibus porta, ullamcorper ac lectus. Donec ut congue libero, non fringilla mi.</Text>
                                                                        <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Pellentesque efficitur elit in convallis tempor. Integer vel iaculis neque. Aliquam tempus arcu in magna efficitur, quis consectetur est consequat.</Text>
                                                                        <Text style={[style.s12, { color: 'rgba(148, 142, 142, 1)' }]}>Nunc quam ex, dictum et aliquet eget, condimentum a nibh. Maecenas tincidunt varius molestie. Pellentesque rutrum ac dolor nec suscipit.</Text>
                                                                        <View style={{ alignItems: 'center', flexDirection: 'row', marginTop: '5%', marginBottom: '0%' }}>
                                                                            <View style={{ width: '45%', marginRight: '5%', height: 210, backgroundColor: 'rgba(231, 222, 222, 1)', borderRadius: 16 }} />
                                                                            <View style={{ width: '45%', height: 210, backgroundColor: 'rgba(231, 222, 222, 1)', borderRadius: 16 }} />
                                                                        </View>
                                                                    </View>

                                                                    {comment1 ?
                                                                        (
                                                                            <>
                                                                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '3%' }}>
                                                                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                                                                        <Text style={[style.s14, { color: dark ? '#FFFFFF' : '#000000' }]}>Recent</Text>
                                                                                    </TouchableOpacity>
                                                                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={() => setComment1(!comment1)}>
                                                                                        <Text style={[style.s14, { color: '#A8A8A8' }]}>Popular</Text>
                                                                                    </TouchableOpacity>
                                                                                    <View style={{ justifyContent: 'flex-end', marginLeft: '90%' }}>
                                                                                        <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 50, top: -10, backgroundColor: dark ? '#FFFFFF' : '#000000', justifyContent: 'center', alignItems: 'center' }} onPress={abrirModal5}>
                                                                                            <Text style={{ color: dark ? '#000000' : '#ffffff' }} >6</Text>
                                                                                        </TouchableOpacity>
                                                                                    </View>
                                                                                </View>
                                                                                <View style={{ flex: 1, width: '100%', marginBottom: '10%' }}>
                                                                                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', backgroundColor: dark ? 'white' : 'black' }}>
                                                                                        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                                                                                            <>
                                                                                                <View key={index} style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%', marginBottom: '5%' }}>
                                                                                                    <Image source={comment.image} style={{ height: 52, width: 52, borderRadius: 99, marginTop: '3%' }} />
                                                                                                    <View key={index} style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>

                                                                                                        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                                                                                                            <Text style={[style.s14, { color: '#8E8E8E' }]}>{comment.name}</Text>
                                                                                                            <Text style={[style.r12, {
                                                                                                                color: 'rgba(105, 99, 99, 1)'
                                                                                                            }]}>2 min ago</Text>
                                                                                                        </View>
                                                                                                        <Text style={[style.r12, { color: '#8E8E8E' }]}>{comment.content} </Text>
                                                                                                        <TouchableOpacity
                                                                                                            style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                                                            onPress={toggleLike}
                                                                                                        >


                                                                                                            {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#000000' : '#ffffff' }} />}


                                                                                                            <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#000000' : '#ffffff' }}>{likes}</Text>
                                                                                                        </TouchableOpacity>
                                                                                                    </View>






                                                                                                </View>

                                                                                                <View style={{ width: '90%', height: 2, backgroundColor: '#989898', marginTop: '10% ', }} />


                                                                                            </>

                                                                                        ))}

                                                                                    </View>
                                                                                </View></>) :
                                                                        (<><View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%', marginTop: '3%' }}>
                                                                            <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={() => setComment1(!comment1)}>
                                                                                <Text style={[style.s14, { color: '#A8A8A8' }]}>Recent</Text>
                                                                            </TouchableOpacity>
                                                                            <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                                                                <Text style={[style.s14, { color: dark ? '#FFFFFF' : '#000000' }]}>Popular</Text>
                                                                            </TouchableOpacity>
                                                                            <View style={{ justifyContent: 'flex-end', marginLeft: '90%' }}>
                                                                                <TouchableOpacity style={{ width: 20, height: 20, borderRadius: 50, top: -10, backgroundColor: dark ? '#FFFFFF' : '#000000', justifyContent: 'center', alignItems: 'center' }} onPress={abrirModal5}>
                                                                                    <Text style={{ color: dark ? '#000000' : '#ffffff' }} >4</Text>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        </View>
                                                                            <ScrollView style={{ width: '100%', marginBottom: '10%' }}>
                                                                                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '100%', backgroundColor: dark ? 'white' : 'black' }}>
                                                                                    {comments.sort((a, b) => b.likesCount - a.likesCount).map((comment, index) => (
                                                                                        <React.Fragment key={index}>
                                                                                            <View style={{ width: '80%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%', }}>
                                                                                                <Image source={comment.image} style={{ height: 52, width: 52, borderRadius: 99, marginTop: '3%' }} />
                                                                                                <View style={{ width: '90%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                                                                                    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', marginTop: '2%' }}>
                                                                                                        <Text style={[style.s14, { color: '#8E8E8E' }]}>{comment.name}</Text>
                                                                                                        <Text style={[style.r12, { color: 'rgba(105, 99, 99, 1)' }]}>2 min ago</Text>
                                                                                                    </View>
                                                                                                    <Text style={[style.r12, { color: '#8E8E8E' }]}>{comment.content}</Text>
                                                                                                    <TouchableOpacity
                                                                                                        style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                                                        onPress={toggleLike}
                                                                                                    >
                                                                                                        {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#000000' : '#ffffff' }} />}
                                                                                                        <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#000000' : '#ffffff' }}>{comment.likesCount}</Text>
                                                                                                    </TouchableOpacity>
                                                                                                </View>
                                                                                            </View>
                                                                                            <View style={{ width: '90%', height: 2, backgroundColor: '#989898', marginTop: '10%' }} />
                                                                                        </React.Fragment>
                                                                                    ))}
                                                                                </View>
                                                                            </ScrollView>
                                                                            {swipedDown && <Text>La imagen fue deslizada hacia abajo.</Text>}
                                                                        </>)}


                                                                </>
                                                            ) : (<>
                                                                <TouchableOpacity
                                                                    style={{ flexDirection: 'row', alignItems: 'center', marginTop: '3%', marginBottom: '10%' }} onPress={() => setLearn(!learn)}
                                                                >
                                                                    <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', marginLeft: '4%', }]}> Read more </Text>
                                                                    <Send size={14} style={{ color: dark ? '#ffffff' : '#000000', marginBottom: 1, }} />
                                                                </TouchableOpacity>
                                                            </>)}
                                                            <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', position: 'absolute', top: learn ? '98%' : '50%', right: 30, justifyContent: 'center' }}>



                                                                <TouchableOpacity
                                                                    style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                    onPress={toggleLike}
                                                                >


                                                                    {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                                    <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                                </TouchableOpacity>

                                                                <TouchableOpacity
                                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                                    onPress={handlePressRt}
                                                                >

                                                                    <Image source={isRetweetHovered ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                                        style={{ width: 22, height: 22, tintColor: !isRetweetHovered ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                                    />

                                                                    <Text style={{ marginLeft: '2%', color: isRetweetHovered ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                                </TouchableOpacity>

                                                                <TouchableOpacity
                                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                                >

                                                                    <Image source={require('../../../img/Comment2.png')}
                                                                        style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000' }}
                                                                    />

                                                                    <Text style={{ marginLeft: '4%', color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity
                                                                    style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                                >

                                                                    <Send
                                                                        size={18}
                                                                        style={{ color: dark ? '#ffffff' : '#000000', transform: [{ rotate: '-45deg' }] }} />



                                                                </TouchableOpacity>
                                                                <TouchableOpacity
                                                                    style={{ position: 'absolute', right: 0, top: 4 }}
                                                                    onPress={handlePress}
                                                                >
                                                                    {isPressed ? <Star size={18} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                                </TouchableOpacity>

                                                            </View>
                                                        </View>



                                                    </View>


                                                </ScrollView>

                                            </View>

                                        </Modal>
                                    </View>
                                    {users.map((user) => (
                                        <View key={user.id}>
                                            <View style={{ width: '100%', marginTop: '2%' }}>
                                                {user.forma === 'imagen' ? (
                                                    <View style={{ width: '92%', height: 438, marginTop: '1%', borderRadius: 15, overflow: 'hidden', backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', marginLeft: '4%', }}>
                                                        <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                                                            <TouchableOpacity style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }} onPress={() => navigation.navigate('ProfileFoll', { profileImage: user.image, username2: user.username, follow: 1 })}>
                                                                <Image source={user.image} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                                                            </TouchableOpacity>

                                                            <View style={styles.userInfoContainer}>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                    <Text style={[style.b16, { marginBottom: 1, color: dark ? '#ffffff' : 'gray' }]}>
                                                                        {user.name}
                                                                    </Text>
                                                                    {friends === 0 ?
                                                                        (
                                                                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                                                <DynamicSun
                                                                                    colorCircle={userP.colorSol}
                                                                                    colorPath={Colors.solDefault}
                                                                                    sizeWidth={25}
                                                                                    sizeHeight={25}
                                                                                />
                                                                            </View>) : (
                                                                            <View style={{ position: 'relative', top: 0, left: 20, }}>
                                                                                <View style={{ width: 10, height: 10, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                                            </View>
                                                                        )}
                                                                    <Text style={[style.r12, { color: '#717171', left: 30 }]}>6 hours</Text>
                                                                </View>
                                                                <Text style={[style.r16, { color: '#717171' }]}>{user.username}</Text>
                                                            </View>


                                                            <TouchableOpacity
                                                                onLayout={handleButtonLayout}
                                                                style={{
                                                                    position: 'absolute',
                                                                    height: 21.58,
                                                                    width: 21.58,
                                                                    borderRadius: 999,
                                                                    right: 0,
                                                                    top: '52%',
                                                                    marginTop: -15,
                                                                    backgroundColor: 'transparent',
                                                                    borderColor: 'transparent',
                                                                    borderWidth: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}
                                                                onPress={abrirModal2}
                                                            >
                                                                <View style={{ flexDirection: 'column' }}>
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5, marginVertical: 2 }} />
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                                </View>
                                                            </TouchableOpacity>
                                                            <Modal
                                                                visible={modalVisible2}
                                                                animationType="slide"
                                                                transparent={true}
                                                                onRequestClose={() => setModalVisible2(false)}
                                                            >
                                                                <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => setModalVisible2(false)}>
                                                                    <View style={{
                                                                        justifyContent: 'center',
                                                                        width: '100%',
                                                                        borderRadius: 20,
                                                                        position: 'absolute',
                                                                        top: 400,
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
                                                        </View>
                                                        <View style={{ width: '92%', height: '15%', marginLeft: '4%', justifyContent: 'center', marginTop: '3%' }}>
                                                            <Text style={[style.i16, { color: dark ? '#ffffff' : '#000000' }]}>{user.text}</Text>
                                                        </View>


                                                        <>{user.tipo === 'articulo' ? (
                                                            <>
                                                                <Image source={user.imagenH} style={{ height: '50%', width: '92%', marginLeft: '4%', borderRadius: 16, marginTop: '3%' }} />


                                                                <View>
                                                                    <TouchableOpacity
                                                                        style={{ flexDirection: 'row', alignItems: 'center', marginTop: '1%' }}
                                                                    >
                                                                        <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', marginLeft: '4%' }]}> Read more </Text>
                                                                        <Send size={14} style={{ color: dark ? '#ffffff' : '#000000', marginBottom: 1, }} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </>
                                                        ) : user.tipo === 'video' ? (
                                                            <>
                                                                <TouchableOpacity style={{ flex: 1 }} onPress={togglePlayPause}>

                                                                    <Video
                                                                        source={require('../../../img/video2.mov')}
                                                                        borderRadius={8}
                                                                        style={{ height: '80%', width: '92%', marginLeft: '4%', borderRadius: 16, marginTop: '3%' }}
                                                                        resizeMode="cover"
                                                                        repeat
                                                                        paused={paused}
                                                                        muted={muted}
                                                                        onPress={togglePlayPause}
                                                                        fullSreen
                                                                    />

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
                                                                            top: '80%',
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
                                                                        {muted ? <Mute
                                                                            size={20} color={'gray'} /> : <Vol size={20} color={'gray'} />}

                                                                    </TouchableOpacity>
                                                                </TouchableOpacity>
                                                            </>
                                                        ) : null}
                                                        </>




                                                        <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', position: 'absolute', top: '93%', right: 30, justifyContent: 'center' }}>



                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                onPress={toggleLike}
                                                            >



                                                                {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                                <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                                onPress={handlePressRt}
                                                            >

                                                                <Image source={isRetweetHovered ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                                    style={{ width: 22, height: 22, tintColor: !isRetweetHovered ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                                />

                                                                <Text style={{ marginLeft: '2%', color: isRetweetHovered ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                            >

                                                                <Image source={require('../../../img/Comment2.png')}
                                                                    style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000' }}
                                                                />

                                                                <Text style={{ marginLeft: '4%', color: dark ? '#ffffff' : '#000000' }}>543</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                                onPress={() => setModalEnviar(!modalEnviar)}

                                                            >

                                                                <Send
                                                                    size={18}
                                                                    style={{ color: dark ? '#ffffff' : '#000000', transform: [{ rotate: '-45deg' }] }} />



                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{ position: 'absolute', right: 0, top: 4 }}
                                                                onPress={handlePress}
                                                            >
                                                                {isPressed ? <Star size={18} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                            </TouchableOpacity>

                                                        </View>

                                                    </View>



                                                ) :

                                                    <View style={{ width: '92%', height: 238, marginTop: '1%', borderRadius: 15, overflow: 'hidden', backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', marginLeft: '4%' }}>
                                                        <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                                                            <View style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }}>
                                                                <Image source={user.image} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                                                            </View>

                                                            <View style={styles.userInfoContainer}>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                    <Text style={[style.b16, { marginBottom: 1, color: dark ? '#ffffff' : 'gray' }]}>
                                                                        {user.name}
                                                                    </Text>
                                                                    {friends === 0 ?
                                                                        (
                                                                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                                                <DynamicSun
                                                                                    colorCircle={userP.colorSol}
                                                                                    colorPath={Colors.solDefault}
                                                                                    sizeWidth={25}
                                                                                    sizeHeight={25}
                                                                                />
                                                                            </View>) : (
                                                                            <View style={{ position: 'relative', top: 0, left: 20, }}>
                                                                                <View style={{ width: 15, height: 15, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                                            </View>
                                                                        )}
                                                                    <Text style={[style.r12, { color: '#717171', left: 30 }]}>6 hours</Text>
                                                                </View>
                                                                <Text style={[style.r16, { color: '#717171' }]}>{user.username}</Text>
                                                            </View>


                                                            <TouchableOpacity
                                                                onLayout={handleButtonLayout}
                                                                style={{
                                                                    position: 'absolute',
                                                                    height: 21.58,
                                                                    width: 21.58,
                                                                    borderRadius: 999,
                                                                    right: 0,
                                                                    top: '52%',
                                                                    marginTop: -15,
                                                                    backgroundColor: 'transparent',
                                                                    borderColor: 'transparent',
                                                                    borderWidth: 1,
                                                                    justifyContent: 'center',
                                                                    alignItems: 'center'
                                                                }}
                                                                onPress={abrirModal1}
                                                            >
                                                                <View style={{ flexDirection: 'column' }}>
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5, marginVertical: 2 }} />
                                                                    <View style={{ width: 3, height: 3, backgroundColor: dark ? '#ffffff' : '#000000', borderRadius: 2.5 }} />
                                                                </View>
                                                            </TouchableOpacity>
                                                            <Modal
                                                                visible={modalVisible1}
                                                                animationType="slide"
                                                                transparent={true}
                                                                onRequestClose={() => setModalVisible1(false)}
                                                            >
                                                                <TouchableOpacity style={{ width: '100%', height: '100%' }} onPress={() => setModalVisible1(false)}>
                                                                    <View style={{
                                                                        justifyContent: 'center',
                                                                        width: '90%',
                                                                        borderRadius: 20,
                                                                        marginLeft: '5%',
                                                                        position: 'absolute',
                                                                        top: buttonPosition.y + 250,
                                                                        height: 100,
                                                                        backgroundColor: 'rgba(217, 217, 217, 0.3)',
                                                                        flexDirection: 'column',
                                                                        alignItems: 'center',
                                                                    }}>
                                                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                                            <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                                                <Like1 size={25} />
                                                                                <Text>Esto me gusta</Text>
                                                                            </TouchableOpacity>
                                                                            <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                                                                                <Dislike1 size={25} />
                                                                                <Text>Esto no me gusta</Text>
                                                                            </TouchableOpacity>
                                                                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                                                                <Ban size={25} />
                                                                                <Text>Quiero denunciar</Text>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                </TouchableOpacity>
                                                            </Modal>
                                                        </View>
                                                        <View style={{ width: '92%', height: 120, marginLeft: '4%', justifyContent: 'center', marginTop: '3%' }}>
                                                            <Text style={[style.i16, { color: dark ? '#ffffff' : '#000000' }]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</Text>
                                                        </View>


                                                        <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', position: 'absolute', top: '89%', right: 30, justifyContent: 'center' }}>



                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                                                onPress={toggleLike}
                                                            >



                                                                {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}


                                                                <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                                onPress={handlePressRt}
                                                            >

                                                                <Image source={isRetweetHovered ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                                    style={{ width: 22, height: 22, tintColor: !isRetweetHovered ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                                />

                                                                <Text style={{ marginLeft: '4%', color: isRetweetHovered ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                                            </TouchableOpacity>

                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                            >

                                                                <Image source={require('../../../img/Comment2.png')}
                                                                    style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000' }}
                                                                />

                                                                <Text style={{ marginLeft: '4%', color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                                            >

                                                                <Send
                                                                    size={18}
                                                                    style={{ color: dark ? '#ffffff' : '#000000', transform: [{ rotate: '-45deg' }] }} />



                                                            </TouchableOpacity>
                                                            <TouchableOpacity
                                                                style={{ position: 'absolute', right: 0, top: 4 }}
                                                                onPress={handlePress}
                                                            >
                                                                {isPressed ? <Star size={18} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                                            </TouchableOpacity>

                                                        </View>

                                                    </View>

                                                }
                                            </View>
                                        </View>
                                    ))}
                                    <View style={{ width: '92%', borderColor: '#E7E7E7', borderWidth: 1, marginLeft: '4%', flexDirection: 'row', backgroundColor: dark ? '#1C1C1C' : '#FDFDFD', marginTop: '2%', borderRadius: 15 }}>
                                        <View style={{ width: '18%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '4%' }}>
                                            <Image source={userP.image} style={{ width: '100%', height: '100%', borderRadius: 999, marginTop: '6%', }} />
                                        </View>
                                        <View style={{ width: '80%' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={[style.b18, { color: dark ? '#ffffff' : '#000000' }]}>{userP.name}</Text>
                                                <Text style={[style.b14, { marginLeft: '2%', color: dark ? '#ffffff' : '#000000' }]}>@{userP.username}</Text>
                                                {friends === 0 ?
                                                    (
                                                        <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                            <DynamicSun
                                                                colorCircle={userP.colorSol}
                                                                colorPath={Colors.solDefault}
                                                                sizeWidth={25}
                                                                sizeHeight={25}
                                                            />
                                                        </View>) : (
                                                        <View style={{ position: 'relative', top: 3, left: 2, }}>
                                                            <View style={{ width: 10, height: 10, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                        </View>
                                                    )}
                                            </View>
                                            <Text style={[style.i16, { color: dark ? '#ffffff' : '#000000' }]}>Exactly</Text>
                                            <View style={{ width: '96%', height: 120, borderColor: '#E7E7E7', borderWidth: 1, borderRadius: 10, marginTop: '2%', flexDirection: 'column', marginBottom: '10%' }}>
                                                <View style={{ width: '90%', aspectRatio: 1, marginRight: 10, borderRadius: 999, flexDirection: 'row' }}>
                                                    <Image source={userP.image} style={{ width: 15, height: 15, borderRadius: 999, marginTop: '1%', marginLeft: '1%' }} />
                                                    <Text style={[style.r13, { marginLeft: '2%', color: dark ? '#ffffff' : '#000000' }]}>{userP.name}</Text>
                                                    <Text style={[style.r12, { marginLeft: '2%', color: dark ? '#ffffff' : '#000000' }]}>@{userP.username}</Text>
                                                    {friends === 0 ?
                                                        (
                                                            <View style={{ position: 'relative', top: 0, left: 20 }}>
                                                                <DynamicSun
                                                                    colorCircle={userP.colorSol}
                                                                    colorPath={Colors.solDefault}
                                                                    sizeWidth={15}
                                                                    sizeHeight={15}
                                                                />
                                                            </View>) : (
                                                            <View style={{ position: 'relative', top: 3, left: 2, }}>
                                                                <View style={{ width: 10, height: 10, backgroundColor: userP.colorSol, borderRadius: 99 }}></View>
                                                            </View>
                                                        )}
                                                </View>
                                                <Text style={[style.i14, { position: 'absolute', top: 25, marginLeft: '2%', color: dark ? '#ffffff' : '#000000' }]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</Text>
                                            </View>
                                        </View>
                                        <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', position: 'absolute', top: '87%', right: 30, justifyContent: 'center' }}>



                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center' }}
                                                onPress={toggleLike}
                                            >


                                                {liked ? <Heart size={18} style={{ color: '#FE4040' }} /> : <Hearto size={18} />}


                                                <Text style={{ marginLeft: '2%', color: liked ? '#FE4040' : dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}
                                                onPress={handlePressRt}
                                            >

                                                <Image source={isRetweetHovered ? require('../../../img/repeat-circle-green.png') : require('../../../img/repeat-circle.png')}
                                                    style={{ width: 22, height: 22, tintColor: !isRetweetHovered ? dark ? '#ffffff' : '#000000' : '#52B750' }}
                                                />

                                                <Text style={{ marginLeft: '2%', color: isRetweetHovered ? 'green' : dark ? '#ffffff' : '#000000' }}>23</Text>
                                            </TouchableOpacity>

                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}



                                            >
                                                <Image source={require('../../../img/Comment2.png')}
                                                    style={{ width: 18, height: 18, tintColor: dark ? '#ffffff' : '#000000' }}
                                                />

                                                <Text style={{ marginLeft: '4%', color: dark ? '#ffffff' : '#000000' }}>{likes}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ flexDirection: 'row', alignItems: 'center', marginLeft: '2%' }}

                                                onPress={() => setModalEnviar(!modalEnviar)}

                                            >

                                                <Send
                                                    size={18}
                                                    style={{ color: dark ? '#ffffff' : '#000000', transform: [{ rotate: '-45deg' }] }} />



                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={{ position: 'absolute', right: 0, top: 4 }}
                                                onPress={handlePress}
                                            >
                                                {isPressed ? <Star size={18} style={{ color: dark ? '#ffffff' : '#000000' }} /> : <Staro size={18} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                                            </TouchableOpacity>
                                        </View>
                                    </View>



                                </ScrollView>
                                <Modal
                                    visible={modalVisible5}
                                    animationType="slide"
                                    transparent={true}
                                    onRequestClose={() => setModalVisible5(false)}
                                >
                                    <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)', }} onPress={cerrarModal}>
                                        {arco ? (

                                            <View style={{
                                                flexDirection: 'column', width: '94%', marginLeft: '3%', borderColor: '#2F3336', padding: 10, backgroundColor: 'white', marginTop: '20%', borderRadius: 20
                                            }}>
                                                < View style={{ flexDirection: 'row', marginLeft: '5%' }}>

                                                    <Image
                                                        source={require('../../../img/perfilS.png')}
                                                        style={{ width: 40, height: 40, borderRadius: 100 }}
                                                    />

                                                    <TextInput
                                                        style={[styles.editorText, , isUnderline && styles.underlineText, { fontSize: 28, marginLeft: '10%', width: '70%', marginTop: '5%', fontFamily: selectedFont, color: selectedColor1 }]}
                                                        placeholder="Header Title"
                                                        value={text}
                                                        onChangeText={setText}
                                                        multiline
                                                    />

                                                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: '#FF9900', width: 50, height: 25, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10 }} onPress={arcActive}>
                                                        <Text style={[style.b14]}>Article</Text>
                                                    </TouchableOpacity>
                                                </View>
                                                <View style={{ width: '100%' }}>
                                                    <TextInput
                                                        style={[styles.editorText, { marginLeft: '5%', }]}
                                                        placeholder="Tell me something great! "
                                                        value={text1}
                                                        onChangeText={setText1}
                                                        multiline
                                                    />
                                                </View>
                                                <View style={{ width: '90%', marginLeft: '10%', marginTop: '2%' }}>
                                                    {imagenSimple ?
                                                        (<>

                                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                <TouchableOpacity onPress={() => setImagenSimple(true)}>
                                                                    <ImageSimple size={20} />
                                                                </TouchableOpacity>
                                                                <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => setImagenSimple(false)}>
                                                                    <ImageC size={20} />
                                                                </TouchableOpacity>
                                                            </View>
                                                            <Image source={require('../../../img/LastUpdate.png')} style={{ width: '80%', height: 200, borderRadius: 12, marginLeft: '5%', marginTop: '5%' }} />
                                                        </>
                                                        ) : (
                                                            <>
                                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                                    <TouchableOpacity onPress={() => setImagenSimple(true)}>
                                                                        <ImageSimple size={20} />
                                                                    </TouchableOpacity>
                                                                    <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => setImagenSimple(false)}>
                                                                        <ImageC size={20} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                                <View style={{ width: '90%', flexDirection: 'row', alignItems: 'center' }}>
                                                                    <Image source={require('../../../img/LastUpdate.png')} style={{ width: '50%', height: 200, borderRadius: 12, marginTop: '5%' }} />
                                                                    <Image source={require('../../../img/LastUpdate.png')} style={{ width: '50%', height: 200, borderRadius: 12, marginLeft: '5%', marginTop: '5%' }} />
                                                                </View>
                                                            </>
                                                        )}
                                                </View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '90%', marginLeft: '10%', marginTop: '10%', justifyContent: 'space-between' }}>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                        <TouchableOpacity>
                                                            <Image source={require('../../../img/Top-Tweets.png')} style={{ width: 34, height: 34 }} />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity>
                                                            <Image source={require('../../../img/Top-Tweets1.png')} style={{ width: 34, height: 34 }} />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity>
                                                            <Image source={require('../../../img/Top-Tweets2.png')} style={{ width: 34, height: 34 }} />
                                                        </TouchableOpacity>

                                                    </View>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 5 }}>
                                                        <TouchableOpacity onPress={toggleMenuColor}>
                                                            <Paleta size={16} />
                                                        </TouchableOpacity>
                                                        {isMenuOpenColor && (
                                                            <View style={styles.fontMenu}>
                                                                <TouchableOpacity onPress={() => handleColorSelection('red')}>
                                                                    <Text style={{ fontFamily: selectedFont, color: 'red' }}>Red</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity onPress={() => handleColorSelection('blue')}>
                                                                    <Text style={{ fontFamily: selectedFont, color: 'blue' }}>Blue</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity onPress={() => handleColorSelection('green')}>
                                                                    <Text style={{ fontFamily: selectedFont, color: 'green' }}>Green</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        )}

                                                        <TouchableOpacity onPress={toggleMenu}>
                                                            <Font size={16} />
                                                        </TouchableOpacity>
                                                        {isMenuOpen && (
                                                            <View style={styles.fontMenu}>
                                                                <TouchableOpacity onPress={() => handleFontSelection('Poppins-Bold')}>
                                                                    <Text style={[style.b16]}>Bold</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity onPress={() => handleFontSelection('Poppins-SemiBold')}>
                                                                    <Text style={[style.s16]}>Semi</Text>
                                                                </TouchableOpacity>
                                                                <TouchableOpacity onPress={() => handleFontSelection('Poppins-Regular')}>
                                                                    <Text style={[style.r16]}>Regular</Text>
                                                                </TouchableOpacity>
                                                            </View>
                                                        )}

                                                        <TouchableOpacity onPress={toggleUnderline}>
                                                            <Underline style={[styles.toolbarButton, isUnderline && styles.toolbarButtonActive]} />
                                                        </TouchableOpacity>

                                                        {/* Agrega más botones según tus necesidades, por ejemplo, itálica, subrayado, etc. */}
                                                    </View>

                                                </View>

                                            </View>) : (
                                            <View style={{ flexDirection: 'column', width: '94%', marginLeft: '3%', borderColor: '#2F3336', padding: 10, backgroundColor: 'white', marginTop: '70%', height: '20%', borderRadius: 20 }}>
                                                <View style={{ flexDirection: 'row', marginLeft: '5%' }}>

                                                    <Image
                                                        source={require('../../../img/perfilS.png')}
                                                        style={{ width: 40, height: 40, borderRadius: 100 }}
                                                    />

                                                    <TextInput
                                                        style={{ marginLeft: '5%', width: '70%', height: 100 }}
                                                        placeholder="What's up"
                                                        value={text1}
                                                        onChangeText={setText1}
                                                        multiline
                                                    />
                                                    <TouchableOpacity style={{ borderRadius: 16, backgroundColor: '#FF9900', width: 50, height: 25, justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10 }} onPress={arcActive}>
                                                        <Text style={[style.b14]}>Article</Text>
                                                    </TouchableOpacity>
                                                </View>


                                                <View style={{ flexDirection: 'row', position: 'absolute', bottom: 10, justifyContent: 'space-around', left: '20%' }}>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../../img/Top-Tweets.png')} style={{ width: 34, height: 34 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../../img/Top-Tweets1.png')} style={{ width: 34, height: 34 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity>
                                                        <Image source={require('../../../img/Top-Tweets2.png')} style={{ width: 34, height: 34 }} />
                                                    </TouchableOpacity>
                                                    <TouchableOpacity onPress={useText}>
                                                        <Image source={require('../../../img/Sendbutton.png')} style={{ width: 34, height: 34, position: 'absolute', right: -190 }} />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        )}


                                    </TouchableOpacity>
                                </Modal>

                                <Modal
                                    visible={capturaDetectada}
                                    transparent={true}
                                    animationType="fade"
                                    onRequestClose={() => setCapturaDetectada(false)}
                                >
                                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                        <Text style={{ color: 'white', fontSize: 20 }}>Captura de pantalla detectada</Text>
                                    </View>
                                </Modal>
                            </View>

                        </ViewShot>

                    )}



                </KeyboardAvoidingView>
                <Nav navActive="board" style={{ position: 'absolute', bottom: '10%' }} />
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
    }, userInfoContainer: {
        flex: 1,

    },
    usernameText: {
        fontSize: 12,
        color: 'gray',

    }, touchableOpacityStyle: {
        position: 'absolute',
        height: 60,
        width: '96%',
        top: '84%',
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
    }, overlay: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
    },
    overlayText: {
        color: 'white',
        fontSize: 20,
    },

});
export default FriednsBoard