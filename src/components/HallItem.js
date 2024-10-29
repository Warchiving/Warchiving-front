// components/HallItem.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from './colors';

const HallItem = ({ hall, navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('HallDetail', { hall })} style={styles.itemContainer}>
    <Image source={hall.image} style={styles.hallImage} />
    <View style={styles.itemInfo}>
      <View style={styles.tagContainer}>
        <View style={styles.halltag}>
          <Text style={styles.halltagText}>{hall.halltag1}</Text>
        </View>
        <View style={styles.halltag}>
          <Text style={styles.halltagText}>{hall.halltag2}</Text>
        </View>
      </View>
      <Text style={styles.title}>{hall.name}</Text>
      <Text style={styles.subTitle}>{hall.location}</Text>
      <View style={styles.priceContainer}>
        <Text style={styles.priceBold}>
          {hall.price.split('원')[0]}원
        </Text>
        <Text style={styles.priceSmall}>
          {hall.price.split('원')[1]}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  hallImage: {
    width: 110,
    height: 130,
    borderRadius: 10,
    marginRight: 20,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 130,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  halltag: {
    borderWidth: 1,
    borderColor: colors.Pink700,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 7,
    marginBottom: 7,
  },
  halltagText: {
    fontSize: 10,
    color: colors.Grey600,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: colors.Black,
  },
  subTitle: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 40,
    color: '#33363F',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceBold: {
    fontSize: 18,
    color: colors.Black,
    fontWeight: 'bold',
  },
  priceSmall: {
    fontSize: 12,
    color: colors.Black,
    marginLeft: 4,
  },
});

export default HallItem;
