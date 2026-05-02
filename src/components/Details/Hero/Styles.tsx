import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  hero: {
    height: 400,
    justifyContent: "flex-end",
    width: "100%",
  },

  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: "rgba(0,0,0,0.3)",
  },

  backButton: {
    position: "absolute",
    top: 20,
    left: 20,
    backgroundColor: "#fff",
    padding: 5,
    borderRadius: 50,
  },

  heroTitle: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    padding: 20,
  },
});