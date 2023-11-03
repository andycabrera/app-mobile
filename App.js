import React, { useState } from "react";
import { View, Button, Alert, TouchableOpacity, StyleSheet } from "react-native";
import TaskList from "./components/TaskList";
import Form from "./components/Form";
import CameraComponent from "./components/Camara";
import { styles } from "./styles/appStyles";

export default function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [activeComponent, setActiveComponent] = useState('TaskList'); // Inicialmente muestra el componente Form


  const addTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      Alert.alert("Tarea agregada con éxito");
      setTask("");
    } else {
      Alert.alert("Debe ingresar una tarea válida");
    }
  };

  const removeTask = (taskIndex) => {
    const updatedTasks = tasks.filter((_, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      {/* Componente que se muestra */}
      {activeComponent === "Form" && <Form />}
      {activeComponent === "Camera" && <CameraComponent />}
      {activeComponent === "TaskList" && (
        <TaskList
          task={task}
          setTask={setTask}
          tasks={tasks}
          addTask={addTask}
          removeTask={removeTask}
          button="Agregar Tarea"
        />
      )}

      {/* Botones en el footer con mayor altura */}
      <View style={styles.buttonContainer}>
        <Button title="Mostrar Form" onPress={() => setActiveComponent('Form')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Mostrar Cámara" onPress={() => setActiveComponent('Camera')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Mostrar Lista de Tareas" onPress={() => setActiveComponent('TaskList')} />
      </View>
    </View>
  );
}

