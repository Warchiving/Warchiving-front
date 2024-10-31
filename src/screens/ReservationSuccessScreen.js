import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function ReservationSuccessScreen({ navigation }) {
  const [loading, setLoading] = useState(true); // 로딩 상태

  useEffect(() => {
    // 2초 후에 로딩이 끝나고 화면이 나타나도록 설정
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  // 로딩 상태일 때 로딩 아이콘 표시
  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#ff6b6b" />
        <Text style={styles.loadingText}>예약을 완료하는 중입니다...</Text>
      </View>
    );
  }

  // 로딩이 완료되면 예약 성공 화면 표시
  return (
    <View style={styles.container}>
      {/* 설명 */}
      <Text style={styles.titleText}>예약이 완료되었습니다!</Text>

      {/* 이미지 */}
      <View style={{ marginTop: 50 }}>
        <Image source={require('../../assets/HallLoading/confetti2.gif')} style={styles.VectorImg} />
        <Image source={require('../../assets/HallLoading/W.png')} style={styles.VectorImg2} />
      </View>

      {/* 하단 버튼 */}
      <View style={{ alignItems: 'center', marginTop: 90 }}>
        <CustomButton title="홈으로 돌아가기" onPress={() => navigation.navigate('Main')} />
      </View>

      <View style={{ alignItems: 'center', marginTop: 10 }}>
        <CustomButton title="나의 예약 내역 보러가기" onPress={() => navigation.navigate('HallList')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 18,
  },
  VectorImg: {
    width: 350,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  VectorImg2: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: -80,
  },
  titleText: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 25,
    color: '#333',
    fontWeight: 'bold',
  },
});

