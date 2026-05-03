import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, ScrollView } from 'react-native';

import TaskItem from './components/TaskItem';
import AddTaskModal from './components/AddTaskModal';
import ConfirmDeleteModal from './components/ConfirmDeleteModal';
import AiTaskModal from './components/AiTaskModal';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);

  const [taskInput, setTaskInput] = useState('');
  const [taskDate, setTaskDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [aiModalVisible, setAiModalVisible] = useState(false);

  function addTask() {
    if (taskInput === '') return;

    setTasks([...tasks, {
      text: taskInput,
      completed: false,
      date: taskDate
    }]);

    setTaskInput('');
    setTaskDate(new Date());
    setModalVisible(false);
  }

  function toggleTask(index) {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  }

  function askDeleteTask(index) {
    setTaskToDelete(index);
    setDeleteModalVisible(true);
  }

  function confirmDelete() {
    const newTasks = [...tasks];
    newTasks.splice(taskToDelete, 1);
    setTasks(newTasks);
    setDeleteModalVisible(false);
  }

  function formatDate(date) {
    return date.toLocaleDateString('nl-BE');
  }

  function addSubtasks(subtasks) {
    const newTasks = subtasks.map((subtask) => ({
        text: subtask.title,
        completed: false,
        date: new Date(),
    }));
    // TODO 5 Voeg de subtaken toe aan de lijst met taken
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>

      <View style={styles.headerRow}>
        <Text style={styles.sectionTitle}>Huidige taken</Text>

        <View style={styles.headerButtons}>
          {/* TODO 1 Voeg een extra button 'AI' toe die de AI modal opent*/}

            <Pressable style={styles.plusButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.plusButtonText}>+</Text>
            </Pressable>
        </View>
      </View>

      <ScrollView>
        {tasks.length === 0 ? (
          <Text style={styles.emptyText}>Nog geen taak toegevoegd</Text>
        ) : (
          tasks.map((task, index) => (
            <TaskItem
              key={index}
              task={task}
              index={index}
              onToggle={toggleTask}
              onAskDelete={askDeleteTask}
              formatDate={formatDate}
            />
          ))
        )}
      </ScrollView>

      <AddTaskModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAdd={addTask}
        taskInput={taskInput}
        setTaskInput={setTaskInput}
        taskDate={taskDate}
        showDatePicker={showDatePicker}
        setShowDatePicker={setShowDatePicker}
        changeDate={(e, d) => {
          setShowDatePicker(false);
          if (d) setTaskDate(d);
        }}
        formatDate={formatDate}
      />

      <ConfirmDeleteModal
        visible={deleteModalVisible}
        onCancel={() => setDeleteModalVisible(false)}
        onConfirm={confirmDelete}
      />

      <AiTaskModal
        visible={aiModalVisible}
        onClose={() => setAiModalVisible(false)}
        onAddSubtasks={addSubtasks}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f4f6',
    paddingTop: 72,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 32,
    textAlign: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1f2937',
  },
  plusButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#2563eb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plusButtonText: {
    color: 'white',
    fontSize: 28,
    lineHeight: 30,
    fontWeight: '600',
  },
  emptyText: {
    fontSize: 16,
    color: '#6b7280',
    fontStyle: 'italic',
    marginTop: 20,
  },
  headerButtons: {
   flexDirection: 'row',
   gap: 8,
  },
  aiButton: {
   height: 44,
   paddingHorizontal: 14,
   borderRadius: 22,
   backgroundColor: '#7c3aed',
   justifyContent: 'center',
   alignItems: 'center',
  },
  aiButtonText: {
   color: 'white',
   fontWeight: '700',
  }, 
});