import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import PagerView from "react-native-pager-view";
import * as Animatable from 'react-native-animatable';
import { SvgPrev, SvgNext } from "../../assets/svg/SvgPrevNext";

const ItemText = ({ stage, description }) => {
    const listStageText = description.split('<').map((item, index) => ({ id: index, text: item }));
    function renderDescription({ item, index }) {
        return (
            <Text style={styles.descriptionText}>{index + 1}. {item.text}</Text>
        )
    }

    function headerStage() {
        return (
            <View style={styles.headerStage}>
                <View>
                    <SvgPrev />
                </View>
                <Text numberOfLines={2} style={styles.headerText}>{stage}</Text>
                <View>
                    <SvgNext />
                </View>
            </View>
        )
    }

    return (
        <FlatList
            data={listStageText}
            renderItem={renderDescription}
            keyExtractor={(item, index) => {
                return index.toString();
            }}
            alwaysBounceVertical={false}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={headerStage}
            ItemSeparatorComponent={() => { return <View style={{ height: 15 }}></View> }}
        />
    )
}

const IngredientCarousel = (props) => {
    let listStage = props.listStage;
    let listDescription = props.listDescription;
    return (
        <View style={styles.foodIngredient}>
            <PagerView
                initialPage={0}
                style={styles.pagerView}
            >
                {listStage.map((element, index) => {
                    return (
                        <Animatable.View key={String(index + 1)} animation='fadeIn' duration={2000}>
                            <ItemText stage={element} description={listDescription[index]} />
                        </Animatable.View>
                    )
                })}
            </PagerView>
        </View>
    )
}

export default IngredientCarousel;

const styles = StyleSheet.create({
    foodIngredient: {
        height: '100%',
        width: '100%',
        paddingHorizontal: 'auto',
        backgroundColor: "#FFE9AF",
        marginBottom: 20,
        borderRadius: 16,
    },
    pagerView: {
        flex: 1,
        marginBottom: 20,
    },
    headerStage: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: "#634800",
        rowGap: 10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 16,
        marginBottom: 20,
    },
    headerText: {
        color: "#FAFAFA",
        textAlign: "center",
        fontSize: 20,
        fontFamily: 'SignikaNegative_700Bold',
        width: '50%',
    },
    descriptionText: {
        marginHorizontal: 20,
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 17.5,
        fontFamily: 'Montserrat_400Regular',
    }
});