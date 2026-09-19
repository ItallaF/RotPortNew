import { restaurantRepository } from "../../Repositories/RestaurantRepository";

class RestaurantService {
  async getAll() {
    const restaurants =
      await restaurantRepository.findAll();

    return restaurants.sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  }

  async getById(id: string) {
    return restaurantRepository.findById(id);
  }
}

export const restaurantService = new RestaurantService();
