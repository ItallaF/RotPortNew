import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    padding: 16,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderColor: "#eee",
  },

  favoriteBtn: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  ctaBtn: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#2563eb",
    justifyContent: "center",
    alignItems: "center",
  },

  ctaText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});