import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  actionBar: {
    flexDirection: "row",
    padding: theme.spacing.lg,
    backgroundColor: theme.colors.background,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
  },

  favoriteBtn: {
    width: 50,
    height: 50,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.backgroundDark,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },

  ctaBtn: {
    flex: 1,
    height: 50,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.primaryDark,
    justifyContent: "center",
    alignItems: "center",
  },

  ctaText: {
    color: theme.colors.textLight,
    fontWeight: theme.typography.h4.fontWeight as "600",
    fontSize: theme.typography.h4.fontSize,
  },
});