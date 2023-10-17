import {
    View,
    Text,
    StyleSheet,
    Pressable,
} from 'react-native';
import SvgFilter from '../../assets/svg/SvgFilter';

function NavTop({ text }) {
    return (
        <View style={styles.navContainer}>
            <Text style={styles.navTopText}>{text}</Text>
            <Pressable
                android_ripple={{ color: "#EAC696", radius: 15 }}
                style={({ pressed }) => pressed && styles.pressesItem}
            >
                <View style={styles.navTopIcon}>
                    <SvgFilter />
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    navContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        top: 0,
        paddingHorizontal: 20,
    },
    navTopText: {
        fontSize: 32,
        fontWeight: "700",
        color: "#634800",
        textAlign: "left",
    },
    navTopIcon: {

    },
    pressesItem: {
        color: "#EAC696",
    }
})

export default NavTop;