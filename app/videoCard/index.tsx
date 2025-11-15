import React from "react";
import { View, Text, FlatList, Pressable, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import VideoCard from "../../components/VideoCard";

const videoData = [
  { id: "1", title: "5th Week of Pregnancy", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
];

export default function VideoList() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.title}>YouTube Videos</Text>

          <Pressable onPress={() => router.push("/videoCard/allVideos")}>
            <Text style={styles.link}>View All</Text>
          </Pressable>
        </View>

        <FlatList
          data={videoData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <VideoCard video={item} />
            </View>
          )}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}   // <-- REQUIRED FIX
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: "#F4EFF8" },
  container: { flex: 1, padding: 16 },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  title: { fontSize: 18, fontWeight: "600" },
  link: { color: "#1D9BF0", fontWeight: "500" },
  card: { marginBottom: 16 },
});
