import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useFetchSurahDetails } from '@/hooks/useFetchSurahDetails';

interface Props {
  surahNumber: number;
}

const SurahDetails: React.FC<Props> = ({ surahNumber }) => {
  const { ayahs, loading } = useFetchSurahDetails(surahNumber);

  if (loading) {
    return <Text>Loading Ayahs...</Text>;
  }

  return (
    <FlatList
      data={ayahs}
      keyExtractor={(item) => item.number.toString()}
      renderItem={({ item }) => (
        <View style={styles.ayahItem}>
          <Text>{item.text}</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  ayahItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
});

export default SurahDetails;
