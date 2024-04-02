import {
  Platform,
  View,
  Pressable,
  Text,
  Image,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../components/MealDetails";

function MealItem({ itemData }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate("MealDetailScreen", {
      mealId: itemData.id,
    });
  }

  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={(pressed) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={selectMealItemHandler}
      >
        <View>
          <Image source={{ uri: itemData.imageUrl }} style={styles.image} />
          <Text style={styles.title}>{itemData.title}</Text>
        </View>
        <MealDetails itemData={itemData} />
      </Pressable>
    </View>
  );
}

export default MealItem;

const styles = StyleSheet.create({
  buttonPressed: {
    opacity: 0.5,
  },
  button: {
    flex: 1,
  },
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "white",
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowDerection: 0.35,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
