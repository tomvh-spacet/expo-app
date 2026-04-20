import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

const initialColor = '#f4efe6';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i += 1) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

export default function App() {
  const [backgroundColor, setBackgroundColor] = useState(initialColor);

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Text style={styles.title}>Random background color</Text>
      <Text style={styles.colorValue}>{backgroundColor}</Text>

      <Pressable style={styles.buttonWrapper} onPress={() => setBackgroundColor(getRandomColor())} >
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
buttonWrapper: {
  marginTop: 8,
  backgroundColor: "rgba(255, 255, 255, 0.78)",
  borderRadius: 999,
  paddingHorizontal: 12,
  paddingVertical: 10,
  borderWidth: 1,
  borderColor: "rgba(17, 24, 39, 0.12)",
  width: "50%",
  alignItems: "center",
},
buttonText: {
  color: "#111827",
  fontSize: 18,
  fontWeight: "bold",
}
});
