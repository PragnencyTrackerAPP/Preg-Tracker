import React from "react";
import { Image, Linking, Pressable, StyleSheet, Text, View } from "react-native";

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
    <Pressable
      style={({ pressed }) => [
        styles.card,
        pressed && styles.cardPressed,
      ]}
      onPress={handlePress}
    >
      <View style={styles.thumbnailContainer}>
        {thumbnailUrl && (
          <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
        )}
        <View style={styles.playButton}>
          <View style={styles.playTriangle} />
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.title} numberOfLines={2}>
          {video.title}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    marginBottom: 16,
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  cardPressed: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  thumbnailContainer: {
    position: "relative",
    width: "100%",
    height: 200,
    backgroundColor: "#f0f0f0",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  playButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    width: 56,
    height: 56,
    marginLeft: -28,
    marginTop: -28,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  playTriangle: {
    width: 0,
    height: 0,
    marginLeft: 4,
    borderLeftWidth: 16,
    borderTopWidth: 10,
    borderBottomWidth: 10,
    borderLeftColor: "#fff",
    borderTopColor: "transparent",
    borderBottomColor: "transparent",
  },
  content: {
    padding: 14,
  },
  title: {
    fontSize: 15,
    fontWeight: "600",
    color: "#1a1a1a",
    lineHeight: 20,
  },
});
