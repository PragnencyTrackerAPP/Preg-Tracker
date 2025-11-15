"use client"
import { View, Text, Modal, Pressable, StyleSheet } from "react-native"
import { useLocalSearchParams, useRouter } from "expo-router"
import DueDateCalculator from "../../../components/Tools/DueDateCalculator"
import Journal from "../../../components/Tools/Journal"

const featureDetails: Record<string, { title: string; description: string }> = {
  
  "due-date-calculator": {
    title: "Due Date Calculator",
    description: "Calculate your estimated due date based on your last menstrual period.",
  },
  journal: {
    title: "Journal",
    description: "Keep track of your pregnancy journey with daily journal entries.",
  },
  "baby-kick-counter": {
    title: "Baby Kick Counter",
    description: "Monitor your baby's movements and track kick counts.",
  },
  "food-tracking": {
    title: "Food Tracking",
    description: "Log your meals and track your nutrition during pregnancy.",
  },
  "water-intake": {
    title: "Water In-take",
    description: "Stay hydrated by tracking your daily water consumption.",
  },
  "daily-activities": {
    title: "Daily Activities",
    description: "Track your daily activities and exercises during pregnancy.",
  },
  "baby-name-list": {
    title: "Baby Name List",
    description: "Create and manage your list of potential baby names.",
  },
  "travel-checklist": {
    title: "Travel Checklist",
    description: "Prepare for travel with a comprehensive pregnancy checklist.",
  },
}

export default function FeatureDetailScreen() {
  const { id } = useLocalSearchParams()
  const router = useRouter()

  const renderFeatureComponent = () => {
    switch (id) {
      case "due-date-calculator":
        return <DueDateCalculator />
      case "journal":
        return <Journal />
      default:
        return (
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 16, color: "#6b7280" }}>Feature not found</Text>
          </View>
        )
    }
  }

  return (
    <Modal transparent visible={true} animationType="fade" onRequestClose={() => router.back()}>
      <Pressable
        style={{
          ...StyleSheet.absoluteFillObject,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
        onPress={() => router.back()}
      />

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        {renderFeatureComponent()}
      </View>
    </Modal>
  )
}
