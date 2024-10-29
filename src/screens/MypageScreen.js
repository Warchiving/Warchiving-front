import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function MypageScreen() {
    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            {/* Profile Section */}
            <View style={styles.profileContainer}>
                <Image
                    source={require('../../assets/profile.png')}
                    style={styles.profileImage}
                />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.profileName}>오구 님</Text>
                    <Text style={styles.eventCountdown}>스튜디오 촬영 D-3</Text>
                </View>
            </View>

            {/* Calendar Section */}
            <View style={styles.calendarContainer}>
                <Calendar
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: '#ff6b6b' },
                    }}
                    theme={{
                        selectedDayBackgroundColor: '#ff6b6b',
                        arrowColor: 'black',
                        todayTextColor: '#ff6b6b',
                    }}
                />
            </View>

            {/* Options Section */}
            <ScrollView style={styles.optionsContainer}>
                {['환경설정', '공지사항', '문의사항'].map((option, index) => (
                    <TouchableOpacity key={index} style={styles.optionButton}>
                        <Text style={styles.optionText}>{option}</Text>
                        <Icon name="chevron-right" size={24} color="#aaa" />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'white' },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    profileImage: { width: 60, height: 60, borderRadius: 30, marginRight: 10 },
    profileTextContainer: { flex: 1 },
    profileName: { fontSize: 18, fontWeight: 'bold' },
    eventCountdown: { fontSize: 14, color: 'gray' },

    calendarContainer: {
        paddingHorizontal: 20,
        paddingTop: 10,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },

    optionsContainer: { paddingHorizontal: 20, paddingTop: 20 },
    optionButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    optionText: { fontSize: 16 },
});
