import React from "react";
import { View, TextInput, Button, Text, FlatList } from "react-native";
import { styles } from "../styles/appStyles";
import TaskCard from "./TaskCard";

const TaskList = ({ task, setTask, tasks, addTask, removeTask, button }) => {
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <Text style={styles.navbarTitle}>Lista de Tareas</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Nueva tarea"
        value={task}
        onChangeText={(text) => setTask(text)}
      />
      <Button title={button} onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TaskCard task={item} onDelete={() => removeTask(index)} />
        )}
      />
    </View>
  );
};

export default TaskList;
