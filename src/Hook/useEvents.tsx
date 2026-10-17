import { useEffect, useState } from "react";
import { eventRepository } from "../Repositories/EventRepository";
import { CardItemTypes } from "../types/Components/CardItemTypes";

export function useEvents() {
  const [data, setData] = useState<CardItemTypes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      setError(false);

      const response = await eventRepository.findAll();

      setData(response);
    } catch (err) {
      console.error("[useEvents] erro ao buscar events:", err);
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