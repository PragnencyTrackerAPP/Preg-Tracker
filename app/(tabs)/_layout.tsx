import { Tabs } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

import { tabsIcon } from "../../constants/tabsIcon";

type TabIconProps = {
  focused: boolean;
  icon: any;
  title: string;
};

function TabIcon({ focused, icon, title }: TabIconProps) {
  if (focused) {
    return (
      <View style={styles.activeTabIcon}>
        <Image source={icon} style={styles.activeIcon} />
        <Text style={styles.activeTabTitle}>{title}</Text>
      </View>
    );
  }

  return (
    <View style={styles.inactiveTabIcon}>
      <Image source={icon} style={styles.inactiveIcon} />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: styles.tabBarItem,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tabs.Screen
        name="home-wrapper"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={tabsIcon.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="bloom-wrapper"
        options={{
          title: "Bloom",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={tabsIcon.bloom} title="Bloom" />
          ),
        }}
      />
      <Tabs.Screen
        name="mamas-kit-wrapper"
        options={{
          title: "Mama's Kit",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon
              focused={focused}
              icon={tabsIcon.mamasKit}
              title="Mama's Kit"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile-wrapper"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={tabsIcon.profile} title="Profile" />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  activeTabIcon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 112,
    minHeight: 70,
    marginTop: 16,
    borderRadius: 35,
    paddingHorizontal: 16,
  },
  activeIcon: {
    width: 22,
    height: 28,
    tintColor: "#ffffffff",
  },
  activeTabTitle: {
    marginLeft: 8,
    color: "#ffffffff",
    fontWeight: "600",
    fontSize: 12,
  },
  inactiveTabIcon: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 4,
    width: 52,
    height: 52,
    borderRadius: 25,
  },
  inactiveIcon: {
    width: 24,
    height: 24,
    tintColor: "#ffffffff",
  },
  tabBarItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    position: "absolute",
    bottom: 30,
    marginHorizontal: 15,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#4CA2A3",
    borderWidth: 1,
    overflow: "hidden",
    elevation: 5,
  },
});
