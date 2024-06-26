import React, { useEffect, useRef, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, PermissionsAndroid, SafeAreaView, StyleSheet, StatusBar, Platform, KeyboardAvoidingView, Switch, Animated, TextInput, ImageBackground } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, Camera1, CameraIcon, Cross, Cross1, Down, Down1, FileTextIcon, HelpIcon, ImageC, LanguageIcon, LogoutIcon, MoonIcon, NavBack, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, Search, ShieldIcon, SupportAgentIcon, Tick, Tick1, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { Avatar, IconButton, Stack, Surface } from '@react-native-material/core';
import { useDarkMode } from '../../components/darkMode';
import { launchCamera, launchImageLibrary, openPicker } from 'react-native-image-picker';
import { CACHES } from 'react-native-sound';
import ImagePicker from 'react-native-image-crop-picker';
import Swiper, { Pagination } from 'react-native-swiper';
import { PERMISSIONS, request } from 'react-native-permissions';
const Camera = () => {
    let options = {
        storageOptions: {
            path: "image"
        }
    }
    const navigation = useNavigation();
    const [isEnabled, setIsEnabled] = useState(false);

    const [selectedImages, setSelectedImages] = useState([]);
    const [galleryImages, setGalleryImages] = useState([]);
    const [photo, setPhoto] = useState(true);
    const { dark, toggleDarkMode } = useDarkMode();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [bio, setBio] = useState(''); 
    const [isActivated, setIsActivated] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState(false)
    const maxCharacters = 150;
    const [searchText, setSearchText] = useState('');
    const [selectedButtons, setSelectedButtons] = useState([]);
    const [total, setTotal] = useState('');
    const [commentVotes, setCommentVotes] = useState({});
    const [save, setSave] = useState(false);
    const enviar1 = (index) => {
        setCommentVotes(prevVotes => ({
            ...prevVotes,
            [index]: !prevVotes[index] // Cambiar el valor actual del índice a su negación
        }));
    };
    const desenviar1 = (index) => {
        setCommentVotes(prevVotes => ({
            ...prevVotes,
            [index]: 'dislike'
        }));
    }
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
    // Función para solicitar permiso para acceder a la galería de fotos
    const requestGalleryPermission = async () => {
        try {
          if (Platform.OS === 'ios') {
            const permissionResult = await request(PERMISSIONS.IOS.PHOTO_LIBRARY);
            if (permissionResult === 'granted') {
              console.log('Permiso concedido');
            } else {
              console.log('Permiso denegado');
            }
          } else {
            console.log('Este dispositivo no es iOS');
          }
        } catch (error) {
          console.error('Error al solicitar permiso:', error);
        }
      };

    // Llama a la función para solicitar el permiso
    requestGalleryPermission();
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
    const textInputRef = useRef(null); // Crear la referencia

    const handleChangeBio = (text) => {
        // Verificar si el texto excede el límite de caracteres
        if (text.length <= maxCharacters) {
            setBio(text);
        }
    };
    const [newTag, setNewTag] = useState('');
    const [selectedTags, setSelectedTags] = useState([]);
    const predefinedTags = ['react', 'javascript', 'reactnative', 'webdev', 'coding', 'social', 'video', 'image', 'friend', 'like'];

    const addTag = () => {
        if (newTag.trim() !== '') {
            setSelectedTags([...selectedTags, newTag.trim()]);
            setNewTag('');
        }
    };
    const handleButtonPress = () => {
        setCurrentIndex(currentIndex + 1); // Navigate to the second screen
    };
    const handleButtonPress1 = () => {
        setCurrentIndex(currentIndex - 1); // Navigate to the second screen
    };
    const removeTag = (tag) => {
        const updatedTags = selectedTags.filter(item => item !== tag);
        setSelectedTags(updatedTags);
    };


    // useEffect(() => {
    //     ImagePicker(); // Abre la galería automáticamente al cargar la pantalla
    // }, []);
    const [pickedImage, setPickedImage] = useState(null);
    const [selectImage, setSelectImage] = useState('')
    const [positionValue, setPositionValue] = useState(new Animated.Value(0));
    const ImagePicker = () => {
        launchImageLibrary(options, response => (
            setSelectImage(response.assets[0].uri),
            console.log(response.assets[0].uri)
        ))
    }
    const toggleActivation = () => {
        // Invoca la función para cambiar el estado de homePrivate

        // Obtén el estado actualizado de homePrivate


        setIsActivated(!isActivated);
        setBackgroundColor(!backgroundColor);

        Animated.timing(positionValue, {
            toValue: isActivated ? 0 : 24,
            duration: 200,
            useNativeDriver: false,
        }).start();

    };
    // useEffect(() => {
    //     setIsActivated(!isActivated);

    //     // Actualiza la posición de Animated Value basada en homePrivate
    //     Animated.timing(positionValue, {
    //         toValue: isActivated ? 0 : 24,
    //         duration: 200,
    //         useNativeDriver: false,
    //     }).start();
    // }, [isActivated, positionValue]);
    // const GalleryScreen = () => {
    //     const [galleryImages, setGalleryImages] = useState([]);

    //     useEffect(() => {
    //         // Obtener imágenes de la galería aquí (usando react-native-image-picker)
    //         // Actualiza el estado con las imágenes obtenidas
    //     }, []);
    // }
    return (
        <SafeAreaView style={[style.area, { backgroundColor: dark ? "#000000" : "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
                    flex: 1,
                    // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
                }}>

                    <Swiper
                        showsPagination={false}
                        loop={false}
                        index={currentIndex}
                        onIndexChanged={index => setCurrentIndex(index)}
                        direction={'vertical'}
                    >
                        <View style={{ flex: 1, }}>




                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginLeft: '2%', justifyContent: 'space-between', marginTop: '5%', }}>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <Cross size={25}  marginLeft={'10%'} color={dark ? "#FFFFFF" : "#000000"} />
                                </TouchableOpacity>
                                <Text style={[style.r16, { color: dark ? "#FFFFFF" : "#000000" }]}>Selected Post</Text>
                                <TouchableOpacity onPress={handleButtonPress}>
                                    <Text style={[style.r14, { color: '#FF9900', right: '5%' }]}> Next</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '80%', marginLeft: '10%', borderRadius: 32, height: 30, backgroundColor: '#D5D5D0' }}>
                                <TouchableOpacity style={{ width: '50%', height: '86%', marginTop: '0%', borderRadius: 32, backgroundColor: photo ? 'white' : 'transparent', justifyContent: 'center', alignItems: 'center' }} onPress={() => setPhoto(true)}><Text style={{ color: photo ? 'black' : 'gray' }}>Photo</Text></TouchableOpacity>
                                <TouchableOpacity style={{ width: '50%', height: '86%', marginTop: '0%', borderRadius: 32, backgroundColor: photo ? 'transparent' : 'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => setPhoto(false)}><Text style={{ color: photo ? 'gray' : 'black' }}>Video</Text></TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        ImagePicker()
                                    }}
                                    style={{ width: '100%', height: 300, backgroundColor: dark ? "#000000" : "#ffffff" }}>
                                    {selectImage ? (<Image style={{ width: '94%', height: '100%', marginLeft: '3%', borderRadius: 12 }} source={{ uri: selectImage }} />) : (
                                        <Image
                                            source={require('../../../img/fondo10.jpg')}
                                            style={{ width: '94%', height: '100%', marginLeft: '3%', borderRadius: 12 }}
                                        />
                                    )}

                                </TouchableOpacity>

                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '96%', marginLeft: '2%', marginTop: '3%' }}>
                                    <TouchableOpacity style={{ width: 60, flexDirection: 'row' }}>
                                        <Text style={[style.r14, { color: dark ? "#FFFFFF" : "#000000" }]}>Sort by</Text>
                                        <Down1 size={20} marginLeft={10} />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 60, flexDirection: 'row' }}>
                                        <ImageC size={20} />
                                        <Camera1 size={20} marginLeft={10} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ flexDirection: 'row', width: '98%', marginLeft: '1%', justifyContent: 'space-between', marginTop: '2%' }}>
                                    <View style={{ flexDirection: 'column', width: '24%', marginLeft: '1%', marginTop: '2%', gap: 5 }}>
                                        <TouchableOpacity style={{ width: '100%', height: 100, }}>
                                            <Image
                                                source={require('../../../img/fondo6.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 100, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo7.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 100, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo8.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>

                                    </View>
                                    <View style={{ flexDirection: 'column', width: '24%', marginTop: '0.2%', gap: 5 }}>

                                        <TouchableOpacity style={{ width: '100%', height: 140, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo10.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 85, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo13.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 75, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo12.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                    <View style={{ flexDirection: 'column', width: '24%', marginLeft: '1%', marginTop: '0.2%', gap: 5 }}>

                                        <TouchableOpacity style={{ width: '100%', height: 60, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo10.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 140, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo13.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 100, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo12.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                    <View style={{ flexDirection: 'column', width: '24%', marginLeft: '1%', marginTop: '0.2%', gap: 5 }}>

                                        <TouchableOpacity style={{ width: '100%', height: 110, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo10.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 80, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo13.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: '100%', height: 110, borderRadius: 12 }}>
                                            <Image
                                                source={require('../../../img/fondo12.jpg')}
                                                style={{ width: '100%', height: '100%', borderRadius: 12 }}
                                            />
                                        </TouchableOpacity>


                                    </View>
                                </View>
                            </View>
                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>
                        <View style={{ flex: 1, }}>




                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginLeft: '2%', justifyContent: 'space-between', marginTop: '5%', }}>
                                <TouchableOpacity onPress={handleButtonPress1}>
                                    <BackIcon size={20} color={dark ? "#FFFFFF" : "#000000"} />
                                </TouchableOpacity>
                                <Text style={[style.r16, { color: dark ? "#FFFFFF" : "#000000" }]}>Description</Text>
                                <TouchableOpacity onPress={handleButtonPress}>
                                    <Text style={[style.r14, { color: '#FF9900', right: '5%' }]}> Share</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        ImagePicker()
                                    }}
                                    style={{ width: '100%', height: 300, backgroundColor: dark ? "#000000" : "#ffffff" }}>
                                    {selectImage ? (<Image style={{ width: '94%', height: '100%', marginLeft: '3%', borderRadius: 12 }} source={{ uri: selectImage }} />) : (
                                        <Image
                                            source={require('../../../img/fondo10.jpg')}
                                            style={{ width: '94%', height: '100%', marginLeft: '3%', borderRadius: 12 }}
                                        />
                                    )}

                                </TouchableOpacity>
                                {save ? (
                                    <View style={{ width: '96%', marginLeft: '2%', height: 150 }}>


                                        <Text style={[style.r14, { marginTop: '5%' }]}>{bio}</Text>
                                        <TouchableOpacity style={{ width: 70, height: 30, backgroundColor: 'black', borderRadius: 12, marginTop: '10%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setSave(false)}><Text style={{ color: 'white' }}>Update</Text></TouchableOpacity>
                                    </View>

                                ) : (
                                    <View style={{ width: '96%', marginLeft: '2%', height: 150 }}>
                                        <TextInput

                                            style={{ color: dark ? '#ffffff' : '#000000' }}

                                            placeholder="Escribe tu biografía (máx. 150 caracteres)"
                                            onChangeText={handleChangeBio}
                                            value={bio}
                                            placeholderTextColor={dark ? '#ffffff' : '#000000'}
                                            maxLength={maxCharacters}
                                        />


                                        <Text>{bio.length}/{maxCharacters}</Text>
                                        <TouchableOpacity style={{ width: 70, height: 30, backgroundColor: 'black', borderRadius: 12, marginTop: '10%', justifyContent: 'center', alignItems: 'center' }} onPress={() => setSave(true)}><Text style={{ color: 'white' }}>Save</Text></TouchableOpacity>
                                    </View>
                                )}

                                <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center' }}>
                                    <View style={{ width: '96%', marginLeft: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderTopWidth: 1, borderTopColor: '#D5D5D0' }}>
                                        <Text style={[style.r16]}>Add Hastags</Text>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Support')}
                                        >
                                            <RightIcon size={20} color="#71777F" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '96%', marginLeft: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderTopWidth: 1, borderTopColor: '#D5D5D0' }}>
                                        <Text style={[style.r16]}>Tag People</Text>
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('Support')}
                                        >
                                            <RightIcon size={20} color="#71777F" />
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: '96%', marginLeft: '2%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: 60, borderTopWidth: 1, borderTopColor: '#D5D5D0' }}>
                                        <Text style={[style.r16]}>Share Interaction Post </Text>
                                        <TouchableOpacity onPress={toggleActivation}>
                                            <ImageBackground
                                                source={backgroundColor ? require('../../../img/Container.png') : require('../../../img/Container1.png')}
                                                style={{
                                                    width: 52,
                                                    height: 32,
                                                    top: 0,

                                                }}
                                            >
                                                <Animated.View style={{ transform: [{ translateX: positionValue }] }}>
                                                    <Image source={require('../../../img/Knob.png')} style={{ width: 45, height: 45, top: -4, left: -8 }} />
                                                </Animated.View>
                                            </ImageBackground>
                                        </TouchableOpacity>
                                    </View>

                                </View>


                            </View>
                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>
                        <View style={{ flex: 1, }}>




                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginLeft: '2%', justifyContent: 'space-between', }}>
                                <TouchableOpacity onPress={handleButtonPress1}>
                                    <BackIcon size={20} color={dark ? "#FFFFFF" : "#000000"} />
                                </TouchableOpacity>
                                <Text style={[style.r16, { color: dark ? "#FFFFFF" : "#000000" }]}>Add Hastags</Text>
                                <TouchableOpacity onPress={handleButtonPress}>
                                    <Text style={[style.r14, { color: '#FF9900', right: '5%' }]}> Save</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        ImagePicker()
                                    }}
                                    style={{ width: '100%', height: 300, backgroundColor: dark ? "#000000" : "#ffffff" }}>
                                    {selectImage ? (<Image style={{ width: '94%', height: '100%', marginLeft: '3%', borderRadius: 12 }} source={{ uri: selectImage }} />) : (
                                        <Image
                                            source={require('../../../img/fondo10.jpg')}
                                            style={{ width: '94%', height: '100%', marginLeft: '3%', borderRadius: 12 }}
                                        />
                                    )}

                                </TouchableOpacity>

                                <View style={{
                                    width: '96%', marginLeft: '2%', height: 150, borderBottomWidth: 1, borderBottomColor: '#D5D5D0'
                                }}>
                                    <TextInput
                                        style={styles.input}
                                        value={newTag}
                                        onChangeText={text => setNewTag(text)}
                                        placeholder="Type a hashtag..."
                                    />
                                    <TouchableOpacity onPress={addTag} style={styles.addButton}>
                                        <Text style={styles.buttonText}>Add</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={styles.tagContainer}>
                                    {selectedTags.map(tag => (
                                        <TouchableOpacity
                                            key={tag}
                                            onPress={() => removeTag(tag)}
                                            style={styles.tagButton}
                                        >
                                            <Text style={styles.tagText}>{tag}</Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                                <View style={styles.predefinedTagsContainer}>
                                    <Text style={styles.predefinedTagsText}>Predefined Tags:</Text>
                                    <View style={styles.predefinedTags}>
                                        {predefinedTags.map(tag => (
                                            <TouchableOpacity
                                                key={tag}
                                                onPress={() => setSelectedTags([...selectedTags, tag])}
                                                style={styles.predefinedTagButton}
                                            >
                                                <Text style={styles.predefinedTagText}>{tag}</Text>
                                            </TouchableOpacity>
                                        ))}
                                    </View>
                                </View>





                            </View>
                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>
                        <View style={{ flex: 1, }}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', width: '96%', marginLeft: '2%', justifyContent: 'space-between', marginTop: '5%', }}>
                                <TouchableOpacity onPress={handleButtonPress1}>
                                    <BackIcon size={20} color={dark ? "#FFFFFF" : "#000000"} />
                                </TouchableOpacity>
                                <Text style={[style.r16, { color: dark ? "#FFFFFF" : "#000000" }]}>Tag Friend</Text>
                                <TouchableOpacity onPress={handleButtonPress}>
                                    <Text style={[style.r14, { color: '#FF9900', right: '5%' }]}> Save</Text>
                                </TouchableOpacity>
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
                            <View style={{ justifyContent: 'center', width: '96%' }}>


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
                            <ScrollView contentContainerStyle={{ flexGrow: 1, width: '90%', marginLeft: '5%' }}>
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
                                                    width: 30,
                                                    height: 30,
                                                    borderRadius: 8,
                                                    backgroundColor: commentVotes[index] ? '#FF9900' : 'white',
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    position: 'absolute',
                                                    right: -5,
                                                    borderWidth: 1,
                                                    borderColor: commentVotes[index] ? 'transparent' : '#D5D5D0',
                                                    justifyContent: 'center',
                                                    alignItems: 'center'
                                                }}
                                                onPress={() => enviar1(index)}
                                            >
                                                {commentVotes[index] ? <Tick size={15} color={'white'} /> : null}

                                            </TouchableOpacity>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>




                    </Swiper>

                </KeyboardAvoidingView>
            </View >
        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    inputContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    input: {
        flex: 1,
        height: 40,

        marginRight: 10,
        paddingHorizontal: 10,
    },
    addButton: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: '#D5D5D0',
        borderWidth: 1,
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10
    },
    buttonText: {
        color: 'black',
        fontWeight: 'bold',
    },
    tagContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    tagButton: {
        backgroundColor: 'black',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
        margin: 4,
    },
    tagText: {
        color: 'white',
        fontWeight: 'bold',
    },
    predefinedTagsContainer: {
        marginBottom: 10,
    },
    predefinedTagsText: {
        marginBottom: 5,
        fontWeight: 'bold',
        marginLeft: 20
    },
    predefinedTags: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    predefinedTagButton: {
        backgroundColor: 'orange',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 10,
        margin: 4,
    },
    predefinedTagText: {
        color: 'white',
        fontWeight: 'bold',
    },
});
export default Camera