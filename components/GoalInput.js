import { StyleSheet, View, Button, TextInput } from "react-native";
export default function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={props.value}
        onChangeText={props.goalInputHandler}
        style={styles.textInput}
        placeholder="Your course goal!"
      ></TextInput>
      <Button onPress={props.addGoalHandler} title="ADD GOAL"></Button>
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 20,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
});
