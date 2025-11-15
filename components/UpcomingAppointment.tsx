"use client"

import { View, Text, StyleSheet, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { LinearGradient } from "expo-linear-gradient"
import { upcomingAppointment } from "../constants/upcomingAppointment" // adjust path if needed

interface UpcomingAppointmentProps {
  date: string
  time: string
  doctor?: string
}

export default function UpcomingAppointment({ date, time, doctor }: UpcomingAppointmentProps) {
  return (
    <SafeAreaView> 
     <View style={styles.wrapper}>
      <LinearGradient
        colors={['#4CA2A3', '#A5E1AD']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.label}>Upcoming Appointment</Text>
          <Text style={styles.dateTime}>
            {date} at {time}
          </Text>
          {doctor && <Text style={styles.doctor}>{doctor}</Text>}
        </View>
        
        {/* Icon with white circle background */}
        <View style={styles.iconContainer}>
          <View style={styles.iconCircle}>
            <Image source={upcomingAppointment.stethoscope} style={styles.icon} />
          </View>
        </View>
      </LinearGradient>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 16,
    marginVertical: 12,
  },
  container: {
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
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 16,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
})