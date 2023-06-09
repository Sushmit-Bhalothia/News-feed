import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";
import { useTheme } from "@rneui/themed";
import { useTranslation } from "react-i18next";
/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const { theme, updateTheme } = useTheme(); //for selecting dark and light mode in the app

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: theme.colors.primary,
        // tabBarBackground:
        //   theme.mode === "dark" ? "black" : theme.colors.primary,

        headerTintColor: theme.mode === "dark" ? "white" : "blue",
        headerStyle: {
          backgroundColor: theme.colors.background,
        },
        footerStyle: {
          backgroundColor: theme.colors.background,
        },
        tabBarIcon: ({ color }) => (
          <TabBarIcon name={getTabIconName(route.name)} color={color} />
        ),
        // title: "nameee",
      })}
    >
      {/* Here we have only 2 screeens with  news and setting page */}
      <Tabs.Screen name="index" options={{ title: "News" }} />
      <Tabs.Screen name="setting" options={{ title: "Settings" }} />
    </Tabs>
  );
}

// Helper function to map tab route names to appropriate icon names
function getTabIconName(routeName: string) {
  switch (routeName) {
    case "index":
      return "feed";
    case "setting":
      return "gear";
    default:
      return "";
  }
}
