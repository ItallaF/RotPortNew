import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  listContainer: {
    paddingHorizontal: theme.spacing.lg,
    paddingTop: theme.spacing.lg,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: theme.spacing.lg,
  },
  card: {
    backgroundColor: theme.colors.surface,
    width: "48%",
    borderRadius: theme.radius.xl,
    overflow: "hidden",

    shadowColor: theme.shadows.card.shadowColor,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: theme.shadows.card.shadowOpacity,
    shadowRadius: theme.shadows.card.shadowRadius,

    elevation: 4,
  },
  img: {
    width: "100%",
    height: 140,
    resizeMode: "cover",
  },
  cardContent: {
    padding: theme.spacing.md,
  },
  title: {
    fontSize: theme.typography.h2.fontSize,
    fontWeight: "600",
    color: theme.colors.textPrimary,
  },
  category: {
    fontSize: theme.typography.body.fontSize,
    fontWeight: "400",
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.xs,
  },
  more: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.primaryDark,
    marginTop: theme.spacing.sm,
    fontWeight: "400",
  },
});