import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { testimonials } from "../constants/testimonials";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Testimonials() {
  return (
    <SafeAreaView >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Testimonials</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={testimonials}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <LinearGradient
            colors={["#CFD6FF", "#E5D9F2", "#E5D9F2"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.card}
          >
            <Text style={styles.feedback}>{item.feedback}</Text>

            <View style={styles.footerContainer}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.userInfo}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>
                  {"⭐ " + (item.rating || "4.5")}
                </Text>
              </View>
            </View>
          </LinearGradient>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#000",
  },
  viewAll: {
    fontSize: 14,
    color: "#666",
    textDecorationLine: "underline",
  },
  listContainer: {
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
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  userInfo: {
    flex: 1,
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
    color: "#333",
  },
  rating: {
    fontSize: 12,
    color: "#666",
    marginTop: 4,
  },
});
