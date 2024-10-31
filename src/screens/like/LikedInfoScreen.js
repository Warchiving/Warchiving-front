import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyArchiveScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>나의 아카이브 페이지</Text>
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

export default MyArchiveScreen;
