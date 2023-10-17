import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DishIngredients from "../components/foodByArea/DishIngredients";
import HomeScreen from "./HomeScreen";
import { StyleSheet } from "react-native";
import FoodModal from "./FoodModal";

const HomeStack = createNativeStackNavigator();
function HomeScreenStack() {
    return (
        <HomeStack.Navigator
            screenOptions={({ route }) => ({
                headerShadowVisible: false,
            })}
        >
            <HomeStack.Group>
                <HomeStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: "Trang chủ",
                        headerStyle: {
                            backgroundColor: "#FFF3D3",
                        },
                        headerTitleStyle: styles.headerTitle,
                    }}
                />
                <HomeStack.Screen name="DishIngredients" component={DishIngredients} options={{ headerShown: false }} />
            </HomeStack.Group>
            <HomeStack.Group
                screenOptions={{ presentation: 'transparentModal', contentStyle: { backgroundColor: "#40404040" } }}>
                <HomeStack.Screen
                    name="FoodModal"
                    component={FoodModal}
                    options={
                        {
                            headerShown: false,
                        }
                    }
                />
            </HomeStack.Group>
        </HomeStack.Navigator>
    )
}

export default HomeScreenStack;

const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'left',
        color: "#634800",
        fontWeight: "700",
        fontSize: 32,
        fontFamily: 'SignikaNegative_700Bold',
    }
})
