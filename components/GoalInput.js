import {
  StyleSheet,
  View,
  Button,
  TextInput,
  Modal,
  Image,
} from "react-native";
export default function GoalInput(props) {
  function addGoalHandler() {}
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        ></Image>
        <TextInput
          value={props.value}
          onChangeText={props.goalInputHandler}
          style={styles.textInput}
          placeholder="Your course goal!"
        ></TextInput>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              onPress={props.addGoalHandler}
              color="#6666ff"
              title="ADD GOAL"
            ></Button>
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              color="#f31282"
              onPress={props.endAddGoal}
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    padding: 10,
    color: "#ffffff",
  },
  inputContainer: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#404040",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    width: "30%",
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});
