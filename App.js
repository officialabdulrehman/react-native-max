import { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, View } from 'react-native';
import { Goal } from './src/components/Goal/Goal';

export default function App() {

  const [goal, setGoal] = useState(null)
  const [goals, setGoals] = useState([])

  const handleGoalInputChange = (text) => {
    setGoal(`${text}`)
  }

  const handleGoalInputSubmit = () => {
    if (!goal) {
      return
    }
    const newGoal = {
      id: Math.random().toString(),
      value: goal
    }
    setGoals(currGoals => [newGoal, ...currGoals])
    setGoal(null)
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput}
          placeholder='Add your goal!'
          onChangeText={handleGoalInputChange}
          value={goal}
        />
        <Button
          style={styles.addGoalButton}
          title="Add Goal"
          onPress={handleGoalInputSubmit}
        />
      </View>
      <View style={styles.goalsListContainer}>
        <FlatList
          data={goals}
          keyExtractor={(item, index) => { item.id }}
          renderItem={({ item, index, separators }) => <Goal item={item} />}
        // refreshControl={true} // pull to refresh
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "#efefef",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  textInput: {
    color: '#ccc',
    backgroundColor: "#fff",
    width: "80%",
    paddingHorizontal: 15,
    paddingVertical: 4,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    // marginRight: 8,
  },
  addGoalButton: {
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  goalsListContainer: {
    flex: 5
  },
});
