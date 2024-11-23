import { StyleSheet, Text } from "react-native";

interface Props {
  remainingTodos: number;
}

const Footer = ({ remainingTodos }: Props) => {
  return (
    <Text style={styles.text}>Your remaining todos: {remainingTodos}</Text>
  );
};

export default Footer;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontStyle: "italic",
  },
});
