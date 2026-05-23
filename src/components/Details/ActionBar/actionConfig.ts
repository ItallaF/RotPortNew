export type ItemType = "event" | "attraction" | "hotel" | "restaurant";

export type ActionKey =
  | "map"
  | "call"
  | "whatsapp"
  | "share"
  | "favorite";

type ActionConfig = {
  primaryLabel: string;
  primaryAction: ActionKey;
  secondaryActions: ActionKey[];
};

export const ACTION_CONFIG: Record<ItemType, ActionConfig> = {
  event: {
    primaryLabel: "Participar",
    primaryAction: "map",
    secondaryActions: ["share", "favorite"],
  },

  hotel: {
    primaryLabel: "Ver Disponibilidade",
    primaryAction: "whatsapp",
    secondaryActions: ["map", "favorite"],
  },

  restaurant: {
    primaryLabel: "Como Chegar",
    primaryAction: "map",
    secondaryActions: ["whatsapp", "favorite"],
  },

  attraction: {
    primaryLabel: "Explorar",
    primaryAction: "map",
    secondaryActions: ["share", "favorite"],
  },
};