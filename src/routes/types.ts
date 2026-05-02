import {  NavigatorScreenParams } from "@react-navigation/native";
import {  NativeStackNavigationProp } from "@react-navigation/native-stack";
import {  BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import {  CompositeNavigationProp } from "@react-navigation/native";


// =====================
// STACKS INTERNOS
// =====================

export type HomeStackParamList = {
  Home: undefined;
};

export type AttractionsStackParamList = {
  Attractions: undefined;
  AttractionDetails: { id: string };
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


// =====================
// TABS (AGREGADOR)
// =====================

export type AppTabParamList = {
  HomeTab: NavigatorScreenParams<HomeStackParamList>;
  AttractionsTab: NavigatorScreenParams<AttractionsStackParamList>;
  HotelsTab: NavigatorScreenParams<HotelsStackParamList>;
  RestaurantsTab: NavigatorScreenParams<RestaurantsStackParamList>;
  EventsTab: NavigatorScreenParams<EventsStackParamList>;
};


// =====================
// ROOT STACK
// =====================

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined;
  App: NavigatorScreenParams<AppTabParamList>;
};


// =====================
// NAVIGATION TYPES
// =====================

// 👉 Navigation dentro de Attractions
export type AttractionsNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<AttractionsStackParamList>,
  BottomTabNavigationProp<AppTabParamList>
>;

// 👉 Navigation dentro de Events
export type EventsNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<EventsStackParamList>,
  BottomTabNavigationProp<AppTabParamList>
>;

// 👉 Navigation dentro de Hotels
export type HotelsNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<HotelsStackParamList>,
  BottomTabNavigationProp<AppTabParamList>
>;

// 👉 Navigation dentro de Restaurants
export type RestaurantsNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RestaurantsStackParamList>,
  BottomTabNavigationProp<AppTabParamList>
>;

// 👉 Navigation global (caso precise)
export type RootNavigationProp =
  NativeStackNavigationProp<RootStackParamList>;