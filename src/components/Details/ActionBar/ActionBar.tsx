import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { styles } from "./Styles";
import { ACTION_CONFIG, ItemType } from "./actionConfig";
import { useActionHandlers } from "../../../Hook/useActionHandlers";
import { ACTION_ICONS } from "./actionIcons";

type Props = {
  type: ItemType;
  data: {
    name: string;
    latitude?: number;
    longitude?: number;
    phone?: string;
    whatsapp?: string;
  };
};

export function ActionBar({ type, data }: Props) {
  const config = ACTION_CONFIG[type];
  const handlers = useActionHandlers(data);

  return (
    <View style={styles.container}>
      <View style={styles.actions}>
        {config.secondaryActions.map(action => {
          const Icon = ACTION_ICONS[action];

          return (
            <TouchableOpacity
              key={action}
              style={styles.iconBtn}
              onPress={handlers[action]}
            >
              <Icon
                width={45}
                height={45}
              />
            </TouchableOpacity>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.cta}
        onPress={handlers[config.primaryAction]}
      >
        <Text style={styles.ctaText}>{config.primaryLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}