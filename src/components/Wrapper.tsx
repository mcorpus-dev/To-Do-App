import { ReactNode } from "react";
import { StyleSheet, StyleProp, ViewStyle } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

interface Props {
  style: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Wrapper = ({ style, children }: Props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Wrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
