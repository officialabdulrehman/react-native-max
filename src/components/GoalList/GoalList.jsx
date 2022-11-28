import { FlatList, View } from "react-native"
import { Goal } from "../Goal/Goal"
import { goalsListStyles } from "./GoalList.styles"

export const GoalList = ({ goals }) => {
  return (
    <View style={goalsListStyles.goalsListContainer}>
      <FlatList
        data={goals}
        renderItem={({ item, index, separators }) => <Goal item={item} />}
        keyExtractor={(item, index) => { item.id + item.value }}
        alwaysBounceVertical={true}
      />
    </View>
  )
}