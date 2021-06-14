import { StyleSheet } from 'react-native'

const theme = StyleSheet.create({
  appContainer: {
    backgroundColor: 'white'
  },
  title: {
    color: '#333',
    fontSize: 20,
    fontWeight: 'bold'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowOpacity: 0.41,
    shadowRadius: 8.11,

    elevation: 10
  }
})

export default theme
