import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./RestaurantScreen";
import UserScreen from "./UserScreen";
import DishIngredients from "../components/foodByArea/DishIngredients";

const DiscorverStack = createNativeStackNavigator();
function UserScreenStack(props) {
    return (
        <DiscorverStack.Navigator
            screenOptions={({ route }) => ({
                headerShadowVisible: false,
            })}
        >
            <DiscorverStack.Group>
                <DiscorverStack.Screen
                    name="UserScreen"
                    component={UserScreen}
                    options={{
                        title: "Cá Nhân",
                        headerStyle: {
                            backgroundColor: "#FFF3D3",
                        },
                        headerTitleStyle: styles.headerTitle,
                    }}
                />
                <DiscorverStack.Screen
                    name="RestaurantScreen"
                    component={RestaurantScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <DiscorverStack.Screen
                    name="DishIngredients"
                    component={DishIngredients}
                    options={{
                        headerShown: false
                    }}
                />
            </DiscorverStack.Group>
        </DiscorverStack.Navigator>
    )
}

export default UserScreenStack;

const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'left',
        color: "#634800",
        fontWeight: "700",
        fontSize: 32,
        fontFamily: 'SignikaNegative_700Bold',
    }
})