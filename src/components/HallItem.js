// components/HallItem.js
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const HallItem = ({ hall }) => (
  <View style={styles.itemContainer}>
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
  </View>
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
    borderColor: '#f28b82',
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 2,
    marginRight: 7,
    marginBottom: 7,
  },
  halltagText: {
    fontSize: 10,
    color: '#555',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 14,
    color: 'grey',
    marginBottom: 40,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  priceBold: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  priceSmall: {
    fontSize: 12,
    color: 'black',
    marginLeft: 4,
  },
});

export default HallItem;
