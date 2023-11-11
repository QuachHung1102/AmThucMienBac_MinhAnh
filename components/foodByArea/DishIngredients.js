import * as React from 'react';
import { Pressable, StyleSheet, View } from "react-native";
import SvgImg from "../../assets/svg/SvgImage";
import BigFood from "../../assets/imagesFuntions/BigFood";
import Ingredients from "../../utilities/DishIngredient/Ingredients";


function DishIngredients(props) {
    let image = { uri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1698624000&Signature=qRnN2dceT0SCaSy~m1PZSDNGRKMTEF14ZyNecyjGDamME3m6GPgm4CsFne~mLwOqWnbKgpvijljXtwMHdXnl~356juqqZaqc9yaPmljgGVcjVnAkcUyHF1wNMpfzQEv9lpWIFVcmhaEkrijjTWeFqKq~gVpG8Q0SOMoJ3gHzabWalFv977nUfJpW4HPLa0qY3oy6Rq6EAd00gpJUHWkOHekSM93J7zEaUYGvTLl19D1K7t2MFM8MunBx6vP3p3y49PyhIgzkGLTNJ0HMSjsUXmzdYhMLx6EYLGBtlq3wb5aRdybW-AaMf53AmA8HpQGqpGX3JCO8w4oitI-IYxHchw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    console.log(props.route.params.item);
    if (props.route.params.item.imageUri) {
        image = { uri: props.route.params.item.imageUri }
    }
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <View style={[styles.rootScreen, styles.backAndInfo]}>
                    <Pressable
                        onPress={() => {
                            props.navigation.goBack();
                        }}
                    >
                        <View>
                            <SvgImg xml={`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M5 15.5L25 15.5M5 15.5L12.5 8M5 15.5L12.5 23" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>`} />
                        </View>
                    </Pressable>
                    <Pressable>
                        <View>
                            <SvgImg xml={`<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                            <path d="M15 21.2375L15 21.25M15 8.75L15 17.5M3.75 15C3.75 8.78679 8.7868 3.75 15 3.75C21.2132 3.75 26.25 8.7868 26.25 15C26.25 21.2132 21.2132 26.25 15 26.25C8.7868 26.25 3.75 21.2132 3.75 15Z" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>`} />
                        </View>
                    </Pressable>
                </View>
                <BigFood image={image} />
            </View>
            <Ingredients props={props} />
        </View>
    );
}

export default DishIngredients;

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        flex: 1,
        backgroundColor: "#FFF3D3",
    },
    rootScreen: {
        flex: 1,

    },
    imageContainer: {
        paddingTop: 16,
        height: "42%",
    },
    backAndInfo: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        position: "absolute",
        zIndex: 100,
        top: 25,
        right: 0,
        left: 0,

        // borderWidth: 1,
        // borderColor: "red",
    },
});

