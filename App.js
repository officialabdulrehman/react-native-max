import { useState } from 'react';
import { View } from 'react-native';
import { appStyles } from './App.styles';
import { GoalInput } from './src/components/GoalInput/GoalInput';
import { GoalList } from './src/components/GoalList/GoalList';

export default function App() {

  const [goals, setGoals] = useState([])

  const handleSubmission = (goal) => {
    setGoals(currGoals => [goal, ...currGoals])
  }

  return (
    <View style={appStyles.appContainer}>
      <GoalInput
        handleSubmission={handleSubmission}
      />
      <GoalList goals={goals} />
    </View>
  );
}