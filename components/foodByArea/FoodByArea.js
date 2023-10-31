import { FlatList, StyleSheet, View, Pressable, Text, RefreshControl, Dimensions } from "react-native";
import { useCallback, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import FoodImages from "../../assets/imagesFuntions/FoodImages";
import SvgHealth from "../../assets/svg/SvgHealth";
import SvgStar from "../../assets/svg/SvgStar";
import SvgLevel from "../../assets/svg/SvgLevel";

const provinceList = [
    { id: 1, name: 'Hà Nội' },
    { id: 2, name: 'TP.HCM' },
    { id: 3, name: 'Hải Phòng' },
    { id: 4, name: 'Đà Nẵng' },
    { id: 5, name: 'Lạng Sơn' },
    { id: 6, name: 'Quảng Ninh' },
    { id: 7, name: 'Nam Định' },
    { id: 8, name: 'Thái Bình' },
    { id: 9, name: 'Hà Nam' },
    { id: 10, name: 'Huế' },
    { id: 11, name: 'Quảng Nam' },
    { id: 12, name: 'Quảng Ngãi' },
    { id: 13, name: 'Bình Định' },
    { id: 14, name: 'Phú Yên' },
    { id: 15, name: 'Khánh Hòa' },
];
const topicFoodList = [
    { id: 1, topic1: true, topic2: false, topic3: false, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 2, topic1: true, topic2: true, topic3: false, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 3, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 4, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: true, topic7: true },
    { id: 5, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 6, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 7, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 8, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: true, topic7: true },
    { id: 9, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 10, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 11, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 12, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 13, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 14, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 15, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 16, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 17, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: false, topic7: true },
    { id: 18, topic1: true, topic2: true, topic3: true, topic4: false, topic5: false, topic6: true, topic7: true },
    { id: 19, topic1: true, topic2: true, topic3: true, topic4: true, topic5: true, topic6: true, topic7: true },
    { id: 20, topic1: true, topic2: true, topic3: true, topic4: true, topic5: true, topic6: false, topic7: true },
];

const AreaItem = ({ item, onPress, backgroundColor, itemAdjacentL, itemAdjacentR }) => {
    function setSelectedProvinceId() {
        onPress(item.id);
    }
    const flagL = itemAdjacentL == item.id;
    const flagR = itemAdjacentR == item.id;
    return (
        <View style={flagL || flagR ? { backgroundColor: "#FFE9AF" } : { backgroundColor: "#FFF3D3" }}>
            <View style={[styles.item, { backgroundColor }, flagL ? styles.itemAdjacentL : {}, flagR ? styles.itemAdjacentR : {}]}>
                <Pressable onPress={setSelectedProvinceId}>
                    <Text style={styles.title}>{item.name}</Text>
                </Pressable>
            </View >
        </View>
    )
};

const FoodItem = ({ item }) => {
    const navigation = useNavigation();
    let image = { uri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1698624000&Signature=qRnN2dceT0SCaSy~m1PZSDNGRKMTEF14ZyNecyjGDamME3m6GPgm4CsFne~mLwOqWnbKgpvijljXtwMHdXnl~356juqqZaqc9yaPmljgGVcjVnAkcUyHF1wNMpfzQEv9lpWIFVcmhaEkrijjTWeFqKq~gVpG8Q0SOMoJ3gHzabWalFv977nUfJpW4HPLa0qY3oy6Rq6EAd00gpJUHWkOHekSM93J7zEaUYGvTLl19D1K7t2MFM8MunBx6vP3p3y49PyhIgzkGLTNJ0HMSjsUXmzdYhMLx6EYLGBtlq3wb5aRdybW-AaMf53AmA8HpQGqpGX3JCO8w4oitI-IYxHchw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    if (item.imageUri) {
        image = { uri: item.imageUri }
    }
    return (
        <View style={styles.foodItem}>
            <View style={{ borderRadius: 12 }}>
                <Pressable onPress={() => {
                    navigation.navigate(
                        'DishIngredients',
                        {
                            item,
                        }
                    )
                }}>
                    <FoodImages imageUri={image} width={Dimensions.get('window').width * 0.45} height={Dimensions.get('window').width * 0.25} />
                </Pressable>
                <View style={styles.foodInfo}>
                    <View style={styles.foodLike}>
                        <Text numberOfLines={1} style={styles.foodInfoTitle}>{item.name}</Text>
                        <View style={{ alignItems: "center" }}>
                            <Pressable>
                                <SvgHealth likedHealth={item.likedHealth} />
                            </Pressable>
                            <Text style={styles.fontSm}>{item.numberLike}</Text>
                        </View>
                    </View>
                    <View style={styles.foodRateAndLevel}>
                        <View style={[styles.flexRow, { columnGap: 2 }]}>
                            <SvgStar />
                            <Text style={styles.foodRate}>{item.rate}</Text>
                        </View>
                        <View style={[styles.flexRow, { columnGap: 3 }]}>
                            <Text style={styles.fontSm}>Level</Text>
                            <SvgLevel level={item.level} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

function FoodByArea(props) {
    const [refreshing, setRefreshing] = useState(false);
    const [seclectedIdPr, setselectedIdPr] = useState(1);
    // let listFoodRenderTopic = vietnameseFoods.filter(food => food.prId == seclectedIdPr).filter(food => topicFoodList[food.id][`topic${props.topicActive}`]);
    let listFoodRenderTopic = props.vietnameseFoods.filter(food => food.prId == seclectedIdPr).filter(food => {
        const topicData = topicFoodList[food.id];
        return topicData && topicData[`topic${props.topicActive}`];
    });

    const renderItemPr = ({ item }) => {
        let itemAdjacentL = seclectedIdPr - 1;
        let itemAdjacentR = seclectedIdPr + 1;
        const backgroundColor = item.id == seclectedIdPr ? "#FFE9AF" : "#FFF3D3";
        return (
            <AreaItem
                item={item}
                onPress={setselectedIdPr}
                backgroundColor={backgroundColor}
                itemAdjacentL={itemAdjacentL}
                itemAdjacentR={itemAdjacentR}
            />
        )
    };

    const renderFoodItem = ({ item }) => {
        return (
            <FoodItem
                item={item}
            />
        )
    };

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);
    // Lưu ý phải cập Refresh chỉ giúp render lại dữ liệu đã có. Tức là chưa gọi lại data từ DB

    return (
        <View style={styles.container}>
            <View style={styles.foodByAreaContent}>
                <View style={styles.areaContainer}>
                    <View style={styles.area}>
                        <FlatList
                            data={provinceList}
                            renderItem={renderItemPr}
                            keyExtractor={(item, index) => {
                                return item.id;
                            }}
                            // initialNumToRender={6}
                            alwaysBounceVertical={true}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={seclectedIdPr != 1 ? [styles.foodContainer, { borderTopStartRadius: 20 }] : styles.foodContainer}>
                    <View style={styles.food}>
                        <FlatList
                            data={listFoodRenderTopic}
                            renderItem={renderFoodItem}
                            keyExtractor={(item, index) => {
                                return item.id;
                            }}
                            alwaysBounceVertical={true}
                            showsVerticalScrollIndicator={false}
                            // initialNumToRender={6}
                            refreshControl={
                                <RefreshControl
                                    refreshing={refreshing}
                                    onRefresh={onRefresh}
                                />
                            }
                            style={{ backgroundColor: "#FFE9AF", columnGap: 16 }}
                        />
                    </View>
                </View>
            </View>
        </View >
    );
}

export default FoodByArea;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    foodByAreaContent: {
        flexDirection: "row",
        flex: 1,
    },
    areaContainer: {
        flex: 2,
        height: '62%',
    },
    area: {
    },
    item: {
        borderTopEndRadius: 0,
        borderBottomEndRadius: 0,
        borderTopStartRadius: 25,
        borderBottomStartRadius: 25,
        overflow: 'hidden',
        height: 50,
    },
    itemAdjacentL: {
        borderTopStartRadius: 0,
        borderBottomStartRadius: 0,
        borderBottomEndRadius: 25,
        overflow: 'hidden',
        height: 50,
    },
    itemAdjacentR: {
        borderTopStartRadius: 0,
        borderBottomStartRadius: 0,
        borderTopEndRadius: 25,
        overflow: 'hidden',
        height: 50,
    },
    title: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        color: "#634800",
        paddingVertical: 15,
        paddingLeft: 25,
        fontFamily: 'SignikaNegative_700Bold',
    },
    foodContainer: {
        flex: 3,
        backgroundColor: "#FFE9AF",
        borderTopEndRadius: 20,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        marginBottom: 20,
    },
    foodItem: {
        marginBottom: 16,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: "#A4A4A4",
    },
    food: {
        flex: 1,
        marginHorizontal: 22,
        marginVertical: 20,
    },
    foodInfo: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#FAFAFA",
    },
    foodInfoTitle: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        color: "#634800",
        width: '65%',
        fontFamily: 'SignikaNegative_700Bold',
    },
    foodLike: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-between",
    },
    fontSm: {
        fontSize: 10,
        fontStyle: "normal",
        fontWeight: "400",
        color: "#B5B5B5",
        fontFamily: 'SignikaNegative_700Bold',
    },
    foodRateAndLevel: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    foodRate: {
        fontSize: 12,
        fontWeight: "600",
        color: "#B5B5B5",
        fontStyle: "normal",
        fontFamily: 'SignikaNegative_700Bold',
    },
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
});