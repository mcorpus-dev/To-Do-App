import { StyleSheet, Alert, Text, View, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { ITodo } from "../types";

interface TodoProps {
  item: ITodo;
  onToggle: (todo: ITodo) => void;
  onDelete: (todo: ITodo) => void;
}

const Todo = ({ item, onToggle, onDelete }: TodoProps) => {
  const handleDelete = () => {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "No", style: "cancel" },
      { text: "Yes", style: "destructive", onPress: () => onDelete(item) },
    ]);
  };

  return (
    <View
      style={[styles.container, item.isCompleted && styles.completedContainer]}
    >
      <Pressable onPress={() => onToggle(item)} hitSlop={12}>
        <Feather
          name={item.isCompleted ? "check-square" : "square"}
          size={24}
          color={item.isCompleted ? "grey" : "black"}
        />
      </Pressable>

      <Text style={[styles.text, item.isCompleted && styles.completedText]}>
        {item.text}
      </Text>

      <Pressable onPress={handleDelete} hitSlop={12}>
        <Feather
          name="delete"
          size={24}
          color={item.isCompleted ? "grey" : "black"}
        />
      </Pressable>
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
  },
  completedContainer: {
    borderColor: "grey",
  },
  text: {
    flex: 1,
    color: "black",
  },
  completedText: {
    color: "grey",
    textDecorationLine: "line-through",
  },
});
