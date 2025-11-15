"use client"

import { View, Text, StyleSheet, Pressable, Image, Modal, TouchableOpacity, ScrollView } from "react-native"
import { useState } from "react"
import { AVAILABLE_EMOJIS } from "../constants/moods"

interface Mood {
  id: string
  name: string
  emoji: string
}

interface MoodTrackerProps {
  moods: Mood[]
  onMoodSelect?: (moodId: string) => void
  onCustomMoodAdd?: (name: string, emoji: string) => void
  plusIcon?: any
}

export default function MoodTracker({ moods, onMoodSelect, onCustomMoodAdd, plusIcon }: MoodTrackerProps) {
  const [selectedMood, setSelectedMood] = useState<string | null>(null)
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false)
  const [displayMoods, setDisplayMoods] = useState<Mood[]>(moods)

  const handleMoodSelect = (moodId: string) => {
    if (moodId === 'custom') {
      setEmojiPickerVisible(true)
      return
    }
    setSelectedMood(moodId)
    onMoodSelect?.(moodId)
  }

  const handleEmojiSelect = (emoji: string) => {
    setEmojiPickerVisible(false)

    // Auto-generate mood with selected emoji
    const newMood: Mood = {
      id: `custom-${Date.now()}`,
      name: 'Custom',
      emoji: emoji
    }

    const updatedMoods = [...displayMoods.slice(0, -1), newMood, displayMoods[displayMoods.length - 1]]
    setDisplayMoods(updatedMoods)
    setSelectedMood(newMood.id)

    onCustomMoodAdd?.('Custom', emoji)
  }

  const renderMoodIcon = (mood: Mood) => {
    if (mood.id === 'custom' && plusIcon) {
      return <Image source={plusIcon} style={styles.icon} />
    }
    return <Text style={styles.emoji}>{mood.emoji}</Text>
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mood Tracker</Text>
      <View style={styles.card}>
        <View style={styles.grid}>
          {displayMoods.map((mood) => (
            <Pressable
              key={mood.id}
              style={styles.item}
              onPress={() => handleMoodSelect(mood.id)}
            >
              <View style={[styles.box, selectedMood === mood.id && styles.selected]}>
                {renderMoodIcon(mood)}
              </View>
              <Text style={styles.label}>{mood.name}</Text>
            </Pressable>
          ))}
        </View>
      </View>

      {/* Emoji Picker Modal */}
      <Modal
        visible={emojiPickerVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setEmojiPickerVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.pickerContent}>
            <View style={styles.pickerHeader}>
              <Text style={styles.pickerTitle}>Select Your Mood</Text>
              <TouchableOpacity onPress={() => setEmojiPickerVisible(false)}>
                <Text style={styles.closeButton}>✕</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.emojiScroll}>
              <View style={styles.emojiGrid}>
                {AVAILABLE_EMOJIS.map((emoji, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.emojiItem}
                    onPress={() => handleEmojiSelect(emoji)}
                  >
                    <Text style={styles.emojiText}>{emoji}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  )
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  item: {
    width: "22%",
    alignItems: "center",
  },
  box: {
    width: 56,
    height: 56,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#4db5a6",
  },
  emoji: {
    fontSize: 32,
  },
  label: {
    fontSize: 11,
    textAlign: "center",
  },
  icon: {
    width: 24,
    height: 24,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickerContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    width: '90%',
    maxHeight: '70%',
  },
  pickerHeader: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  pickerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  closeButton: {
    fontSize: 24,
    color: '#666',
    paddingHorizontal: 8,
  },
  emojiScroll: {
    maxHeight: 400,
  },
  emojiGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  emojiItem: {
    width: '12.5%',
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 4,
  },
  emojiText: {
    fontSize: 28,
  },
})
