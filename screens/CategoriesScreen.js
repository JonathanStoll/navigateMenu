import { Text, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function rederCategoryItem(item) {
    function pressHandeler() {
      navigation.navigate("Meals", {
        categoryID: item.item.id
      });
    }
    return (
      <CategoryGridTile
        title={item.item.title}
        color={item.item.color}
        onPress={pressHandeler}
      />
    );
  }
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={rederCategoryItem}
      numColumns={2}
    />
  );
}

export default CategoriesScreen;
