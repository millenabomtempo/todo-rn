import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 8,
  },
  total: {
    backgroundColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 2,
  },
  totalText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#D9D9D9'
  },
  content: {
    marginTop: 20
  },
  contentEmpty: {
    height: 208,
    borderTopWidth: 1,
    borderTopColor: '#333333',
    alignItems: 'center',
    justifyContent: 'center'
  },
  contentEmptyText: {
    fontSize: 14,
    color: '#808080'
  },
})