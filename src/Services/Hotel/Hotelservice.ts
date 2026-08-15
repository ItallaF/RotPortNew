import { hotelRepository } from "../../Repositories/HotelRepository";

class HotelService {
  async getAll() {
    const hotels =
      await hotelRepository.findAll();

    return hotels.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  async getById(id: string) {
    return hotelRepository.findById(id);
  }
}

export const hotelService =
  new HotelService();