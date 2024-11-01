import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Button, ScrollView } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars'; // LocaleConfig 추가

// Locale 설정을 추가하여 달력에 한글을 적용
LocaleConfig.locales['kr'] = {
    monthNames: [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ],
    monthNamesShort: [
        '1월', '2월', '3월', '4월', '5월', '6월',
        '7월', '8월', '9월', '10월', '11월', '12월'
    ],
    dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
    dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
    today: '오늘'
};
LocaleConfig.defaultLocale = 'kr'; // 기본 로케일을 kr로 설정

export default function ReservationScreen({ route, navigation }) {
    const { hall } = route.params;  // assuming hall details are passed as route parameters

    const [date, setDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(null);
    const [additionalNotes, setAdditionalNotes] = useState('');

    const [selectedDate, setSelectedDate] = useState('');

    const onDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>

            {/* Hall Information */}
            <View style={styles.hallInfoContainer}>
                <Image source={ hall.image } style={styles.hallImage} />
                <View>
                    <Text style={styles.hallName}>{hall.name}</Text>
                    <Text style={styles.hallLocation}>{hall.location}</Text>
                </View>
            </View>

            <ScrollView style={styles.container2}>
                {/* 캘린더 */}
                <Text style={styles.sectionTitle}>예약할 날짜를 선택해주세요</Text>
                <Calendar
                    style={{
                        marginBottom: 20,
                        borderRadius: 10,
                        shadowColor: '#000',  // Adds shadow (iOS)
                        shadowOpacity: 0.1,
                        shadowRadius: 15,
                    }}
                    onDayPress={onDayPress}
                    markedDates={{
                        [selectedDate]: { selected: true, 
                            selectedColor: '#ff6b6b', 
                            selectedTextColor: 'white' },
                    }}
                    theme={{
                        backgroundColor: 'white',
                        calendarBackground: 'white',
                        textSectionTitleColor: 'grey', // Color of weekday titles (월, 화, 수, etc.)
                        selectedDayTextColor: 'black',
                        dayTextColor: 'black',
                        textDisabledColor: 'lightgrey',  // Disabled days color (e.g., days outside current month)
                        monthTextColor: 'black',
                        textMonthFontWeight: 'bold',
                        textDayFontSize: 14,
                        textMonthFontSize: 14,
                        textDayHeaderFontSize: 10,
                        selectedDayBackgroundColor: '#ff6b6b',
                        arrowColor: 'black',
                        todayTextColor: '#ff6b6b',
                    }}
                    monthFormat={'yyyy년 MM월'}
                />

                {/* <Text style={styles.selectedDateText}>
                선택된 날짜: {selectedDate || '날짜를 선택하세요'}
                </Text> */}

                {/* Time Selector */}
                <Text style={styles.sectionTitle}>예약할 시간대를 선택해주세요</Text>
                <View style={styles.timeContainer}>
                    {['오전', '오후', '종일'].map((time) => (
                        <TouchableOpacity
                            key={time}
                            style={[
                                styles.timeButton,
                                selectedTime === time && styles.selectedTimeButton,
                            ]}
                            onPress={() => setSelectedTime(time)}
                        >
                            <Text style={[
                                styles.timeText,
                                selectedTime === time && styles.selectedTimeText,
                            ]}>{time}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {/* Additional Notes */}
                <Text style={styles.sectionTitle}>추가적으로 남기고 싶은 말이 있으신가요?</Text>
                <TextInput
                    style={styles.notesInput}
                    placeholder="ex. 홀 제공 음식은 A 코스로 선택하겠습니다"
                    value={additionalNotes}
                    onChangeText={setAdditionalNotes}
                />


            </ScrollView>


            {/* Footer with Price and Buttons */}
            <View style={styles.footer}>
                <Text style={styles.price}>350,000원</Text>
                <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>장바구니</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.navigate('ReservationSuccess')}>
                    <Text style={styles.confirmButtonText}>예약 확정</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0,
        backgroundColor: 'white'
    },
    container2: {
        padding: 20,
        backgroundColor: '#FFFFFF'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    hallInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12,
    },
    hallImage: {
        width: 60,
        height: 50,
        borderRadius: 3,
        marginRight: 13,
        marginLeft:10,
        marginTop:10,
    },
    hallName: {
        fontSize: 16,
        fontWeight: 'bold',
        marginTop:10,
    },
    hallLocation: {
        fontSize: 13,
        color: 'grey',
        marginTop:4,
    },
    sectionTitle: {
        fontSize: 16,
        marginVertical: 10
    },
    timeContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        shadowColor: '#000',  // Adds shadow (iOS)
        shadowOpacity: 0.1,
        shadowRadius: 15,
        marginRight: 0,
    },
    timeButton: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        width: '20%',
        alignItems: 'center',
        backgroundColor: 'white',
        marginRight:5,
    },
    selectedTimeButton: {
        backgroundColor: '#FD7372'
    },
    timeText: {
        fontSize: 16
    },
    selectedTimeText: {
        color: 'white'
    },
    notesInput: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 5,
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',  // Adds shadow (iOS)
        shadowOpacity: 0.1,
        shadowRadius: 15,
    },
    footer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        padding: 20,
        marginBottom: 20,
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '48%',
    },
    cartButton: {
        backgroundColor: '#ddd',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginRight: 10,
    },
    cartButtonText: {
        color: 'black',
    },
    confirmButton: {
        backgroundColor: 'black',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    confirmButtonText: {
        color: 'white',
        fontWeight: 'bold'
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10
    },
    selectedDateText: {
        fontSize: 16,
        color: 'grey',
        marginTop: 20
    },
});
