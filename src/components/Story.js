import { View, Text, Image, Modal, Dimensions, TextInput, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, PanResponder } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import ProgressBar from "react-native-animated-progress";
import style from '../theme/style';
import { Cross1, Down, EyeIcon, Facebook, Link, PlusProfile, Send, Shared, WhatsApp } from '../theme/Icons';
import DynamicSun from './DynamicSun';
import { Colors } from '../theme/color';
import { Animated } from 'react-native';
import { KeyboardControllerProvider } from 'react-native-keyboard-controller';
import * as Progress from 'react-native-progress';
import Svg, { Path } from 'react-native-svg';
import { useDarkMode } from './darkMode';

import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
const screenWidth = Dimensions.get('window').width;
const itemWidth = screenWidth / 4;
export const History = ({ visible, imageUris, imagenP, username, time, onClose, colorSol, photos }) => {
  const [text, setText] = useState(''); // Aquí definimos el estado del texto
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [histEst, setHistEst] = useState(-2);
  const [modalVisible, setModalVisible] = useState(true);
  const [enviarHist, setEnviarHist] = useState(false);
  const [modalEnviar, setModalEnviar] = useState(false);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [timeCompleted, setTimeCompleted] = useState(false);
  const { dark, toggleDarkMode } = useDarkMode();


  const handleRight = () => {
    setCurrentImageIndex(prevIndex => (prevIndex + 1) % photos.length);
    setTimeCompleted(true); // Marca que se ha completado el tiempo al pasar a la siguiente imagen
  };
  const histEnviada = () => {
    setEnviarHist(true)
    setModalEnviar(false)
  };
  const handleLeft = () => {
    setCurrentImageIndex(prevIndex => (prevIndex - 1 + photos.length) % photos.length);
  };
  useEffect(() => {
    if (enviarHist) {
      const interval = setInterval(() => {
        // Cambiar el valor de enviarHist después de 30 milisegundos
        setTimeout(() => {
          setEnviarHist(false);
        }, 10);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [enviarHist]);

  const initialUsers = [
    {
      id: 1,
      name: 'anita',
      username: 'username',
      image: require('./../../img/profile1.png'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/profile2.png'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/fondo10.jpg'),
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
      image: require('./../../img/profile1.png'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/profile2.png'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
      colorSol: Colors.sol3,
      text: 'Resting under an umbrella on the beach.',
      frase: 'Chill vibes only.',
      tipo: 'publicacion',
      forma: 'texto',
      like: true, save: true, userType: 'normal',

    },
    {
      id: 11,
      name: 'User 1',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
      colorSol: Colors.sol2,
      text: 'Taking a boat ride along the coast.',
      frase: 'Adventure awaits on the high seas.',
      tipo: 'publicacion',
      forma: 'texto',
      like: true, save: true, userType: 'normal',

    },
    {
      id: 12,
      name: 'User 2',
      username: 'Juan',
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/profile1.png'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/profile2.png'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
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
      image: require('./../../img/person/person1.jpg'),
      imagenH: require('./../../img/pub2.png'),
      colorSol: Colors.sol1,
      text: 'Enjoying a sunny day by the coast',
      tipo: 'publicacion',
      forma: 'texto',
      like: true,
      save: true, userType: 'normal',

    }
  ];
  const [users, setUsers] = useState(initialUsers);
  useEffect(() => {
    if (visible) {
      setModalVisible(true);
    }
  }, [visible]);

  const handleIhist = (index) => {
    setHistEst(histEst === index ? -1 : index);
  }

  const [progressArray, setProgressArray] = useState(new Array(photos.length).fill(0));
  const [usedProgressBars, setUsedProgressBars] = useState(new Array(photos.length).fill(false));
  const handlePress = () => {
    Keyboard.dismiss(); // Esto asegura que el teclado se oculte antes de abrirlo nuevamente
    // Código adicional que deseas ejecutar cuando se presione el botón
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % photos.length);
    }, 10000);


    return () => clearTimeout(timer);
  }, [currentImageIndex, photos.length]);


  const translateY = useRef(new Animated.Value(0)).current;

  const onGestureEvent = Animated.event(
    [{ nativeEvent: { translationY: translateY } }],
    { useNativeDriver: true }
  );

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
    if (onClose) {
      onClose(); // Llama a la función de cierre pasada por las props
    }
  };

  useEffect(() => {
    if (swipedDown) {
      handleCloseModal();
    }
  }, [swipedDown]);

  const handlePanGesture = (event) => {
    if (startY === null) {
      setStartY(event.nativeEvent.pageY);
    } else {
      const currentY = event.nativeEvent.pageY;
      const deltaY = currentY - startY;

      if (deltaY > threshold) { // Check for swipe down (positive deltaY)
        onRequestClose();
        setStartY(null);
      } else if (deltaY < 0) { // Reset on swipe up (negative deltaY)
        setStartY(currentY); // Update startY to prevent unintended close
      }
    }
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressArray(prevProgressArray => {
        return prevProgressArray.map((prevProgress, index) => {
          if (index === currentImageIndex) {
            const newProgress = prevProgress + 0.01;
            return newProgress >= 1 ? 1 : 1;
          }
          return prevProgress;
        });
      });
    }, 100);

    return () => clearInterval(interval);
  }, [currentImageIndex]);
  return (

    <Modal
    visible={visible}
    transparent={true}
    animationType="fade"
    onRequestClose={handleCloseModal}
  >
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={handleCloseModal}
    >
      <ImageBackground
       source={photos[currentImageIndex]}
        style={styles.imageBackground}
        resizeMode="cover"
        {...(Platform.OS === 'ios' ? panResponder.panHandlers : {})} // Solo añade panHandlers en iOS
      >
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: '3%', width: '100%', marginTop: '12%' }}>
          {progressArray.map((progress, index) => (
            <Progress.Bar
              key={index}
              progress={progress}
              width={350 / photos.length}
              color={(timeCompleted) ? (usedProgressBars[index] ? 'black' : 'white') : 'white'}
              unfilledColor="gray"
              borderWidth={0}
              height={2}
              borderRadius={0}
              style={{
                marginHorizontal: 2,
              }}
            />
          ))}

        </View>

        <View style={{ width: '90%', height: 70, flexDirection: 'row', alignItems: 'center' }}>
          <Image source={imagenP} style={{ width: 48, height: 48, marginTop: '2%', borderRadius: 99 }} />
          <Text style={[style.s16, { color: 'white', marginLeft: '2%', marginRight: '2%' }]}>{username}</Text>
          <DynamicSun
            colorCircle={colorSol}
            colorPath={Colors.solDefault}
            sizeWidth={25}
            sizeHeight={25}
          />
          <View style={{ flexDirection: 'row', marginLeft: '15%' }}>
            {/* <TouchableOpacity style={{ width: 77, height: 24, borderRadius: 100, backgroundColor: 'black', opacity: 0.6, justifyContent: 'center', flexDirection: 'row', alignItems: 'center' }}>
              <EyeIcon size={18} style={{ color: 'white', marginLeft: 2 }} />
              <Text style={{ color: 'white', marginLeft: 3 }}>109</Text>
            </TouchableOpacity> */}
            <Text style={{ color: '#B1B1B1', marginLeft: '5%' }}>{time}</Text>
            {/* <Cross1 size={20} style={{
              color: '#F2F2F2', right: -10
            }} onPress={handleCloseModal} /> */}
          </View>
        </View>

        <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: '79%', flexDirection: 'column' }}>
          <View style={{ width: '70%', height: 60, borderRadius: 15, backgroundColor: 'black', opacity: 0.6, justifyContent: 'center', alignItems: 'center', marginTop: '45%' }}>
            <Text style={[style.s18, { color: '#ffffff' }]}> Capturing memories,</Text>
          </View>
          <View style={{ width: '100%', height: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity style={{ position: 'absolute', height: 2000, width: 150, backgroundColor: 'transparent' }} onPress={handleLeft} />
            <TouchableOpacity style={{ position: 'absolute', height: 700, width: 350, backgroundColor: 'transparent', left: 270 }} onPress={handleRight} />
          </View>

          <View style={{ width: '55%', height: 60, borderRadius: 15, backgroundColor: 'black', opacity: 0.6, justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>
            <Text style={[style.s18, { color: 'white' }]}> one click at a time.</Text>
          </View>
          <Image source={require('./../../img/camera.png')} style={{ width: 80, height: 70, marginTop: '5%' }} />

        </View>
        {enviarHist ? (
          <View style={{ width: 200, position: 'absolute', bottom: 600, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black', borderRadius: 12 }}>
            <Text style={[style.r16, { color: 'white' }]}>Send History</Text>
          </View>

        ) : (null)}
        <TouchableWithoutFeedback onPress={() => {
          Keyboard.dismiss()

        }}>
          <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, backgroundColor: 'transparent', flexDirection: 'row', bottom: 35 }}>
            <TextInput
              style={styles.input}
              onChangeText={setText}
              value={text}
              placeholder="Send Message"
              placeholderTextColor="#6E707A"

            />
            <Image source={require('./../../img/heartH.png')} style={{ width: 28, height: 28, marginLeft: '3%' }} />
            <TouchableOpacity onPress={() => setModalEnviar(!modalEnviar)}>
              <Image source={require('./../../img/sendH.png')} style={{ width: 21, height: 21, marginLeft: '3%' }} />
            </TouchableOpacity>
          </View>
        </TouchableWithoutFeedback>

        </ImageBackground>
      </TouchableOpacity>
    



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
                        onPress={histEnviada}
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
                      onPress={histEnviada}
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
      {swipedDown && <Text>La imagen fue deslizada hacia abajo.</Text>}
    </Modal>


  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  input: {
    width: 284,
    height: 56,
    borderRadius: 12,
    borderColor: 'transparent',
    backgroundColor: '#23252F',
    color: 'white',
    paddingHorizontal: 16,
    fontSize: 14,
  },
 
    container: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // Fondo semi-transparente
    },
  
});