import { useLayoutEffect } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import IconButton from "../components/IconButton";
function MealScreen({ route, navigation }) {
  const id = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === id);

  const selectedMealDetails = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  };
  const headerButtonHandeler = () => {
    console.log("press");
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={"star"}
            onPress={headerButtonHandeler}
            color={"white"}
          />
        );
      },
    });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <View>
        <MealDetails {...selectedMealDetails} textStyle={{ color: "white" }} />
      </View>
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle title={"Ingridients"} />
          <List data={selectedMeal.ingredients} />
          <Subtitle title={"Steps"} />
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 24,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    margin: 8,
    color: "white",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
