import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import LoginButton from '../components/LoginButton';

export default function LoginScreen({navigation}) {
    return (
        <View style={styles.container}>
            
            {/* 인사말 */}
            <Text style={styles.greeting}>
                안녕하세요,{"\n"}
                오직 당신만을 위한 <Text style={styles.highlight}>저장소 {"\n"}
                w Archiving</Text> 입니다.
            </Text>

            {/* 이미지 */}
            <Image
                source={require('../../assets/LoginImg.png')} // 이미지 경로를 여기에 맞게 변경하세요
                style={styles.image}
            />

            {/* 구글 로그인 버튼 */}
            <LoginButton
                logo={require('../../assets/icon_google.png')}  // 구글 로고 이미지 경로
                backgroundColor="#fff"
                textColor="#333"
                text="구글 계정으로 로그인"
                style={styles.button}
                onPress={() => navigation.navigate('TabNavigator')} 
            />

            {/* 애플 로그인 버튼 */}
            <LoginButton
                logo={require('../../assets/icon_apple.png')}  // 애플 로고 이미지 경로
                backgroundColor="#000"
                textColor="#fff"
                text="애플 계정으로 로그인"
                style={styles.button}
                onPress={() => navigation.navigate('TabNavigator')} 
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
    },
    greeting: {
        fontSize: 20,
        marginBottom: 30,
        color: '#333',
        marginTop:'35%'
    },
    highlight: {
        color: '#FF6B6B',
        fontWeight: 'bold',
    },
    image:{
        width:380,
        height:380,
        resizeMode:'contain',
        alignSelf:'center',
    },
    button:{
        justifyContent:'center',
        alignItems:'center',  
    }
});
