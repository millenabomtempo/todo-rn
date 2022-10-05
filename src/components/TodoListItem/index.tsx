import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles'

export interface Task {
  id: string;
  title: string;
  done: boolean;
}

interface TodoListItemProps {
  task: Task
  deleteTask: (taskId: string) => void
  toggleTaskDone: (taskId: string) => void
}

export function TodoListItem({ task, deleteTask, toggleTaskDone }: TodoListItemProps) {
  
  function handleToggleTask() {
    toggleTaskDone(task.id)
  }

  function handleDeleteTask() {
    deleteTask(task.id)
  }

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity 
          style={styles.content}
          onPress={handleToggleTask}
        >
          <View style={task.done ? styles.checkedButton: styles.checkButton}>

            {task.done && 
              <Feather
                name='check'
                color="#F2F2F2"
              />
            }
          </View>
          <Text style={task.done ? styles.textChecked : styles.text}>{task.title}</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity 
          style={styles.trashButton}
          onPress={handleDeleteTask}
        >
          <Feather
            name='trash-2'
            size={16}
            color='#808080'
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}