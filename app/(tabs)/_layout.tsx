import { Tabs } from "expo-router";
import { View, Text, Image } from "react-native";
import { tabsIcon } from "../../constants/tabsIcon";

function TabIcon({ focused, icon, title }: any) {
  return focused ? (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minWidth: 112,
        minHeight: 70,
        marginTop: 16,
        borderRadius: 35,
        paddingHorizontal: 16,
      }}
    >
      <Image source={icon} tintColor="#ffffffff" style={{ width: 22, height: 28 }} />
      <Text
        style={{
          marginLeft: 8,
          color: "#ffffffff",
          fontWeight: "600",
          fontSize: 12,
        }}
      >
        {title}
      </Text>
    </View>
  ) : (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        marginTop: 4,
        width: 52,
        height: 52,
        borderRadius: 25,
      }}
    >
      <Image source={icon} tintColor="#ffffffff" style={{ width: 24, height: 24 }} />
    </View>
  );
}

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
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
            <TabIcon focused={focused} icon={tabsIcon.mamasKit} title="Mama's Kit" />
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
