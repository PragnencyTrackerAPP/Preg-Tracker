import React from "react";
import { FlatList, Image, Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { shopLink } from "@/constants/shopLinks";

export default function ShopLinks() {
  const products = [
    {
      id: 1,
      title: "Pillows",
      price: "â‚¹1200",
      rating: 4.5,
      url: "https://www.amazon.in",
    },
    {
      id: 2,
      title: "Pillows",
      price: "â‚¹1200",
      rating: 4.5,
      url: "https://www.flipkart.com",
    },
    {
      id: 3,
      title: "Pillows",
      price: "â‚¹1200",
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
    <SafeAreaProvider>
      <View style={styles.header}>
        <Text style={styles.title}>Shop Links</Text>
        <TouchableOpacity onPress={() => console.log("View All pressed")}>
          <Text style={styles.link}>View All</Text>
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
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
            <View style={styles.ratingRow}>
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
    </SafeAreaProvider>
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
  title: {
    fontSize: 18,
    fontWeight: "600",
    color: "#1f2937",
  },
  link: {
    fontSize: 14,
    color: "#666",
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
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#1f2937",
    textAlign: "center",
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 15,
    color: "#0ea5a8",
    fontWeight: "700",
    marginBottom: 6,
  },
  ratingRow: {
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
