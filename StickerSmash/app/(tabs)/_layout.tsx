import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "white",
        headerStyle: {
          backgroundColor: "red",
        },
        headerShadowVisible: false,
        headerTintColor: "#fff",
        tabBarStyle: {
          backgroundColor: "red",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Decore a PUCCA",
          headerTitleAlign: 'center',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? "home-sharp" : "home-outline"}
              color={color}
              size={24}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "Sobre",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={
                focused ? "information-circle" : "information-circle-outline"
              }
              color={color}
              size={24}
            />
          ),
        }}
      />
    </Tabs>
  );
}
