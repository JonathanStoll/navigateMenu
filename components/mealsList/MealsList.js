import { View, FlatList, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import MealItem from "./MealItem";

export default function MealsList({ items }) {
  const navigation = useNavigation();
  function renderMealItem(itemData) {
    const item = itemData.item;

    const navigationHandeler = () => {
      navigation.navigate("Meal", { id: item.id });
    };
    const mealItemProps = {
      title: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      duration: item.duration,
      affordability: item.affordability,
      onPress: navigationHandeler,
    };
    return <MealItem {...mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});
