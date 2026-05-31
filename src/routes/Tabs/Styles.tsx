import { StyleSheet } from "react-native";
import { theme } from "../../theme";

export const styles = StyleSheet.create({
  label: {
    fontSize: theme.typography.caption.fontSize,
    fontWeight: "600",
  },
  tabBar: {
    position: "absolute",
    left: theme.spacing.lg,
    right: theme.spacing.lg,
    height: 70,

    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,

    backgroundColor: theme.colors.surface,

    borderTopWidth: 0,

    elevation: 8,

    shadowColor: theme.shadows.card.shadowColor,

    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: theme.shadows.card.shadowOpacity,
    shadowRadius: 20,

    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
  },
});