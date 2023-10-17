import { Image, View, StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

function FoodImages(props) {
    const image = props.imageUri;
    // const image = { uri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1698624000&Signature=qRnN2dceT0SCaSy~m1PZSDNGRKMTEF14ZyNecyjGDamME3m6GPgm4CsFne~mLwOqWnbKgpvijljXtwMHdXnl~356juqqZaqc9yaPmljgGVcjVnAkcUyHF1wNMpfzQEv9lpWIFVcmhaEkrijjTWeFqKq~gVpG8Q0SOMoJ3gHzabWalFv977nUfJpW4HPLa0qY3oy6Rq6EAd00gpJUHWkOHekSM93J7zEaUYGvTLl19D1K7t2MFM8MunBx6vP3p3y49PyhIgzkGLTNJ0HMSjsUXmzdYhMLx6EYLGBtlq3wb5aRdybW-AaMf53AmA8HpQGqpGX3JCO8w4oitI-IYxHchw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    return (
        <LinearGradient
            style={styles.rootScreen}
            colors={['#FAFAFA', '#FFF3D3']}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
        >
            <View style={styles.rootScreen}>
                <Image
                    source={image}
                    style={[styles.image, { width: props.width, height: props.height }]}
                />
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    rootScreen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
    }
});

export default FoodImages;