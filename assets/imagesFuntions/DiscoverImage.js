import { LinearGradient } from "expo-linear-gradient";
import { Image, StyleSheet, View } from "react-native";


function DiscoverImages(props) {
    const image = props.image;
    // const image = { uri: 'https://s3-alpha-sig.figma.com/img/6a26/00c0/07baf99db08af148ec1f2eae398f6660?Expires=1698019200&Signature=Ly7fX7w-0MCX2AqTLHJDwQPDu~IoMl1SPdStFUHSiyWy0xfzvEypVAtO7YpNd3Tk7Fz1ucycN5nAFbiY70xv3HpH39xVtnERvvafNx47-OC7m0pZfnAmw52w0nKVGQfS6F91DHA-IN8aXlN9u2~XweDQw3krsoaqpXB-6aSPqCJIcHBm3i91PNL7htOPR0wkFmuU0qeSi9-q7R1CFa2XbKRVaeyPnXOjBIQUy08TLc~mUy6xsRHQqLvjLzdtPs4hbZ8PJ7vPUgwaf2U79zF6CQPlbv-MR6Me3bGUWDx1cQRJ23PBvrwWQxY53p3QwCG81zJ8zMVvfpCrTpPUqHjIoA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    return (
        <View style={styles.rootScreen}>
            <LinearGradient
                colors={['#FAFAFA', '#090909']}
                start={{ x: 0, y: 0 }}
                end={{ x: 0, y: 1 }}
                locations={[0.5942, 1]}
                style={{ borderRadius: props.borderRadius, }}
            >
                <Image
                    source={image}
                    style={[styles.image, {
                        width: props.width,
                        height: props.height,
                        borderRadius: props.borderRadius,
                    }]}
                />
            </LinearGradient>
        </View>
    )
}

export default DiscoverImages;

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16,
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    }
})