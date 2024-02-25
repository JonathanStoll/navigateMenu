import { useContext, useLayoutEffect } from "react";
import { Text, View, Image, StyleSheet, ScrollView } from "react-native";
import { MEALS } from "../data/dummy-data";
// import { FavoritesContext } from "../store/context/favorites-context";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/mealDetail/Subtitle";
import List from "../components/mealDetail/List";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, remuveFavorite } from "../store/redux/favorites";

function MealScreen({ route, navigation }) {
  // const favoriteMealCotx = useContext(FavoritesContext);
  const FavoriteMealsIds =  useSelector((state)=> state.favoriteMeals.ids )
  const dispatch = useDispatch()
  const id = route.params.id;
  const selectedMeal = MEALS.find((meal) => meal.id === id);
  const mealIsFavorite = FavoriteMealsIds.includes(id);

  const selectedMealDetails = {
    duration: selectedMeal.duration,
    complexity: selectedMeal.complexity,
    affordability: selectedMeal.affordability,
  };

  const changeFavoriteHandeler = () => {
    if (mealIsFavorite) {
      // console.log('remuve ', id)
      // favoriteMealCotx.remuveFavorite(id);
      dispatch(remuveFavorite({id:id}))
    } else {
      // console.log('add ', id)
      // favoriteMealCotx.addFavorite(id);
      dispatch(addFavorite({id: id}))
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            icon={mealIsFavorite ? "star" : "star-outline"}
            onPress={changeFavoriteHandeler}
            color={"white"}
          />
        );
      },
    });
  }, [navigation,changeFavoriteHandeler]);
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
