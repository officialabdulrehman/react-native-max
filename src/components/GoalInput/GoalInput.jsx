import { useState } from "react"
import { Button, TextInput, View } from "react-native"
import { goalInputStyles } from "./GoalInput.styles"

export const GoalInput = ({ handleAddition }) => {

  const [goal, setGoal] = useState(null)

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
    handleAddition(newGoal)
    setGoal(null)
  }

  return (
    <View style={goalInputStyles.inputContainer}>
      <TextInput style={goalInputStyles.textInput}
        placeholder='Add your goal!'
        onChangeText={handleGoalInputChange}
        value={goal}
      />
      <Button
        style={goalInputStyles.addGoalButton}
        title="Add Goal"
        onPress={handleGoalInputSubmit}
      />
    </View>
  )
}