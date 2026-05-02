import { attractions } from "../components/Services/Attractions";
import { events } from "../components/Services/Events";
import { hotels } from "../components/Services/Hotels";
import { restaurants } from "../components/Services/Restaurants";

type Props = {
  id: string;
  type: "event" | "attraction" | "hotel" | "restaurant";
};

export function useDetailsData({ id, type }: Props) {
  const map = {
    event: events,
    attraction: attractions,
    hotel: hotels,
    restaurant: restaurants,
  };

  return map[type]?.find(item => item.id === id) ?? null;
}