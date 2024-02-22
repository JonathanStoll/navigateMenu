import { Text, View, StyleSheet } from "react-native";
function Subtitle({title}) {
  return (
    <View style={styles.subTitleContainer}>
      <Text style={styles.subTitle}>{title}</Text>
    </View>
  );
}
export default Subtitle;

const styles =StyleSheet.create({
    subTitle: {
        color: "#eaa46a",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
      },
      subTitleContainer: {
        marginHorizontal: 12,
        marginVertical: 4,
        padding: 6,
        borderBottomColor: "#eaa46a",
        borderBottomWidth: 2,
      },
})