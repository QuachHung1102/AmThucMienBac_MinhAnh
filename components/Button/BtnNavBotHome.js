import {
    Pressable,
    View,
    Text,
} from "react-native";
import SvgHome from "../../assets/svg/Svghome";
import btnStyles from "../../utilities/functions/btnNavBotStyles";

function BtnNavBotHome(props) {
    return (
        <Pressable
            android_ripple={{ color: "#EAC696" }}
            style={({ pressed }) => pressed && btnStyles.pressesItem}
            onPress={props.onChangeActive}
        >
            <View style={btnStyles.btnContainer}>
                <SvgHome activeBtn={props.navBotActive} />
                <Text style={btnStyles.btnText}>Home</Text>
            </View>
        </Pressable>
    )
}

export default BtnNavBotHome;