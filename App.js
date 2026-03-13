import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const initialColor = '#f4efe6';

function getRandomColor() {
  const color = Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padStart(6, '0');

  return `#${color}`;
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Random background color</Text>
      <Text style={styles.colorValue}>{backgroundColor}</Text>

      <Pressable
        onPress={() => setBackgroundColor(getRandomColor())}
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        <Text style={styles.buttonText}>Change color</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    gap: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1f2937',
  },
  colorValue: {
    fontSize: 18,
    color: '#374151',
  },
  button: {
    marginTop: 8,
    backgroundColor: '#111827',
    paddingHorizontal: 20,
    paddingVertical: 14,
    borderRadius: 999,
    shadowColor: '#111827',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 4,
  },
  buttonPressed: {
    opacity: 0.85,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});
