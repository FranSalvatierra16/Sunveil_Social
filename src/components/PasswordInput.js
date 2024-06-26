import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native'; // Asegúrate de importar Text desde react-native
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { EyeIcon, Lock } from '../theme/Icons'; // Asegúrate de importar los iconos correctamente
import style from '../theme/style';

export default function PasswordInput({ placeholder, keyboardType, onChangeText, ...props }) {
  const [isFocus, setIsFocus] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={{
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 3,
      height: 50,
      paddingLeft: 30,
      borderColor: isFocus ? "#2A2A2A" : "#E1E1E1",
      borderWidth: 2,
      borderRadius: 12,
      backgroundColor: isFocus ? "transparent" : "#F9F9F9"
    }}>
      <Lock color={`#2A2A2A`} style={{ position: 'absolute', top: 15, left: 10, width: 20, height: 20 }} />
      <TextInput
        style={[style.r14, { flex: 1, height: 50, color: `#2A2A2A`, paddingLeft: 40 }]}
        placeholder={placeholder} // Utiliza el placeholder pasado como prop
        placeholderTextColor={`#E1E1E1`}
        keyboardType={keyboardType} // Utiliza el tipo de teclado pasado como prop
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        secureTextEntry={!showPassword} // Oculta o muestra la contraseña según showPassword
        onChangeText={onChangeText}
        {...props}
      />
      <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
        <EyeIcon color={`${Colors.icon}`} paddingRight={10} style={{ width: 20, height: 20 }} />
      </TouchableOpacity>
    </View>

  );
};
