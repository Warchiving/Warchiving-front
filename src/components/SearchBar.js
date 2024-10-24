import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SearchBar = ({ placeholder, onSearch }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder || "업체를 검색해보세요"}
        placeholderTextColor="#A1A1A1"
      />
      <TouchableOpacity onPress={onSearch}>
        <Image
          source={require('../../assets/search-icon.png')}  // 돋보기 아이콘
          style={styles.icon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EDEDED',
    borderRadius: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: '#333',
  },
});

export default SearchBar;
