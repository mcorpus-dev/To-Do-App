import { useState } from "react";
import { StyleSheet, View, TextInput, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { ITodo } from "../types";

interface Props {
  onAdd: (todo: ITodo) => void;
}

const Form = ({ onAdd }: Props) => {
  const [todo, setTodo] = useState("");

  const handleAdd = () => {
    const data: ITodo = {
      id: Math.random(),
      text: todo,
      isCompleted: false,
    };

    onAdd(data);

    setTodo("");
  };

  const isValidTodo = todo.trim().length > 0;

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={todo}
        onChangeText={setTodo}
        placeholder="Add new task"
        placeholderTextColor="grey"
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
      />

      <Pressable
        style={[styles.button, !isValidTodo && styles.disabledButton]}
        disabled={!isValidTodo}
        onPress={handleAdd}
      >
        <Feather name="plus" size={24} color="white" />
      </Pressable>
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 20,
  },
  textInput: {
    flex: 1,
    color: "black",
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "black",
    padding: 4,
    borderRadius: 8,
  },
  disabledButton: {
    backgroundColor: "grey",
  },
});
