import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StatusBar, Platform, KeyboardAvoidingView, StyleSheet, Dimensions, FlatList } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import { useAuth } from '../../context/AuthProvider';
import { TextInput } from 'react-native';
import i18n from '../../i18n';
import { ImageBackground } from 'react-native';
import { useDarkMode } from '../../components/darkMode';
const screenWidth = Dimensions.get('window').width;
const SearchPage = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { user, logout } = useAuth();
  const { dark, toggleDarkMode } = useDarkMode();
  const darkPress = () => {
    setDark(dark === -1 ? 0 : -1);
  };
  const category = [
    {
      nombre: i18n.t('titles.AIArt'),
      imagen: require('../../../img/aiArt.jpg'),
    },
    {
      nombre: i18n.t('titles.ApparelTrends'),
      imagen: require('../../../img/appareal.jpg'),
    },
    {
      nombre: i18n.t('titles.BeautyProducts'),
      imagen: require('../../../img/beautyProducts.jpg'),
    },
    {
      nombre: i18n.t('titles.Books&Writing'),
      imagen: require('../../../img/readBooks.jpg'),
    }, {
      nombre: i18n.t('titles.Comedy'),
      imagen: require('../../../img/comedy.jpg'),
    },
    {
      nombre: i18n.t('titles.Cars&Trucks'),
      imagen: require('../../../img/cars.jpg'),
    },
    {
      nombre: i18n.t('titles.DIY&Crafts'),
      imagen: require('../../../img/crafts.jpg'),
    },
    {
      nombre: i18n.t('titles.Economy'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.Educational'),
      imagen: require('../../../img/aiArt.jpg'),
    },
    {
      nombre: i18n.t('titles.Entrepreneurship'),
      imagen: require('../../../img/appareal.jpg'),
    },
    {
      nombre: i18n.t('titles.Fashion'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.Food'),
      imagen: require('../../../img/politic.png'),
    }, {
      nombre: i18n.t('titles.Gadgets&Electronics'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.Gifs'),
      imagen: require('../../../img/Education.png'),
    },
    {
      nombre: i18n.t('titles.Health&Wellness'),
      imagen: require('../../../img/politic.png'),
    },
    {
      nombre: i18n.t('titles.History'),
      imagen: require('../../../img/politic.png'),
    }

  ]
  const renderCategoryItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <ImageBackground borderRadius={10} source={item.imagen} style={styles.image} >
        <Text style={[style.s16, { color: 'white' }]}>{item.nombre}</Text>
      </ImageBackground>
    </View>
  );
  return (
    <SafeAreaView style={[style.area, { backgroundColor: dark ? '#000000' : '#ffffff' }]}>
      <View style={{ flex: 1, backgroundColor: dark ? '#000000' : '#ffffff' }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1 }}>
            <View style={{ width: '100%', flex: 1 }}>
              <View style={{ width: '100%', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 10 }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ height: 25, backgroundColor: 'transparent', marginLeft: 10, position: 'relative', flexDirection: "row", alignItems: 'center', justifyContent: 'center' }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: '#dddddd', borderRadius: 10 }}>
                    <BackIcon size={24} color="#000000" />
                  </View>
                  <Text style={[style.m18, { color: '#000000', marginLeft: 10 }]}>
                    Search
                  </Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity style={{ flexDirection: "row", alignItems: 'center', backgroundColor: '#f2f2f2', borderRadius: 10, marginLeft: '10%', marginTop: 10, padding: 5, width: '80%', height: '8%' }}>
                <Image source={require('../../../img/search1.png')} style={{ width: 20, height: 20, marginLeft: 10 }} />
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
              </TouchableOpacity>

              <View style={{ width: '100%', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 5 }}>
                <Text style={[style.s18]}>Topics</Text>
                <Text style={[style.s14]}>See all</Text>
              </View>

              <FlatList
                data={category.slice(0, 12)} // Muestra solo las primeras 4 imágenes
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}

                renderItem={({ item }) => (
                  <TouchableOpacity style={styles.imageContainer}>
                    <Image
                      style={{ width: 170, height: 250, borderRadius: 20 }} // Ajusta el tamaño según tus necesidades
                      source={item.imagen} // Usa la imagen desde tu arreglo
                    />
                    <Text style={[style.b14]}>{item.nombre}</Text>

                  </TouchableOpacity>
                )}
              />
            </View>
            <Nav navActive="profile" />
          </View>
        </KeyboardAvoidingView>
      </View>

    </SafeAreaView >
  )
}
const styles = StyleSheet.create({
  container: {
    paddingVertical: 5,
    paddingHorizontal: 20,
    height: '100%'
  },
  itemContainer: {
    flex: 1,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: (screenWidth - 60) / 4, // 40 es la suma de los márgenes y espacios entre las imágenes
    height: (screenWidth - 60) / 4,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  imageContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    margin: 10,
  },
});
export default SearchPage