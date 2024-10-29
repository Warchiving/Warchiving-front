import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';

const LoginButton = ({ logo, backgroundColor, textColor, text, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: backgroundColor || '#fff' }]}
      onPress={onPress}
    >
      <Image source={logo} style={styles.logo} />
      <Text style={[styles.text, { color: textColor || '#000' }]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 8,
    borderColor:'#F1F1F1',
    borderWidth:1,
  },
  logo: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 16,
  },
});

export default LoginButton;
