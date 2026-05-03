import { useState } from 'react';
import {
  ActivityIndicator,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

// TODO 3 gebruik de juiste API KEY
const OPENAI_API_KEY = 'YOUR API KEY';
const PROMPT_ID = 'pmpt_69f7044fa30881978abd816e383d5def0300f78a6bb1437f';

export default function AiTaskModal({ visible, onClose, onAddSubtasks }) {
  const [aiInput, setAiInput] = useState('');
  const [subtasks, setSubtasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  function resetAndClose() {
    setAiInput('');
    setSubtasks([]);
    setErrorMessage('');
    setLoading(false);
    onClose();
  }

  async function splitTask() {
    if (aiInput === '') {
      setErrorMessage('Geef eerst een taak in.');
      return;
    }
    setLoading(true);
    setErrorMessage('');
    setSubtasks([]);
    try {
      const response = await fetch('https://api.openai.com/v1/responses', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: {
            id: PROMPT_ID,
          },
          input: aiInput,
        }),
      });
      const data = await response.json();
      if (!response.ok) {
        console.log(data);
        throw new Error('API fout');
      }
      const outputText = getOutputText(data);
      const parsedOutput = JSON.parse(outputText);
      if (!parsedOutput.is_task) {
        setErrorMessage('Dit lijkt geen taak te zijn.');
        setSubtasks([]);
        return;
      }
      setSubtasks(parsedOutput.subtasks);
    } catch (error) {
      console.log(error);
      setErrorMessage('Er ging iets mis bij het splitsen.');
    } finally {
      setLoading(false);
    }
  }

  function getOutputText(data) {
    if (data.output_text) {
      return data.output_text;
    }
    const message = data.output.find((item) => item.type === 'message');
    const textItem = message.content.find((item) => item.type === 'output_text');
    return textItem.text;
  }

  function addTasks() {
    onAddSubtasks(subtasks);
    resetAndClose();
  }

  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Taak splitsen</Text>
          {subtasks.length === 0 && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Typ een grote taak..."
                value={aiInput}
                onChangeText={setAiInput}
              />
              <View style={styles.modalButtons}>
                <Pressable style={styles.secondaryButton} onPress={resetAndClose}>
                  <Text style={styles.secondaryButtonText}>Annuleer</Text>
                </Pressable>
                {/* TODO 2 Roep de juiste functie aan bij onPress*/}
                <Pressable style={styles.aiButton} onPress={() => console.log("Splits taak")}>
                  <Text style={styles.primaryButtonText}>Splits</Text>
                </Pressable>
              </View>
            </>
          )}
          {loading && (
            <View style={styles.loadingBox}>
              {/* TODO 4 Voeg een activity indicator toe*/}
              <Text style={styles.loadingText}>Taak wordt opgesplitst...</Text>
            </View>
          )}
          {errorMessage !== '' && (
            <Text style={styles.errorText}>{errorMessage}</Text>
          )}
          {subtasks.length > 0 && (
            <>
              <Text style={styles.subtitle}>Voorgestelde deeltaken</Text>
              <View style={styles.subtaskList}>
                {subtasks.map((subtask) => (
                  <View key={subtask.id} style={styles.subtaskItem}>
                    <Text style={styles.subtaskText}>{subtask.title}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.modalButtons}>
                <Pressable style={styles.secondaryButton} onPress={resetAndClose}>
                  <Text style={styles.secondaryButtonText}>Annuleer</Text>
                </Pressable>
                <Pressable style={styles.primaryButton} onPress={addTasks}>
                  <Text style={styles.primaryButtonText}>Toevoegen</Text>
                </Pressable>
              </View>
            </>
          )}
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
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
  modalTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  loadingBox: {
    alignItems: 'center',
    marginVertical: 16,
    gap: 8,
  },
  loadingText: {
    color: '#6b7280',
  },
  errorText: {
    color: '#dc2626',
    marginTop: 12,
    marginBottom: 12,
  },
  subtaskList: {
    gap: 10,
    marginBottom: 20,
  },
  subtaskItem: {
    backgroundColor: '#f3f4f6',
    borderRadius: 10,
    padding: 12,
  },
  subtaskText: {
    fontSize: 16,
    color: '#111827',
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
  aiButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#7c3aed',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});