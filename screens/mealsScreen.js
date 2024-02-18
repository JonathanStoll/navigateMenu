import { Text, View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { MEALS } from "../data/dummy-data";

function MealsScreen({ route }) {
  const catID = route.params.categoryID;
  const displayMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catID) >= 0;
  });

  function renderMealItem(itemData){
    return <MealItem title={itemData.item.title} />
  }

  return (
    <View style={styles.container}>
      <FlatList 
      data={displayMeals}
      keyExtractor={(item)=>item.id}
      renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
