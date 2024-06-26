import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, Modal, Animated, TextInput } from 'react-native';
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { ImageBackground } from 'react-native';
import { BackIcon, Delete, Like, NavBack, Plus, Search, Tick, Tick1 } from '../../theme/Icons';
import { Nav } from '../../components/nav';
import i18n from '../../i18n';
import { useDarkMode } from '../../components/darkMode';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Swiper from 'react-native-swiper';
import { TouchEventType } from 'react-native-gesture-handler/lib/typescript/TouchEventType';
const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;


export default function Activity({ navigation }) {
    const { dark, toggleDarkMode } = useDarkMode();
    const [isRevealed, setIsRevealed] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [existe, setExiste] = useState(true);
    const [inbox, setInbox] = useState(true);
    const [search, setSearch] = useState(false);
    const [leido, setLeido] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [searchText, setSearchText] = useState('');
    const [comment, setComment] = useState("");
    const [chatSelect, setChatSelect] = useState(0);
    const handleButtonPress1 = () => {
        setCurrentIndex(currentIndex - 1); // Navigate to the second screen
    };
    const handleModal = () => {
        setModalVisible1(!modalVisible1);
    };
    const eliminarPub = () => {
        setExiste(!existe);
        console.log(existe)
    };
    const onSwipe = (event) => {
        if (event.state === State.ACTIVE) {
            setIsRevealed(true);
        } else if (event.state === State.END) {
            setIsRevealed(false);
        }
    };
    const initialUsers = [

        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),

            message: [
                {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '08:20'
                },
                {
                    user: 2,
                    menssage: 'Hola como estas',
                    hora: '08:20'
                }, {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '09:20'
                },
                {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '10:20'
                },
                {
                    user: 2,
                    menssage: 'Hola como estas',
                    hora: '12:20'
                },
            ],

            leido: false
        },

        {
            id: 2,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),

            message: [
                {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '08:20'
                },
                {
                    user: 2,
                    menssage: 'Hola como estas',
                    hora: '08:20'
                }, {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '09:20'
                },
                {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '10:20'
                },
                {
                    user: 2,
                    menssage: 'Hola como estas',
                    hora: '12:20'
                },
            ],

            leido: true
        },

        {
            id: 3,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),

            message: [
                {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '08:20'
                },
                {
                    user: 2,
                    menssage: 'Hola como estas',
                    hora: '08:20'
                }, {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '09:20'
                },
                {
                    user: 1,
                    menssage: 'Hola como estas',
                    hora: '10:20'
                },
                {
                    user: 1,
                    menssage: 'Chau',
                    hora: '12:20'
                },
            ],

            leido: false
        },

    ];
    const [usersConver, setUsersConver] = useState(initialUsers);
    const handleButtonPress = (index) => {
        setChatSelect(index)
        setCurrentIndex(1);
        const updatedUsers = usersConver.map((user, i) => {
            if (i === index) {
                return { ...user, leido: true };
            }
            return user;
        });
        setUsersConver(updatedUsers);
    };
    const renderLeftActions = (progress, dragX) => {
        const opacity = dragX.interpolate({
            inputRange: [0, 50],
            outputRange: [0, 1],
            extrapolate: 'clamp',
        });
        return (
            <View style={styles.actionsContainer}>
                <TouchableOpacity style={styles.actionButton} onPress={handleModal}>
                    <Text style={styles.actionText}>. . .</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: 'red' }]} onPress={eliminarPub}>
                    <Delete size={20} color='white' />
                </TouchableOpacity>
            </View>
        );
    };
    const renderRightActions = (progress, dragX) => {
        const scale = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [1, 0],
            extrapolate: 'clamp',
        });
        const translateX = dragX.interpolate({
            inputRange: [-100, 0],
            outputRange: [0, -100],
            extrapolate: 'clamp',
        });

        return (
            <Animated.View style={{
                flexDirection: 'row',
                transform: [{ translateX }],
                opacity: scale,
            }}>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: 'gray' }]} onPress={handleModal}>
                    <Text style={styles.actionText}>. . .</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, { backgroundColor: 'red' }]} onPress={() => setExiste(false)}>
                    <Delete size={20} color="white" />
                </TouchableOpacity>
            </Animated.View>
        );
    };
    const users = [
        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenLike: require('../../../img/history.png'),
            follower: true,
            type: 'comment',
            date: 'Today',



        }
    ]
    return (
        <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#ffffff' }]}>
            <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#ffffff' }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
                    <View style={{ alignItems: 'center', flex: 1 }}>
                        <View style={{ width: '100%', height: 59, flexDirection: 'row', alignItems: 'center', marginTop: '3%' }}>
                            <View style={{ width: 350, flexDirection: 'column', justifyContent: 'center', }}>
                                <NavBack color={dark ? '#ffffff' : '#000000'} />
                                <View style={{ flexDirection: 'row', alignItems: 'center', width: '80%', marginLeft: '5%', marginTop: '3%' }}>
                                    {inbox ?
                                        (
                                            <><TouchableOpacity style={{ width: 94, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>Inbox</Text>
                                            </TouchableOpacity>
                                                <TouchableOpacity style={{ width: 94, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: '3%' }} onPress={() => setInbox(!inbox)}>
                                                    <Text style={[style.s14, { color: '#A8A8A8' }]}>Notifications</Text>
                                                </TouchableOpacity></>) :
                                        (<><TouchableOpacity style={{ width: 89, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => setInbox(!inbox)}>
                                            <Text style={[style.s14, { color: '#A8A8A8' }]}>Inbox</Text>
                                        </TouchableOpacity>
                                            <TouchableOpacity style={{ width: 94, height: 40, borderRadius: 9000, backgroundColor: dark ? '#ffffff' : '#000000', borderWidth: 1, justifyContent: 'center', alignItems: 'center', marginLeft: '3%' }}>
                                                <Text style={[style.s14, { color: dark ? '#000000' : '#FFFFFF' }]}>Notifications</Text>
                                            </TouchableOpacity>
                                        </>)}
                                    <View style={{ left: 200, }}>
                                        <TouchableOpacity

                                            style={{

                                                height: 40,
                                                width: 40,
                                                borderRadius: 999,
                                                position: 'absolute', right: 30, top: -15,


                                                backgroundColor: '#F8F9FA',
                                                borderColor: 'black',

                                                justifyContent: 'center',
                                                alignItems: 'center'
                                            }}

                                        >
                                            <View style={{ flexDirection: 'column' }}>
                                                <View style={{ width: 3, height: 3, backgroundColor: '#000000', borderRadius: 2.5 }} />
                                                <View style={{ width: 3, height: 3, backgroundColor: '#000000', borderRadius: 2.5, marginVertical: 2 }} />

                                                <View style={{ width: 3, height: 3, backgroundColor: '#000000', borderRadius: 2.5 }} />
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>



                        </View>
                        {inbox ? (<>
                            <Swiper
                                showsPagination={false}
                                style={styles.wrapper}
                                loop={false}
                                index={currentIndex}
                                onIndexChanged={index => setCurrentIndex(index)}
                                direction={'vertical'}
                            >
                                <View style={{ flex: 1, width: '90%',marginLeft:'5%' }}>



                                    <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '3%', marginLeft: '5%' }}>
                                        <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <Text style={[style.r24, { color: dark ? '#ffffff' : '#000000', marginTop: '4%' }]}>Message</Text>
                                            <TouchableOpacity style={{ borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center', marginRight: '10%', top: 15 }} onPress={() => setSearch(!search)}>
                                                <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16, tintColor: dark ? '#ffffff' : '#000000' }} />

                                            </TouchableOpacity>
                                        </View>
                                        <Text style={[style.r16, { color: '#BDC1C6', }]}>You have <Text style={[style.r16, { color: '#FF8A00' }]}>{i18n.t('activity.new')} </Text> message</Text>
                                    </View>


                                    {search ? (
                                        <View style={{ flexDirection: "row", alignItems: 'center', borderColor: '#BDC1C6', borderWidth: 1, borderRadius: 16, marginTop: '2%', marginLeft: '2%', padding: 1, width: '90%', height: 41 }}>
                                            <Image source={require('../../../img/search1.png')} style={{ width: 20, height: 20, marginLeft: 10, tintColor: '#BDC1C6' }} />
                                            <TextInput
                                                style={{

                                                    borderWidth: 0,
                                                    backgroundColor: 'transparent',
                                                    width: '98%',

                                                    color: dark ? "#ffffff" : "#000000",
                                                }}
                                                placeholder="Search "
                                                placeholderTextColor={'#BDC1C6'}
                                            />
                                        </View>) : (null)}
                                    <ScrollView style={{ flex: 1, }}>
                                        <>
                                            {usersConver.map((user, index,) => (
                                                <>
                                                    <TouchableOpacity style={{ width: '100%', flexDirection: 'column', marginTop: '3%' }} onPress={() => handleButtonPress(index)}>
                                                        <View style={{ width: '100%', flexDirection: 'row', marginTop: 10, }}>
                                                            <Image source={user.image} style={{ width: 40, height: 40, borderRadius: 999 }} />
                                                            <View style={{ flexDirection: 'column', justifyContent: 'center', marginLeft: '3%', width: '65%' }}>

                                                                <Text style={[style.s14, { color: dark ? '#ffffff' : '#000000' }]}>{user.name}</Text>

                                                                <Text style={[style.r13, { color: '#BDC1C6', top: -4 }]}>@{user.username}</Text>
                                                                {user.leido || user.message[user.message.length - 1].user === 2 ? (<Text style={[style.r13, { color: '#BDC1C6' }]}>{user.message[user.message.length - 1].menssage}</Text>) : (<Text style={[style.r13, { color: 'black' }]}>{user.message[user.message.length - 1].menssage}</Text>)}

                                                            </View>
                                                            <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '20%' }}>

                                                                <Text style={[style.s13, { color: '#BDC1C6' }]}>{user.message[user.message.length - 1].hora}</Text>
                                                                {user.leido || user.message[user.message.length - 1].user === 2 ? (
                                                                    null
                                                                ) : (<View style={{ width: 20, height: 20, borderRadius: 99, backgroundColor: '#1667EB', justifyContent: 'center', alignItems: 'center' }}>
                                                                    <Text style={[style.r14, { color: '#BDC1C6' }]}>1</Text>
                                                                </View>)}

                                                            </View>

                                                        </View>
                                                        <View style={{ width: '100%', height: 1, backgroundColor: '#BDC1C6', marginTop: '3%' }} />
                                                    </TouchableOpacity>

                                                </>
                                            ))}
                                        </>
                                    </ScrollView>
                                </View>
                                <View style={{ alignItems: 'center', flex: 1 }}>

                                    <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginBottom: '5%' }}>
                                        <TouchableOpacity onPress={handleButtonPress1} style={{ marginLeft: '3%', top: 30 }}>
                                            <BackIcon size={20} color={dark ? "#FFFFFF" : "#000000"} />
                                        </TouchableOpacity>
                                        <Text style={[style.s22, { color: dark ? "#FEFEFE" : '#000000', marginTop: 20, position: 'absolute', left: '40%' }]}>{usersConver[1].username}</Text>

                                    </View>
                                    <ScrollView style={{ width: '100%', marginTop: '5%', height: '80%' }}>
                                        <View style={{ width: '100%', backgroundColor: 'transparent', flexDirection: 'column', alignItems: 'center' }}>
                                            {usersConver[chatSelect].message.map((user, index,) => (
                                                <>
                                                    {user.user === 1 ? (<View style={{ alignItems: 'center', flexDirection: 'row', left: -40 }}>
                                                        <Image source={usersConver[1].image} style={{ width: 48, height: 48, borderRadius: 99 }} />
                                                        <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                            <View style={{ width: 240, height: 104, borderRadius: 24, borderBottomLeftRadius: 4, backgroundColor: dark ? "#434343" : '#F5F5F5', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                                                <Text style={[style.r14, { color: dark ? "#FEFEFE" : '#000000', }]}>{user.menssage}</Text>

                                                            </View>
                                                            <Text style={[style.r12, { color: dark ? "#DADADA" : '#757575', marginLeft: 10, marginTop: 5 }]}>{user.hora}</Text>
                                                        </View>
                                                    </View>) : (
                                                        <View style={{ alignItems: 'center', flexDirection: 'row', right: -70, marginTop: 20 }}>

                                                            <View style={{ flexDirection: 'column', marginLeft: 10 }}>
                                                                <View style={{ width: 200, height: 80, borderRadius: 24, borderBottomRightRadius: 4, backgroundColor: dark ? "#490517" : '#FFECEF', justifyContent: 'center', alignItems: 'center', padding: 5 }}>
                                                                    <Text style={[style.r14, { color: dark ? "#FEFEFE" : '#DF1525', }]}>{user.menssage}</Text>

                                                                </View>
                                                                <Text style={[style.r12, { color: dark ? "#FEFEFE" : '#757575', marginLeft: 10, marginTop: 5 }]}>{user.hora}</Text>
                                                            </View>
                                                        </View>
                                                    )}



                                                </>
                                            ))}
                                        </View>
                                    </ScrollView>
                                    <View style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 80, backgroundColor: dark ? "#434343" : '#ffffff', flexDirection: 'row' }}>
                                        <Image source={require('../../../img/camera1.png')} style={{ width: 20, height: 19, left: -10, tintColor: dark ? "#FEFEFE" : '#000000' }} />
                                        <View style={{ flexDirection: 'row', width: 306, height: 42, borderRadius: 24, backgroundColor: dark ? "#202020" : '#F5F5F5', justifyContent: 'space-between', paddingLeft: 10, alignItems: 'center' }}>
                                            <TextInput
                                                style={{ color: '#757575' }}
                                                value={comment}
                                                onChangeText={text => setComment(text)}
                                                placeholder={i18n.t('support.write')}
                                                placeholderTextColor="#6E707A"
                                                keyboardType="default"
                                            />

                                            <Image source={require('../../../img/carita.png')} style={{ width: 20, height: 20, right: 10, tintColor: dark ? "#FEFEFE" : '#000000' }} />
                                        </View>
                                    </View>

                                </View>
                            </Swiper>

                        </>) : (
                            <>
                                <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginTop: '5%', marginLeft: '5%' }}>
                                    <Text style={[style.r24, { color: dark ? '#ffffff' : '#000000', marginTop: '4%' }]}>{i18n.t('activity.notification')}</Text>
                                    <Text style={[style.r16, { color: '#BDC1C6', }]}>{i18n.t('activity.you')}<Text style={[style.r16, { color: '#FF8A00' }]}>{i18n.t('activity.new')} </Text> {i18n.t('activity.noti')}</Text>
                                </View>
                                <GestureHandlerRootView style={{ flex: 1, width: '100%' }}>
                                    <ScrollView style={{ flex: 1, }}>
                                        <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginLeft: 10, marginTop: '5%' }}>
                                            <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>{i18n.t('activity.now')} </Text>
                                            <Swipeable renderRightActions={renderRightActions}>
                                                {existe ? (
                                                    <View style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>

                                                        <ImageBackground source={require('../../../img/Profile22.png')} style={{ width: 40, height: 40, borderRadius: 999 }}>
                                                            <TouchableOpacity style={{ position: 'absolute', top: 22, right: 0, width: 16, height: 16, backgroundColor: 'transparent', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                                <Tick1 size={15} color={'#1667EB'} />
                                                            </TouchableOpacity>
                                                        </ImageBackground>
                                                        <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                            <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>@username {i18n.t('activity.replied')}</Text>
                                                            <View style={{ marginTop: 10, justifyContent: 'center', alignItems: 'center', width: 322, height: 78, backgroundColor: dark ? 'gray' : '#F8F9FA', borderRadius: 12 }}>
                                                                <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000', textAlign: 'center' }]}>{i18n.t('activity.text')}</Text>
                                                            </View>
                                                            <Text style={[style.r14, { color: '#BDC1C6' }]}>{i18n.t('activity.now')}</Text>
                                                        </View>
                                                        <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: 'red', marginTop: '2%' }}></View>

                                                    </View>
                                                ) : (null)}
                                            </Swipeable>
                                            < Swipeable renderRightActions={renderRightActions}>

                                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>
                                                    <ImageBackground source={require('../../../img/Profile22.png')} style={{ width: 40, height: 40, borderRadius: 999 }}>
                                                        <TouchableOpacity style={{ position: 'absolute', top: 22, right: 0, width: 16, height: 16, backgroundColor: 'transparent', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Tick1 size={15} color={'#1667EB'} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                    <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                        <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>@username {i18n.t('activity.follower')}</Text>

                                                        <Text style={[style.r14, { color: '#BDC1C6' }]}>2m {i18n.t('activity.time2')}</Text>
                                                    </View>
                                                    <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#1667EB', marginTop: '2%', right: '30%' }}></View>
                                                </TouchableOpacity>
                                            </Swipeable>
                                            < Swipeable renderRightActions={renderRightActions}>
                                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>
                                                    <ImageBackground source={require('../../../img/Profile22.png')} style={{ width: 40, height: 40, borderRadius: 999 }}>
                                                        <TouchableOpacity style={{ position: 'absolute', top: 22, right: 0, width: 16, height: 16, backgroundColor: 'transparent', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Like size={15} color={'#1667EB'} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                    <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                        <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>@username {i18n.t('activity.like')}</Text>

                                                        <Text style={[style.r14, { color: '#BDC1C6' }]}>2m {i18n.t('activity.time2')}</Text>
                                                    </View>
                                                    <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#1667EB', marginTop: '2%', right: '30%' }}></View>
                                                </TouchableOpacity>
                                            </Swipeable>
                                            < Swipeable renderRightActions={renderRightActions}>
                                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>
                                                    <ImageBackground source={require('../../../img/Profile.png')} style={{ width: 40, height: 40, borderRadius: 999 }}>
                                                        <TouchableOpacity style={{ position: 'absolute', top: 22, right: 0, width: 16, height: 16, backgroundColor: 'transparent', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Like size={15} color={'#1667EB'} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                    <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                        <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>@michael_ily {i18n.t('activity.like')}</Text>

                                                        <Text style={[style.r14, { color: '#BDC1C6' }]}>10m {i18n.t('activity.time2')}</Text>
                                                    </View>
                                                    <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#1667EB', marginTop: '2%', right: '30%' }}></View>
                                                </TouchableOpacity>
                                            </Swipeable>
                                        </View>
                                        <View style={{ width: '100%', flexDirection: 'column', justifyContent: 'center', marginLeft: 10, marginTop: '5%' }}>
                                            <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}> {i18n.t('activity.today')}</Text>
                                            < Swipeable renderRightActions={renderRightActions}>
                                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>
                                                    <Image source={require('../../../img/logo1.png')} style={{ width: 40, height: 40, borderRadius: 999 }} />

                                                    <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                        <Text style={[style.s16, { color: dark ? '#ffffff' : '#000000' }]}>MetroTV <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>{i18n.t('activity.replied')}</Text></Text>
                                                        <View style={{ marginTop: 10, alignItems: 'center', width: 322, height: 92, backgroundColor: '#E8F0FD', borderRadius: 24, flexDirection: 'row' }}>
                                                            <Image source={require('../../../img/laptop.png')} style={{ width: 100, marginLeft: '5%', height: 60, borderRadius: 16 }} />
                                                            <View style={{ marginLeft: '3%', width: 190, flexDirection: 'column', alignItems: 'flex-start' }}>
                                                                <Text style={[style.r12, { color: '#0E1013' }]}>{i18n.t('activity.read')}</Text>
                                                                <Text style={[style.s14, { color: '#0E1013' }]}>{i18n.t('activity.text1')}</Text>
                                                            </View>
                                                        </View>
                                                        <Text style={[style.r14, { color: '#BDC1C6' }]}>5h {i18n.t('activity.time2')}</Text>
                                                    </View>
                                                    <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: 'red', marginTop: '2%', right: '10%' }}></View>
                                                </TouchableOpacity>
                                            </Swipeable>
                                            < Swipeable renderRightActions={renderRightActions}>
                                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>
                                                    <ImageBackground source={require('../../../img/profile1.png')} style={{ width: 40, height: 40, borderRadius: 999 }}>
                                                        <TouchableOpacity style={{ position: 'absolute', top: 22, right: 0, width: 16, height: 16, backgroundColor: '#ffffff', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Tick1 size={15} color={'#1667EB'} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                    <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                        <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>@username {i18n.t('activity.follower')}</Text>

                                                        <Text style={[style.r14, { color: '#BDC1C6' }]}>7h {i18n.t('activity.time2')}</Text>
                                                    </View>
                                                    <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#1667EB', marginTop: '2%', right: '30%' }}></View>
                                                </TouchableOpacity>
                                            </Swipeable>
                                            < Swipeable renderRightActions={renderRightActions}>
                                                <TouchableOpacity style={{ width: '100%', flexDirection: 'row', marginTop: 10, alignItems: 'flex-start', }}>
                                                    <ImageBackground source={require('../../../img/profile1.png')} style={{ width: 40, height: 40, borderRadius: 999 }}>
                                                        <TouchableOpacity style={{ position: 'absolute', top: 22, right: 0, width: 16, height: 16, backgroundColor: '#ffffff', borderRadius: 3, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Tick1 size={15} color={'#1667EB'} />
                                                        </TouchableOpacity>
                                                    </ImageBackground>
                                                    <View style={{ width: 340, marginLeft: '3%', flexDirection: 'column', justifyContent: 'center', }}>
                                                        <Text style={[style.r16, { color: dark ? '#ffffff' : '#000000' }]}>@ilysm___ Followed you</Text>

                                                        <Text style={[style.r14, { color: '#BDC1C6' }]}>6hago</Text>
                                                    </View>
                                                    <View style={{ width: 8, height: 8, borderRadius: 99, backgroundColor: '#1667EB', marginTop: '2%', right: '30%' }}></View>
                                                </TouchableOpacity>
                                            </Swipeable>
                                        </View>

                                    </ScrollView>
                                </GestureHandlerRootView>
                            </>
                        )}
                        <Modal
                            visible={modalVisible1}
                            animationType="slide"
                            transparent={true}
                            onRequestClose={() => setModalVisible1(false)}
                        >
                            <TouchableOpacity style={{
                                width: '100%', height: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)'
                            }} onPress={() => setModalVisible1(false)}>
                                <TouchableOpacity style={{
                                    justifyContent: 'center',
                                    width: '90%',
                                    borderRadius: 20,
                                    marginLeft: '5%',
                                    position: 'absolute',
                                    top: '75%',
                                    height: 50,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text>Turn off notifications like this</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{
                                    justifyContent: 'center',
                                    width: '90%',
                                    borderRadius: 20,
                                    marginLeft: '5%',
                                    position: 'absolute',
                                    top: '85%',
                                    height: 50,
                                    backgroundColor: 'white',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Text>Cancel</Text>
                                </TouchableOpacity>
                            </TouchableOpacity>
                        </Modal>

                        <Nav navActive="interactions" />
                    </View>

                </KeyboardAvoidingView>
            </View >

        </SafeAreaView >
    );
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginTop: 5,
    },
    button: {
        width: '49%',
        aspectRatio: 1.73,
        height: 110,
        borderRadius: 16,
        overflow: 'hidden',
        marginBottom: '3%',
        borderWidth: 2,
        borderColor: 'transparent',
        position: 'relative',
    }, actionsContainer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        flex: 1,
        width: 80, // Puedes ajustar esto según sea necesario
    },
    actionButton: {
        width: 50,
        height: 50,// Ajusta el ancho según tus necesidades
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
        right: '2%'// Color para Archivar, por ejemplo
    },
    actionText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    selectedButton: {
        borderColor: "#1667EB",
    },
    backgroundImage: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selectedIndicator: {
        position: 'absolute',
        top: '50%',
        right: 5,
        marginTop: -10,
        width: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#1667EB',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
