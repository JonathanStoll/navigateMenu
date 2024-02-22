import { Text, View, StyleSheet } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.detailes}>
      <Text style={[styles.detailItem, textStyle]}>{duration} m</Text>
      <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  detailes: {
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
