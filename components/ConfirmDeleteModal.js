import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ConfirmDeleteModal({ visible, onCancel, onConfirm }) {
  return (
    <Modal visible={visible} animationType="fade" transparent={true}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Ben je zeker?</Text>

          <View style={styles.modalButtons}>
            <Pressable style={styles.secondaryButton} onPress={onCancel}>
              <Text style={styles.secondaryButtonText}>Nee</Text>
            </Pressable>

            <Pressable style={styles.dangerButton} onPress={onConfirm}>
              <Text style={styles.primaryButtonText}>Ja</Text>
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
  dangerButton: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 10,
    backgroundColor: '#dc2626',
  },
  primaryButtonText: {
    color: 'white',
    fontWeight: '600',
  },
});