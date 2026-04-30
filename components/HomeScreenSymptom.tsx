import { useRouter } from "expo-router";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { symptoms } from "@/constants/symptoms";

export default function HomeScreen() {
  const router = useRouter();

  const previewSymptoms = [
    { id: "back-pain", name: "Back pain", image: symptoms.backPain },
    { id: "bloating", name: "Bloating", image: symptoms.bloating },
    { id: "contractions", name: "Contractions", image: symptoms.contractions },
    { id: "sore-breasts", name: "Sore breasts", image: symptoms.soreBreasts },
    { id: "exhaustion", name: "Exhaustion", image: symptoms.exhaustion },
    { id: "food-aversions", name: "Food aversions", image: symptoms.foodAversions },
  ];

  return (
    <SafeAreaProvider style={styles.provider}>
      <ScrollView>
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.title}>Symptoms Tracker</Text>

            <TouchableOpacity onPress={() => router.push("/symptoms")}>
              <Text style={styles.link}>View All</Text>
            </TouchableOpacity>
          </View>

          {/* Small 2x2 Grid */}
          <View style={styles.grid}>
            {previewSymptoms.map((item) => (
              <View key={item.id} style={styles.gridItem}>
                <Image source={item.image} style={styles.gridItemImage} />

                <Text style={styles.gridItemText}>{item.name}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  provider: {
    flex: 1,
  },
  card: {
    padding: 16,
    backgroundColor: "#F5EFFF",
    borderRadius: 16,
    marginHorizontal: 16,
    marginTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  link: {
    color: "#4db5a6",
    fontWeight: "600",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  gridItem: {
    width: "48%",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#e8f5f3",
  },
  gridItemImage: {
    width: 34,
    height: 34,
    marginRight: 8,
  },
  gridItemText: {
    fontSize: 14,
    fontWeight: "500",
  },
});
