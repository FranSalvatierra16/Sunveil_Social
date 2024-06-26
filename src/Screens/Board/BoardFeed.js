import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, ImageBackground } from 'react-native'; // Agrega FlatList, Image y TouchableOpacity
import { Colors } from '../../theme/color';
import style from '../../theme/style';
import { Search } from '../../theme/Icons';
import UserProfile from '../../components/Pub';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { StoryUser } from '../../components/Story';
import PubBoard from '../../components/PubBoard';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

export default function Board({ navigation }) {
    const [nameColor, setNameColor] = useState('black');
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const [scrollScale, setScrollScale] = useState(1);
    const [buttonColors, setButtonColors] = useState([]);
    const userP = {
        id: 1,
        name: 'anita',
        username: 'username',
        image: require('../../../img/person/person1.jpg'),

        colorSol: Colors.sol1,
        text: 'Aca en la playa disfrutando del sol.'
    }
    const users = [

        {
            id: 1,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Aca en la playa disfrutando del sol.'
        },
        {
            id: 2,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Disfrutando de una tarde tranquila en la costa.'
        },
        {
            id: 3,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Caminando por la orilla del mar.'
        },
        {
            id: 4,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Jugando con las olas en la playa.'
        },
        {
            id: 5,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Tomando fotos del atardecer en la costa.'
        },
        {
            id: 6,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Haciendo castillos de arena en la playa.'
        },
        {
            id: 7,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Bailando con amigos en la orilla del mar.'
        },
        {
            id: 8,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Haciendo un picnic en la playa.'
        },
        {
            id: 9,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Surfeando en las olas del mar.'
        },
        {
            id: 10,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Descansando bajo una sombrilla en la playa.'
        },
        {
            id: 11,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Haciendo un paseo en bote por la costa.'
        },
        {
            id: 12,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Observando cangrejos en la playa.'
        },
        {
            id: 13,
            name: 'anita',
            username: 'username',
            image: require('../../../img/profile1.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Haciendo yoga al amanecer en la playa.'
        },
        {
            id: 14,
            name: 'Jam2',
            username: 'username',
            image: require('../../../img/profile2.png'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Recogiendo conchas marinas en la orilla.'
        },
        {
            id: 15,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Haciendo un picnic familiar en la playa.'
        },
        {
            id: 16,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol3,
            text: 'Corriendo por la arena en la playa.'
        },
        {
            id: 17,
            name: 'Usuario 1',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol2,
            text: 'Haciendo castillos de arena en la playa.'
        },
        {
            id: 18,
            name: 'Usuario 2',
            username: 'Juan',
            image: require('../../../img/person/person1.jpg'),
            imagenH: require('../../../img/pub2.png'),
            colorSol: Colors.sol1,
            text: 'Disfrutando de un día soleado en la costa.'
        }


    ];


    const handleScroll = (event) => {
        const { y } = event.nativeEvent.contentOffset;
        const opacity = y <= 0 ? 1 : 1 - (y / 100);
        setScrollOpacity(opacity);

        // Calcula el factor de escala en función del desplazamiento
        const scale = Math.max(1 - y / 100, 0.5); // Puedes ajustar el valor 200 según tus necesidades
        setScrollScale(scale);
    };


    return (
        <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
            <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
                <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
                <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>

                    <View style={{ width: '100%', flex: 1, }}>


                        <ScrollView style={{ width: '100%', marginTop: '5%', marginBottom: '1%' }} stickyHeaderIndices={[1]}>
                            <View style={{ width: '70%', marginLeft: '15%', height: 50, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => navigation.navigate("FriendsFeedDark")}>
                                    <Image source={require('../../../img/night.png')} style={{ width: 30, height: 30 }} />
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <Image source={userP.image} style={{ width: 52, height: 52 }} />
                                </TouchableOpacity>
                                <DynamicSun sizeHeight='30' sizeWidth='30' />
                            </View>


                            <View style={{ backgroundColor: 'transparent' }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '40%', marginLeft: '5%' }}>
                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, backgroundColor: 'black', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.s14, { color: '#ffffff' }]}>Friends</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ width: 84, height: 40, borderRadius: 9000, borderColor: 'transparent', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={[style.s14]}>For you</Text>
                                    </TouchableOpacity>
                                    <View style={{ justifyContent: 'flex-end', marginLeft: '90%' }}>
                                        <TouchableOpacity style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'transparent', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image source={require('../../../img/search1.png')} style={{ width: 16, height: 16 }} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>


                            <View style={{ width: '95%', marginTop: '5%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>





                            </View>

                            {users.map((user) => (
                                <View key={user.id}>
                                    <PubBoard
                                        profileImage={user.image}
                                        name={user.name}
                                        username={user.username}
                                        colorSol={user.colorSol}
                                        time="6hrs ago"
                                        imagenH={user.imagenH}
                                        textUser={user.text}
                                        colorPrincipal='white'
                                        colorSecundario='black'
                                    />
                                </View>
                            ))}

                        </ScrollView>


                        <Nav navActive="board" />
                    </View>


                </KeyboardAvoidingView>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    userContainer: {
        margin: 3,
        alignItems: 'center',
    },
    imageContainer: {
        width: 80,
        height: 80,
        borderRadius: 100,
        overflow: 'hidden', // Para recortar la imagen correctamente
        borderWidth: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // Ajusta la imagen para cubrir todo el espacio
    },

});
