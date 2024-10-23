import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useFetchSurahs } from '../hooks/useFetchSurahs';
import { Ayah } from '@/hooks/type';
import { Surah } from '@/hooks/type';

interface Props {
  onSelectSurah: (surahNumber: number) => void;
}

const SurahList: React.FC<Props> = ({ onSelectSurah }) => {
  const { surahs, loading } = useFetchSurahs();

  if (loading) {
    return <Text>Loading...</Text>;
  }

  return (
    <FlatList
      data={surahs}
      keyExtractor={(item) => item.number.toString()}
      renderItem={({ item }: { item: Surah }) => (
        <TouchableOpacity onPress={() => onSelectSurah(item.number)}>
          <View style={styles.surahItem}>
            <Text>{item.englishName} - {item.numberOfAyahs} Ayahs</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  surahItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
});

export default SurahList;
