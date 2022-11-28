import { useState } from 'react';
import { Button, Text, View } from 'react-native';
import { appStyles } from './App.styles';
import { GoalInput } from './src/components/GoalInput/GoalInput';
import { GoalList } from './src/components/GoalList/GoalList';

export default function App() {

  const [goals, setGoals] = useState([])
  const [modal, setModal] = useState(false)

  const handleAddition = (goal) => {
    setGoals(currGoals => [goal, ...currGoals])
  }

  const handleDeletion = (goalToBeDeleted) => {
    setGoals(currGoals => currGoals.filter(goal => goal.id !== goalToBeDeleted.id))
  }

  const showModal = () => {
    setModal(true)
  }

  const hideModal = () => {
    setModal(false)
  }

  return (
    <View style={appStyles.appContainer}>
      <Text style={appStyles.appTitle}>My Goals!</Text>
      <GoalList goals={goals} handleDeletion={handleDeletion} />
      <Button
        color="rgba(83, 196, 247, 1)"
        title='Add Goal'
        onPress={showModal}
      />
      {modal ? <GoalInput
        visible={modal}
        hideModal={hideModal}
        handleAddition={handleAddition}
      /> : null}
    </View>
  );
}