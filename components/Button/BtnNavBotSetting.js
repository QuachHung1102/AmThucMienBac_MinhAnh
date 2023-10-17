import {
    Pressable,
    View,
    Text,
} from "react-native";
import SvgSetting from '../../assets/svg/SvgSetting';
import btnStyles from "../../utilities/functions/btnNavBotStyles";

function BtnNavBotSetting(props) {
    return (
        <Pressable
            android_ripple={{ color: "#EAC696" }}
            style={({ pressed }) => pressed && btnStyles.pressesItem}
            onPress={props.onChangeActive}
        >
            <View style={btnStyles.btnContainer}>
                <SvgSetting activeBtn={props.navBotActive} />
                <Text style={btnStyles.btnText}>Setting</Text>
            </View>
        </Pressable >
    )
}

export default BtnNavBotSetting;