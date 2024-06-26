import { View, Text, Image, Dimensions, TextInput, StyleSheet, TouchableOpacity, Switch, SafeAreaView, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import { Heart, Home, Home1, Lock, Person1, Plus } from '../theme/Icons';
import DynamicSun from './DynamicSun';
import { useNavigation } from '@react-navigation/native';
import Post from './Post';
import { Modal } from 'react-native';
import { useDarkMode } from './darkMode';

export const Nav = ({ navActive }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const { dark, toggleDarkMode } = useDarkMode();
  const [currentScreen, setCurrentScreen] = useState("");
  const [estArt, setEstArt] = useState('true');
  const handlePress = () => {

    navigation.navigate('FriendsFeed');
  };


  const handlePressI = () => {

    navigation.navigate("Activity");
  };
  const handlePressS = () => {
    if (currentScreen === "FriendsBoard") {
      // Si ya estamos en FriendsBoard, navegamos a la misma pantalla nuevamente
      navigation.navigate('FriendsBoard', { artBoard:estArt });
      console.log('eeeeeeee', estArt)
      setCurrentScreen("FriendsBoard");
    } else {
      // Si no estamos en FriendsBoard, navegamos a ella y actualizamos el estado
      navigation.navigate('FriendsBoard', { artBoard:estArt });
      setCurrentScreen("FriendsBoard");
    }
  };
  const handlePressS1 = () => {
    if (currentScreen === "FriendsBoard") {
      // Si ya estamos en FriendsBoard, navegamos a la misma pantalla nuevamente
      navigation.navigate('FriendsBoard', { artBoard:'false' });
    
      setCurrentScreen("FriendsBoard");
    } else {
      // Si no estamos en FriendsBoard, navegamos a ella y actualizamos el estado
      navigation.navigate('FriendsBoard', { artBoard:'false' });
      setCurrentScreen("FriendsBoard");
    }
  };
  const handlePressP = () => {

    navigation.navigate('UserProfileScreen');

  };


  const handlePressPOST = () => {
    setModalVisible(true); // Abre el modal cuando se presiona el botón
  };
  useEffect(() => {
    console.log({ navActive });
  }, [navActive]);
  return (

    <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', height: 80, backgroundColor: dark ? '#000000' : '#ffffff', borderTopRightRadius: 8, borderTopLeftRadius: 8 }}>

      <TouchableOpacity style={{ flex: 1, alignItems: 'center', top: -2 }} onPress={handlePress}>
        <DynamicSun sizeWidth={24} sizeHeight={25} colorCircle={navActive === "feed" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')} colorPath={navActive === "feed" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')} />

        <Text style={{ color: navActive === "feed" ? '#FF9900' : (dark ? '#ffffff' : '#000000'), fontSize: 10, marginTop: 5 }}>Feed</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1, alignItems: 'center', width: 40 }} onPress={handlePressS1}>
        < Image
          source={require('./../../img/horse.png')}

          style={{ width: 25, height: 20, tintColor: navActive === "board" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000') }}

        />
        <Text style={{ color: navActive === "board" ? '#FF9900' : (dark ? '#ffffff' : '#000000'), fontSize: 10, marginTop: 5 }}>Board</Text>
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          width: 47,
          height: 47,
          borderRadius: 999,
          backgroundColor: dark ? 'white' : 'black',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handlePressPOST}
      >
        <Text style={{ color: '#FF9900', fontSize: 24 }}>+</Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity style={{ height: '100%', width: '100%', backgroundColor: 'transparent' }} onPress={() => setModalVisible(false)}>
          <View style={{ justifyContent: 'center', width: '80%', borderRadius: 20, marginLeft: '10%', position: 'absolute', bottom: 150, height: 100, alignItems: 'center', backgroundColor: '#696969', flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={() => navigation.navigate("Camera")}>
              <DynamicSun sizeWidth={40} sizeHeight={40} colorCircle={navActive === "feed" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')} colorPath={navActive === "feed" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')} />

              <Text style={{ color: dark ? '#ffffff' : '#000000', fontSize: 15, marginTop: 5 }} onPress={() => navigation.navigate("Camera")}>Feed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={handlePressS}>
              <Image
                source={require('./../../img/horse.png')}

                style={{ width: 45, height: 40, tintColor:navActive === "board" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')}}

              />
              <Text style={{ color: dark ? '#ffffff' : '#000000', fontSize: 15, marginTop: 5 }}>Board</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>




      <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={handlePressI}>
        <Heart size={20} color={navActive === "interactions" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')} />
        <Text style={{ color: navActive === "interactions" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000'), fontSize: 10, marginTop: 5 }}>Interactions</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ flex: 1, alignItems: 'center' }} onPress={handlePressP}>
        <Person1 size={20} color={navActive === "profile" ? '#FF9900' : (dark ? '#D6DBDE' : '#000000')} />
        <Text style={{ color: navActive === "profile" ? '#FF9900' : dark ? '#D6DBDE' : '#000000', fontSize: 10, marginTop: 5 }}>Profile</Text>
      </TouchableOpacity>
    </View >

  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
  },
  iconText: {
    color: 'white',
    fontSize: 12,
    marginTop: 2,
  },

  gradientButton: {
    borderRadius: 99,
  },
  button: {

  },

  buttonText: {
    color: '#D6DBDE', // Color del texto
    fontSize: 16, // Tamaño del texto
  },


});