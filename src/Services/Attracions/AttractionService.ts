import { attractionRepository } from "../../Repositories/AttractionRepository";

class AttractionService {
  async getAll() {
    const attractions =
      await attractionRepository.findAll();

    return attractions.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  async getById(id: string) {
    return attractionRepository.findById(id);
  }
}

export const attractionService =
  new AttractionService();