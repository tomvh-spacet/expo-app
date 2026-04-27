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

    <View style={styles.headerRow}>
      <Text style={styles.sectionTitle}>Huidige taak</Text>
        <Pressable style={styles.plusButton} onPress={handleAddPress}>
          <Text style={styles.plusText}>+</Text>
        </Pressable>
    </View>

      <View style={styles.taskBox}>
        {/*<Text style={styles.emptyText}>
          Nog geen taak toegevoegd
        </Text>*/}
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
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
});