import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  App: undefined;
};

export type AppTabParamList = {
  Home: undefined;
  Attractions: undefined;
  Hotels: undefined;
  Restaurants: undefined;
  Events: undefined;
};

export type NavigationProps = BottomTabNavigationProp<AppTabParamList>;

export type HomeStackParamList = {
  Home: undefined;
};

export type AttractionsStackParamList = {
  Attractions: undefined;
  Cachoeira: undefined;
};

export type HotelsStackParamList = {
  Hotels: undefined;
};

export type RestaurantsStackParamList = {
  Restaurants: undefined;
};

export type EventsStackParamList = {
  Events: undefined;
};