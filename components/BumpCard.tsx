import React from 'react';
import { View, Text, ScrollView,  StyleSheet } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { SafeAreaView } from "react-native-safe-area-context";


interface Feature {
  icon: string;
  text: string;
}

interface BumpCardProps {
  title?: string;
  subtitle?: string;
  features?: Feature[];
}

export default function BumpCard({
  title = 'Why BUMP TO BLISS',
  subtitle = 'Learn about awesome and personalized experience we are providing in this app',
  features = [
    { icon: 'star-outline', text: '24/7 ready for the call' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
    { icon: 'star-outline', text: 'Personalized Content' },
  ],
}: BumpCardProps) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>

          <View style={styles.features}>
            {features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <MaterialCommunityIcons
                  name={feature.icon}
                  size={20}
                  color="#7B68BB"
                />
                <Text style={styles.featureText}>{feature.text}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scroll: { flexGrow: 1, padding: 16 },
  card: { backgroundColor: '#F5EFFF', borderRadius: 16, padding: 24, marginBottom: 16 },
  title: { fontSize: 18, fontWeight: '700', color: '#1A1A1A', marginBottom: 8 },
  subtitle: { fontSize: 13, color: '#666', marginBottom: 20, lineHeight: 18 },
  features: { gap: 16 },
  featureItem: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  featureText: { fontSize: 14, fontWeight: '500', color: '#1A1A1A', flex: 1 },
});
