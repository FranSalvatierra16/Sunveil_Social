import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Platform, KeyboardAvoidingView } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import { useAuth } from '../../context/AuthProvider';
import { TextInput } from 'react-native';
import i18n from '../../i18n';
import { ImageBackground } from 'react-native';

const SearchPage = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { user, logout } = useAuth();
  const [dark, setDark] = useState(-1);
  const darkPress = () => {
    setDark(dark === -1 ? 0 : -1);
  };
  const category = [
    {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.ApparelTrends'),
      imagen: require('../../../img/Education.png'),
    },
    {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/politic.png'),
    }, {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.ApparelTrends'),
      imagen: require('../../../img/Education.png'),
    },
    {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/politic.png'),
    }

  ]
  return (
    <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1, }}>
            <View style={{ width: '100%', flex: 1, }}>
              <View style={{ width: '100%', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{
                  height: 25, backgroundColor: 'transparent', marginLeft: 10, position: 'relative',
                  flexDirection: "row", alignItems: 'center', justifyContent: 'center',
                }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: '#dddddd',
                      borderRadius: 50,
                      // padding:v 5,
                    }}
                  >
                    <BackIcon size={24} color="#000000" />
                  </View>
                  <Text style={[style.m18, { color: '#000000', marginLeft: 10 }]}>
                    Search
                  </Text>
                </TouchableOpacity>
              </View>

              <View style={{
                flexDirection: "row", alignItems: 'center',
                backgroundColor: '#f2f2f2', borderRadius: 10, marginLeft: '10%', marginTop: 10, padding: 5, width: '80%', marginTop:'5%'
              }}>
                <TextInput
                  style={{
                    borderWidth: 0,
                    backgroundColor: 'transparent',
                    width: '90%',
                    paddingHorizontal: 10,
                    color: '#000000',
                  }}
                  placeholder="What dou you want to watch?"
                  placeholderTextColor="#00000090"
                />
                <Image source={require('../../../img/search1.png')} style={{ width: 20, height: 20, }} />
              </View>
              {/* <View style={{ height: '5%', marginTop: '5%', width: '96%', marginLeft: '2%' }}>
                <ScrollView horizontal={true} >
                  {category.map((item, index) => (
                    <TouchableOpacity key={index} style={{ marginRight: 10, height: 30, backgroundColor: '#FF9900', borderRadius: 12, padding: 5 }}>

                      <Text style={{ color: 'white' }}>{item.nombre}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View> */}
              <ScrollView style={{
                width: '100%', flex: 1, marginTop: height * 0.04,
              }}>


                <View style={{ flexDirection: 'row', flexWrap: 'wrap', }}>
                  <View style={{ width: '88%', padding: '2%' }}>
                    {category.map((category, index) => {
                      if (index !== 1) return null;

                      return (
                        <TouchableOpacity key={user.id} style={{ marginBottom: '2%', marginLeft: '6%', }}>
                          <View style={{ width: '80%', height: 250, overflow: 'hidden', marginLeft: '10%' }}>

                            <ImageBackground source={category.imagen} blurType="light" blurAmount={10} reducedTransparencyFallbackColor="white" borderRadius={8} style={{ width: '100%', height: 250, resizeMode: 'cover', borderRadius: 8, justifyContent: 'center', alignItems: 'center', }} >
                              {/* <Text style={[style.r10, { position: 'absolute', bottom: 5, left: 5, color: '#EFEFF1', }]}>{user.text}</Text> */}


                              <Text style={[style.b18, { color: '#ffffff', paddingLeft: 2 }]}>{category.nombre}</Text>

                            </ImageBackground>

                          </View>

                          <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '5%',
                            width: 100,
                            alignSelf: 'center',

                          }}>
                            <View style={{ flex: 1, height: 2, backgroundColor: dark ? '#ffffff' : '#000000', width: '100%' }}></View>

                          </View>
                        </TouchableOpacity>

                      );
                    })}
                  </View>
                  <View style={{ width: '48%', padding: '2%' }}>
                    {category.map((category, index) => {
                      if (index % 2 !== 0) return null;

                      return (
                        <TouchableOpacity key={user.id} style={{ marginBottom: '2%', paddingLeft: 5, }}>
                          <View style={{ width: '50%', flexDirection: 'row', }}>



                          </View>
                          <ImageBackground source={category.imagen} borderRadius={8} style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} >
                            <Text style={[style.b18, { color: '#ffffff', paddingLeft: 2 }]}>{category.nombre}</Text>
                          </ImageBackground>
                          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>


                          </View>
                          <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '5%',
                            width: 100,
                            alignSelf: 'center',

                          }}>
                            <View style={{ flex: 1, height: 2, backgroundColor: dark ? '#ffffff' : '#000000', width: '100%' }}></View>

                          </View>
                        </TouchableOpacity>

                      );
                    })}
                  </View>
                  <View style={{ width: '48%', padding: '2%' }}>
                    {category.map((category, index) => {
                      if (index % 2 == 0) return null;

                      return (
                        <TouchableOpacity key={user.id} style={{ marginBottom: '2%', paddingLeft: 5, }}>
                          <View style={{ width: '50%', flexDirection: 'row', }}>



                          </View>




                          <ImageBackground source={category.imagen} borderRadius={8} style={{ width: '100%', height: 200, resizeMode: 'cover', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }} >

                            <Text style={[style.b18, { color: '#ffffff', paddingLeft: 2 }]}>{category.nombre}</Text>


                          </ImageBackground>

                          <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: '2%' }}>


                          </View>
                          <View style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            marginTop: '5%',
                            width: 100,
                            alignSelf: 'center',

                          }}>
                            <View style={{ flex: 1, height: 2, backgroundColor: dark ? '#ffffff' : '#000000', width: '100%' }}></View>

                          </View>
                        </TouchableOpacity>

                      );
                    })}
                  </View>
                </View>

              </ScrollView>
            </View>
            <Nav navActive="profile" />
          </View>
        </KeyboardAvoidingView >
      </View >
    </SafeAreaView >
  )
}

export default SearchPage