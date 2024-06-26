import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, StatusBar, Platform, KeyboardAvoidingView, Switch, Animated, TextInput, ImageBackground, Modal } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, Cross1, FileTextIcon, Game, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, NavBack, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, Search, ShieldIcon, SupportAgentIcon, Tick, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { Avatar, IconButton, Stack, Surface } from '@react-native-material/core';
import { useDarkMode } from '../../components/darkMode';

const PersonalZone = () => {
  const navigation = useNavigation();
  const [isOnline, setIsOnline] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const activeOnline = () => {
    setIsOnline(!isOnline);
  };
  const { dark, toggleDarkMode } = useDarkMode();
  const [communitiesNow, setCommunitiesNow] = useState([
    {
      id: 1,
      name: "RPS",
      class: "Rock , Paper , Scissors",
      time: "now",
      image: <Person />,
    },
    {
      id: 2,
      name: "HousePartyGroup",
      message: "Hey, I’m using Houseparty - I’m sending you this to say hi! Check it out and add me on the app so we can chat!",
      time: "now",
      image: <Person />,
    },
    {
      id: 3,
      name: "HousePartyGroup",
      message: "Hey, I’m using Houseparty - I’m sending you this to say hi! Check it out and add me on the app so we can chat!",
      time: "now",
      image: <Person />,
    },
    {
      id: 4,
      name: "HousePartyGroup",
      message: "Hey, I’m using Houseparty - I’m sending you this to say hi! Check it out and add me on the app so we can chat!",
      time: "now",
      image: <Person />,
    },
    {
      id: 5,
      name: "HousePartyGroup",
      message: "Hey, I’m using Houseparty - I’m sending you this to say hi! Check it out and add me on the app so we can chat!",
      time: "now",
      image: <Person />,
    }
  ]);

  return (
    <SafeAreaView style={[style.area, { backgroundColor: dark ? "#000000" : "#FFFFFF" }]}>
      <View style={{ flex: 1, backgroundColor: dark ? "#000000" : "#FFFFFF" }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
          flex: 1,
          // paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}>

          <View style={{ width: width, flex: 1, }}>
            <View style={{ width: width, flex: 1, }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <NavBack />
                <Image source={require('../../../img/perfilGame.png')} style={{ height: 80, width: 80, borderRadius: 80, marginTop: '10%' }} />

                {dark ? (
                  <Image source={require('../../../img/Conf.png')} style={{ height: 20, width: 20, marginRight: '5%', top: 6 }} />
                ) : (
                  <Image source={require('../../../img/Conf1.png')} style={{ height: 20, width: 20, marginRight: '5%', top: 6 }} />
                )}
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '5%' }}>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 30, width: 72, borderRadius: 10, backgroundColor: 'gray', }} onPress={activeOnline}>
                  <View style={{ width: 5, height: 5, borderRadius: 99, backgroundColor: isOnline ? 'red' : '#6FCF97' }}></View>
                  <Text style={[style.m12, { color: dark ? "#ffffff" : '#000000', marginLeft: '5%' }]}>
                    {isOnline ? (('Offline')) : (('Online'))}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', height: 30, width: 72, borderRadius: 10, backgroundColor: '#F7B84B', marginLeft: '5%' }} onPress={() => setModalVisible(true)}>
                  <Text style={[style.s12, { color: 'black', }]}>LV. 13</Text>
                </TouchableOpacity>

              </View>
              <Modal
                visible={modalVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
              >
                <TouchableOpacity style={{ width: '100%', height: '100%', backgroundColor: 'rgba(217, 217, 217, 0.3)' }} onPress={() => setModalVisible(false)}>
                  <View style={{
                    justifyContent: 'center',
                    width: '90%',
                    borderRadius: 20,
                    marginLeft: '5%',
                    position: 'absolute',
                    top: 250,
                    height: 150,
                    backgroundColor: 'white',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                    <View style={{ width: '80 %', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '5%' }}>
                      <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Game size={25} color={'#F7B84B'} />
                        <Text>Total games</Text>
                        <Text>120</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ marginRight: 10, alignItems: 'center', justifyContent: 'center' }}>
                        <Tick size={25} color={'#F7B84B'} />
                        <Text>Win</Text>
                        <Text>70</Text>
                      </TouchableOpacity>
                      <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Cross1 size={25} color={'#F7B84B'} />
                        <Text>Lost</Text>
                        <Text>50</Text>
                      </TouchableOpacity>
                    </View>
                    <View style={{ width: '90%', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '5%' }} >
                      <Text style={[style.s12, { color: 'black', }]}>LV. 13</Text>
                      <View style={{ width: '70%', height: 2, backgroundColor: '#F8F9FA', marginLeft: '2%', marginRight: '2%' }}>
                        <View style={{ width: '33%', height: '100%', backgroundColor: '#4CD864' }} />
                      </View>
                      <Text style={[style.s12, { color: 'black', }]}>LV. 14</Text>
                    </View>

                  </View>
                </TouchableOpacity>
              </Modal>
              <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '2%' }}>
                <Text style={[style.s20, { color: dark ? "#ffffff" : '#000000', }]}>SHAZTHEANIMATOR</Text>
                <DynamicSun sizeHeight={25} sizeWidth={25} colorCircle="#00F9AE" colorPath={dark ? "#ffffff" : '#000000'} style={{ marginLeft: '2%' }} />
              </View>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../img/Line1.png')} style={{ marginTop: '2%' }} />
              </View>
              <View style={{ width: '100%', height: 100 }}>
                <ScrollView horizontal={true} style={{}} >
                  <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10, marginLeft: 15, }}>
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: '5%' }} onPress={() => navigation.navigate('Duel')}>
                      <ImageBackground source={require('../../../img/Rectangle.png')} borderRadius={12} style={{ marginTop: '5%', height: 80, width: 85, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Image source={require('../../../img/duel.png')} style={{ height: 20, width: 20, }} />
                        <Text style={[style.b14, { color: '#DDE3F0', marginTop: '2%' }]}>Duel 1x1</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 80, width: 85, marginTop: '5%' }} onPress={() => navigation.navigate('LiveZone')}>
                      <ImageBackground source={require('../../../img/Rectangle.png')} borderRadius={12} style={{ height: 80, width: 85, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                        <Image source={require('../../../img/Live.png')} style={{ height: 20, width: 20, }} />
                        <Text style={[style.b14, { color: '#DDE3F0', marginTop: '2%' }]}>Live</Text>
                      </ImageBackground>
                    </TouchableOpacity>
                    <ImageBackground source={require('../../../img/Rectangle.png')} borderRadius={12} style={{ marginTop: '5%', height: 80, width: 85, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                      <Image source={require('../../../img/Rankings.png')} style={{ height: 20, width: 20, }} />
                      <Text style={[style.b14, { color: '#DDE3F0', marginTop: '2%' }]}>Rewards</Text>
                    </ImageBackground>
                    <ImageBackground source={require('../../../img/Rectangle.png')} borderRadius={12} style={{ marginTop: '5%', height: 80, width: 85, justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }} >
                      <Image source={require('../../../img/duel.png')} style={{ height: 20, width: 20, }} />
                      <Text style={[style.b14, { color: '#DDE3F0', marginTop: '2%' }]}>Invite</Text>
                    </ImageBackground>
                  </View>
                </ScrollView>
              </View>
              <View style={{ width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../../img/Line2.png')} style={{ marginTop: '5%' }} />
              </View>
              <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center ', width: '90%', marginLeft: '5%', marginTop: '5%', justifyContent: 'space-between' }}>
                  <Text style={[style.b18, { color: dark ? '#DDE3F0' : '#000000' }]}>
                    Unlocked Games
                  </Text>
                  <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000', marginTop: '2%' }]}>
                    Total 6
                  </Text>
                </View>

                <View style={{ flexDirection: 'column', alignItems: 'center ', width: '90%', marginLeft: '5%', marginTop: '5%', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center ', justifyContent: 'center', width: '100%', marginLeft: '5%', marginTop: '5%' }}>
                    <Image source={require('../../../img/game1.png')} />
                    <View style={{ flexDirection: 'column', alignItems: 'center ', justifyContent: 'center', marginLeft: '10%' }}>
                      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center ', justifyContent: 'space-between', }}>

                        <Text style={[style.b18, { color: dark ? '#DDE3F0' : '#000000' }]}>
                          RPS
                        </Text>
                        <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000', marginTop: '2%', right: -30 }]}>
                          Ranqueada
                        </Text>
                      </View>
                      <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000' }]}>Rock , Paper , Scissors</Text>
                      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center ', justifyContent: 'space-between', }}>

                        <Image source={require('../../../img/rewards1.png')} />
                        <Image source={require('../../../img/online1.png')} style={{ marginTop: '2%', right: -30 }} />

                      </View>
                      <Image source={require('../../../img/Line3.png')} style={{ marginTop: '3%' }} />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center ', justifyContent: 'center', width: '100%', marginLeft: '5%', marginTop: '5%' }}>
                    <Image source={require('../../../img/game2.png')} />
                    <View style={{ flexDirection: 'column', alignItems: 'center ', justifyContent: 'center', marginLeft: '10%' }}>
                      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center ', justifyContent: 'space-between', }}>

                        <Text style={[style.b18, { color: dark ? '#DDE3F0' : '#000000' }]}>
                          Chess
                        </Text>
                        <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000', marginTop: '2%', right: -30 }]}>
                          Diversao
                        </Text>
                      </View>
                      <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000' }]}>Red Dead Redemption 2</Text>
                      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center ', justifyContent: 'space-between', }}>

                        <Image source={require('../../../img/rewards1.png')} />
                        <Image source={require('../../../img/online1.png')} style={{ marginTop: '2%', right: -30 }} />

                      </View>
                      <Image source={require('../../../img/Line3.png')} style={{ marginTop: '3%' }} />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center ', justifyContent: 'center', width: '100%', marginLeft: '5%', marginTop: '5%' }}>
                    <Image source={require('../../../img/game3.png')} />
                    <View style={{ flexDirection: 'column', alignItems: 'center ', justifyContent: 'center', marginLeft: '10%' }}>
                      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center ', justifyContent: 'space-between', }}>

                        <Text style={[style.b18, { color: dark ? '#DDE3F0' : '#000000' }]}>
                          Tic Tac Toe
                        </Text>
                        <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000', marginTop: '2%', right: -30 }]}>
                          1x1
                        </Text>
                      </View>
                      <Text style={[style.r13, { color: dark ? '#ABB1CC' : '#000000' }]}>Counter Strike: GO</Text>
                      <View style={{ flexDirection: 'row', width: '80%', alignItems: 'center ', justifyContent: 'space-between', }}>

                        <Image source={require('../../../img/rewards1.png')} style={{ tintColor: '#000000' }} />
                        <Image source={require('../../../img/online1.png')} style={{ marginTop: '2%', right: -30 }} />

                      </View>
                      <Image source={require('../../../img/Line3.png')} style={{ marginTop: '3%' }} />
                    </View>
                  </View>
                </View>
              </ScrollView>
              <Nav />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View >
    </SafeAreaView >
  )
}

export default PersonalZone