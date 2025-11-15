"use client"

import { View, ScrollView, Text, TouchableOpacity } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router"
import FeatureCard from "../../../components/Tools/FeatureCard"
// Update the import path to match the actual location and casing of the tools file
// Update the import path to match the actual location and casing of the tools file
import { tools } from "../../../constants/tools"

const features = [
  {
    id: "due-date-calculator",
    title: "Due Date Calculator",
    image: tools.dueDateCalculator,
    badge: false,
  },
  {
    id: "journal",
    title: "Journal",
    image: tools.journal,
    badge: false,
  },
  {
    id: "baby-kick-counter",
    title: "Baby Kick Counter",
    image: tools.babyKickCounter,
    badge: false,
  },
  {
    id: "food-tracking",
    title: "Food Tracking",
    image: tools.foodTracking,
    badge: true,
  },
  {
    id: "water-intake",
    title: "Water In-take",
    image: tools.waterIntake,
    badge: false,
  },
  {
    id: "daily-activities",
    title: "Daily Activities",
    image: tools.dailyActivities,
    badge: true,
  },
  {
    id: "baby-name-list",
    title: "Baby Name List",
    image: tools.babyNameList,
    badge: true,
  },
  {
    id: "travel-checklist",
    title: "Travel Checklist",
    image: tools.travelChecklist,
    badge: true,
  },
]

export default function MamasKitScreen() {
  const router = useRouter()

  const handleCardPress = (featureId: string) => {
    if (featureId === "due-date-calculator") {
      router.push("/tools/due-date-calculator")
    } else if (featureId === "journal") {
      router.push("/tools/journal" )
    } else {
      router.push(`/tools/features/${featureId}`)
    }
  }

  const handleBackPress = () => {
    router.back()
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 16,
          paddingVertical: 12,
          backgroundColor: "#ffffff",
        }}
      >
        <TouchableOpacity
          onPress={handleBackPress}
          style={{
            width: 24,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 24, fontWeight: "600", color: "#000" }}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 18, fontWeight: "600", color: "#000" }}>Mama's Kit</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 12,
          paddingVertical: 16,
        }}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {features.map((feature) => (
            <View key={feature.id} style={{ width: "48%", marginBottom: 16 }}>
              <FeatureCard {...({
                title: feature.title,
                image: feature.image,
                badge: feature.badge,
                onPress: () => handleCardPress(feature.id),
              } as any)} />
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
