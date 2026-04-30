import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { CATEGORIES, SAMPLE_ACTIVITIES } from "../constants/garbhaSanskar";

interface ActivityItem {
  id: string;
  title: string;
  subtitle: string;
  thumbnail: any;
  type: "Video" | "Article";
  duration: string;
  category: string;
}

interface GarbhaSanskarCardProps {
  backgroundColor?: string;
  title?: string;
  subtitle?: string;
  activities?: ActivityItem[];
  onActivityPress?: (activity: ActivityItem) => void;
}

export default function GarbhaSanskarCard({
  backgroundColor = "#F4EFF8",
  title = "What is Garbha Sanskar?",
  subtitle = "Learn all about garba sanskar in this section",
  activities = SAMPLE_ACTIVITIES,
  onActivityPress,
}: GarbhaSanskarCardProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredActivities =
    selectedCategory === "All"
      ? activities
      : activities.filter((act) => act.category === selectedCategory);

  const getTagColor = (type: string) =>
    type === "Video" ? "#F4A460" : "#B8A2D1";

  const renderActivityItem = ({ item }: { item: ActivityItem }) => (
    <TouchableOpacity
      onPress={() => onActivityPress?.(item)}
      style={styles.activityItem}
    >
      <View style={styles.activityRow}>
        <Image source={item.thumbnail} style={styles.activityImage} />

        <View style={styles.activityContent}>
          <View>
            <Text style={styles.activityTitle}>{item.title}</Text>
            <Text style={styles.activitySubtitle}>{item.subtitle}</Text>
          </View>

          <View style={styles.activityMeta}>
            <View
              style={[styles.typeTag, { backgroundColor: getTagColor(item.type) }]}
            >
              <Text style={styles.typeTagText}>{item.type}</Text>
            </View>
            <Text style={styles.duration}>{item.duration}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider style={styles.provider}>
      <ScrollView>
        <View style={[styles.card, { backgroundColor }]}>
          <View style={styles.headerSection}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subtitle}>{subtitle}</Text>
          </View>

          <Text style={styles.sectionTitle}>Today's Activity</Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.categoryScroll}
          >
            <View style={styles.categoryRow}>
              {CATEGORIES.map((category) => (
                <TouchableOpacity
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  style={[
                    styles.categoryButton,
                    selectedCategory === category && styles.categoryButtonActive,
                  ]}
                >
                  <Text
                    style={[
                      styles.categoryButtonText,
                      selectedCategory === category &&
                        styles.categoryButtonTextActive,
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>

          <FlatList
            data={filteredActivities}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
          />
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
    margin: 16,
    borderRadius: 16,
    padding: 16,
  },
  headerSection: {
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F1F1F",
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 13,
    color: "#666",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1F1F1F",
    marginBottom: 12,
  },
  categoryScroll: {
    marginBottom: 16,
  },
  categoryRow: {
    flexDirection: "row",
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#FFF",
  },
  categoryButtonActive: {
    backgroundColor: "#9B7DB4",
  },
  categoryButtonText: {
    fontSize: 12,
    fontWeight: "500",
    color: "#666",
  },
  categoryButtonTextActive: {
    color: "#FFF",
  },
  activityItem: {
    marginBottom: 16,
  },
  activityRow: {
    flexDirection: "row",
    gap: 12,
  },
  activityImage: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  activityContent: {
    flex: 1,
    justifyContent: "space-between",
  },
  activityTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1F1F1F",
    marginBottom: 4,
  },
  activitySubtitle: {
    fontSize: 12,
    color: "#666",
  },
  activityMeta: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  typeTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  typeTagText: {
    fontSize: 11,
    fontWeight: "500",
    color: "#FFF",
  },
  duration: {
    fontSize: 11,
    color: "#999",
  },
});
