import { View, Text, StyleSheet, Image, Dimensions, TextInput, TouchableOpacity, Modal, Switch, SafeAreaView, ImageBackground, StatusBar, FlatList, KeyboardAvoidingView, ScrollView, Platform, Alert } from 'react-native';
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../theme/color'
import style from '../../theme/style'
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import DatePicker from 'react-native-date-picker'
import { AppBar, Button } from '@react-native-material/core';

import { EmailIcon, EyeIcon, Lock, NavBack } from '../../theme/Icons';
import DynamicSun from '../../components/DynamicSun';
import DynamicInput from '../../components/Input';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import i18n from '../../i18n';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Welcome({ navigation, route }) {
  const { username } = route.params;
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [buttonText, setButtonText] = useState(i18n.t('welcome.date_of_birth'));
  const [accepted, setAccepted] = useState(false);
  const [accepted1, setAccepted1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(Colors.solDefault);
  const [borderADV, setBorderADV] = useState('transparent');
  const [borderADV1, setBorderADV1] = useState('transparent');
  const [selectedColorPath, setSelectedColorPath] = useState(Colors.solDefault);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectCont, setSelectCont] = useState(false);
  const [selectImage, setSelectImage] = useState('')
  i18n.locale = 'es';
  let options = {
    storageOptions: {
      path: "image"
    }
  }
  const ImagePicker = () => {
    launchImageLibrary(options, response => (
      setSelectImage(response.assets[0].uri),
      console.log(response.assets[0].uri)
    ))
  }
  // const [selectImage, setSelectImage] = useState('')
  const handleSquarePress = () => {
    setAccepted1(!accepted1);
  };

  const handleAcceptDate = () => {
    setButtonText(selectedDate.toDateString());
    setModalVisible1(false);
  };
  const handleSquarePress1 = () => {
    setAccepted(!accepted);
  };

  const handleSunPress = () => {
    setModalVisible(true);
  };
  const handleDatePress = () => {
    setModalVisible1(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  const handleDateModal = () => {
    setModalVisible1(false);
  };
  const handleDateChange = (date) => {
    setSelectedDate(date);
    setModalVisible(false);
  };
  const handleColorChange = (color, colorPath) => {
    setSelectedColor(color);
    setSelectedColorPath(colorPath);
    setModalVisible(false);
    setSelectCont(true)
    setBorderADV('transparent');
  };
  const handleSignInPress = () => {

    navigation.navigate("Login");
  };
  const handleSignUp = () => {

    if (selectCont) {
      // Calcular la edad
      const today = new Date();
      const birthDate = selectedDate;
      const age = today.getFullYear() - birthDate.getFullYear();
      const month = today.getMonth() - birthDate.getMonth();
      if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      // Verificar si la edad es menor de 16 años
      if (age < 16) {
        Alert.alert('Error', i18n.t('welcome.alert'));
        // Cambiar el borde del input a rojo
        setBorderADV1('red');
      } else {
        navigation.navigate("Country");
      }
    } else {
      setSelectedColor('red');
      setSelectedColorPath('red');
      setBorderADV('red');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
          <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
          }}>
            <NavBack />
            <View style={[style.main, {

            }]}>
              <View>
                <Text style={[style.s24, { color: Colors.textdark, textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('welcome.welcome')} {username}!</Text>
              </View>
              <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: '5%' }}>

                <TouchableOpacity style={{ width: 110, height: 110, borderRadius: 99 }} onPress={() => {
                  ImagePicker()
                }}>

                  {selectImage ? (
                    <Image source={{ uri: selectImage }} style={{ width: 110, height: 110, borderRadius: 99 }} />
                  ) : (
                    <Image
                      source={require('../../../img/AddPhoto.png')}
                      style={{ resizeMode: 'contain', width: 110, height: 110, borderRadius: 99 }}
                    />
                  )}
                </TouchableOpacity>
              </View>
              <View>
                <Text style={[style.s16, { color: `${Colors.subt}`, marginTop: 5, textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('welcome.add_a_photo')}</Text>
              </View>

              <View style={{ marginTop: 20 }}>
                <Text style={[style.s16, { color: `${Colors.subt}` }]}>
                  {i18n.t('welcome.date_of_birth')}
                </Text>
                <View style={{
                  position: 'relative',
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 3,
                  height: 50,
                  paddingLeft: 30,
                  borderColor: borderADV1,
                  borderWidth: 2,
                  borderRadius: 12,
                  backgroundColor: "#F9F9F9"
                }}>
                  <TouchableOpacity onPress={handleDatePress}>
                    <Text>{buttonText}</Text>
                  </TouchableOpacity>
                  <Modal animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                    onRequestClose={handleDateModal}>
                    <View style={styles.modalContainer1}>
                      <View style={styles.modalContent1}>
                        <DatePicker
                          date={selectedDate}
                          mode="date"
                          onDateChange={handleDateChange}
                        />
                        <View style={styles.buttonContainer}>
                          <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptDate}>
                            <Text style={styles.buttonText}>{i18n.t('welcome.accept')}</Text>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.closeButton} onPress={handleDateModal}>
                            <Text style={styles.buttonText}>{i18n.t('welcome.close')}</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </Modal>
                </View>
              </View>
              <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 40 }}>
                <Text style={[style.s16, { color: Colors.subt, marginLeft: 5, marginRight: 20 }]}>
                  {i18n.t('welcome.choose')}
                </Text>
                <TouchableOpacity onPress={handleSunPress} style={{ borderColor: borderADV, width: 40, height: 40, borderWidth: 2, justifyContent: 'center', }}>
                  <DynamicSun
                    colorCircle={selectedColor}
                    colorPath={selectedColorPath}
                    sizeWidth={30}
                    sizeHeight={30}
                    style={{ marginLeft: 2 }}
                  />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={handleCloseModal}
                >
                  <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                      <View style={styles.colorOptions}>
                        <TouchableOpacity onPress={() => handleColorChange(Colors.sol1)}>
                          <DynamicSun
                            colorCircle={Colors.sol1}
                            colorPath={Colors.solDefault}
                            sizeWidth={40}
                            sizeHeight={40}
                            style={styles.sun}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleColorChange(Colors.sol2)}>
                          <DynamicSun
                            colorCircle={Colors.sol2}
                            colorPath={Colors.solDefault}
                            sizeWidth={40}
                            sizeHeight={40}
                          />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => handleColorChange(Colors.sol3)}>
                          <DynamicSun
                            colorCircle={Colors.sol3}
                            colorPath={Colors.solDefault}
                            sizeWidth={40}
                            sizeHeight={40}
                            style={styles.sun}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  style={[styles.square, accepted ? styles.accepted : null]}
                  onPress={handleSquarePress1}
                />
                <Text style={styles.message}>
                  {i18n.t('welcome.proceeding')}
                </Text>
              </View>
              <View style={styles.container}>
                <TouchableOpacity
                  style={[styles.square1, accepted1 ? styles.accepted1 : null]}
                  onPress={handleSquarePress}
                />
                <Text style={styles.message}>
                  {i18n.t('welcome.proceeding1')}
                </Text>
              </View>
              <TouchableOpacity onPress={handleSignUp} style={[style.btn, { backgroundColor: Colors.subt, marginTop: '10%' }]}>
                <Text style={[style.s16, { color: '#fff' }]}> {i18n.t('welcome.signup')}</Text>
              </TouchableOpacity>
              <View style={[{ flexDirection: 'row', alignSelf: 'center', marginTop: '5%' }]}>
                <Text style={style.s16}>{i18n.t('welcome.already?')}{' '}</Text>
                <TouchableOpacity onPress={handleSignInPress}>
                  <Text style={[style.s16, { color: '#1667EB' }]}>{i18n.t('welcome.signin')}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </SafeAreaView>
    </ScrollView>)
}

const styles = StyleSheet.create({
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
    marginTop: '96%',
    marginRight: '5%',
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
  acceptButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
