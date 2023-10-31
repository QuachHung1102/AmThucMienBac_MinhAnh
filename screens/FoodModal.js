import { View, Text, StyleSheet, Modal, Pressable, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SvgNext, SvgPrev } from "../assets/svg/SvgPrevNext";
import FoodImages from "../assets/imagesFuntions/FoodImages";
import SvgHealth from "../assets/svg/SvgHealth";
import SvgStar from "../assets/svg/SvgStar";
import SvgLevel from "../assets/svg/SvgLevel";
import { useState } from "react";
import SvgClose from "../assets/svg/SvgClose";

const Food = ({ item, offModal }) => {
    const navigation = useNavigation();
    let image = { uri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    if (item.imageUri) {
        image = { uri: item.imageUri }
    }
    return (
        <View style={styles.foodItem}>
            <View>
                <View style={{ flex: 1 }}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate(
                                'DishIngredients',
                                {
                                    item,
                                }
                            );
                            offModal(false);
                        }}
                        style={{ flex: 1 }}
                    >
                        <FoodImages imageUri={image} width={145} height={94} />
                    </Pressable>
                </View>
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

function FoodModal(props) {
    const [provinceActive, setProvinceActive] = useState(1);
    let provinceList = props.provinceList;
    let listFood = props.vietnameseFoods.filter(food => food.prId == provinceActive);

    const navigation = useNavigation();
    const renderFoodItem = ({ item }) => {
        return (
            <Food
                item={item}
                offModal={props.onPress}
            />
        )
    };

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={props.visible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={styles.modalHeader}>
                        {provinceActive > 1 ? (<Pressable onPress={() => {
                            setProvinceActive(provinceActive - 1);
                        }}>
                            <SvgPrev />
                        </Pressable>) : (<View style={{ width: 30 }}></View>)}
                        <Text style={styles.modalHeaderText}>{provinceList.find(item => item.id === provinceActive).name}</Text>
                        {provinceActive < provinceList.length ?
                            (<Pressable onPress={() => {
                                setProvinceActive(provinceActive + 1);
                            }}>
                                <SvgNext />
                            </Pressable>) :
                            (<Pressable onPress={() => {
                                props.onPress(false);
                            }}>
                                <SvgClose />
                            </Pressable>)
                        }
                    </View>
                    <View>
                        <View style={styles.modalFoodContent}>
                            <FlatList
                                data={listFood}
                                renderItem={renderFoodItem}
                                keyExtractor={(item, index) => item.id.toString()}
                                alwaysBounceVertical={true}
                                showsVerticalScrollIndicator={false}
                                numColumns={2}
                                ItemSeparatorComponent={
                                    (<View style={{ height: 12 }} />)
                                }
                                columnWrapperStyle={{ justifyContent: "space-between" }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

// {
//     <Button onPress={() => {
//         props.onPress(false);
//     }} title="Dismiss" />
// }

export default FoodModal;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    modalView: {
        width: '85%',
        height: '85%',
        backgroundColor: '#FFF3D3',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        overflow: 'hidden',
    },
    modalHeader: {
        backgroundColor: '#634800',
        width: '100%',
        height: '10%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        paddingHorizontal: 16,
    },
    modalHeaderText: {
        fontSize: 20,
        color: '#FFF3D3',
    },
    modalFoodContent: {
        padding: 12,
        height: "95%",
    },
    foodItem: {
        width: '48%',
        borderRadius: 12,
        elevation: 4,
        shadowColor: "#A4A4A4",
        overflow: 'hidden',
    },
    foodInfo: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        backgroundColor: "#FAFAFA",
    },
    foodInfoTitle: {
        width: '60%',
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '700',
        color: "#634800",
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
})