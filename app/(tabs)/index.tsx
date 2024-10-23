import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import SurahList from '@/components/surahList';
import SurahDetails from '@/components/SurahDetails';

const App: React.FC = () => {
  const [selectedSurah, setSelectedSurah] = useState<number | null>(null);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quran App</Text>

      {selectedSurah ? (
        <SurahDetails surahNumber={selectedSurah} />
      ) : (
        <SurahList onSelectSurah={(surahNumber) => setSelectedSurah(surahNumber)} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default App;

