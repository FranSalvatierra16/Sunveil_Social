import React, { useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, Modal, TextInput } from 'react-native';
import style, { width } from '../../theme/style';

import { BackIcon, Bold, DynamicSunIcon, Font, Gif, ImageC, ImageSimple, Lock, Mute, Paleta, Pause, Pencil, Play, PlusIcon, PlusProfile, Search, Send, Underline, Unlock, Vol } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import i18n from '../../i18n';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import { useDarkMode } from '../../components/darkMode';
import Video from 'react-native-video';
import UserProfile from '../../components/Pub';
import { SvgAst } from 'react-native-svg';
import { Colors } from '../../theme/color';
import { usePrivate } from '../../components/Private';
const UserProfileScreen = () => {
  const [selectImage, setSelectImage] = useState('')
  const [selectImage1, setSelectImage1] = useState('')
  const [post, setPost] = useState(true);
  const [board, setBoard] = useState(false);
  const [like, setLike] = useState(false);
  const { homePrivate, togglePrivateHome } = usePrivate();
  const { boardPrivate, togglePrivateBoard } = usePrivate();
  const [save1, setSave1] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [paused, setPaused] = useState(true);
  const [friends, setFriends] = useState(-1);
  const [muted, setMuted] = useState(true);
  const [lockAct, setLockAct] = useState(true);
  const [lockActS, setLockActS] = useState(true);
  const [selectedColor, setSelectedColor] = useState(Colors.solDefault);
  const [borderADV, setBorderADV] = useState('transparent');
  const [borderADV1, setBorderADV1] = useState('transparent');
  const [modalVisibleSun, setModalVisibleSun] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [arco, setArco] = useState(false);
  const [modalVisible4, setModalVisible4] = useState(false);
  const [modalVisible5, setModalVisible5] = useState(false);
  const [modalP, setModalP] = useState(false);
  const [activePost, setActivePost] = useState(true);
  const [activeEdit, setActiveEdit] = useState(false);
  const [selectedColorPath, setSelectedColorPath] = useState(Colors.solDefault);
  const { dark, toggleDarkMode } = useDarkMode();
  const toggleMuted = () => {
    setMuted(!muted);
  };
  const togglePlayPause = () => {
    setPaused(!paused);
  };
  let options = {
    storageOptions: {
      path: "image"
    }
  }
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [imagenSimple, setImagenSimple] = useState(true);
  const toggleBold = () => {
    setIsBold(!isBold);
  };

  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };
  const [selectedImage, setSelectedImage] = useState(null);
  const imageArray = [
    require('../../../img/fondo5.jpg'),
    require('../../../img/fondo6.jpg'),
    require('../../../img/fondo7.jpg'),
    require('../../../img/fondo8.jpg'),
    require('../../../img/fondo9.jpg'),
    require('../../../img/fondo10.jpg'),
    require('../../../img/fondo11.jpg'),
    require('../../../img/fondo12.jpg'),
    require('../../../img/fondo13.jpg'),
    require('../../../img/fondo14.jpg'),
    require('../../../img/fondo15.jpg'),
    require('../../../img/fondo16.jpg'),
    require('../../../img/fondo17.jpg'),

    // Agrega más rutas de imágenes según sea necesario
  ];
  const [bio, setBio] = useState('');
  const maxCharacters = 150;

  const handleChangeBio = (text) => {
    // Verificar si el texto excede el límite de caracteres
    if (text.length <= maxCharacters) {
      setBio(text);
    }
  };
  const handleImagePress = (image) => {
    setSelectedImage(image);
    setModalP(true);
  };
  const abrirModal = () => {
    setModalVisible(true);
  };
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedItem1, setSelectedItem1] = useState(null);
  const openModal = (item) => {
    setSelectedItem(item);
    setModalP(true);
    setModalVisible4(true);
  };

  const handleCloseModalSun = () => {
    setModalVisibleSun(false);
  };
  const openModal1 = (item) => {
    setSelectedItem1(item);
    setModalVisible5(true);
  };
  const cerrarModal = () => {
    setModalVisible(false);
  };
  const arcActive = () => {
    setArco(!arco);
  };
  const ImagePicker = () => {
    launchImageLibrary(options, response => (
      setSelectImage(response.assets[0].uri),
      console.log(response.assets[0].uri)
    ))
  }
  const ImagePicker1 = () => {
    launchImageLibrary(options, response => (
      setSelectImage1(response.assets[0].uri),
      console.log(response.assets[0].uri)
    ))
  }
  const handleButtonLayout = (event) => {
    const { x, y } = event.nativeEvent.layout;
    setButtonPosition({ x, y });
  };
  const [text, setText] = useState('');
  const [text1, setText1] = useState('');
  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }

  const changeP = () => {
    setBoard(false)
    setPost(true)
    setLike(false)
    setSave1(false)
    setActivePost(!activePost)
  }
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenColor, setIsMenuOpenColor] = useState(false);
  const [selectedFont, setSelectedFont] = useState('Poppins-Bold'); // Estado para la fuente seleccionada
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
  };

  const handleSelectFont = (font) => {
    setSelectedFont(font);
    setIsMenuOpen(false);
  };

  const width = Dimensions.get('window').width;

  // Función para manejar el desplazamiento del ScrollView

  const users1 = [

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
      like: true,
      save: true,
      colorSol: Colors.sol1,
      text: 'Aca en la playa disfrutando del sol.',
      userType: 'normal'
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
      like: true,
      save: true,
      colorSol: Colors.sol2,
      text: 'Disfrutando de una tarde tranquila en la costa.',
      userType: 'normal',
      video: 'no'
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
      like: true,
      save: true,
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
      like: true,
      save: true,
      colorSol: Colors.sol3,
      text: 'Jugando con las olas en la playa.',
      userType: 'normal'
    }

  ]
  const [username, setUsername] = useState('Usuario'); // Valor inicial del nombre de usuario


  // Función para manejar el cambio en el nombre de usuario
  const handleChangeUsername = (text) => {
    setUsername(text);
  };

  // Función para manejar el inicio de la edición
  const handleEdit = () => {
    setEditing(true);
  };

  // Función para manejar el fin de la edición
  const handleSave = () => {

    // Aquí puedes guardar el nombre de usuario editado, por ejemplo, en tu estado global o en una base de datos
  };

  const changeL = () => {
    setBoard(false)
    setPost(false)
    setLike(true)
    setSave1(false)
  }
  const changeS = () => {
    setBoard(false)
    setPost(false)
    setLike(false)
    setSave1(true)
  }
  const changeB = () => {
    setBoard(true)
    setPost(false)
    setLike(false)
    setSave1(false)
  }

  const useText = () => {
    setText('');
  };
  const handleSunPress = () => {
    setModalVisibleSun(true);
  };
  const userP = {
    id: 1,
    name: 'Juan',
    username: { username },
    image: require('../../../img/LastUpdate.png'),
    imageP: { selectImage },
    colorSol: Colors.sol1,
    text: 'Aca en la playa disfrutando del sol.'
  }
  const initialUsers = [
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
      cit: 'citado',
      like: true,
      save: true,
      userType: 'normal'
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
      forma: 'texto',
      like: true,
      save: true,
      userType: 'normal'
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
      forma: 'texto',
      like: true,
      save: true,
      userType: 'normal'
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
      cit: 'img',
      like: true,
      save: true,
      userType: 'normal'
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
      cit: 'img',
      like: true,
      save: true,
      userType: 'normal',
    },
    {
      id: 6,
      name: 'User 2',
      username: 'Juan',
      image: require('../../../img/person/person1.jpg'),
      imagenH: require('../../../img/fondo10.jpg'),
      colorSol: Colors.sol1,
      text: 'Building sandcastles on the beach.',
      frase: 'Life is short, build sandcastles.',
      tipo: 'publicacion',
      forma: 'texto',
      like: true, save: true,
      userType: 'normal',
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
      tipo: 'normal',
      forma: 'texto',
      like: true, save: true, userType: 'normal',

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
      forma: 'texto',
      like: true, save: true, userType: 'normal',

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
      tipo: 'articulo',
      like: true, save: true, userType: 'normal',
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
      forma: 'texto',
      video: 'si',
      like: true, save: true, userType: 'normal',

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
      forma: 'texto',
      like: true, save: true, userType: 'normal',
      video: 'si'

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
      cit: 'img',
      like: true, save: true, userType: 'normal',
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
      forma: 'texto',
      like: true, save: true, userType: 'normal',

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
      cit: 'img',
      like: true, save: true, userType: 'normal',
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
      forma: 'texto',
      like: true, save: true, userType: 'normal',

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
      forma: 'texto',
      like: true, save: true, userType: 'normal',

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
      forma: 'texto',
      like: true
      , save: true, userType: 'normal',
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
      forma: 'texto',
      like: true,
      save: true, userType: 'normal',

    }
  ]; const [selectCont, setSelectCont] = useState(false);
  const handleColorChange = (color, colorPath) => {
    setSelectedColor(color);
    setSelectedColorPath(colorPath);
    setModalVisibleSun(false);
    setSelectCont(true)
    setBorderADV('transparent');
  };
  const [users, setUsers] = useState(initialUsers);
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
  };

  const [height1, setHeight1] = useState(users.length * 500);

  const heightOfPreviousItems = 5 * 3000;
  const updateSave = (selectedItemId1, newState) => {
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
  const scrollViewRef = useRef();
  const handleScrollToPosition5 = (index) => {
    setActivePost(false)
    const heightPos = 510 + 510 * index;
    console.log(index)
    console.log(heightPos)
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ y: heightPos, animated: true });
    }

  };
  const actScroll = () => {
    setActivePost(true)
    scrollViewRef.current.scrollTo({ y: 0, animated: true });


  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={[style.area, { backgroundColor: dark ? "#000000" : "#FFFFFF" }]}>
      <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1, }}>
            <View style={{ width: '100%', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10, marginTop: '5%' }}>
              <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-start', }}>
                <TouchableOpacity onPress={() => navigation.navigate("CamHist")} style={{ left: '20%' }}>
                  <PlusProfile size={25} color={dark ? "#FFFFFF" : "#000000"} />
                </TouchableOpacity>
              </View>
              <View style={{
                width: width - 130,
                alignItems: 'center',
                marginLeft: 10,
              }}>
                <View style={{
                  flexDirection: "column",
                  alignItems: 'center',
                  justifyContent: 'center', // Añadir esta línea
                  position: 'relative', marginLeft: '10%'
                }}>
                  {activeEdit ? (
                    <>
                      <TouchableOpacity
                        onPress={() => {
                          ImagePicker()
                        }}
                        style={{ width: 50, height: 50, borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}> {/* Añadir alignItems y justifyContent */}
                        {selectImage ? (
                          <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={{ uri: selectImage }} />
                        ) : (
                          <Image
                            source={require('../../../img/perfilS.png')}
                            style={{ width: 50, height: 50, borderRadius: 100 }}
                          />
                        )}
                      </TouchableOpacity>
                    </>
                  ) : (
                    <>
                      {selectImage ? (
                        <Image style={{ width: 50, height: 50, borderRadius: 100 }} source={{ uri: selectImage }} />
                      ) : (
                        <Image
                          source={require('../../../img/perfilS.png')}
                          style={{ width: 50, height: 50, borderRadius: 100 }}
                        />
                      )}
                    </>
                  )}

                  <View>
                    <Text style={[style.s16, { fontSize: 18, color: dark ? "#FFFFFF" : "#000000", marginVertical: 10, marginBottom: 15 }]}>
                      {username}
                    </Text>
                  </View>

                  {activeEdit ? (
                    <>
                      <TouchableOpacity onPress={handleSunPress}>
                        <DynamicSun
                          sizeHeight={25}
                          sizeWidth={25}
                          colorCircle={selectedColor}
                          colorPath={dark ? "#ffffff" : "#000000"}
                          style={{
                            position: 'absolute',
                            top: -75,
                            right: -80,
                          }}
                        />
                      </TouchableOpacity>
                      <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalVisibleSun}
                        onRequestClose={handleCloseModalSun}
                      >
                        <View style={styles.modalContainer}>
                          <View style={styles.modalContent}>
                            <View style={styles.colorOptions}>
                              <TouchableOpacity onPress={() => handleColorChange(Colors.sol1)}>
                                <DynamicSun
                                  colorCircle={Colors.sol1}
                                  colorPath={Colors.solDefault}
                                  sizeWidth={20}
                                  sizeHeight={20}
                                  style={styles.sun}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => handleColorChange(Colors.sol2)}>
                                <DynamicSun
                                  colorCircle={Colors.sol2}
                                  colorPath={Colors.solDefault}
                                  sizeWidth={20}
                                  sizeHeight={20}
                                />
                              </TouchableOpacity>
                              <TouchableOpacity onPress={() => handleColorChange(Colors.sol3)}>
                                <DynamicSun
                                  colorCircle={Colors.sol3}
                                  colorPath={Colors.solDefault}
                                  sizeWidth={20}
                                  sizeHeight={20}
                                  style={styles.sun}
                                />
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      </Modal>
                    </>
                  ) : (
                    <>
                      <DynamicSun
                        sizeHeight={25}
                        sizeWidth={25}
                        colorCircle={selectedColor}
                        colorPath={dark ? "#ffffff" : "#000000"}
                        style={{
                          position: 'absolute',
                          top: 25,
                          right: -40,
                        }}
                        onPress={() => { navigation.navigate('PersonalZone') }}
                      />
                    </>
                  )}
                </View>
              </View>
              <View style={{ flexDirection: "row", alignItems: 'flex-start', justifyContent: 'flex-end', right: '5%', gap: 10, top: -15 }}>
                <TouchableOpacity onPress={() => setActiveEdit(!activeEdit)}>

                  <Pencil size={25} color={dark ? "#FFFFFF" : "#000000"} />
                </TouchableOpacity>
                <TouchableOpacity >

                  <Search size={25} color={dark ? "#FFFFFF" : "#000000"} />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => navigation.navigate('UserSettings')}
                >
                  {dark ? (
                    <Image source={require('../../../img/Conf.png')} style={{ width: 20, height: 20, marginRight: 10, top: 3 }} />
                  ) : (
                    <Image source={require('../../../img/Conf1.png')} style={{ width: 20, height: 20, marginRight: 10, top: 3 }} />
                  )}
                </TouchableOpacity>

              </View>
            </View>
            {activeEdit ? (<View style={{ width: '80%', marginLeft: '10%', justifyContent: 'center', alignItems: 'center', }}>
              <TextInput
                style={{ color: dark ? '#ffffff' : '#000000' }}
                multiline={true}
                placeholder="Write your biography (max. 150 characters)"
                onChangeText={handleChangeBio}
                value={bio}
                placeholderTextColor={dark ? '#ffffff' : '#000000'}
                maxLength={maxCharacters}
              />
              <Text>{bio.length}/{maxCharacters}</Text>
            </View>) : (
              <View style={{ width: '80%', marginLeft: '10%', justifyContent: 'center', alignItems: 'center', }}>
                <Text style={{ color: dark ? "#FFFFFF" : "#000000" }}>{bio}</Text>
              </View>
            )}

            <View style={{ width: '100%', flex: 1, marginTop: '4%' }}>
              <View style={{
                width: '100%',
                flexDirection: "row",
                justifyContent: 'center',
                gap: 10,
              }}>
                <View style={{
                  flexDirection: "column",
                  alignItems: 'center',
                }}>
                  <Text style={[style.b16, { fontSize: 14, color: dark ? "#FFFFFF" : "#000000", }]}>
                    22
                  </Text>
                  <Text style={[style.r14, { fontSize: 12, color: dark ? "#FFFFFF" : "#000000", }]}>
                    {i18n.t('profile.post')}
                  </Text>
                </View>
                <View style={{
                  flexDirection: "column",
                  alignItems: 'center',
                }}>
                  <Text style={[style.b16, { fontSize: 14, color: dark ? "#FFFFFF" : "#000000", }]}>
                    14.3k
                  </Text>
                  <Text style={[style.r14, { fontSize: 12, color: dark ? "#FFFFFF" : "#000000", }]}>
                    {i18n.t('profile.interactions')}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => { navigation.navigate('Following') }} style={{
                  flexDirection: "column",
                  alignItems: 'center',
                }}>

                  <Text style={[style.b16, { fontSize: 14, color: dark ? "#FFFFFF" : "#000000", }]}>
                    6.9k
                  </Text>

                  <Text style={[style.r14, { fontSize: 12, color: dark ? "#FFFFFF" : "#000000", }]}>
                    {i18n.t('profile.suscribers')}
                  </Text>
                </TouchableOpacity>

                <View style={{
                  flexDirection: "column",
                  alignItems: 'center',
                }}>
                  <Text style={[style.b16, { fontSize: 14, color: dark ? "#FFFFFF" : "#000000", }]}>
                    870
                  </Text>
                  <Text style={[style.r14, { fontSize: 12, color: dark ? "#FFFFFF" : "#000000", }]}>
                    {i18n.t('profile.likes')}
                  </Text>
                </View>
              </View>
              <View style={{
                flexDirection: "row",

                justifyContent: 'center',
                gap: width * 0.05,
                marginVertical: 10,
              }}>

                <TouchableOpacity onPress={changeP}>
                  {post ?
                    (
                      <>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                          <Text style={[style.m14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                            {i18n.t('profile.posts')}
                          </Text>
                          <View style={{ top: 4 }}>
                            {homePrivate ? null : <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                          </View>
                        </View>
                        <View style={{ justifyContent: 'center', width: 10, height: 10, borderRadius: 99, backgroundColor: '#FF9900', left: '40%' }} />

                      </>
                    ) : (
                      <>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                          <Text style={[style.r14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                            {i18n.t('profile.posts')}
                          </Text>
                          <View style={{ top: 4 }}>
                            {homePrivate ? null : <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                          </View>
                        </View>
                      </>
                    )}

                </TouchableOpacity>
                <TouchableOpacity onPress={changeB}>
                  {board ? (
                    <>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={[style.m14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                          {i18n.t('profile.board')}
                        </Text>

                        <View style={{ top: 4 }}>
                          {boardPrivate ? null : <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                        </View>
                      </View>
                      <View style={{ justifyContent: 'center', width: 10, height: 10, borderRadius: 99, backgroundColor: '#FF9900', left: '40%' }} />

                    </>) : (
                    <>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <Text style={[style.r14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                          {i18n.t('profile.board')}
                        </Text>
                        <View style={{ top: 4 }}>
                          {boardPrivate ? null : <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />}
                        </View>
                      </View>
                    </>
                  )}
                </TouchableOpacity>



                <TouchableOpacity onPress={changeL} >
                  {like ? (
                    <>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={[style.m14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                          {i18n.t('profile.likes')}

                        </Text>
                        {activeEdit ? (
                          <>
                            {lockAct ? <TouchableOpacity style={{ top: 4 }} onPress={() => setLockAct(!lockAct)}>
                              <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity> : <TouchableOpacity style={{ top: 4 }} onPress={() => setLockAct(!lockAct)}>
                              <Unlock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity>}

                          </>
                        ) : (
                          <View style={{ top: 4 }}>
                            {lockAct ? <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} /> : null}
                          </View>
                        )
                        }


                      </View>
                      <View style={{ justifyContent: 'center', width: 10, height: 10, borderRadius: 99, backgroundColor: '#FF9900', left: '40%' }} />
                    </>) : (
                    <>

                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={[style.m14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                          {i18n.t('profile.likes')}

                        </Text>
                        {activeEdit ? (
                          <>
                            {lockAct ? <TouchableOpacity style={{ top: 4 }} onPress={() => setLockAct(!lockAct)}>
                              <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity> : <TouchableOpacity style={{ top: 4 }} onPress={() => setLockAct(!lockAct)}>
                              <Unlock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity>}

                          </>
                        ) : (
                          <View style={{ top: 4 }}>
                            {lockAct ? <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} /> : null}
                          </View>
                        )
                        }

                      </View>


                    </>
                  )}

                </TouchableOpacity>
                <TouchableOpacity onPress={changeS} >
                  {save1 ? (
                    <>
                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={[style.m14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                          {i18n.t('profile.saved')}

                        </Text>
                        {activeEdit ? (
                          <>
                            {lockActS ? <TouchableOpacity style={{ top: 4 }} onPress={() => setLockActS(!lockActS)}>
                              <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity> : <TouchableOpacity style={{ top: 4 }} onPress={() => setLockActS(!lockActS)}>
                              <Unlock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity>}

                          </>
                        ) : (
                          <View style={{ top: 4 }}>
                            {lockActS ? <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} /> : null}
                          </View>
                        )
                        }

                      </View>
                      <View style={{ justifyContent: 'center', width: 10, height: 10, borderRadius: 99, backgroundColor: '#FF9900', left: '40%' }} />
                    </>) : (
                    <>

                      <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                        <Text style={[style.m14, { fontSize: 16, color: dark ? "#FFFFFF" : "#000000", }]}>
                          {i18n.t('profile.saved')}

                        </Text>
                        {activeEdit ? (
                          <>
                            {lockActS ? <TouchableOpacity style={{ top: 4 }} onPress={() => setLockActS(!lockActS)}>
                              <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity> : <TouchableOpacity style={{ top: 4 }} onPress={() => setLockActS(!lockActS)}>
                              <Unlock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} />
                            </TouchableOpacity>}

                          </>
                        ) : (
                          <View style={{ top: 4 }}>
                            {lockActS ? <Lock size={15} style={{ color: dark ? '#ffffff' : '#000000' }} /> : null}
                          </View>
                        )
                        }

                      </View>


                    </>
                  )}

                </TouchableOpacity>

              </View>
              <ScrollView ref={scrollViewRef}>
                <View style={{ width: width, paddingHorizontal: width * 0.05, marginBottom: 10 }}>

                  {post ? (
                    <>
                      {activePost ? (
                        <>
                          {activeEdit ? (
                            <>
                              <TouchableOpacity style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 5,
                              }} onPress={() => handleScrollToPosition5(0)}>
                                {selectImage1 ? (<Image style={{
                                  width: 300,
                                  height: 200,
                                  borderRadius: width * 0.05,
                                  marginVertical: 10,

                                }} source={{ uri: selectImage1 }} />
                                ) : (
                                  <Image
                                    source={require('../../../img/LastUpdate.png')}
                                    style={{
                                      width: 300,
                                      height: 200,
                                      borderRadius: width * 0.05,
                                      marginVertical: 10,

                                    }}
                                  />
                                )}
                              </TouchableOpacity>
                            </>


                          ) : (
                            <>

                              <TouchableOpacity style={{
                                flexDirection: "row",
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginVertical: 5,
                              }}
                                onPress={() => handleScrollToPosition5(0)}>
                                {selectImage1 ? (<Image style={{
                                  width: 300,
                                  height: 200,
                                  borderRadius: 20,
                                  marginVertical: 10,

                                }} source={{ uri: selectImage1 }} />
                                ) : (
                                  <Image
                                    source={require('../../../img/LastUpdate.png')}
                                    style={{
                                      width: 300,
                                      height: 200,
                                      borderRadius: 20,
                                      marginVertical: 10,

                                    }}
                                  />
                                )}

                              </TouchableOpacity>

                            </>
                          )}


                          <View
                            style={{
                              flexDirection: "row",
                              flexWrap: "wrap",
                              justifyContent: 'center',
                              gap: width * 0.02,
                            }}
                          >
                            {loadMore ? (<>
                              {users.map((user, index) => (
                                <TouchableOpacity
                                  key={index}
                                  style={{
                                    backgroundColor: '#ddd',
                                    width: width * 0.23,
                                    height: width * 0.23,
                                    borderRadius: width * 0.03,
                                    overflow: 'hidden', // Para recortar las imágenes si son más grandes que el contenedor
                                  }} onPress={() => handleScrollToPosition5(index)}
                                >
                                  <Image
                                    source={user.imagenH}
                                    style={{
                                      flex: 1,
                                      width: '100%',
                                      height: '100%',
                                      resizeMode: 'cover', // Ajusta el modo de escalado de la imagen
                                    }}
                                  />
                                </TouchableOpacity>
                              ))}
                              <Modal
                                visible={modalP}
                                transparent={true}
                                onRequestClose={() => setModalP(false)}
                              >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                  <TouchableOpacity onPress={() => setModalP(false)}>
                                    <Image
                                      source={selectedImage}
                                      style={{ width: width * 0.8, height: width * 0.8, resizeMode: 'contain' }}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </Modal>
                            </>) : (<>
                              {users.slice(0, 6).map((user, index) => (
                                <TouchableOpacity
                                  key={index}
                                  style={{
                                    backgroundColor: '#ddd',
                                    width: width * 0.23,
                                    height: width * 0.23,
                                    borderRadius: width * 0.03,
                                    overflow: 'hidden', // Para recortar las imágenes si son más grandes que el contenedor
                                  }} onPress={() => handleScrollToPosition5(index)}
                                >

                                  <Image
                                    source={user.imagenH}
                                    style={{
                                      flex: 1,
                                      width: '100%',
                                      height: '100%',
                                      resizeMode: 'cover', // Ajusta el modo de escalado de la imagen
                                    }}
                                  />
                                </TouchableOpacity>

                              ))}

                              <Modal
                                visible={modalP}
                                transparent={true}
                                onRequestClose={() => setModalP(false)}
                              >
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 10, backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                                  <TouchableOpacity onPress={() => setModalP(false)}>
                                    <Image
                                      source={selectedImage}
                                      style={{ width: width * 0.8, height: width * 0.8, resizeMode: 'contain', borderRadius: 10, }}
                                    />
                                  </TouchableOpacity>
                                </View>
                              </Modal>
                            </>)}
                          </View>
                        </>) : (
                        <>

                          <View style={{ flex: 1, height: height1 }}>
                            <TouchableOpacity style={{ height: 30, width: 30 }} onPress={actScroll}
                            >
                              <BackIcon size={20} />
                            </TouchableOpacity>

                            <ScrollView ref={scrollViewRef}>

                              <UserProfile
                                key={0}
                                video={'no'}
                                profileImage={userP.image}
                                name={'Juan'}
                                username={username}
                                colorSol={userP.colorSol}
                                time="6hrs ago"
                                imagenH={userP.image}
                                textUser={userP.text}
                                colorPrincipal={dark ? 'black' : 'white'}
                                colorSecundario={dark ? 'white' : 'black'}
                                type={'normal'}
                                seguido='si'
                                dark={dark}
                                friends={friends}
                                updateLike={(newValue) => updateLike(user.id, newValue)}
                                sav={false}
                              />
                              {users.map((user, index) => (
                                <UserProfile
                                  key={index}
                                  video={user.video}
                                  profileImage={user.image}
                                  name={'Juan'}
                                  username={username}
                                  colorSol={user.colorSol}
                                  time="6hrs ago"
                                  imagenH={user.imagenH}
                                  textUser={user.text}
                                  colorPrincipal={dark ? 'black' : 'white'}
                                  colorSecundario={dark ? 'white' : 'black'}
                                  type={user.userType}
                                  seguido='si'
                                  dark={dark}
                                  friends={friends}
                                  updateLike={(newValue) => updateLike(user.id, newValue)}
                                  sav={false}

                                />
                              ))}
                            </ScrollView>

                          </View>

                        </>
                      )}
                      <View style={{ flexDirection: "row", justifyContent: 'space-between', }}>
                        <TouchableOpacity
                          style={{
                            backgroundColor: '#373737',
                            width: width * 0.15,
                            height: width * 0.15,
                            borderRadius: width * 0.03,
                            flexDirection: "column",
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: 5,
                          }}
                        >
                          <Text style={[style.r12, { fontSize: 14, color: '#fff', textAlign: 'center', }]}>
                            {i18n.t('profile.stories')} {
                              '\n'
                            }
                            <Text style={[style.b18, { fontSize: 18, color: '#fff', }]}>
                              17
                            </Text>
                          </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setLoadMore(!loadMore)}>
                          <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', }]}>
                            {loadMore ? (<>Load less</>) : (<>{i18n.t('profile.load')}</>)}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </>
                  ) : (null)}
                  {board ? (

                    <View style={{ width: '100%', flex: 1, }}>
                      <ScrollView style={{ width: '100%', marginTop: '5%', marginBottom: '1%' }} stickyHeaderIndices={[1]}>

                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', borderTopWidth: 1, borderBottomWidth: 1, width: '94%', marginLeft: '3%', borderColor: '#2F3336', padding: 10 }} onPress={abrirModal}>
                          {selectImage ? (<Image style={{ width: 40, height: 40, borderRadius: 100 }} source={{ uri: selectImage }} />) : (
                            <Image
                              source={require('../../../img/perfilS.png')}
                              style={{ width: 40, height: 40, borderRadius: 100 }}
                            />
                          )}
                          <Text style={[style.r20, { color: '#6E767D', marginLeft: '5%' }]}>What's up?</Text>



                        </TouchableOpacity>





                        <View style={{ width: '92%', borderColor: '#E7E7E7', borderWidth: 1, marginLeft: '4%', flexDirection: 'row', marginTop: '2%', borderRadius: 15 }}>

                          {users.map((user) => (
                            <View key={user.id}>
                              <View style={{ width: '100%', marginTop: '2%' }}>
                                {user.forma === 'imagen' ? (
                                  <View style={{ width: '92%', height: 438, marginTop: '1%', borderRadius: 15, overflow: 'hidden', borderColor: '#E7E7E7', marginLeft: '4%', borderWidth: 1 }}>
                                    <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                                      <View style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }}>
                                        <Image source={user.image} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                                      </View>

                                      <View style={styles.userInfoContainer}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                          <Text style={[style.r16, { marginBottom: 1, color: dark ? '#ffffff' : '#000000' }]}>
                                            {user.name}
                                          </Text>

                                          <View style={{ position: 'relative', top: 0, left: 20 }}>
                                            <DynamicSun
                                              colorCircle={userP.colorSol}
                                              colorPath={Colors.solDefault}
                                              sizeWidth={25}
                                              sizeHeight={25}
                                            />
                                          </View>
                                          <Text style={[style.r12, { color: '#717171', left: 30 }]}>6 hours</Text>
                                        </View>
                                        <Text style={[style.r16, { color: '#717171' }]}>{user.username}</Text>
                                      </View>


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
                                            <Text style={[style.m14, { color: dark ? '#ffffff' : '#000000', marginLeft: '4%' }]}> Learn more </Text>
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






                                  </View>



                                ) :

                                  <View style={{ width: '92%', height: 238, marginTop: '1%', borderRadius: 15, overflow: 'hidden', borderColor: '#E7E7E7', marginLeft: '4%', borderWidth: 1 }}>
                                    <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '1%' }}>
                                      <View style={{ width: '10%', aspectRatio: 1, marginRight: 10, borderRadius: 999, marginLeft: '2%' }}>
                                        <Image source={user.image} style={{ width: '100%', height: '100%', borderRadius: 999 }} />
                                      </View>

                                      <View style={styles.userInfoContainer}>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                          <Text style={[style.r16, { marginBottom: 1, color: dark ? '#ffffff' : '#000000' }]}>
                                            {user.name}
                                          </Text>

                                          <View style={{ position: 'relative', top: 0, left: 20 }}>
                                            <DynamicSun
                                              colorCircle={userP.colorSol}
                                              colorPath={Colors.solDefault}
                                              sizeWidth={25}
                                              sizeHeight={25}
                                            />
                                          </View>
                                          <Text style={[style.r12, { color: '#717171', left: 30 }]}>6 hours</Text>
                                        </View>
                                        <Text style={[style.r16, { color: '#717171' }]}>{user.username}</Text>
                                      </View>




                                    </View>
                                    <View style={{ width: '98%', height: 120, marginLeft: '2%', justifyContent: 'center', marginTop: '3%' }}>
                                      <Text style={[style.i14, { color: dark ? '#ffffff' : '#000000' }]}>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less</Text>
                                    </View>




                                  </View>

                                }
                              </View>
                            </View>
                          ))}

                        </View>
                      </ScrollView>
                    </View>

                  ) : (null)}
                  {like ? (
                    <View style={{ flex: 1 }}>
                      <ScrollView style={{ marginTop: '5%', marginBottom: '1%' }}>
                        {/* Filtra los items por aquellos que tienen item.like en true antes de chunkArray */}
                        {chunkArray(users.filter(item => item.like), 4).map((row, index) => (
                          <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10, gap: 5 }}>
                            {row.map(item => (
                              // Ahora, solo los items con item.like en true serán incluidos, así que no necesitas la comprobación aquí
                              <TouchableOpacity key={item.id} style={{ width: '23%', gap: 5, height: 100 }} onPress={() => openModal(item)}>
                                <Image source={item.imagenH} style={{ width: '100%', height: 100 }} />
                              </TouchableOpacity>
                            ))}
                          </View>
                        ))}
                      </ScrollView>
                      <Modal
                        visible={modalVisible4}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalVisible4(false)}
                      >
                        <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: 'transparent', borderRadius: 10 }} onPress={() => setModalVisible4(false)}>
                          <View style={{ justifyContent: 'center', width: '80%', borderRadius: 20, marginLeft: '10%', position: 'absolute', bottom: 350, height: 100, alignItems: 'center', backgroundColor: 'rgba(217, 217, 217, 0.3)', flexDirection: 'row', alignItems: 'center' }}>
                            {selectedItem && (
                              <UserProfile
                                profileImage={selectedItem.image}
                                name={selectedItem.name}
                                username={selectedItem.username}
                                colorSol={selectedItem.colorSol}
                                time="6hrs ago"
                                imagenH={selectedItem.imagenH}
                                textUser={selectedItem.text}
                                colorPrincipal={dark ? 'black' : 'white'}
                                colorSecundario={dark ? 'white' : 'black'}
                                type={selectedItem.userType}
                                seguido='si'
                                dark={dark}
                                friends={friends}
                                like={selectedItem.like}
                                sav={false}
                                updateLike={(newValue) => updateLike(selectedItem.id, newValue)}

                                reportState={true} />
                            )}
                          </View>
                        </TouchableOpacity>
                      </Modal>
                    </View>
                  ) : (null)}

                  {save1 ? (
                    <View style={{ flex: 1 }}>
                      <ScrollView style={{ marginTop: '5%', marginBottom: '1%' }}>

                        {chunkArray(users.filter(item => item.save), 4).map((row, index) => (
                          <View key={index} style={{ flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10, gap: 5 }}>
                            {row.map(item => (

                              <TouchableOpacity key={item.id} style={{ width: '23%', gap: 5, height: 100 }} onPress={() => openModal1(item)}>
                                <Image source={item.imagenH} style={{ width: '100%', height: 100 }} />
                              </TouchableOpacity>
                            ))}
                          </View>
                        ))}
                      </ScrollView>
                      <Modal
                        visible={modalVisible5}
                        animationType="slide"
                        transparent={true}
                        onRequestClose={() => setModalVisible5(false)}
                      >
                        <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: 'transparent', borderRadius: 10 }} onPress={() => setModalVisible5(false)}>
                          <View style={{ justifyContent: 'center', width: '80%', borderRadius: 20, marginLeft: '10%', position: 'absolute', bottom: 350, height: 100, alignItems: 'center', backgroundColor: 'rgba(217, 217, 217, 0.3)', flexDirection: 'row', alignItems: 'center' }}>
                            {selectedItem1 && (
                              <UserProfile
                                profileImage={selectedItem1.image}
                                name={selectedItem1.name}
                                username={selectedItem1.username}
                                colorSol={selectedItem1.colorSol}
                                time="6hrs ago"
                                imagenH={selectedItem1.imagenH}
                                textUser={selectedItem1.text}
                                colorPrincipal={dark ? 'black' : 'white'}
                                colorSecundario={dark ? 'white' : 'black'}
                                type={selectedItem1.userType}
                                seguido='si'
                                dark={dark}
                                friends={friends}
                                like={selectedItem1.like}
                                saved={selectedItem1.save}
                                updateLike={(newValue) => updateLike(selectedItem1.id, newValue)}
                                updateSave={(newValue1) => updateSave(selectedItem1.id, newValue1)}
                                reportState={true}
                              />
                            )}
                          </View>
                        </TouchableOpacity>
                      </Modal>
                    </View>
                  ) : (null)}
                </View>
              </ScrollView>
              <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
              >
                <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)', }} onPress={cerrarModal}>
                  {arco ? (

                    <View style={{
                      flexDirection: 'column', width: '94%', marginLeft: '3%', borderColor: '#2F3336', padding: 10, backgroundColor: 'white', marginTop: '20%', borderRadius: 20
                    }}>
                      < View style={{ flexDirection: 'row', marginLeft: '5%' }}>
                        {selectImage ? (<Image style={{ width: 40, height: 40, borderRadius: 100 }} source={{ uri: selectImage }} />) : (
                          <Image
                            source={require('../../../img/perfilS.png')}
                            style={{ width: 40, height: 40, borderRadius: 100 }}
                          />
                        )}
                        <TextInput
                          style={[styles.editorText, , isUnderline && styles.underlineText, { fontSize: 28, marginLeft: '10%', width: '70%', marginTop: '5%', fontFamily: selectedFont, color: selectedColor1 }]}
                          placeholder="Header Title"
                          value={text}
                          onChangeText={setText}
                          multiline
                        />

                        <TouchableOpacity style={{ backgroundColor: '#FF9900', width: 55, height: 30, borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10 }} onPress={arcActive}>
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
                        {selectImage ? (<Image style={{ width: 40, height: 40, borderRadius: 100 }} source={{ uri: selectImage }} />) : (
                          <Image
                            source={require('../../../img/perfilS.png')}
                            style={{ width: 40, height: 40, borderRadius: 100 }}
                          />
                        )}
                        <TextInput
                          style={{ marginLeft: '5%', width: '70%', height: 100 }}
                          placeholder="What's up"
                          value={text1}
                          onChangeText={setText1}
                          multiline
                        />
                        <TouchableOpacity style={{ backgroundColor: '#FF9900', width: 55, height: 30, borderWidth: 1, borderColor: 'black', justifyContent: 'center', alignItems: 'center', position: 'absolute', right: 10 }} onPress={arcActive}>
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
            </View>

            <Nav navActive="profile" />
          </View>
        </KeyboardAvoidingView >
      </View >
    </SafeAreaView >
  )
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

  inputContainer: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: Colors.subt,
    marginTop: 10,
    height: 50,
    paddingLeft: 15, // Ajusta el padding izquierdo para el icono del candado
  },
  inputIcon: {
    position: 'absolute',
    top: 15,
    left: 10,
  },
  input: {
    backgroundColor: "transparent",
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
  },
  square: {
    width: 12,
    height: 11,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.subt,
    marginRight: 10,
  },
  accepted: {
    backgroundColor: '#FAFF07',
  },
  square1: {
    width: 12,
    height: 11,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.subt,
    marginRight: 10,
  },
  accepted1: {
    backgroundColor: '#FAFF07',
  },
  message: {
    flex: 1,
    fontSize: 14,
    color: '#9AA0A6',
    fontFamily: 'Manrope-Regular',
  },
  text: {
    fontSize: 16,
    color: Colors.subt,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginTop: '16%',
    marginRight: '10%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  colorOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  colorOption: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  modalContainer1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent1: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  toolbar: {
    flexDirection: 'row',
    top: 70,
    padding: 10,
  },
  toolbarButton: {
    fontSize: 20,
    marginRight: 10,
  },
  toolbarButtonActive: {
    fontWeight: 'bold',
  },
  editor: {
    flex: 1,
    padding: 20,
  },
  editorText: {
    fontSize: 16,
    color: 'black'
  },
  boldText: {
    fontWeight: 'bold',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },
});


export default UserProfileScreen