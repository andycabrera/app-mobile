import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  navbar: {
    backgroundColor: '#4caf50',
    padding: 50,
    alignItems: 'center',
  },
  navbarTitle: {
    fontSize: 34,
    color: 'white',
  },
  contentContainer: {
    alignItems: 'center',
    padding: 10,
  },
  input: {
    width: '100%',
    marginBottom: 10, 
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 5,
  },
  taskItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
  },
  footerButton: {
    backgroundColor: '#4caf50', // Estilo del botón del pie de página
    padding: 10,
    alignItems: 'center',
  },
  footerButtonText: {
    color: 'white',
  },
  buttonContainer: {
    height: 50, // Ajusta la altura según tus necesidades
    marginVertical: 10, // Espacio entre los botones
  },
});
