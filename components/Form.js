import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { getDatabase, ref, push } from "firebase/database"; // Importa las funciones de la base de datos
import db from "../firebaseConfig"; // Importa la instancia de la aplicación de Firebase
import { collection, addDoc } from "firebase/firestore";

const Form = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [mostrarAlerta, setMostrarAlerta] = useState(false);
  const [mensajeAlerta, setMensajeAlerta] = useState("");

  const handleSubmit = async () => {
    if (nombre.trim() !== "" && apellido.trim() !== "" && edad !== "") {
      const edadInt = parseInt(edad);

      try {
        const usuariosCollection = collection(db, "usuarios");

        const resp = await addDoc(usuariosCollection, {
          nombre,
          apellido,
          edad: edadInt,
        });
        if (resp) {
          setMensajeAlerta(
            "Éxito al enviar el formulario: Eres mayor de 18 años."
          );
        }
      } catch (error) {
        console.log(error);
        setMensajeAlerta("Error");
        setMostrarAlerta(true);
      }

      setMostrarAlerta(true);
      setNombre("");
      setApellido("");
      setEdad("");
    } else {
      setMensajeAlerta("Error: Por favor, completa todos los campos.");
      setMostrarAlerta(true);
    }
  };

  return (
    <View style={styles.container}>
      {mostrarAlerta && (
        <View>
          <Text
            style={
              mensajeAlerta.includes("Éxito")
                ? styles.alertSuccess
                : styles.alertError
            }
          >
            {mensajeAlerta}
          </Text>
        </View>
      )}
      <Text style={styles.label}>Nombre:</Text>
      <TextInput
        style={styles.input}
        value={nombre}
        onChangeText={setNombre}
        placeholder="Ingrese su nombre"
      />
      <Text style={styles.label}>Apellido:</Text>
      <TextInput
        style={styles.input}
        value={apellido}
        onChangeText={setApellido}
        placeholder="Ingrese su apellido"
      />
      <Text style={styles.label}>Edad:</Text>
      <TextInput
        style={styles.input}
        value={edad}
        onChangeText={setEdad}
        placeholder="Ingrese su edad"
        keyboardType="numeric"
      />
      <Button title="Enviar" onPress={handleSubmit} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    fontSize: 16,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  alertSuccess: {
    fontSize: 16,
    color: "green",
    marginBottom: 10,
  },
  alertError: {
    fontSize: 16,
    color: "red", // Color de texto para la alerta de error
    marginBottom: 10,
  },
});
