import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type HomeStackParamList = {
  Home: undefined;

  Attractions: undefined;
  Hotels: undefined;
  Restaurants: undefined;
  Events: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type FavoritesStackParamList = {
  Favorites: undefined;
};

export type AppTabParamList = {
  Home: NavigatorScreenParams<HomeStackParamList>;
  Favorites: NavigatorScreenParams<FavoritesStackParamList>;
  Profile: NavigatorScreenParams<ProfileStackParamList>;
};

export type RootStackParamList = {
  App: NavigatorScreenParams<AppTabParamList>;

  Details: {
    id: string;
    type: "event" | "attraction" | "hotel" | "restaurant";
  };
};

export type RootNavigationProp = NativeStackNavigationProp<RootStackParamList>;