import { Restaurant } from "../types/Components/Restaurant";
import { FirestoreRepository } from "./FirestoreRepository";

export const restaurantRepository =
  new FirestoreRepository<Restaurant>(
    "restaurants"
  );
  