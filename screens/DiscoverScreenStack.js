import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurantScreen from "./RestaurantScreen";
import DiscoverScreen from "./DiscoverScreen";

const DiscorverStack = createNativeStackNavigator();
function DiscoverScreenStack(props) {
    return (
        <DiscorverStack.Navigator
            screenOptions={({ route }) => ({
                headerShadowVisible: false,
            })}
        >
            <DiscorverStack.Group>
                <DiscorverStack.Screen
                    name="DiscoverScreen"
                    component={DiscoverScreen}
                    options={{
                        title: "Khám Phá",
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
            </DiscorverStack.Group>
        </DiscorverStack.Navigator>
    )
}

export default DiscoverScreenStack;

const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'left',
        color: "#634800",
        fontWeight: "700",
        fontSize: 32,
        fontFamily: 'SignikaNegative_700Bold',
    }
})