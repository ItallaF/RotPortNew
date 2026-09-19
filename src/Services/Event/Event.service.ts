import { eventRepository } from "../../Repositories/EventRepository";

class EventService {
  async getAll() {
    const events = await eventRepository.findAll();

    return events.sort((a, b) => a.title.localeCompare(b.title));
  }

  async getById(id: string) {
    return eventRepository.findById(id);
  }
}

export const eventService = new EventService();
