import { Text, View } from "react-native"
import { goalStyles } from "./Goal.styles"

export const Goal = ({ item }) => {
  return (
    <View
      style={goalStyles.goal}>
      <Text
      >{item.value}</Text>
    </View>
  )
}