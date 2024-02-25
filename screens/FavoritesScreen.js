import { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import MealsList from "../components/mealsList/MealsList";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/dummy-data";

export default function FavoritesScreen() {
  const favoriteMealCtx = useContext(FavoritesContext);

  const favoritesMeals = MEALS.filter((meal) =>
    favoriteMealCtx.ids.includes(meal.id)
  );
  if (favoritesMeals.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>You Have  no Favorite Meals Yet.</Text>
      </View>
    );
  }
  return <MealsList items={favoritesMeals} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
