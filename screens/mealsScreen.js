import { Text, View, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";

function MealsScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals screen</Text>
    </View>
  );
}

export default MealsScreen;


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})