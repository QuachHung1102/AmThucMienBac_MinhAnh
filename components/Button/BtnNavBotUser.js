import {
    Pressable,
    View,
    Text,
} from "react-native";
import SvgUser from "../../assets/svg/SvgUser";
import btnStyles from "../../utilities/functions/btnNavBotStyles";

function BtnNavBotUser(props) {
    return (
        <Pressable
            android_ripple={{ color: "#EAC696" }}
            style={({ pressed }) => pressed && btnStyles.pressesItem}
            onPress={props.onChangeActive}
        >
            <View style={btnStyles.btnContainer}>
                <SvgUser activeBtn={props.navBotActive} />
                <Text style={btnStyles.btnText}>User</Text>
            </View>
        </Pressable>
    )
}

export default BtnNavBotUser;