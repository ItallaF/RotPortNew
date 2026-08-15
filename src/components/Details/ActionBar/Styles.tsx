import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginTop: theme.spacing.lg,
    padding: theme.spacing.md,

    backgroundColor: theme.colors.background,

    // sombra moderna (card flutuante)
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 12,

    elevation: 6,
  },

  // =========================
  // AÇÕES SECUNDÁRIAS
  // =========================
  actions: {
    flexDirection: "row",
    gap: theme.spacing.sm,
  },

  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,

    alignItems: "center",
    justifyContent: "center",

    backgroundColor: "#ffffff",

    // leve profundidade
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,

    elevation: 2,
  },

  // =========================
  // BOTÃO PRINCIPAL (CTA)
  // =========================
  cta: {
    flex: 1,
    marginLeft: theme.spacing.md,

    height: 48,
    borderRadius: 14,

    alignItems: "center",
    justifyContent: "center",

    // cor principal do app
    backgroundColor: theme.colors.primary,

    // destaque visual
    shadowColor: theme.colors.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 10,

    elevation: 5,
  },

  ctaText: {
    color: theme.colors.textLight,
    fontSize: theme.typography.h2.fontSize,
    fontWeight: theme.typography.h2.fontWeight as "600",
    letterSpacing: 0.3,
  },
});
