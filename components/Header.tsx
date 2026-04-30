import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useRouter } from "expo-router";

import { aiChatAssistant } from "@/constants/aiChatAssistant";
import { profile } from "@/constants/profile";

export default function Header() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.userSection}>
        <Text style={styles.greeting}>Hello, Soma</Text>
        <Text style={styles.dueText}>Due in 17 Weeks</Text>
      </View>

      <View style={styles.actionsSection}>
        <Pressable
          style={styles.assistantButton}
          onPress={() => router.push("/aiChatAssistant")}
        >
          <Image source={aiChatAssistant.homeAiBot} style={styles.assistantIcon} />
          <Text style={styles.assistantLabel}>{"Mom's\nAssistant"}</Text>
        </Pressable>

        <Pressable onPress={() => router.push("/profile")}>
          <Image source={profile.profileImage} style={styles.profileImage} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 15,
  },
  userSection: {
    flex: 3,
  },
  greeting: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 2,
  },
  dueText: {
    fontSize: 14,
    color: "#6b7280",
  },
  actionsSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  assistantButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f3e8ff",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    gap: 8,
  },
  assistantIcon: {
    width: 20,
    height: 20,
  },
  assistantLabel: {
    fontSize: 10,
    fontWeight: "500",
    color: "#7c3aed",
    lineHeight: 12,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#fcfdffff",
  },
});
