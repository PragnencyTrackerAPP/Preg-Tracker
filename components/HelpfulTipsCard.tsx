import { View, Text, StyleSheet, Image } from "react-native";
import { helpfulTips } from "@/constants/helpfulTips";
import { SafeAreaView } from "react-native-safe-area-context"

export default function HelpfulTipsCard({
  title = "Take breaks between your daily tasks",
}: {
  title: string;
}) {
  return (
    <SafeAreaView>
    <View style={styles.wrapper}>
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  card: {
    backgroundColor: "#20094D",
    borderRadius: 22,
    padding: 22,
    height: 110,
    width: "95%", // <-- smaller width like Figma
    overflow: "visible",
    justifyContent: "center",
  },

  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
    maxWidth: "70%", // so text and image don't collide
  },

  image: {
    position: "absolute",
    right: -60,       // <-- pushes image outside card
    top: -20,
    width: 200,
    height: 190,
  },
});
