import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./src/components/button";
import Task from "./src/components/Task";
import { useState } from "react";
import { color } from "@shopify/restyle";

export default function App() {
  const [task, setTask] = useState("");
  const [listTask, setListTask] = useState<any>([]);

  const handlerSubmit = () => {
    if (task !== "") {
      setListTask((pre: string) => [...pre, task]);
      setTask("");
    }
  };
  return (
    <View style={styles.container}>
      {/* Today tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Today Tasks</Text>
        <View style={styles.items}>
          {/* List item */}
          {listTask.length > 0 ? (
            listTask.map((item: string) => <Task text={item} />)
          ) : (
            <Text style={{ color: "red", textAlign: "center", fontSize: 20 }}>
              No task today 123
            </Text>
          )}
        </View>
      </View>
      {/* write a task */}
      <KeyboardAvoidingView behavior={"height"} style={styles.writeTextWrapper}>
        <TextInput
          style={[styles.input]}
          onChangeText={(text) => setTask(text)}
          value={task}
          placeholder="Write a task"
        ></TextInput>
        <TouchableOpacity activeOpacity={0.5} onPress={handlerSubmit}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: "#e6e6ec",
  },
  tasksWrapper: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "700",
  },
  items: {
    marginTop: 20,
  },
  writeTextWrapper: {
    paddingHorizontal: 10,
    position: "absolute",
    bottom: 60,
    width: "100%",
    borderBlockColor: "black",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  input: {
    padding: 15,
    width: 250,
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "#c0c0c0",
    borderWidth: 1,
    // focus:{color:"red"}
  },
  addWrapper: {
    width: 46,
    height: 46,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 60,
  },
  addText: {
    fontSize: 25,
  },
});
