import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {

  // TODO: voeg state toe voor de modal (true/false)
  // TODO: voeg state toe voor de input tekst
  // TODO: voeg state toe voor de huidige taak

  function handleAddPress() {
    console.log("plus knop geklikt");
    // TODO: open de modal
  }

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Todo App</Text>

      {/* TODO: maak hier een header row met:
          - links: "Huidige taak"
          - rechts: de + knop
      */}

      {/* tijdelijke + knop  */}
      <Pressable style={styles.plusButton} onPress={handleAddPress}>
        <Text style={styles.plusText}>+</Text>
      </Pressable>

      <View style={styles.taskBox}>
        {/* TODO: toon hier de taak */}
      </View>

      {/* TODO: voeg hier een Modal toe */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 72,
    paddingHorizontal: 24,
    backgroundColor: '#f3f4f6',
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 24,
    textAlign: 'center',
  },

  // TODO: style voor headerRow

  // TODO: style voor sectionTitle

  plusButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'left',
    marginBottom: 16,
  },
  plusText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  taskBox: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    minHeight: 100,
    justifyContent: 'center',
  },
  emptyText: {
    color: '#6b7280',
    fontStyle: 'italic',
  },
});