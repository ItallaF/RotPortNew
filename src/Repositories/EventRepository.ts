import { Event } from "../types/Components/Event";
import { FirestoreRepository } from "./FirestoreRepository";

export const eventRepository =
  new FirestoreRepository<Event>(
    "events"
  );
  