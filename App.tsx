import { useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import Wrapper from "./src/components/Wrapper";
import Title from "./src/components/Title";
import Form from "./src/components/Form";
import Todo from "./src/components/Todo";
import Footer from "./src/components/Footer";

import { ITodo } from "./src/types";

const App = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const handleAdd = (todo: ITodo) => {
    setTodos((currentTodos) => [...currentTodos, todo]);
  };

  const handleToggle = (todo: ITodo) => {
    setTodos((currentTodos) => {
      return [...currentTodos].map((t) => {
        if (t.id === todo.id) {
          t.isCompleted = !t.isCompleted;
        }

        return t;
      });
    });
  };

  const handleDelete = (todo: ITodo) => {
    setTodos((currentTodos) =>
      [...currentTodos].filter((t) => t.id !== todo.id)
    );
  };

  const remainingTodos = todos.filter((todo) => !todo.isCompleted).length;

  return (
    <Wrapper style={styles.container}>
      <Title text="Your To Do" />

      <Form onAdd={handleAdd} />

      <FlatList
        style={styles.list}
        data={todos}
        renderItem={({ item }) => (
          <Todo item={item} onToggle={handleToggle} onDelete={handleDelete} />
        )}
        contentContainerStyle={{ gap: 20 }}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={<Footer remainingTodos={remainingTodos} />}
      />
    </Wrapper>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    gap: 32,
  },
  list: {
    flex: 1,
  },
});
