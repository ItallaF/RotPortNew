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

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: theme.spacing.lg,
    borderRadius: theme.radius.lg,
    marginBottom: theme.spacing.md,
    alignItems: "center",
    elevation: 2,
  },

  cardText: {
    marginTop: theme.spacing.sm,
    color: theme.colors.textPrimary,
  },
});