import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";

// Import your local image directly
import tipsImage from "@/assets/pregnancy-tips/women.png";

interface PregnancyTipCardProps {
  description?: string;
  buttonText?: string;
  onBookAppointmentPress?: () => void;
}

export default function PregnancyTipCard({
  description = "Wanan know how this will help you in your pregnancy...",
  buttonText = "Book an Appointment",
  onBookAppointmentPress = () => {},
}: PregnancyTipCardProps) {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#A5E1AD", "#def5e7ff"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* Left Content */}
        <View style={styles.contentContainer}>
          <Text style={styles.description}>{description}</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={onBookAppointmentPress}
            activeOpacity={0.8}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>

        {/* Right Image */}
        <View style={styles.imageContainer}>
          <Image source={tipsImage} style={styles.pregnantImage} resizeMode="cover" />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    flexDirection: "row",
    borderRadius: 24,
    paddingVertical: 24,
    paddingHorizontal: 20,
    alignItems: "center",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    minHeight: 140,
  },
  contentContainer: {
    flex: 1,
    marginRight: 12,
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 16,
    lineHeight: 22,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2D7A4A",
  },
  imageContainer: {
    width: 110,
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    overflow: "hidden",
  },
  pregnantImage: {
    width: "100%",
    height: "100%",
  },
});
