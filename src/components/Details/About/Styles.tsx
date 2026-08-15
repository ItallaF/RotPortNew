import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  AboutContainer: {
    backgroundColor: theme.colors.background,
    marginTop: -20,
    borderTopLeftRadius: theme.spacing.xxl,
    borderTopRightRadius: theme.spacing.xxl,
    padding: theme.spacing.xl,
  },

  category: {
    color: theme.colors.textSecondary,
    fontSize: theme.typography.h4.fontSize,
    marginBottom: theme.spacing.md,
  },

  description: {
    fontSize: theme.typography.body.fontSize,
    color: theme.colors.textPrimary,
    lineHeight: 22,
  },
});