import { Linking, Alert } from "react-native";

export type ActionHandlers = {
  map: () => void;
  call: () => void;
  whatsapp: () => void;
  share: () => void;
  favorite: () => void;
};

export function useActionHandlers(data: {
  name: string;
  latitude?: number;
  longitude?: number;
  phone?: string;
  whatsapp?: string;
}): ActionHandlers {
  return {
    map: () => {
      if (!data.latitude || !data.longitude) {
        return Alert.alert("Localização indisponível");
      }

      const url = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
      Linking.openURL(url);
    },

    call: () => {
      if (!data.phone) return Alert.alert("Telefone não disponível");
      Linking.openURL(`tel:${data.phone}`);
    },

    whatsapp: () => {
      if (!data.whatsapp) {
        return Alert.alert("WhatsApp não disponível");
      }

      const msg = `Olá! Gostaria de informações sobre ${data.name}`;
      const url = `https://wa.me/${data.whatsapp}?text=${encodeURIComponent(msg)}`;

      Linking.openURL(url);
    },

    share: () => {
      const msg = `Confira: ${data.name}`;
      Linking.openURL(`https://wa.me/?text=${encodeURIComponent(msg)}`);
    },

    favorite: () => {
      console.log("Favoritado");
    },
  };
}