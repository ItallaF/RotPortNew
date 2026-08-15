import { Attraction } from "../types/Components/Attraction";
import { FirestoreRepository } from "./FirestoreRepository";

export const attractionRepository =
  new FirestoreRepository<Attraction>(
    "attractions"
  );
  