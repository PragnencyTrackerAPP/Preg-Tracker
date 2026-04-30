"use client";

import { useState } from "react";
import {
  Image,
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AVAILABLE_EMOJIS } from "../constants/moods";

interface Mood {
  id: string;
  name: string;
  emoji: string;
}

interface MoodTrackerProps {
  moods: Mood[];
  onMoodSelect?: (moodId: string) => void;
  onCustomMoodAdd?: (name: string, emoji: string) => void;
  plusIcon?: any;
}

export default function MoodTracker({
  moods,
  onMoodSelect,
  onCustomMoodAdd,
  plusIcon,
}: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const [displayMoods, setDisplayMoods] = useState<Mood[]>(moods);

  const handleMoodSelect = (moodId: string) => {
    if (moodId === "custom") {
      setEmojiPickerVisible(true);
      return;
    }

    setSelectedMood(moodId);
    onMoodSelect?.(moodId);
  };

  const handleEmojiSelect = (emoji: string) => {
    setEmojiPickerVisible(false);

    const newMood: Mood = {
      id: `custom-${Date.now()}`,
      name: "Custom",
      emoji,
    };

    const updatedMoods = [
      ...displayMoods.slice(0, -1),
      newMood,
      displayMoods[displayMoods.length - 1],
    ];

    setDisplayMoods(updatedMoods);
    setSelectedMood(newMood.id);
    onCustomMoodAdd?.("Custom", emoji);
  };

  const renderMoodIcon = (mood: Mood) => {
    if (mood.id === "custom" && plusIcon) {
      return <Image source={plusIcon} style={styles.plusIcon} />;
    }

    return <Text style={styles.emoji}>{mood.emoji}</Text>;
  };

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text style={styles.title}>Mood Tracker</Text>

        <View style={styles.card}>
          <View style={styles.moodGrid}>
            {displayMoods.map((mood) => (
              <Pressable
                key={mood.id}
                style={styles.moodItem}
                onPress={() => handleMoodSelect(mood.id)}
              >
                <View
                  style={[
                    styles.moodIconContainer,
                    selectedMood === mood.id && styles.moodIconContainerActive,
                  ]}
                >
                  {renderMoodIcon(mood)}
                </View>
                <Text style={styles.moodLabel}>{mood.name}</Text>
              </Pressable>
            ))}
          </View>
        </View>

        {/* Emoji Picker Modal */}
        <Modal
          visible={emojiPickerVisible}
          transparent
          animationType="slide"
          onRequestClose={() => setEmojiPickerVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalCard}>
              <View style={styles.modalHeader}>
                <Text style={styles.modalTitle}>Select Your Mood</Text>
                <TouchableOpacity onPress={() => setEmojiPickerVisible(false)}>
                  <Text style={styles.modalClose}>X</Text>
                </TouchableOpacity>
              </View>

              <ScrollView style={styles.modalScroll}>
                <View style={styles.emojiGrid}>
                  {AVAILABLE_EMOJIS.map((emoji, index) => (
                    <TouchableOpacity
                      key={`${emoji}-${index}`}
                      style={styles.emojiButton}
                      onPress={() => handleEmojiSelect(emoji)}
                    >
                      <Text style={styles.emojiButtonText}>{emoji}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </ScrollView>
            </View>
          </View>
        </Modal>
      </View>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 12,
  },
  card: {
    backgroundColor: "#F4EFF8",
    borderRadius: 16,
    padding: 16,
  },
  moodGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  moodItem: {
    width: "22%",
    alignItems: "center",
  },
  moodIconContainer: {
    width: 56,
    height: 56,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  moodIconContainerActive: {
    borderWidth: 2,
    borderColor: "#4db5a6",
  },
  plusIcon: {
    width: 24,
    height: 24,
  },
  emoji: {
    fontSize: 32,
  },
  moodLabel: {
    fontSize: 11,
    textAlign: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    width: "90%",
    maxHeight: "70%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  modalClose: {
    fontSize: 24,
    color: "#666",
    paddingHorizontal: 8,
  },
  modalScroll: {
    maxHeight: 400,
  },
  emojiGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 8,
  },
  emojiButton: {
    width: "12.5%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  emojiButtonText: {
    fontSize: 28,
  },
});
