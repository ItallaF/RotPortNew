import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  section: {
    padding: theme.spacing.lg,
  },

  title: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight as any,
    marginBottom: theme.spacing.md,
    color: theme.colors.textPrimary,
  },

  featured: {
    borderRadius: theme.radius.lg,
    overflow: "hidden",
  },

  featuredImage: {
    height: 160,
    justifyContent: "flex-end",
  },

  featuredOverlay: {
    backgroundColor: "rgba(0,0,0,0.4)",
    padding: 12,
  },

  featuredText: {
    color: "#fff",
    fontWeight: "600",
  },
});