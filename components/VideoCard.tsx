import React from "react";
import { View, Text, Image, Pressable, StyleSheet, Linking } from "react-native";

interface VideoItem {
  id: string;
  title: string;
  url: string;
}

export default function VideoCard({ video }: { video: VideoItem }) {
  const getThumbnail = (url: string) => {
    const regExp = /(?:youtube\.com\/.*v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
    const match = url.match(regExp);
    return match ? `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg` : null;
  };

  const handlePress = () => {
    Linking.openURL(video.url).catch((err) => console.error("Error opening URL", err));
  };

  const thumbnailUrl = getThumbnail(video.url);

  return (
    <Pressable style={styles.card} onPress={handlePress}>
      {thumbnailUrl && <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />}
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>{video.title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#EEF5F5",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  thumbnail: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  content: {
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
    color: "#0F1419",
  },
});
