import { useState, useEffect } from 'react';
import axios from 'axios';
import { Surah } from './type';

export const useFetchSurahs = () => {
  const [surahs, setSurahs] = useState<Surah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchSurahs = async () => {
      try {
        const response = await axios.get('https://api.alquran.cloud/v1/surah');
        setSurahs(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching surahs:', error);
        setLoading(false);
      }
    };
    fetchSurahs();
  }, []);

  return { surahs, loading };
};
