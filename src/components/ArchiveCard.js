import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ArchiveCard = ({ title, date, imageSrc, onOptionsPress }) => {
  return (
    <View style = {styles.container}>
    <TouchableOpacity style={styles.card} onPress={onOptionsPress}>
      <View style={styles.imageContainer}>
        <Image source={imageSrc} style={styles.image} />
        <TouchableOpacity onPress={onOptionsPress} style={styles.optionsButton}>
          <Text style={styles.optionsIcon}>⋮</Text> 
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container : {
    flex : 1,
  },
  card: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    padding: 8,
  },
  imageContainer: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  optionsButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    padding: 4,
  },
  optionsIcon: {
    fontSize: 20,
    color: '#555',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  date: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },
});

export default ArchiveCard;
