import { useState } from "react"
import { Button, Image, Modal, TextInput, View } from "react-native"
import { goalInputStyles } from "./GoalInput.styles"

export const GoalInput = ({ visible, hideModal, handleAddition }) => {

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
    hideModal()
  }

  return (
    <Modal
      visible={visible}
      animationType="fade"
    // transparent
    >
      <View style={goalInputStyles.inputContainer}>
        <Image
          source={require("../../../assets/anime.png")}
          style={goalInputStyles.image}
        />
        <TextInput
          style={goalInputStyles.textInput}
          placeholder='Add your goal!'
          onChangeText={handleGoalInputChange}
          value={goal}
          autoFocus
        />
        <View style={goalInputStyles.buttonsContainer}>
          <View style={goalInputStyles.button}>
            <Button
              color="#FF7043"
              title="Cancel"
              onPress={hideModal}
            />
          </View>
          <View style={goalInputStyles.button}>
            <Button
              style={goalInputStyles.addGoalButton}
              color="rgba(83, 196, 247, 1)"
              title="Add Goal"
              onPress={handleGoalInputSubmit}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}