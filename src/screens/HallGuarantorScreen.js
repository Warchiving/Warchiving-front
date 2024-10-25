import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import ProgressBar from '../components/ProgressBar';  // 버튼 컴포넌트 불러오기
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기
import CustomButtonSkip from '../components/CustomButtonSkip';  // 버튼 컴포넌트 불러오기

export default function HallGuarantorScreen({navigation}) {

    // picker 값 변경
    const [selectedValue, setSelectedValue] = useState(240); // Default value

    return (
        <View style={styles.container}>

            {/* progress bar */}
            <View style={{ marginBottom: 20, }}>
                <ProgressBar step={3} totalSteps={3} />
            </View>

            {/* 보증인원 안내 텍스트 */}
            <Text style={styles.titleText}>생각해둔 <Text style={styles.boldText}>보증인원</Text>이 있으신가요?</Text>

            {/* 보증인원 picker */}
            <View style={styles.pickerContainer}>
                <Text style={styles.labelText}>최소</Text>
                <Picker
                    selectedValue={selectedValue}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedValue(itemValue)}
                >
                    {/* Render numbers from 237 to 243 */}
                    {[...Array(100)].map((_, index) => {
                        const value = 200 + index;
                        return <Picker.Item key={value} label={`${value}`} value={value} />;
                    })}
                </Picker>
                <Text style={styles.labelText}>명</Text>
            </View>

            {/* 안내 이미지 */}
            <Image source={require('../../assets/HallGuarantorImg.png')} style={styles.HallGuarantorImg} />

            {/* 하단 버튼 */}
            <View style={{ alignItems: 'center', marginTop: 60, }}>
                <CustomButton title="다음" onPress={() => navigation.navigate('HallLoading')} />
                <CustomButtonSkip title="건너뛰기" onPress={() => navigation.navigate('HallLoading')} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: 'white',
    },
    titleText: {
        fontSize: 18,
        marginTop: 15,
        marginBottom: 25,
        color: '#333',
    },
    boldText: {
        fontWeight: 'bold',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    labelText: {
        fontSize: 18,
        color: '#333',
        marginTop: 15,
    },
    picker: {
        height: 200,
        width: 100,
    },
    HallGuarantorImg: {
        width: 350,  // Set the desired width
        height: 200,
        resizeMode: 'contain',  // Maintain aspect ratio
        alignSelf: 'center',  // If you want to center the image
        marginTop: '10%',
    }
});
