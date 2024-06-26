import { View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import style from '../theme/style';
export default function DynamicInput({ placeholder, keyboardType, icon, onChangeText, ...props }) {
  const [isFocus, setIsFocus] = useState(false);

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
      {icon && React.cloneElement(icon, {
        // size: 20,
        color: isFocus ? "#2A2A2A" : "#E1E1E1",
        style: { position: 'absolute', top: 15, left: 10 }
      })}
      <TextInput
        style={[style.r14, { flex: 1, height: 50, color: `#2A2A2A`, paddingLeft: 40 }]}
        placeholder={placeholder}
        placeholderTextColor={`#E1E1E1`}
        keyboardType={keyboardType}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChangeText={onChangeText}
        {...props}
      />
    </View>
  );
};

