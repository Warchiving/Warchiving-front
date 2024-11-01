import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import colors from './colors';
import heartIcon from '../../assets/halllistheart.png';
import fullHeartIcon from '../../assets/fullheart.png';

const HallItem = ({ hall, navigation }) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <TouchableOpacity onPress={() => navigation.navigate('HallDetail', { hall })} style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={hall.image} style={styles.hallImage} />
        <View style={styles.iconOverlay}>
          <TouchableOpacity onPress={toggleLike} style={styles.iconButton}>
            <Image source={isLiked ? fullHeartIcon : heartIcon} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
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
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 15,
  },
  imageContainer: {
    position: 'relative',
  },
  hallImage: {
    width: 110,
    height: 130,
    borderRadius: 10,
  },
  iconOverlay: {
    position: 'absolute',
    top: 5,
    right: 5,
    flexDirection: 'row',
  },
  iconButton: {
    marginTop: 3,
    marginLeft: 3,
    marginRight: 3,
  },
  icon: {
    width: 25,
    height: 25,
  },
  itemInfo: {
    flex: 1,
    justifyContent: 'flex-start',
    height: 130,
    marginLeft: 20,
  },
  tagContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  halltag: {
    borderWidth: 1,
    borderColor: colors.Pink700,
    borderRadius: 15,
    padding:3,
    paddingHorizontal:8,
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
    color: '#33363F',
    marginBottom: 40,
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
