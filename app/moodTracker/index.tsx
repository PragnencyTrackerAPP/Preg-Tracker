"use client"

import { View, StyleSheet, Alert } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import MoodTracker from "../../components/MoodTracker"
import { moods } from "../../constants/moods"



export default function MoodTrackerScreen() {
  const handleMoodSelect = (moodId: string) => {
    const selectedMood = moods.find(m => m.id === moodId)
    console.log('Selected mood:', selectedMood)
    
    // TODO: Save to database or AsyncStorage
  }

  const handleCustomMoodAdd = async (name: string, emoji: string) => {
    console.log('Custom mood added:', { emoji })
    
    // TODO: Save to AsyncStorage or database
    Alert.alert('Mood Added', `${emoji} added to your mood tracker!`)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <MoodTracker 
          moods={moods}
          onMoodSelect={handleMoodSelect}
          onCustomMoodAdd={handleCustomMoodAdd}
          // Uncomment and pass your plus icon:
          // plusIcon={plusIcon}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({

  content: {
    flex: 1,
  },
})