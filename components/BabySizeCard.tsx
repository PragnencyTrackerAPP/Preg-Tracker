import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { journal } from "@/constants/babySize";

interface BabySizeCardProps {
  description?: string;
  buttonText?: string;
  onKnowMorePress?: () => void;
}

export default function BabySizeCard({
  description = "Ayu is the size of a mango",
  buttonText = "Know More",
  onKnowMorePress = () => {},
}: BabySizeCardProps) {
  return (
    <SafeAreaProvider style={styles.provider}>
      <LinearGradient
        colors={["#20094D", "#4CA2A3", "#A5E1AD"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      >
        {/* LEFT CONTENT */}
        <View style={styles.content}>
          <Text style={styles.description}>{description}</Text>

          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.8}
            onPress={onKnowMorePress}
          >
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>

        {/* BABY IMAGE - FIGMA STYLE, OVERFLOWING RIGHT */}
        <Image
          source={journal.babyImage}
          style={styles.image}
          resizeMode="contain"
        />
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  provider: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  card: {
    width: "100%",
    height: 120,
    borderRadius: 28,
    paddingLeft: 20,
    paddingVertical: 18,
    overflow: "visible",
    justifyContent: "center",
  },
  content: {
    width: "60%",
  },
  description: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  buttonText: {
    color: "#20094D",
    fontWeight: "600",
    fontSize: 14,
  },
  image: {
    position: "absolute",
    right: -10,
    top: -10,
    width: 150,
    height: 140,
  },
});
