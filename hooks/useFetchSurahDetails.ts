
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Ayah } from './type';

export const useFetchSurahDetails = (surahNumber: number) => {
  const [ayahs, setAyahs] = useState<Ayah[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAyahs = async () => {
      try {
        const response = await axios.get(`https://api.alquran.cloud/v1/surah/${surahNumber}`);
        setAyahs(response.data.data.ayahs);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching ayahs:', error);
        setLoading(false);
      }
    };
    fetchAyahs();
  }, [surahNumber]);

  return { ayahs, loading };
};
