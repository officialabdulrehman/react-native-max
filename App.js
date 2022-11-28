import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { GoalInput } from './src/components/GoalInput/GoalInput';
import { GoalList } from './src/components/GoalList/GoalList';

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
      <GoalInput
        value={goal}
        handleGoalInputChange={handleGoalInputChange}
        handleGoalInputSubmit={handleGoalInputSubmit}
      />
      <GoalList goals={goals} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    backgroundColor: "#efefef",
  },
});
