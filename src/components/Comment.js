import React, { useState } from 'react';
import { View, Modal, TouchableOpacity, Text, StyleSheet, ScrollView, Image, TextInput } from 'react-native';
import style from '../theme/style';

import { Colors } from '../theme/color';
import DynamicSun from './DynamicSun';
import { Pause, Pin, Play } from '../theme/Icons';
import Sound from 'react-native-sound';
import { AudioRecord } from 'react-native-audio-record';


export const Comment = ({ visible, onClose, totalComments }) => {
    const Comment = {
        date: new Date(),
        content: ''
    };
    const [paused, setPaused] = useState(false);
    const [dark, setDark] = useState(-1);
    const [openedIndex, setOpenedIndex] = useState(-1);
    const [comment, setComment] = useState("");
    const darkPress = () => {
        setDark(dark === -1 ? 0 : -1);
    };
    const handlePress = (index) => {
        setOpenedIndex(openedIndex === index ? -1 : index);
    };
    const [text, setText] = useState('');
    const [text1, setText1] = useState('');
    const [liked, setLiked] = useState(false); // Estado para controlar si el corazón está marcado como "liked"
    const [likes, setLikes] = useState(345);
    const toggleLike = () => {
        setLiked(!liked); // Cambia el estado de liked al opuesto del valor actual
        setLikes(liked ? likes - 1 : likes + 1); // Incrementa o decrementa la cantidad de likes según el estado actual de liked
    };
    const [isRecording, setIsRecording] = useState(false);

    const startRecording = async () => {
        setIsRecording(true);
        try {
            const audioFile = await AudioRecord.start();
            console.log('Archivo de audio grabado:', audioFile);
        } catch (error) {
            console.log('Error al grabar audio:', error);
        }
    };
    const stopRecording = async () => {
        setIsRecording(false);
        try {
            const audioFile = await AudioRecord.stop();
            console.log('Archivo de audio grabado:', audioFile);
        } catch (error) {
            console.log('Error al detener la grabación de audio:', error);
        }
    };
    const playSound = (audioPath) => {


        const sound = new Sound(audioPath, (error) => {
            if (error) {
                console.log('Error al cargar el archivo de audio', error);
                return;
            }
            // Éxito al cargar el archivo de audio
            sound.play((success) => {
                if (!success) {
                    console.log('Error al reproducir el sonido');
                }
            });
            setPaused(!paused);
        });
    };
    const pauseSound = () => {
        // Pausar la reproducción de audio aquí
        setPaused(false);
    };
    // Arreglo de comentarios
    const [userData, setUserData] = useState({
        name: 'Juan',
        username: 'Perez',
        image: require('./../../img/profile2.png'),
        colorSol: Colors.sol1,
        commentP: [

        ],
    });
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
    };
    const commentCreator = {

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
        type: 'creator',
    }

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
                    colorSol: Colors.sol2,
                    type: 'user'
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
                    ]
                }
            ],
            type: 'user',
            audio: 'no',
        },
        {
            date: new Date('2024-03-02'), content: 'Segundo comentario', id: 1,
            name: 'anita',
            username: 'username',
            image: require('./../../img/profile1.png'),
            colorSol: Colors.sol1, commentP: [
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
                    ]
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
            type: 'user',
            audio: 'no',
        },
        {
            date: new Date('2024-03-03'), content: 'Finally, some proactive security! Tired of after- the - fact investigations', id: 1,
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
            type: 'user',
            audio: 'yes',
            audioContent: require('./../../img/audio1.mp3'),
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
            type: 'user',
            audio: 'no',
        }
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
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
            onSwipeComplete={onClose} // Esta línea agrega la funcionalidad de cierre al deslizar hacia abajo
            swipeDirection={['down']}
        >
            <TouchableOpacity style={{ backgroundColor: '#ffffff', width: '100%', height: '80%', alignItems: 'center', top: '10%', flexDirection: 'column', borderRadius: 32, borderWidth: 1, borderColor: '#BDC1C6' }} onPress={onClose}>
                <TouchableOpacity style={{ width: 60, height: 2, backgroundColor: '#BDC1C6', marginTop: 10 }} onPress={onClose}></TouchableOpacity>
                <Text style={[style.s14, { marginTop: '3%', color: 'black' }]}>{comments.length} Comments </Text>
                <View style={{ width: '100%', height: '22%', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', marginLeft: '10%', }}>
                        <View style={{ width: '98%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
                            <Image source={commentCreator.image} style={{ height: 32, width: 32, borderRadius: 99, marginTop: '3%' }} />
                            <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '2%', marginLeft: '5%' }}>
                                <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', marginTop: '2%' }}>
                                    <Pin size={20} />
                                    <Text style={[style.s14, { color: '#0E1013' }]}>{commentCreator.name}</Text>
                                    <View style={{ position: 'relative', top: 0, left: 2 }}>
                                        <DynamicSun
                                            colorCircle={commentCreator.colorSol}
                                            colorPath={Colors.solDefault}
                                            sizeWidth={10}
                                            sizeHeight={10}

                                        />
                                    </View>
                                    {commentCreator.type === 'creator' ? (
                                        <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', height: 25, width: 60, borderRadius: 12, borderWidth: 1, borderColor: '#8E8E8E', backgroundColor: 'transparent' }} onPress={onClose}>
                                            <Text style={[style.s12, { color: '#FF9900' }]}>Creator</Text>
                                        </View>) : null}
                                </View>
                                <Text style={[style.r12, { color: '#0E1013' }]}>{commentCreator.content}</Text>
                                <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                                    <TouchableOpacity style={{ marginLeft: 10 }}>
                                        <Text style={[style.r12, { color: '#FF9900' }]}>Reply</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity style={{ marginLeft: '2%' }}>
                                    <Text style={[style.r12, { color: '#8E8E8E' }]}>View replies({commentCreator.commentP.length})</Text>
                                </TouchableOpacity>


                            </View>
                        </View>
                    </View>
                </View>
                <ScrollView style={{ flex: 1, width: '100%', }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'column', width: '80%', marginLeft: '10%', }}>
                        {comments.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                            <View key={index} style={{ width: '98%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
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
                                        {comment.type === 'creator' ? (
                                            <View style={{ marginLeft: 15, justifyContent: 'center', alignItems: 'center', height: 25, width: 60, borderRadius: 12, borderWidth: 1, borderColor: '#8E8E8E', backgroundColor: 'transparent' }}>
                                                <Text style={[style.s12, { color: '#FF9900' }]}>Creator</Text>
                                            </View>) : null}
                                    </View>
                                    {comment.audio !== 'yes' ? (
                                        <Text style={[style.r12, { color: '#0E1013' }]}>{comment.content}</Text>
                                    ) : (
                                        <View style={{ flex: 1, justifyContent: 'center', }}>
                                            <TouchableOpacity
                                                style={{ width: 30, height: 30, backgroundColor: 'transparent', borderRadius: 99 }}
                                                onPress={() => (paused ? pauseSound() : playSound(comment.audioContent))}
                                            >
                                                {paused ? <Pause size={20} color={'#FF9900'} /> : <Play size={20} color={'#FF9900'} />}
                                            </TouchableOpacity>
                                        </View>
                                    )}
                                    <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                                        <TouchableOpacity style={{
                                            marginLeft: 10, justifyContent: 'center', alignItems: 'center', height: 20, width: 50, borderRadius: 12, backgroundColor: '#FF9900'
                                        }}>
                                            <Text style={[style.r10, { color: '#ffffff' }]}>Reply</Text>
                                        </TouchableOpacity>

                                    </View>
                                    <TouchableOpacity style={{ marginLeft: '2%' }} onPress={() => handlePress(index)}>
                                        <Text style={[style.r12, { color: '#8E8E8E' }]}>View replies({comment.commentP.length})</Text>
                                    </TouchableOpacity>
                                    {openedIndex === index && <View>{
                                        comment.commentP.sort((a, b) => new Date(b.date) - new Date(a.date)).map((comment, index) => (
                                            <View key={index} style={{ width: '98%', flexDirection: 'row', justifyContent: 'center', marginTop: '2%' }}>
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
                                                    <View style={{ width: '100%', marginLeft: '2%', flexDirection: 'row', alignItems: 'center' }}>
                                                        <Text style={[style.r12, { color: '#8E8E8E' }]}>1-10</Text>
                                                        <TouchableOpacity style={{
                                                            marginLeft: 10, justifyContent: 'center', alignItems: 'center', height: 20, width: 50, borderRadius: 12, backgroundColor: '#FF9900'
                                                        }}>
                                                            <Text style={[style.r10, { color: '#ffffff' }]}>Reply</Text>
                                                        </TouchableOpacity>

                                                    </View>

                                                </View>

                                            </View>

                                        ))
                                    }
                                        <View style={{ height: 70, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                            <View style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#F8F9FA', height: 54, borderRadius: 12, flexDirection: 'row', bottom: 6 }}>
                                                <Image source={userData.image} style={{ width: 40, height: 40, borderRadius: 99, left: -10 }} />
                                                <TextInput
                                                    style={styles.input1}
                                                    onChangeText={setText1}
                                                    value={text1}
                                                    placeholder="Add a comment"
                                                    placeholderTextColor="#6E707A"
                                                    keyboardType="default"
                                                />

                                                <TouchableOpacity onPress={() => handleReply(index, text1)}>
                                                    <Image source={require('./../../img/Sendbutton.png')} style={{ width: 54, height: 54, right: 0 }} />
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                    </View>
                                    }
                                    <View style={{ width: 380, height: 2, backgroundColor: '#989898', marginTop: '5%', right: 50 }} />
                                </View>

                            </View>

                        ))}

                    </View>
                </ScrollView>
                <View style={{ height: 70, width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: '100%', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: '#F8F9FA', height: 54, borderRadius: 12, flexDirection: 'row', bottom: 6 }}>
                        <Image source={userData.image} style={{ width: 50, height: 50, borderRadius: 99, }} />
                        <TextInput
                            style={styles.input}
                            onChangeText={setText}
                            value={text}
                            placeholder="Add a comment"
                            placeholderTextColor="#6E707A"
                            keyboardType="default"
                        />

                        <TouchableOpacity onPress={handleComment}>
                            <Image source={require('./../../img/Sendbutton.png')} style={{ width: 54, height: 54, right: 0 }} />
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableOpacity >
        </Modal >
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

        borderRadius: 12,
        height: 50,
        width: 300,
        backgroundColor: '#ffffff',

        color: 'black',
        paddingHorizontal: 16,
        fontSize: 14,
    }, input1: {

        borderRadius: 12,
        height: 50,
        width: 250,
        backgroundColor: '#ffffff',

        color: 'black',
        paddingHorizontal: 16,
        fontSize: 14,
    },
});