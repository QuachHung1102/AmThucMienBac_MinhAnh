import { View, Image, StyleSheet } from "react-native";

function BigFood({ image }) {
    return (
        <View style={styles.imageItem}>
            <Image
                source={image}
                style={styles.image}
            />
        </View>
    );
}

export default BigFood;

const styles = StyleSheet.create({
    imageItem: {
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: "cover",
    },
})