import {
    Pressable,
    View,
    Text,
} from "react-native";
import SvgLocation from "../../assets/svg/SvgLocation";
import btnStyles from "../../utilities/functions/btnNavBotStyles";

function BtnNavBotLocation(props) {
    return (
        <Pressable
            android_ripple={{ color: "#EAC696" }}
            style={({ pressed }) => pressed && btnStyles.pressesItem}
            onPress={props.onChangeActive}
        >
            <View style={btnStyles.btnContainer}>
                <SvgLocation activeBtn={props.navBotActive} />
                <Text style={btnStyles.btnText}>Location</Text>
            </View>
        </Pressable>
    )
}

export default BtnNavBotLocation;