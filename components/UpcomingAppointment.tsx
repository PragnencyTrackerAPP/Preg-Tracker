"use client";

import { Image, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { upcomingAppointment } from "../constants/upcomingAppointment";

interface UpcomingAppointmentProps {
  date: string;
  time: string;
  doctor?: string;
}

export default function UpcomingAppointment({
  date,
  time,
  doctor,
}: UpcomingAppointmentProps) {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <LinearGradient
          colors={["#4CA2A3", "#A5E1AD"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.card}
        >
          <View style={styles.content}>
            <Text style={styles.label}>Upcoming Appointment</Text>
            <Text style={styles.dateTime}>
              {date} at {time}
            </Text>
            {doctor && <Text style={styles.doctor}>{doctor}</Text>}
          </View>

          {/* Icon with white circle background */}
          <View style={styles.iconOuter}>
            <View style={styles.iconInner}>
              <Image
                source={upcomingAppointment.stethoscope}
                style={styles.icon}
              />
            </View>
          </View>
        </LinearGradient>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  card: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  label: {
    fontSize: 14,
    color: "#FFFFFF",
    marginBottom: 4,
    fontWeight: "500",
  },
  dateTime: {
    fontSize: 15,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 4,
  },
  doctor: {
    fontSize: 13,
    color: "#FFFFFF",
    opacity: 0.9,
  },
  iconOuter: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 16,
  },
  iconInner: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
});
