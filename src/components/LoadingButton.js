import React, { useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import colors from './colors';

const LoadingButton = ({ title, onPress }) => {
  const fillAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // 일정 구간마다 멈추는 애니메이션
    Animated.sequence([
      Animated.timing(fillAnim, { toValue: 0.05, duration: 400, useNativeDriver: false }),
      Animated.delay(200),
      Animated.timing(fillAnim, { toValue: 0.1, duration: 400, useNativeDriver: false }),
      Animated.delay(200),
      Animated.timing(fillAnim, { toValue: 0.2, duration: 400, useNativeDriver: false }),
      Animated.delay(200),
      Animated.timing(fillAnim, { toValue: 0.3, duration: 600, useNativeDriver: false }),
      Animated.delay(200),
      Animated.timing(fillAnim, { toValue: 0.5, duration: 600, useNativeDriver: false }),
      Animated.delay(300),
      Animated.timing(fillAnim, { toValue: 0.7, duration: 600, useNativeDriver: false }),
      Animated.delay(400),
      Animated.timing(fillAnim, { toValue: 0.8, duration: 600, useNativeDriver: false }),
      Animated.delay(400),
      Animated.timing(fillAnim, { toValue: 1, duration: 500, useNativeDriver: false }),
    ]).start(() => {
      // 전체가 채워졌을 때 색상 변경 애니메이션
      Animated.timing(colorAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false,
      }).start();
    });
  }, []);

  // 너비 애니메이션
  const animatedWidth = fillAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  // 색상 애니메이션
  const backgroundColor = colorAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [colors.Black, '#FD7372'], // 검정색에서 빨간색 계열로 변경
  });

  return (
    <TouchableOpacity activeOpacity={0.7} style={styles.buttonContainer} onPress={onPress}>
      <View style={styles.button}>
        <Animated.View style={[styles.animatedBackground, { width: animatedWidth, backgroundColor }]} />
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    width:350,
    height: 45, // 버튼의 고정된 높이
    borderRadius: 8,
    overflow: 'hidden', // 버튼 내부가 넘치지 않도록 설정
    backgroundColor: '#808080', // 기본 배경색 (회색)
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedBackground: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    zIndex: 1, // 텍스트가 애니메이션 위에 보이도록 설정
  },
});

export default LoadingButton;
