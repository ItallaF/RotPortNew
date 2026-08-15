import { Hotel } from "../types/Components/Hotel";
import { FirestoreRepository } from "./FirestoreRepository";

export const hotelRepository =
  new FirestoreRepository<Hotel>(
    "hotels"
  );
  