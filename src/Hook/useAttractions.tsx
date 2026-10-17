import { useEffect, useState } from "react";
import { CardItemTypes } from "../types/Components/CardItemTypes";
import { attractionRepository } from "../Repositories/AttractionRepository";

export function useAttractions() {
  const [data, setData] = useState<CardItemTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      setError(false);

      const response = await attractionRepository.findAll();

      setData(response);
    } catch (err) {
      console.error("[useAttractions] erro ao buscar attractions:", err);
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
