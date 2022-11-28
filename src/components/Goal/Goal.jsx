import { Pressable, Text, View } from "react-native"
import { goalStyles } from "./Goal.styles"

export const Goal = ({ item, handleDeletion }) => {
  return (
    <Pressable
      onPress={() => handleDeletion(item)}
    >
      <View
        style={goalStyles.goal}>
        <Text
        >{item.value}</Text>
      </View>
    </Pressable>
  )
}