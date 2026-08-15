import React, { FC } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeStack from "../stacks/HomeStack";
import ProfileStack from "../stacks/ProfileStack";
import FavoritesStack from "../stacks/FavoritesStack";
import { TAB_CONFIG } from "./tabConfig";
import { AppTabParamList } from "../types";
import { styles } from "./Styles";
import { AppTabIcon } from "../../components/common/AppTabIcon";
import { SvgProps } from "react-native-svg";

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function TabNavigator() {

  const renderTabIcon = (icon: FC<SvgProps>, color: string, focused: boolean) => {
    return (
      <AppTabIcon
        icon={icon}
        color={color}
        focused={focused}
      />
    );
  }

  return (
    <Tab.Navigator
      screenOptions={({ route }) => {
        const config = TAB_CONFIG[route.name];

        return {
          headerShown: false,
          popToTopOnBlur: true,


          tabBarStyle: styles.tabBar,

          tabBarLabelStyle: styles.label,

          tabBarIcon: ({ color, focused }) => renderTabIcon(
            config.icon,
            color,
            focused
          ),
        };
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeStack}
      />


      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileStack}
      />
    </Tab.Navigator>
  );
}
