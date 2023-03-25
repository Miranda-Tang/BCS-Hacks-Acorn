import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Modal,
  TouchableOpacity,
  Image,
  Text,
} from "react-native";
import { Calendar, CalendarList } from "react-native-calendars";
import upset from "../assets/upset.png";
import stress from "../assets/stress.png";
import sleepy from "../assets/sleepy.png";
import happy from "../assets/happy.png";
import cry from "../assets/cry.png";

function HomeCalendarScreen() {
  const [modalVisible, setModalVisible] = useState(false);
  const [rowGap, setRowGap] = useState(10);

  return (
    <SafeAreaView style={styles.container}>
      <Calendar
        style={styles.calendar}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          textSectionTitleDisabledColor: "#d9e1e8",
          selectedDayBackgroundColor: "#00adf5",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#00adf5",
          dayTextColor: "#2d4150",
          textDisabledColor: "#d9e1e8",
          dotColor: "#00adf5",
          selectedDotColor: "#ffffff",
          arrowColor: "orange",
          disabledArrowColor: "#d9e1e8",
          monthTextColor: "#655DBB",
          indicatorColor: "#655DBB",
          textDayFontFamily: "monospace",
          textMonthFontFamily: "monospace",
          textDayHeaderFontFamily: "monospace",
          textDayFontWeight: "300",
          textMonthFontWeight: "bold",
          textDayHeaderFontWeight: "300",
          textDayFontSize: 24,
          textMonthFontSize: 36,
          textDayHeaderFontSize: 14,
        }}
        onDayPress={(date) => {
          console.log("Selected date: ", date.dateString);
          setModalVisible(true);
        }}
        onMonthChange={(date) => console.log("onMonthChange", date)}
        onPressArrowLeft={(goToPreviousMonth) => {
          console.log("onPressArrowLeft");
          goToPreviousMonth();
        }}
        onPressArrowRight={(goToNextMonth) => {
          console.log("onPressArrowRight");
          goToNextMonth();
        }}
        initialDate={"2023-03-25"}
        minDate={"2023-01-01"}
        maxDate={"2023-12-31"}
        hideExtraDays={true}
      />
      <Modal
        transparent={true}
        visible={modalVisible}
        style={{
          alignItems: "center",
          justifyContent: "center",
          alignSelf: "center",
          marginTop: "10%",
          marginBottom: "10%",
        }}
      >
        <View
          style={{
            backgroundColor: "#EEE4FF",
            width: "45%",
            height: "50%",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            marginTop: "10%",
            marginBottom: "10%",
            borderRadius: "5%",
          }}
        >
          <View
            style={{
              backgroundColor: "#ffffff",
              margin: 30,
              padding: 30,
              borderRadius: 10,
              flex: 1,
              width: "90%",
              height: "90%",
              alignItems: "center",
              justifyContent: "center",
              alignSelf: "center",
            }}
          >
            <Text style={styles.text}>Log Mood</Text>
            <View
              style={{
                backgroundColor: "#ffffff",
                margin: 30,
                padding: 30,
                borderRadius: 10,
                flex: 1,
                // width: "100%",
                // height: "100%",
                alignItems: "stretch",
                justifyContent: "center",
                alignSelf: "center",
                flexDirection: "row",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  console.log("upset");
                }}
              >
                <Image source={upset} style={styles.emoji}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  console.log("stress");
                }}
              >
                <Image source={stress} style={styles.emoji}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  console.log("sleepy");
                }}
              >
                <Image source={sleepy} style={styles.emoji}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  console.log("happy");
                }}
              >
                <Image source={happy} style={styles.emoji}></Image>
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  console.log("cry");
                }}
              >
                <Image source={cry} style={styles.emoji}></Image>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              onPress={() => {
                setModalVisible(false);
              }}
              style={styles.submitButon}
            >
              <Text style={styles.submitButtonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
  },
  calendar: {
    borderRadius: 10,
    elevation: 4,
    margin: 40,
  },
  text: {
    color: "#655DBB",
    fontWeight: "bold",
    fontSize: 27,
    textAlign: "center",
  },
  note_text: {
    color: "#655DBB",
    fontWeight: "bold",
    fontSize: 20,
  },
  emoji: {
    height: 80,
    width: 80,
    margin: 10,
  },
  submitButon: {
    marginTop: 20,
    width: 150,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 40,
    backgroundColor: "#655DBB",
  },
  submitButtonText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#EEE4FF",
  },
});

export default HomeCalendarScreen;
