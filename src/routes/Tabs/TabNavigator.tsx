import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stacks/HomeStack";
import AttractionsStack from "../stacks/AttractionsStack";
import EventsStack from "../stacks/EventsStack";

import { ROUTES } from "../routesNames";
import { TAB_CONFIG } from "./tabConfig";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const config =
          TAB_CONFIG[route.name as keyof typeof TAB_CONFIG];

        const Icon = config.icon;

        return {
          headerShown: false,

          tabBarShowLabel: true,

          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "#94A3B8",

          tabBarStyle: {
            position: "absolute",
            left: 16,
            right: 16,

            height: 70,

            borderTopLeftRadius: 24,
            borderTopRightRadius: 24,

            backgroundColor: "#FFFFFF",

            borderTopWidth: 0,

            elevation: 8,

            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 10,
            },
            shadowOpacity: 0.08,
            shadowRadius: 20,

            paddingTop: 10,
            paddingBottom: 10,
          },

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },

          tabBarIcon: ({ color, focused }) => (
            <Icon
              width={22}
              height={22}
              color={color}
              opacity={focused ? 1 : 0.5}
            />
          ),
        };
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME}
        component={HomeStack}
      />


      <Tab.Screen
        name={ROUTES.FAVORITES}
        component={EventsStack}
      />

      <Tab.Screen
        name={ROUTES.PROFILE}
        component={AttractionsStack}
      />
    </Tab.Navigator>
  );
}
