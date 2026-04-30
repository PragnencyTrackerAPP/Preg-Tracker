"use client";

import { useRouter } from "expo-router";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { plansCardImage } from "@/constants/plans";

interface FeatureCard {
  id: string;
  title: string;
  imageUrl: any;
}

interface PlanData {
  name: string;
  price?: string;
  description: string;
  features: FeatureCard[];
  borderColor: string;
  isPremium: boolean;
}

const plansData: PlanData[] = [
  {
    name: "Basic Plan",
    price: "â‚¹2400/mo",
    description: "Unlocking personalized care to enhance healthy pregnancy includes:",
    isPremium: false,
    borderColor: "#60d0d0ff",
    features: [
      { id: "basic-1", title: "Daily Garbhsanskar activities", imageUrl: plansCardImage.plan1_1 },
      { id: "basic-2", title: "Track babyâ€™s growth - weekly insights", imageUrl: plansCardImage.plan1_2 },
      { id: "basic-3", title: "Soothing music & mantras for positivity", imageUrl: plansCardImage.plan1_3 },
      { id: "basic-4", title: "Affirmations & mood boosters", imageUrl: plansCardImage.plan1_4 },
      { id: "basic-5", title: "Kick counter & health alerts", imageUrl: plansCardImage.plan1_5 },
      { id: "basic-6", title: "Community access connect with moms to be", imageUrl: plansCardImage.plan1_6 },
    ],
  },
  {
    name: "Premium Plan",
    price: "â‚¹3400/mo",
    description: "Unlock the complete range of your pregnancy. Everything in Basic plus:",
    isPremium: true,
    borderColor: "#c4b5fd",
    features: [
      { id: "premium-1", title: "Including all Basic Plan", imageUrl: plansCardImage.plan2_1 },
      { id: "premium-2", title: "Yoga teacher guidance for strength & flexibility", imageUrl: plansCardImage.plan2_2 },
      { id: "premium-3", title: "Doctor consultation & â€œAsk your Doctor Anytimeâ€ support", imageUrl: plansCardImage.plan2_3 },
      { id: "premium-4", title: "Tailored exercises for normal delivery & high-risk cases", imageUrl: plansCardImage.plan2_4 },
      { id: "premium-5", title: "Personalized diet plans for a healthy pregnancy", imageUrl: plansCardImage.plan2_5 },
      { id: "premium-6", title: "1-to-1 premium sessions with experts", imageUrl: plansCardImage.plan2_6 },
    ],
  },
];

const FeatureCardComponent = ({ feature }: { feature: FeatureCard }) => (
  <View style={styles.featureCard}>
    <Image source={feature.imageUrl} style={styles.featureImage} resizeMode="cover" />
    <View style={styles.featureOverlay}>
      <Text style={styles.featureTitle}>{feature.title}</Text>
    </View>
  </View>
);

const PlanCard = ({ plan }: { plan: PlanData }) => (
  <View style={[styles.planCard, { borderColor: plan.borderColor }]}>
    <View style={styles.planHeader}>
      <Text style={styles.planName}>{plan.name}</Text>
      {plan.price && <Text style={styles.planPrice}>{plan.price}</Text>}
    </View>

    <Text style={styles.planDescription}>{plan.description}</Text>

    <View style={styles.featuresGrid}>
      {plan.features.map((feature) => (
        <FeatureCardComponent key={feature.id} feature={feature} />
      ))}
    </View>
  </View>
);

export default function Plans() {
  const router = useRouter();

  return (
    <SafeAreaProvider style={styles.provider}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backButtonText}>{"<"}</Text>
        </Pressable>

        <Pressable
          style={styles.trialButton}
          onPress={() => router.push("/")}
        >
          <Text style={styles.trialButtonText}>Start Free Trial</Text>
        </Pressable>
      </View>

      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.pageTitle}>
            Unlock All <Text style={styles.pageTitleAccent}>Premium</Text> Features
          </Text>
        </View>

        <View style={styles.planList}>
          {plansData.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  provider: {
    flex: 1,
    backgroundColor: "#f0f4f8",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#e5e7eb",
  },
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6",
  },
  backButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#374151",
  },
  trialButton: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#20094D",
  },
  trialButtonText: {
    fontSize: 15,
    fontWeight: "600",
    color: "#20094D",
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 16,
  },
  titleContainer: {
    marginVertical: 26,
  },
  pageTitle: {
    fontSize: 30,
    fontWeight: "700",
    color: "#1f2937",
    textAlign: "center",
  },
  pageTitleAccent: {
    color: "#8b5cf6",
  },
  planList: {
    gap: 32,
    marginBottom: 36,
  },
  planCard: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
    borderWidth: 2,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  planHeader: {
    marginBottom: 18,
  },
  planName: {
    fontSize: 22,
    fontWeight: "700",
    color: "#1f2937",
    marginBottom: 6,
  },
  planPrice: {
    fontSize: 18,
    fontWeight: "600",
    color: "#8b5cf6",
  },
  planDescription: {
    fontSize: 15,
    color: "#6b7280",
    marginBottom: 20,
    lineHeight: 22,
  },
  featuresGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  featureCard: {
    width: "47%",
    aspectRatio: 1,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: "#f3f4f6",
    position: "relative",
    marginBottom: 14,
  },
  featureImage: {
    width: "100%",
    height: "100%",
  },
  featureOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
    padding: 10,
  },
  featureTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff",
    textAlign: "center",
    lineHeight: 18,
  },
});
