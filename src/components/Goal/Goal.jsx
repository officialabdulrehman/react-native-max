import { Pressable, Text, View } from "react-native"
import { goalStyles } from "./Goal.styles"

export const Goal = ({ item, handleDeletion }) => {
  return (
    <View style={goalStyles.goal}>
      <Pressable
        onPress={() => handleDeletion(item)}
        android_ripple={{
          color: "rgba(83, 196, 247, 0.4)",
          borderless: true,
        }}
        style={({ pressed }) => pressed ? goalStyles.pressed : null}
      >
        <Text style={goalStyles.goalText}>{item.value}</Text>
      </Pressable>
    </View >
  )
}