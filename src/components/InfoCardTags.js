// InfoCard.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from './colors';

const InfoCard = ({ title, subtitle, imageSource, infoText }) => (
  <View style={styles.card}>
    <Text style={styles.cardTitle}>{title}</Text>
    <Text style={styles.cardSubtitle}>#{subtitle}</Text>
    <Image source={imageSource} style={styles.image} />
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 210,
    height:230,
    padding: 16,
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent:'center',
    marginLeft:20,
  },
  cardTitle: {
    fontSize: 13,
    color: colors.Black,
    textAlign: 'center',
    fontWeight:'bold'
  },
  cardSubtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 3,
    color: '#FF6E6E',
    textAlign: 'center',
  },
  image: {
    width: 120,
    height: 120,
    marginVertical: 12,
  },
  infoText: {
    fontSize: 18,
    color: '#FF6E6E',
    fontWeight: 'bold',
  },
});

export default InfoCard;
