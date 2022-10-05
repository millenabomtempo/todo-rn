import React, { useState } from 'react'
import { View, TextInput, TouchableOpacity, Image } from 'react-native'
import { Feather } from '@expo/vector-icons'

import { styles } from './styles';

interface AddTodoInputProps {
  addTask: (task: string) => void;
}

export function AddTodoInput({ addTask }: AddTodoInputProps) {
  const [task, setTask] = useState('');

  function handleAddNewTask() {
    if(task !== '') {
      addTask(task)
      setTask('')
    }
  }
  
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        onChangeText={setTask}
        value={task}
        onSubmitEditing={handleAddNewTask}
      />
      <TouchableOpacity 
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleAddNewTask}
      >
        <Feather
          name='plus-circle'
          color="#F2F2F2"
          size={15}
        />
      </TouchableOpacity>
    </View>
  )
}
