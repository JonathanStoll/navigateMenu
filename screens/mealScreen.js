import { Text, View, Image, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
function MealScreen({ route }) {
  const id = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const selectedMealDetails = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text>{selectedMeal.title}</Text>
      <View>
        <MealDetails {...selectedMealDetails} />
      </View>
      <Text>ingridents</Text>
      {selectedMeal.ingredients.map((ingridient) => (
        <Text key={ingridient}>{ingridient}</Text>
      ))}
      <Text>steps</Text>
      {selectedMeal.steps.map((step) => (
        <Text key={step}>{step}</Text>
      ))}
    </View>
  );
}

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 18,
  },
});
