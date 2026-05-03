import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function AddTaskModal({
  visible,
  onClose,
  onAdd,
  taskInput,
  setTaskInput,
  taskDate,
  setShowDatePicker,
  showDatePicker,
  changeDate,
  formatDate,
}) {
  return (
    <Modal visible={visible} animationType="slide" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Nieuwe taak</Text>

          <TextInput
            style={styles.input}
            placeholder="Typ hier een taak..."
            value={taskInput}
            onChangeText={setTaskInput}
            maxLength={30}
          />

          <Pressable
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateButtonText}>
              Kies datum: {formatDate(taskDate)}
            </Text>
          </Pressable>

          {showDatePicker && (
            <DateTimePicker
              value={taskDate}
              mode="date"
              display="default"
              onChange={changeDate}
            />
          )}

          <View style={styles.modalButtons}>
            <Pressable style={styles.secondaryButton} onPress={onClose}>
              <Text style={styles.secondaryButtonText}>Annuleer</Text>
            </Pressable>

            <Pressable style={styles.primaryButton} onPress={onAdd}>
              <Text style={styles.primaryButtonText}>Toevoegen</Text>
            </Pressable>
          </View>
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
  input: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
    marginBottom: 12,
  },
  dateButton: {
    backgroundColor: '#e5e7eb',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  dateButtonText: {
    color: '#111827',
    fontWeight: '600',
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
});