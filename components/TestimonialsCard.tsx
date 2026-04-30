import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { testimonials } from "../constants/testimonials";

export default function Testimonials() {
  return (
    <SafeAreaProvider>
      <View style={styles.header}>
        <Text style={styles.title}>Testimonials</Text>
        <TouchableOpacity>
          <Text style={styles.link}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={testimonials}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#CFD6FF", "#E5D9F2", "#E5D9F2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <Text style={styles.feedback}>{item.feedback}</Text>

            <View style={styles.userRow}>
              <Image source={item.image} style={styles.userImage} />
              <View style={styles.userContent}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userRating}>{"â­ " + (item.rating || "4.5")}</Text>
              </View>
            </View>
          </LinearGradient>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  link: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },
  listContent: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  card: {
    width: 350,
    marginRight: 12,
    borderRadius: 16,
    padding: 20,
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  feedback: {
    fontSize: 14,
    color: "#333",
    marginBottom: 16,
    lineHeight: 20,
    fontStyle: "italic",
  },
  userRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userContent: {
    flex: 1,
  },
  userName: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  userRating: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});
