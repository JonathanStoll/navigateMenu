import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import CategoriesScreen from "./screens/CategoriesScreen";
import MealsScreen from "./screens/mealsScreen";
import MealScreen from "./screens/mealScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#6a1010",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#55371f",
        },
        drawerContentStyle: { backgroundColor: "#6a1010" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#f1c1c1",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="grid" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "My Favorites",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#6a1010",
            },
            headerTintColor: "white",
            contentStyle: {
              backgroundColor: "#55371f",
            },
          }}
        >
          <Stack.Screen
            name="DrawerScreen"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Meals" component={MealsScreen} />
          <Stack.Screen name="Meal" component={MealScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
