import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HallPriceScreen() {
  return (
    <View style={styles.container}>
      <Text>This is the HallPriceScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
