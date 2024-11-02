import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const SelectedCard = ({ title, price, onHeartPress, onCartPress, isFavorite, imageSource }) => {
  return (
    <View style={styles.card}>
      <View style={styles.imageContainer}>
        <Image source={imageSource} style={styles.image} />
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={onHeartPress}>
            <Image
              source={require('../../assets/img_fill_heart.png')}
              style={[styles.icon, isFavorite && styles.favoriteIcon]}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}원</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height : 168, 
    width: 122,
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    marginLeft: 4,
    marginTop : 5,
  },
  imagePlaceholder: {
    width: '100%',
    height: 90,
    backgroundColor: '#ccc', // 회색 처리
    borderRadius: 3,
    marginBottom: 3,
    position: 'relative', // 아이콘을 위치시킬 기준이 됩니다.
  },
  iconContainer: {
    position: 'absolute',
    top: 8,
    right: 8,
    flexDirection: 'row',
  },
  icon: {
    width: 24,
    height: 24,
    marginLeft: 3,
  },
  imageContainer: {
    width: '100%',
    height: 110,
    borderRadius: 4,
    overflow: 'hidden',
    position: 'relative',
    backgroundColor: '#ccc', // 기본 회색 배경
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  favoriteIcon: {
    
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop : 4 , 
  },
  price: {
    fontSize: 14,
    color: '#555',
    marginVertical: 1,
    marginTop : 3, 
  },
});

export default SelectedCard;
