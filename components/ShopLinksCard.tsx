import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  FlatList
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { shopLink } from "@/constants/shopLinks";
import { SafeAreaView } from "react-native-safe-area-context";
export default function ShopLinks() {
  const products = [
    {
      id: 1,
      title: "Pillows",
      price: "₹1200",
      rating: 4.5,
      url: "https://www.amazon.in",
    },
    {
      id: 2,
      title: "Pillows",
      price: "₹1200",
      rating: 4.5,
      url: "https://www.flipkart.com",
    },
    {
      id: 3,
      title: "Pillows",
      price: "₹1200",
      rating: 4.5,
      url: "https://www.nykaa.com",
    },
  ];

  const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      alert("Unable to open the link");
    }
  };

  return (
    <SafeAreaView >
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Shop Links</Text>
        <TouchableOpacity onPress={() => console.log("View All pressed")}>
          <Text style={styles.viewAll}>View All</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => openLink(item.url)}
            activeOpacity={0.7}
          >
            <Image source={shopLink.shopLinkImage} style={styles.image} />
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
            <View style={styles.ratingContainer}>
              <AntDesign name="star" size={14} color="#fbbf24" />
              <Text style={styles.ratingText}>{item.rating}</Text>
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
  },
  viewAll: {
    fontSize: 14,
    color: "#6366f1",
    fontWeight: "600",
    textDecorationLine: "underline",
  },
  listContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  card: {
    width: 140,
    height: 220,
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  titleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 6,
  },
  price: {
    fontSize: 15,
    color: "#0ea5a8",
    fontWeight: "700",
    marginBottom: 6,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 12,
    color: "#6b7280",
    fontWeight: "500",
  },
});
