import React from 'react'
import { View, Text, Image, FlatList } from 'react-native'

import { Task, TodoListItem } from '../TodoListItem'

import clipboardImg from '../../assets/clipboard.png'

import { styles } from './styles'

interface TodoListProps {
  isListEmpty: boolean
  tasks: Task[]
  totalCompleted: number
  onHandleDeleteTask: (taskId: string) => void
  onHandleUpdateTaskStatus: (taskId: string) => void
}

export function TodoList({ isListEmpty, tasks, onHandleDeleteTask, onHandleUpdateTaskStatus, totalCompleted }: TodoListProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={{...styles.text, color: '#4EA8DE'}}>
            Criadas 
          </Text>

          <View style={styles.total}>
            <Text style={styles.totalText}>{tasks.length}</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <Text style={{...styles.text, color: '#8284FA'}}>
            Concluidas 
          </Text>
          <View style={styles.total}>
            <Text style={styles.totalText}>{totalCompleted}</Text>
          </View>
        </View>
      </View>

      <View style={styles.content}>
        {
          isListEmpty ? (
            <View style={styles.contentEmpty}>
              <Image source={clipboardImg}/>
              <Text style={{ ...styles.contentEmptyText, fontWeight: 'bold', marginTop: 16 }}>
                Você ainda não tem tarefas cadastradas
              </Text>
              <Text style={styles.contentEmptyText}>
                Crie tarefas e organize seus itens a fazer
              </Text>
            </View>
          ) : (
          <FlatList
            data={tasks}
            keyExtractor={item => String(item.id)}
            contentContainerStyle={{ paddingBottom: 24 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item, index }) => {
              return (
                <TodoListItem
                  task={item}
                  deleteTask={onHandleDeleteTask}
                  toggleTaskDone={onHandleUpdateTaskStatus}
                />
              )
            }}
          />
          )
        }
      </View>
    </View>
  )
}