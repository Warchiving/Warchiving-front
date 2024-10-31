import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LikedProductsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>찜한 상품 페이지</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});

export default LikedProductsScreen;
