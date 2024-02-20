import { Text } from "react-native";

function MealScreen({ route }) {
  const id = route.params.id;
  return <Text>this is the meal id {id}</Text>;
}

export default MealScreen;
