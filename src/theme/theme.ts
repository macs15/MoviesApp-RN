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
      height: 6
    },
    shadowOpacity: 0.29,
    shadowRadius: 8.3,

    elevation: 8
  }
})

export default theme
