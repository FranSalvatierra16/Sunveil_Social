import React, { useState } from 'react';
import { View, Text, Image, Dimensions, TextInput, TouchableOpacity, SafeAreaView, ImageBackground, StatusBar, KeyboardAvoidingView, ScrollView, Platform, StyleSheet } from 'react-native'
import { Colors } from '../../theme/color'
import style from '../../theme/style'
import { NavBack, Search } from '../../theme/Icons';
import { countries } from '../../components/countries';
import { useAuth } from '../../context/AuthProvider';
import i18n from '../../i18n';
const height = Dimensions.get('screen').height
const width = Dimensions.get('screen').width

export default function Country({ navigation }) {
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const [selectedButtons, setSelectedButtons] = useState([]);
  i18n.locale = 'es';
  const handleSelect = (index) => {
    if (selectedButtons.includes(index)) {
      setSelectedButtons(selectedButtons.filter((item) => item !== index));
    } else {
      if (selectedButtons.length < 1) {
        setSelectedButtons([...selectedButtons, index]);
      }
    }
  };

  const isButtonSelected = (index) => selectedButtons.includes(index);
  const filteredCountries = searchText
    ? countries.filter(country => country.name.toLowerCase().includes(searchText.toLowerCase()))
    : countries;
  const { inputs, setInputs, handleInputsChange } = useAuth();

  return (
    <SafeAreaView style={[style.area, { backgroundColor: "#FFFFFF" }]}>
      <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
        <StatusBar backgroundColor={Platform.OS === 'android' ? Colors.secondary : Colors.bg} barStyle={Platform.OS === 'android' ? 'light-content' : 'dark-content'} />
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
          <NavBack />
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: '95%', height: 2, backgroundColor: '#F8F9FA', marginTop: '5%' }}>
                <View style={{ width: '33%', height: '100%', backgroundColor: '#4CD864' }} />
              </View>
            </View>
            <View style={[style.main, { flexGrow: 1 }]}>

              <View>
                <Text style={[style.s18, { color: `${Colors.subt}`, marginTop: '6%', textAlign: 'center', alignSelf: 'center' }]}>{i18n.t('country.which')}</Text>
              </View>
              <View style={{ marginTop: 20 }}>
                <View style={{ marginHorizontal: 20 }}>
                  <TextInput
                    style={[style.s16, { backgroundColor: 'transparent', borderBottomWidth: 1, borderColor: Colors.subt, paddingVertical: 10 }]}
                    placeholder={i18n.t('country.search')}
                    value={searchText}
                    onChangeText={text => setSearchText(text)}
                  />
                </View>
                <ScrollView contentContainerStyle={styles.countryContainer}>
                  {filteredCountries.map((country, index) => (
                    <TouchableOpacity
                      key={index}
                      style={[styles.style2, isButtonSelected(index) && styles.selectedButton]}
                      onPress={() => handleSelect(index)}
                    >
                      <Image
                        source={country.image}
                        style={{
                          width: 38,
                          height: 25,
                          marginRight: 10
                        }}
                      />
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[style.s16, { backgroundColor: 'transparent', color: 'black' }]}>
                          {country.name}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </ScrollView>
          {selectedButtons.length === 1 && (
            <TouchableOpacity onPress={() => {
              setInputs({ ...inputs, country: filteredCountries[selectedButtons[0]].name });
              console.log({ ...inputs, country: filteredCountries[selectedButtons[0]].name })
              navigation.navigate('Preferences')
            }} style={[style.btn, { backgroundColor: Colors.subt, position: 'absolute', top: '95%', left: '5%', width: '90%' }]}>
              <Text style={[style.s16, { color: '#fff' }]}>{i18n.t('country.continue')}</Text>
            </TouchableOpacity>
          )}

        </KeyboardAvoidingView>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: Colors.bg,
  },
  main: {
    flex: 1,
    paddingHorizontal: 20,
  },
  countryContainer: {
    paddingTop: 10,
  },
  countryItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  selectedCountryItem: {
    backgroundColor: Colors.secondary,
  },
  selectedButton: {
    borderColor: "#1667EB",
    backgroundColor: '#E8F0FD'
  },
  countryText: {
    fontSize: 16,
    color: Colors.subt,
  },
  style2: {
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
    height: 50,
    paddingLeft: 30,
    borderColor: 'transparent',
    borderWidth: 2,
    borderRadius: 12,
  }
});
