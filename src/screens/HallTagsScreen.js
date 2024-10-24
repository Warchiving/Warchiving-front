import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native';
import CustomButton from '../components/CustomButton';  // 버튼 컴포넌트 불러오기
import CustomButtonSkip from '../components/CustomButtonSkip';  // 버튼 컴포넌트 불러오기
import ProgressBar from '../components/ProgressBar';  // 버튼 컴포넌트 불러오기
import colors from '../components/colors';

const screenWidth = Dimensions.get('window').width;  // Screen width for calculating item width

const TAGS = [
    { id: '1', label: '예쁜 홀', image: require('../../assets/icon/icon1.png') },
    { id: '2', label: '넓은 홀', image: require('../../assets/icon/icon2.png') },
    { id: '3', label: '식 간격', image: require('../../assets/icon/icon3.png') },
    { id: '4', label: '대중교통 편의', image: require('../../assets/icon/icon4.png') },
    { id: '5', label: '합리적 가격', image: require('../../assets/icon/icon5.png') },
    { id: '6', label: '생활 장식', image: require('../../assets/icon/icon6.png') },
    { id: '7', label: '대형 스크린', image: require('../../assets/icon/icon7.png') },
    { id: '8', label: '고객 응대', image: require('../../assets/icon/icon8.png') },
    { id: '9', label: '단독 홀', image: require('../../assets/icon/icon9.png') },
    { id: '10', label: '주차장', image: require('../../assets/icon/icon10.png') },
    { id: '11', label: '스몰 웨딩', image: require('../../assets/icon/icon11.png') },
    { id: '12', label: '신부 대기', image: require('../../assets/icon/icon12.png') },
    { id: '13', label: '홀 제공 음식', image: require('../../assets/icon/icon13.png'), fullWidth: true },
];

export default function HallTagsScreen({navigation}) {
    const [selectedTags, setSelectedTags] = useState([]);  // Track multiple selected tags

    const handleTagPress = (id) => {
        // Add or remove selected tag
        setSelectedTags((prevSelected) => {
            if (prevSelected.includes(id)) {
                return prevSelected.filter(tagId => tagId !== id);  // Remove if already selected
            } else {
                return [...prevSelected, id];  // Add if not selected
            }
        });
    };

    const renderItem = ({ item }) => {
        const isSelected = selectedTags.includes(item.id);

        return (
            <TouchableOpacity
                style={[
                    styles.tagButton,
                    item.id === '13' ? styles.fullWidthButton : {},
                    isSelected ? styles.selectedButton : {},  // Apply selected styles if selected
                ]}
                onPress={() => handleTagPress(item.id)}  // Toggle selection on press
            >
                <Image
                    source={item.image}
                    style={[
                        styles.tagImage,
                        isSelected ? { tintColor: colors.Pink900 } : {},  // Change image color when selected
                    ]}
                />
                <Text style={[styles.tagText, isSelected ? { color: '#666666' } : {}]}>{item.label}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={styles.container}>

            {/* progress bar */}
            <View style={{ marginBottom:20, }}>
                <ProgressBar step={1} totalSteps={3} />
            </View>

            {/* 관심태그 Text 안내 */}
            <Text style={styles.title}>관심 태그를 선택해주세요.</Text>
            <Text style={styles.subtitle}>웨딩 홀 추천에 사용돼요 (중복 선택 가능)</Text>

            {/* 태그 list */}
            <FlatList
                data={TAGS}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={3}
                contentContainerStyle={styles.grid}
                showsVerticalScrollIndicator={false}
            />

            {/* 하단 버튼 */}
            <View style={{ alignItems: 'center' }}>
                <CustomButton title="다음" onPress={() => navigation.navigate('HallPrice')} />
                <CustomButtonSkip title="건너뛰기" onPress={() => navigation.navigate('HallPrice')} />
            </View>

            <View style={{ marginBottom: 10 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 18,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginVertical: 7,
        marginLeft: 7,
    },
    subtitle: {
        fontSize: 14,
        marginBottom: 20,
        color: '#888',
        marginLeft: 7,
    },
    grid: {
        justifyContent: 'center',
    },
    tagButton: {
        width: 108,
        height: 120,
        margin: 5,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#EDEDED',
    },
    fullWidthButton: {
        marginLeft: 5,     // Remove side margins for full-width button
    },
    selectedButton: {
        backgroundColor: colors.Pink200,  // Change background color when selected
        borderColor: colors.Pink700,      // Change border color when selected
    },
    tagImage: {
        marginTop:10,
        width: 60,   // Adjust size as necessary
        height: 60,
        marginBottom: 10,
    },
    tagText: {
        fontSize: 14,
        color: '#333',
        textAlign: 'center',
    },

});
