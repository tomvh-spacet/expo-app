import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function TaskItem({ task, index, onToggle, onAskDelete, formatDate }) {
  return (
    <View style={styles.taskItem}>
      <View style={styles.taskInfo}>
        <Pressable onPress={() => onToggle(index)}>
          <Text style={styles.checkbox}>
            {task.completed ? '✅' : '⬜'}
          </Text>
        </Pressable>

        <View>
          <Text
            style={[
              styles.taskText,
              task.completed && styles.completedTaskText
            ]}
          >
            {task.text}
          </Text>

          <Text style={styles.dateText}>
            Uiterste datum: {formatDate(task.date)}
          </Text>
        </View>
      </View>

      <Pressable onPress={() => onAskDelete(index)}>
        <Text style={styles.deleteText}>🗑️</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  taskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  checkbox: {
    fontSize: 22,
  },
  taskText: {
    fontSize: 18,
    color: '#111827',
  },
  completedTaskText: {
    textDecorationLine: 'line-through',
    color: '#6b7280',
  },
  dateText: {
    fontSize: 13,
    color: '#6b7280',
    marginTop: 4,
  },
  deleteText: {
    fontSize: 20,
    marginLeft: 12,
  },
});