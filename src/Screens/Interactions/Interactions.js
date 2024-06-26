import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView, StyleSheet, Dimensions, StatusBar, Platform, KeyboardAvoidingView, FlatList, Switch } from 'react-native';
import style, { height, width } from '../../theme/style';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { BackIcon, BellImportantIcon, DotsThreeVertical, FileTextIcon, HelpIcon, LanguageIcon, LogoutIcon, MoonIcon, PaperIcon, Person, PrivacyIcon, QrCodeIcon, RightIcon, ShieldIcon, SupportAgentIcon, } from '../../theme/Icons';
import { useNavigation } from '@react-navigation/native';
import { Nav } from '../../components/nav';
import DynamicSun from '../../components/DynamicSun';
import { useAuth } from '../../context/AuthProvider';

const Interactions = () => {
  const navigation = useNavigation();
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const { user, logout } = useAuth();
  const [newNotifications, setNewNotifications] = useState([
    {
      _id: 1,
      title: "Replied on your comment",
      user: {
        _id: 123,
        name: "John Doe",
        avatar: require('../../../img/cf18c986de37079cb096769a235ed385.png'),
      },
      type: "comment",
      read: false,
      date: "2021-08-20T07:00:00Z",
      comment: {
        _id: 222,
        text: "I agree with u! that’s such a horrible way, and that doesn’t make sense🤬",
      }
    },
    {

    }
  ]);
  const [todayNotifications, setTodayNotifications] = useState([]);
  return (
    <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <View style={{ width: '100%', flex: 1, }}>
            <View style={{ width: '100%', flex: 1, }}>
              <View style={{ width: '100%', flexDirection: "row", alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: width * 0.02, }}>
                <TouchableOpacity onPress={() => { }} style={{
                  height: 25, backgroundColor: 'transparent', position: 'relative',
                  flexDirection: "row", alignItems: 'center', justifyContent: 'center',
                }}>
                  <Text style={[style.m18, { color: '#000000', marginLeft: 10, fontSize: width * 0.05 }]}>
                    Notification
                  </Text>
                </TouchableOpacity>
                <View style={{
                  flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start',
                  backgroundColor: "#F8F9FA",
                  borderRadius: 504,
                  padding: 10,
                }}>
                  <DotsThreeVertical size={17} color="#000000" />
                </View>
              </View>
              <View style={{
                width: width,
                paddingHorizontal: width * 0.02,
                flexDirection: "row",
                alignItems: 'center',
                justifyContent: 'flex-start',
              }}>
                <Text style={[style.r14, { color: '#000000', marginLeft: 10, }]}>
                  You have <Text style={[style.s14, { color: '#FF8A00' }]}>4 new</Text> notifications
                </Text>
              </View>
              <ScrollView style={{
                width: '100%', flex: 1, marginTop: height * 0.05,
              }}>
                <View style={{ width: width, paddingHorizontal: width * 0.02, flexDirection: "row", alignItems: 'center', justifyContent: 'flex-start', }}>
                  <Text
                    style={[style.m18, { color: '#000000', marginLeft: 10, fontSize: width * 0.05 }]}
                  >New</Text>
                </View>
                <View

                >

                </View>
              </ScrollView>
            </View>
            <Nav navActive="profile" />
          </View>
        </KeyboardAvoidingView>
      </View >
    </SafeAreaView >
  )
}

export default Interactions