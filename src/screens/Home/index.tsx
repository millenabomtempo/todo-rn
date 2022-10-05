import React, { useState } from 'react'
import { View, StyleSheet, Alert } from 'react-native'

import { AddTodoInput } from '../../components/AddTodoInput'
import { Header } from '../../components/Header'
import { TodoList } from '../../components/TodoList'
import { Task } from '../../components/TodoListItem'

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([])
  
  function handleAddTask(newTaskTitle: string) {
    if(tasks.find(task => task.title === newTaskTitle)) {
      return Alert.alert('Task já cadastrada', 'Você não pode cadastrar uma task com o mesmo nome')
    }
    
    const data = {
      id:  String(new Date().getTime()),
      title: newTaskTitle,
      done: false
    }

    setTasks(oldState => [...oldState, data])
  }

  function handleToggleTaskDone(id: string) {
    const updatedTasks = tasks.map(task => task.id === id ? {
      ...task,
      done: !task.done
    }: task)

    setTasks(updatedTasks)
  }
  
  function handleRemoveTask(id: string) {
    Alert.alert('Remover item', 'Tem certeza que você deseja remover esse item?', [
      { 
        text: 'Sim', 
        onPress: () => setTasks(oldState => oldState.filter(
          task => task.id !== id
        ))
      },
      { 
        text: 'Não', 
        style: 'cancel'
      },
    ])
  }

  const totalCompleted = tasks.reduce((acc, task) => {
    if(task.done === true) {
      return acc + 1
    }
    return acc
  }, 0)

  return (
    <View style={styles.container}>
      <Header />
      <AddTodoInput
        addTask={handleAddTask}
      />
      <TodoList 
        tasks={tasks}
        onHandleUpdateTaskStatus={handleToggleTaskDone}
        onHandleDeleteTask={handleRemoveTask} 
        isListEmpty={tasks.length ? false : true}
        totalCompleted={totalCompleted}
      />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
  },
})