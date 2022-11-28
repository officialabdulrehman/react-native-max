import { FlatList, View } from "react-native"
import { Goal } from "../Goal/Goal"
import { goalsListStyles } from "./GoalList.styles"

export const GoalList = ({ goals, handleDeletion }) => {
  return (
    <View style={goalsListStyles.goalsListContainer}>
      <FlatList
        data={goals}
        renderItem={({ item, index, separators }) => <Goal item={item} handleDeletion={handleDeletion} />}
        keyExtractor={(item, index) => { item.id + item.value }}
        alwaysBounceVertical={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}