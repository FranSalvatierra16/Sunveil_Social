import { View, Text, Image, Modal, Dimensions, TextInput, AppState, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import Video from 'react-native-video';
import style, { width } from '../theme/style';
import { useDarkMode } from '../components/darkMode';

import * as Progress from 'react-native-progress';
import Swiper, { Pagination } from 'react-native-swiper';
import { Colors } from '../theme/color';
import { EyeIcon, Plus, Tick } from '../theme/Icons';
import { Nav } from '../components/nav';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 4;
export default function Duel() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [histEst, setHistEst] = useState(-2);
    const [modalVisible, setModalVisible] = useState(true);
    const { dark, toggleDarkMode } = useDarkMode();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [paused, setPaused] = useState(true);
    const [muted, setMuted] = useState(true);
    const [go, setGo] = useState(false);
    const [selection, setSelection] = useState(false);
    const togglePlayPause = () => {
        setPaused(!paused);
    };

    const toggleModal = () => {
        setModalVisible(!modalVisible);
    };




    // Tu componente continúa aquí

    // Tu componente continúa aquí

    useEffect(() => {
        if (go) {
            const interval = setInterval(() => {
                setProgress(prevProgress => {
                    const newProgress = prevProgress + increment;
                    return newProgress >= 1 ? 1 : newProgress;
                });
            }, 300);

            return () => clearInterval(interval);
        }
    }, [go]);



    useEffect(() => {
        // Agrega un listener para detectar cambios en el estado de la aplicación
        AppState.addEventListener('change', handleAppStateChange);

        // Elimina el listener cuando el componente se desmonte para evitar memory leaks
        return () => {
            AppState.removeEventListener('change', handleAppStateChange);
        };
    }, []);

    useEffect(() => {
        if (go) {
            const interval = setInterval(() => {
                setProgress(prevProgress => {
                    const newProgress = prevProgress + increment;
                    return newProgress >= 1 ? 1 : newProgress;
                });
            }, 300);

            return () => clearInterval(interval);
        }
    }, [go]);

    const elegirOpcion = () => {
        setSelection(true);
        setGo(true);
    };
    const handleCloseModal = () => {
        setModalVisible(false);
        if (onClose) {
            onClose();
        }
    };
    const handleButtonPress = () => {
        setCurrentIndex(1); // Navigate to the second screen
    };
    const [progress, setProgress] = useState(0);
    const increment = 0.01;

    useEffect(() => {
        if (progress === 1) {
            const randomNumber = Math.floor(Math.random() * 3) + 1;
            const randomNumber1 = Math.floor(Math.random() * 3) + 1;
            let imageSource1;
            let imageSource;
            let opcionComputadora1;
            let opcionComputadora;
            switch (randomNumber) {
                case 1:
                    opcionComputadora1 = 'piedra';
                    imageSource = require('./../../img/mano.png');
                    break;
                case 2:
                    opcionComputadora1 = 'papel';
                    imageSource = require('./../../img/paper3.png');
                    break;
                case 3:
                    opcionComputadora1 = 'tijeras';
                    imageSource = require('./../../img/mano2.png');
                    break;
                default:
                    console.error('Invalid number:', randomNumber); // Handle unexpected numbers
            }
            switch (randomNumber1) {
                case 1:
                    opcionComputadora = 'piedra';
                    imageSource1 = require('./../../img/mano.png');
                    break;
                case 2:
                    opcionComputadora = 'papel';
                    imageSource1 = require('./../../img/paper3.png');
                    break;
                case 3:
                    opcionComputadora = 'tijeras';
                    imageSource1 = require('./../../img/mano2.png');
                    break;
                default:
                    console.error('Invalid number:', randomNumber); // Handle unexpected numbers
            }

            setChosenImageCompu(imageSource1)
            setChosenImage(imageSource);
            setEleccionComputadora(opcionComputadora1)

            console.log(opcionComputadora1)
            console.log(opcionComputadora)
            if (opcionComputadora1 === opcionComputadora) {
                setGanador('Empate');
            } else if (
                (opcionComputadora1 === 'piedra' && opcionComputadora === 'tijeras') ||
                (opcionComputadora1 === 'papel' && opcionComputadora === 'piedra') ||
                (opcionComputadora1 === 'tijeras' && opcionComputadora === 'papel')
            ) {
                setGanador('Usuario');
            } else {
                setGanador('Computadora');
            }
        }
    }, [progress]);
    const [eleccionUsuario, setEleccionUsuario] = useState('');
    const [eleccionComputadora, setEleccionComputadora] = useState('');
    const [ganador, setGanador] = useState('');
    const [fightTextVisible, setFightTextVisible] = useState(true);
    const [chosenImage, setChosenImage] = useState('') // State variable to store chosen image source
    const [chosenImageCompu, setChosenImageCompu] = useState('')
    const [timeCompleted, setTimeCompleted] = useState(false);
    const handleUserChoice = (opcion) => {
        let imageSource;
        let imageSource1;// Variable to hold the chosen image source
        setEleccionComputadora(opcion);
        const randomNumber = Math.floor(Math.random() * 3) + 1; // Genera un número aleatorio entre 1 y 3
        let opcionComputadora1;
        switch (opcion) {
            case 'piedra':
                imageSource = require('./../../img/mano.png'); // Update with your image paths
                break;
            case 'papel':
                imageSource = require('./../../img/paper3.png'); // Update with your image paths
                break;
            case 'tijeras':
                imageSource = require('./../../img/mano2.png'); // Update with your image paths
                break;
            default:
                console.error('Invalid choice:', opcion); // Handle unexpected choices
        }

        switch (randomNumber) {
            case 1:
                opcionComputadora1 = 'piedra';
                imageSource1 = require('./../../img/mano.png');
                break;
            case 2:
                opcionComputadora1 = 'papel';
                imageSource1 = require('./../../img/paper3.png');
                break;
            case 3:
                opcionComputadora1 = 'tijeras';
                imageSource1 = require('./../../img/mano2.png');
                break;
            default:
                console.error('Invalid number:', randomNumber); // Handle unexpected numbers
        }

        setChosenImageCompu(imageSource1)
        setChosenImage(imageSource);
        if (opcion === opcionComputadora1) {
            setGanador('Empate');
        } else if (
            (opcion === 'piedra' && opcionComputadora1 === 'tijeras') ||
            (opcion === 'papel' && opcionComputadora1 === 'piedra') ||
            (opcion === 'tijeras' && opcionComputadora1 === 'papel')
        ) {
            setGanador('Usuario');
        } else {
            setGanador('Computadora');
        }

    };

    useEffect(() => {
        if (chosenImage !== '') {
            const timeoutId = setTimeout(() => {
                setFightTextVisible(false); // Hide FIGHT text after 30 seconds
            }, 10000); // 30000 milliseconds = 30 seconds

            return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
        }
    }, [chosenImage]);

    const obtenerTextoGanador = () => {
        switch (ganador) {
            case 'usuario':
                return '¡Ganaste!';
            case 'computadora':
                return '¡Perdiste!';
            case 'empate':
                return 'Empate.';
            default:
                return 'Error al determinar el ganador.';
        }
    };
    const getGanadorStyle = () => {
        switch (ganador) {
            case 'Usuario':
                return styles.textoVerde;
            case 'Empate':
                return styles.textoNegro;
            case 'Computadora':
                return styles.textoRojo;
            default:
                return {};
        }
    };
    return (
        <SafeAreaView style={style.area}>

            <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#ffffff' }}>

                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
                    <Swiper
                        showsPagination={false}
                        style={styles.wrapper}
                        loop={false}
                        index={currentIndex}
                        onIndexChanged={index => setCurrentIndex(index)}
                        direction={'vertical'}
                    >
                        <View style={{ width: '100%', flex: 1, }}>


                            <View style={{ flexDirection: 'row', width: '96%', alignItems: 'center', marginLeft: '2%', marginTop: '5%' }}>

                                <Image source={require('./../../img/Profile.png')} style={{ width: 40, height: 40, borderRadius: 99 }} />

                                <Text style={[style.s12, { color: 'black', marginLeft: '2%' }]}>SHAZTHEANIMATOR</Text>
                                <TouchableOpacity style={{ width: 106, height: 34, borderRadius: 12, borderWidth: 1, borderColor: '#EEF0F6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginLeft: '10%' }} >

                                    <Text style={[style.r13, { color: '#A061FF', }]}>Advance</Text>
                                    <Image source={require('./../../img/crystal.png')} style={{ width: 18, height: 18, borderRadius: 99 }} />
                                </TouchableOpacity>
                                <TouchableOpacity style={{ width: 65, height: 34, borderRadius: 12, borderWidth: 1, borderColor: '#EEF0F6', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginLeft: '2%' }} >

                                    <Text style={[style.r13, { color: '#FCBD11' }]}>40</Text>
                                    <Image source={require('./../../img/coin.png')} style={{ width: 18, height: 18, borderRadius: 99 }} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10%' }}>
                                <Text style={[style.s32, { color: 'black', marginTop: '2%' }]}>Duel 1X1</Text>
                                <Image source={require('./../../img/aro.png')} style={{ width: 323, height: 323, }} />
                                <TouchableOpacity style={{ marginTop: '20%', width: 326, height: 62, borderRadius: 12, backgroundColor: '#3C3C3C', justifyContent: 'center', alignItems: 'center' }} onPress={handleButtonPress}>
                                    <Text style={[style.s20, { color: '#FFFFFF' }]} >Search for an opponent </Text>
                                </TouchableOpacity>
                            </View>


                            <Image source={require('./../../img/Trophy.png')} style={{ position: 'absolute', top: '22%', left: '41%', width: 70, height: 70, }} />
                            <Image source={require('./../../img/mano.png')} style={{ position: 'absolute', top: '40%', left: '15%', width: 60, height: 60, }} />
                            <Image source={require('./../../img/mano2.png')} style={{ position: 'absolute', top: '52%', left: '47%', width: 57, height: 57, }} />
                            <Image source={require('./../../img/mano3.png')} style={{ position: 'absolute', top: '33%', left: '70%', width: 60, height: 60, }} />
                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>
                        <View style={{ width: '100%', flex: 1 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10%' }}>
                                <Image source={require('./../../img/ProfileGame1.png')} style={{ width: 90, height: 90, }} />
                                <Text style={[style.b32, { color: '#FCBD11', marginTop: '2%' }]}> Sarok Ali</Text>
                                <Text style={[style.r18, { color: 'black', marginTop: '2%' }]}><Text style={[style.r18, { color: 'red' }]}>1</Text> Lose</Text>
                                <Text style={[style.r18, { color: 'black', marginTop: '2%' }]}><Text style={[style.r18, { color: 'green' }]}>20</Text> Win</Text>


                            </View>
                            <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[style.r56, { color: '#FCBD11', marginTop: '10%' }]}>VS</Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '10%' }}>
                                <Image source={require('./../../img/ProfileGame1.png')} style={{ width: 90, height: 90, }} />
                                <Text style={[style.b32, { color: '#FCBD11', marginTop: '2%' }]}> Mhamad Kamaran</Text>
                                <Text style={[style.r18, { color: 'black', marginTop: '2%' }]}><Text style={[style.r18, { color: 'red' }]}>10</Text> Lose</Text>
                                <Text style={[style.r18, { color: 'black', marginTop: '2%' }]}><Text style={[style.r18, { color: 'green' }]}>10</Text> Win</Text>


                            </View>



                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>
                        <View style={{ width: '100%', flex: 1 }}>

                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                                <Text style={[style.s24, { color: 'black', marginTop: '10%' }]}>Round 1</Text>
                            </View>
                            {eleccionComputadora !== ('') ? (<>
                                <ImageBackground source={require('./../../img/mapa.png')} style={{ width: 443, height: 407, marginTop: '10%' }} >
                                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '80%', marginLeft: '5%', marginTop: '20%' }}>
                                        <View style={{ width: 10, height: 189, backgroundColor: '#90C67B', borderRadius: 10 }}></View>
                                        <View style={[style.r56, { color: '#FCBD11', marginTop: '10%', flexDirection: 'row', height: 100, alignItems: 'center', alignItems: 'center' }]}>
                                            {fightTextVisible ? (
                                                <>
                                                    <Image source={require('./../../img/leftM.png')} style={{ width: 60, height: 60, }} />
                                                    <Image source={require('./../../img/rightM.png')} style={{ width: 60, height: 60, }} />
                                                </>
                                            ) : (<>
                                                <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                                    <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', }}>
                                                        <Image source={chosenImage} style={{ width: 60, height: 60, }} />
                                                        <Image source={chosenImageCompu} style={{ width: 60, height: 60, }} />
                                                    </View>
                                                    <Text style={[style.s20, getGanadorStyle()]}>Resultado: {ganador}</Text>
                                                </View>
                                            </>)}
                                        </View>
                                        <View style={{ justifyContent: 'center', alignItems: 'center', height: 249 }}>
                                            <View style={{ width: 45, height: 45, borderRadius: 99, backgroundColor: '#90C67B', justifyContent: 'center', alignItems: 'center' }} >
                                                <Tick size={30} color={'white'} />
                                            </View>
                                            <View style={{ width: 10, height: 239, backgroundColor: '#90C67B', borderRadius: 10 }}></View>
                                            <View style={{ width: 45, height: 45, borderRadius: 99, backgroundColor: '#90C67B', justifyContent: 'center', alignItems: 'center' }} >
                                                <Tick size={30} color={'white'} />
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>
                            </>) : (
                                <>
                                    {selection ? (
                                        <>
                                            <ImageBackground source={require('./../../img/mapa.png')} style={{ width: '100%', height: 407, marginTop: '10%' }} >
                                                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '100%', marginTop: '20%', right: '10%' }}>


                                                    <Progress.Bar

                                                        progress={progress}
                                                        width={189}
                                                        color={timeCompleted ? 'red' : 'red'}
                                                        unfilledColor="#90C67B"
                                                        borderWidth={0}
                                                        height={10}
                                                        borderRadius={10}
                                                        style={{
                                                            transform: [{ rotate: '-90deg' }],

                                                        }}
                                                    />
                                                    <Text style={[style.r56, { color: '#FCBD11', marginTop: '10%', right: '10%' }]}>FIGHT</Text>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 249 }}>
                                                        <View style={{ width: 45, height: 45, borderRadius: 99, backgroundColor: '#90C67B', justifyContent: 'center', alignItems: 'center' }} >
                                                            <Tick size={30} color={'white'} />
                                                        </View>
                                                        <View style={{ width: 10, height: 239, backgroundColor: '#90C67B', borderRadius: 10 }}></View>
                                                        <Image source={require('./../../img/ProfileGame1.png')} style={{ width: 45, height: 45, borderRadius: 49 }} />
                                                    </View>
                                                </View>
                                            </ImageBackground>
                                        </>
                                    ) : (
                                        <>
                                            <ImageBackground source={require('./../../img/mapa.png')} style={{ width: 443, height: 407, marginTop: '10%' }} >
                                                <View style={{ justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', width: '80%', marginLeft: '5%', marginTop: '20%' }}>
                                                    <View style={{ width: 10, height: 189, backgroundColor: '#90C67B', borderRadius: 10 }}></View>
                                                    <Text style={[style.r56, { color: '#FCBD11', marginTop: '10%' }]}>ROUND 1</Text>
                                                    <View style={{ justifyContent: 'center', alignItems: 'center', height: 249 }}>
                                                        <Image source={require('./../../img/ProfileGame1.png')} style={{ width: 45, height: 45, borderRadius: 49 }} />
                                                        <View style={{ width: 10, height: 239, backgroundColor: '#90C67B', borderRadius: 10 }}></View>
                                                        <Image source={require('./../../img/ProfileGame1.png')} style={{ width: 45, height: 45, borderRadius: 49 }} />
                                                    </View>
                                                </View>
                                            </ImageBackground>

                                        </>
                                    )}
                                </>
                            )}
                            <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: '5%' }}>
                                {selection ? (
                                    <View style={{ width: 308, height: 135, justifyContent: 'space-around', alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderColor: '#FCBD11', borderRadius: 12 }}
                                    >
                                        <TouchableOpacity onPress={() => handleUserChoice('piedra')}>
                                            <Image source={require('./../../img/rock.png')} style={{ width: 70, height: 70 }} />

                                        </TouchableOpacity>

                                        <TouchableOpacity onPress={() => handleUserChoice('papel')}>
                                            <Image source={require('./../../img/paper3.png')} style={{ width: 70, height: 70 }} />

                                        </TouchableOpacity>

                                        <TouchableOpacity style={styles.botonOpcion} onPress={() => handleUserChoice('tijeras')}>
                                            <Image source={require('./../../img/mano2.png')} style={{ width: 70, height: 70 }} />

                                        </TouchableOpacity>
                                    </View>



                                ) : (

                                    <>
                                        <TouchableOpacity onPress={elegirOpcion} >
                                            <Image source={require('./../../img/selection.png')} style={{ width: 75, height: 75, borderRadius: 99 }} />
                                        </TouchableOpacity>
                                    </>
                                )}

                            </View>

                            {/* <View style={styles.contenedor}>
                                <Text style={styles.titulo}>Piedra, Papel o Tijera</Text>

                                <View style={styles.opciones}>
                                    <TouchableOpacity style={styles.botonOpcion} onPress={() => manejarEleccionUsuario('piedra')}>
                                        <Image source={require('./../../img/mano.png')} style={styles.imagenOpcion} />
                                        <Text style={styles.textoOpcion}>Piedra</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.botonOpcion} onPress={() => manejarEleccionUsuario('papel')}>
                                        <Image source={require('./../../img/mano2.png')} style={styles.imagenOpcion} />
                                        <Text style={styles.textoOpcion}>Papel</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.botonOpcion} onPress={() => manejarEleccionUsuario('tijeras')}>
                                        <Image source={require('./../../img/mano2.png')} style={styles.imagenOpcion} />
                                        <Text style={styles.textoOpcion}>Tijera</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> */}

                            <View style={{
                                width: '100%',
                                position: 'absolute', top
                                    : '90%'
                            }}>
                                <Nav />
                            </View>
                        </View>

                    </Swiper>
                </KeyboardAvoidingView >
            </View >

        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black', // Fondo negro para el modal
    },

    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 20,
    },
    options: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    optionButton: {
        backgroundColor: '#eee',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    optionImage: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    optionText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 5,
    },
    resultText: {
        fontSize: 20,
        marginTop: 10,
    },
    backButton: {
        backgroundColor: '#007bff',
        padding: 10,
        marginTop: 20,
        borderRadius: 10,
    },
    backButtonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }, textoVerde: {
        color: 'green',
    },
    textoNegro: {
        color: 'black',
    },
    textoRojo: {
        color: 'red',
    },
});

