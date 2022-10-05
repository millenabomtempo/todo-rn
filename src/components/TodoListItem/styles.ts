import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: 64,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    padding: 12,
    borderRadius: 8
  },
  content: {
    width: '100%',
    flexDirection: 'row'
  },
  text: {
    fontSize: 14,
    color: '#F2F2F2',
    marginHorizontal: 8
  },
  textChecked: {
    fontSize: 14,
    color: '#808080',
    textDecorationLine: 'line-through',
    marginHorizontal: 8
  },
  checkButton: {
    width: 18,
    height: 18,
    borderColor: '#4EA8DE',
    borderWidth: 1,
    borderRadius: 9,
  },
  checkedButton: {
    width: 18,
    height: 18,
    borderColor: '#5E60CE',
    borderWidth: 1,
    borderRadius: 9,
    backgroundColor: '#5E60CE',
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center'
  },
  trashButtonClick: {
    width: 32,
    height: 32,
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  
})