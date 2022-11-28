import { useState } from 'react';
import { View } from 'react-native';
import { appStyles } from './App.styles';
import { GoalInput } from './src/components/GoalInput/GoalInput';
import { GoalList } from './src/components/GoalList/GoalList';

export default function App() {

  const [goals, setGoals] = useState([])

  const handleAddition = (goal) => {
    setGoals(currGoals => [goal, ...currGoals])
  }

  const handleDeletion = (goalToBeDeleted) => {
    setGoals(currGoals => currGoals.filter(goal => goal.id !== goalToBeDeleted.id))
  }

  return (
    <View style={appStyles.appContainer}>
      <GoalInput
        handleAddition={handleAddition}
      />
      <GoalList goals={goals} handleDeletion={handleDeletion} />
    </View>
  );
}