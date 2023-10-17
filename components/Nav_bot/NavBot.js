import {
    View,
    StyleSheet,
} from "react-native";
import BtnNavBotHome from "../Button/BtnNavBotHome";
import BtnNavBotLocation from "../Button/BtnNavBotLocation";
import BtnNavBotSetting from "../Button/BtnNavBotSetting";
import BtnNavBotUser from "../Button/BtnNavBotUser";


function NavBot(props) {
    return (
        <View style={styles.container}>
            <View style={styles.navBotContainer}>
                <View style={styles.navBotItems}>
                    <BtnNavBotHome
                        onChangeActive={() => props.onChangeActive(1)}
                        navBotActive={props.navBotActive}
                    />
                </View>
                <View style={styles.navBotItems}>
                    <BtnNavBotLocation
                        onChangeActive={() => props.onChangeActive(2)}
                        navBotActive={props.navBotActive}
                    />
                </View>
                <View style={styles.navBotItems}>
                    <BtnNavBotSetting
                        onChangeActive={() => props.onChangeActive(3)}
                        navBotActive={props.navBotActive}
                    />
                </View>
                <View style={styles.navBotItems}>
                    <BtnNavBotUser
                        onChangeActive={() => props.onChangeActive(4)}
                        navBotActive={props.navBotActive}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FAFAFA",
        // position: 'absolute',
        // bottom: 0,
        // left: 0,
        // right: 0,
    },
    navBotContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 12,
        paddingBottom: 12,
        paddingHorizontal: 18,
    },
    navBotItems: {
        flex: 1,
    }
});

export default NavBot;