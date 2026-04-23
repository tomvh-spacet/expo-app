import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default function App() {

  // TODO 3: voeg state toe voor de modal (true/false)
  // TODO 4: voeg state toe voor de input tekst
  // TODO 5a: voeg state toe voor de huidige taak

  function handleAddPress() {
    console.log("plus knop geklikt");
    // TODO 3 : open de modal
  }

  // TODO 3b: voeg een functie toe om de modal te sluiten

  // TODO 5a: voeg een functie toe om de huidige taak te tonen

  // TODO 6: voeg logica toe om ofwel de placeholder ofwel de taak te tonen

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Todo App</Text>

      {/* TODO 1: maak hier een header row met:
          - links: "Huidige taak" (sectionTitle)
          - rechts: de + knop (zie hieronder)
      */}

      {/* tijdelijke + knop  */}
      <Pressable style={styles.plusButton} onPress={handleAddPress}>
        <Text style={styles.plusText}>+</Text>
      </Pressable>

      <View style={styles.taskBox}>
        {/* TODO 2: toon hier de placeholder of taak */}
      </View>

      {/* TODO 3a: voeg hier een modal toe */}
      {/* TODO 3b: voeg een button toe in de modal om die te sluiten */}
      {/* TODO 4: voeg in de modal een View en TextInput toe */}
      {/* TODO 5a: voeg een button toe in de modal om een taak toe te voegen */}  

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

  // TODO 1: style voor headerRow

  // TODO 1: style voor sectionTitle

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
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    padding: 24,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
  },  
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  secondaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#e5e7eb',
  },
  secondaryButtonText: {
    color: '#111827',
    fontWeight: '600',
  },
  primaryButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#2563eb',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
  },   
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },  
});