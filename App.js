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
  }
  return (
    <View style={styles.appContainer}>
      <GoalInput
        value={text}
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
      ></GoalInput>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem itemData={itemData}></GoalItem>}
          keyExtractor={(item, index) => item.id}
          alwaysBounceVertical={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 30,
    paddingHorizontal: 16,
    flex: 1,
  },

  goalsContainer: {
    flex: 5,
  },
});
