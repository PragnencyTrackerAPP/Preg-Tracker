import { Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { helpfulTips } from "@/constants/helpfulTips";

export default function HelpfulTipsCard({
  title = "Take breaks between your daily tasks",
}: {
  title: string;
}) {
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Text */}
          <Text style={styles.title}>{title}</Text>

          {/* Image overflowing outside card */}
          <Image
            source={helpfulTips.tipsImage}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  card: {
    backgroundColor: "#20094D",
    borderRadius: 22,
    padding: 22,
    height: 110,
    width: "95%",
    overflow: "visible",
    justifyContent: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    maxWidth: "70%",
  },
  image: {
    position: "absolute",
    right: -60,
    top: -20,
    width: 200,
    height: 190,
  },
});
