import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    marginTop: -27
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: '#262626',
    marginRight: 4,
    borderRadius: 6,
    padding: 16,
    color: '#F2F2F2'
  },
  button: {
    width: 54,
    height: 54,
    backgroundColor: '#1E6F9F',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  }
})