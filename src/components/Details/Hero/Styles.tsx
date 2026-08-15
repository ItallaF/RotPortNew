import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

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
    top: theme.spacing.xl,
    left: theme.spacing.xl,
    backgroundColor: theme.colors.backgroundDark,
    padding: theme.spacing.xs,
    borderRadius: 50,
  },

  heroTitle: {
    color: theme.colors.textLight,
    fontSize: theme.typography.h1.fontSize,
    fontWeight:theme.typography.h1.fontWeight as "700",
    padding: theme.spacing.xl,
  },
});