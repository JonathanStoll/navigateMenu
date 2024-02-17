import { Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function rederCategoryItem(item) {
  return <CategoryGridTile title={item.item.title} color={item.item.color} />;
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={rederCategoryItem}
    />
  );
}

export default CategoriesScreen;
