import { useState } from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  FlatList,
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
export default function App() {
  const [text, setText] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);
  const [goals, setGoals] = useState([]);
  function goalInputHandler(text) {
    setText(text);
  }
  function addGoalHandler() {
    setGoals((current) => [
      ...current,
      { text: text, id: Math.random().toString() },
    ]);
    setText("");
    setModalVisibility(false);
  }
  function deleteItem(id) {
    setGoals((current) => current.filter((item) => item.id != id));
  }
  function startAddGoal() {
    setModalVisibility(true);
  }
  function endAddGoal() {
    setModalVisibility(false);
  }
  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#6666ff"
        onPress={startAddGoal}
      ></Button>

      <GoalInput
        visible={modalVisibility}
        value={text}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        endAddGoal={endAddGoal}
      ></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => (
            <GoalItem
              itemData={itemData}
              onDeleteHandler={deleteItem}
            ></GoalItem>
          )}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: "#d9d9d9",
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
