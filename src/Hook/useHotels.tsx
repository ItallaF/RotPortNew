import { useEffect, useState } from "react";
import { CardItemTypes } from "../types/Components/CardItemTypes";
import { hotelRepository } from "../Repositories/HotelRepository";
export function useHotels() {
  const [data, setData] = useState<CardItemTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      setError(false);

      const response = await hotelRepository.findAll();

      setData(response);
    } catch (err) {
      console.error("[useHotels] erro ao buscar hotels:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  }


  useEffect(() => {
    fetchData();
  }, []);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}
