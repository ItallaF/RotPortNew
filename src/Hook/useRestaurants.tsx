import { useEffect, useState } from "react";
import { CardItemTypes } from "../types/Components/CardItemTypes";
import { restaurantRepository } from "../Repositories/RestaurantRepository";

export function useRestaurants() {
  const [data, setData] = useState<CardItemTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      setError(false);

      const response = await restaurantRepository.findAll();

      setData(response);
    } catch (err) {
      console.error("[useRestaurants] erro ao buscar restaurants:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);


  return { data, loading, error, refetch: fetchData };
}