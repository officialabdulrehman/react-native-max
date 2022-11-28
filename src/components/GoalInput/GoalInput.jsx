import { Button, TextInput, View } from "react-native"
import { goalInputStyles } from "./GoalInput.styles"

export const GoalInput = ({ value, handleGoalInputChange, handleGoalInputSubmit }) => {
  return (
    <View style={goalInputStyles.inputContainer}>
      <TextInput style={goalInputStyles.textInput}
        placeholder='Add your goal!'
        onChangeText={handleGoalInputChange}
        value={value}
      />
      <Button
        style={goalInputStyles.addGoalButton}
        title="Add Goal"
        onPress={handleGoalInputSubmit}
      />
    </View>
  )
}