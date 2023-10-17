import { StyleSheet } from "react-native";

const btnStyles = StyleSheet.create({
    btnContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
        // width: 54,
    },
    pressesItem: {
        color: "#EAC696",
    },
    btnIcon: {
        color: '#634800',
    },
    btnText: {
        fontSize: 12,
        fontStyle: 'normal',
        fontWeight: '400',
        color: '#634800',
    }
});

export default btnStyles;