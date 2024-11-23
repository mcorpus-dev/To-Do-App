import { StyleSheet, Text } from "react-native";

interface Props {
  text: string;
}

const Title = ({ text }: Props) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  text: {
    color: "black",
    fontSize: 28,
    fontWeight: "bold",
  },
});
