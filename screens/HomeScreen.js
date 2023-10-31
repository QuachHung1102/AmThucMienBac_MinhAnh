import { useState } from "react";
import * as React from 'react';
import {
    View,
    FlatList,
    Text,
    StyleSheet,
    Pressable,
} from "react-native";
// import NavTop from "../components/Nav_top/NavTop";
import FoodByArea from "../components/foodByArea/FoodByArea";
import FoodModal from "./FoodModal";
import { StatusBar } from "expo-status-bar";

function HomeScreen(props) {
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
    const vietnameseFoods = [
        { id: 1, prId: 1, name: 'Phở', rate: 5, likedHealth: true, numberLike: 999, level: 4, imageUri: 'https://cdn.tgdd.vn/Files/2022/01/25/1412805/cach-nau-pho-bo-nam-dinh-chuan-vi-thom-ngon-nhu-hang-quan-202201250230038502.jpg', },
        { id: 2, prId: 1, name: 'Bánh Mì', rate: 5, likedHealth: true, numberLike: 800, level: 1, imageUri: 'https://baoangiang.com.vn/image/fckeditor/upload/2023/20230516/images/clever-junior-694.jpg', },
        { id: 3, prId: 1, name: 'Bún Riêu Cua', rate: 4, likedHealth: false, numberLike: 100, level: 3, imageUri: 'https://img.pikbest.com/origin/09/08/09/79RpIkbEsTr7G.png!w700wp', },
        { id: 4, prId: 4, name: 'Gỏi Cuốn', rate: 4.5, likedHealth: false, numberLike: 250, level: 2, imageUri: 'https://cdn.tgdd.vn/Files/2017/03/22/963738/cach-lam-goi-cuon-tom-thit-thom-ngon-cho-bua-com-gian-don-202203021427281747.jpg', },
        { id: 5, prId: 2, name: 'Cơm Gà Hải Nam', rate: 3, likedHealth: false, numberLike: 400, level: 3, imageUri: 'https://cdn.tgdd.vn/Files/2019/03/29/1157476/cach-nau-com-ga-hoi-an-chinh-goc-chuan-vi-nhat-202208271507268751.jpg', },
        { id: 6, prId: 1, name: 'Bún Chả Hà Nội', rate: 5, likedHealth: true, numberLike: 632, level: 3, imageUri: 'https://statics.vinpearl.com/bun-cha-ha-noi-3_1688011791.jpg', },
        { id: 7, prId: 8, name: 'Bánh Cuốn', rate: 4, likedHealth: true, numberLike: 900, level: 4, imageUri: 'https://lovinghuthoadang.com.vn/wp-content/uploads/2020/10/B%C3%A1nh-cu%E1%BB%91n-Nha-Trang.jpg', },
        { id: 8, prId: 2, name: 'Bánh Xèo', rate: 3, likedHealth: false, numberLike: 700, level: 2, imageUri: 'https://cdn.tgdd.vn/Files/2017/02/24/953891/3-cach-lam-banh-xeo-mien-tay-thom-ngon-gion-rum-202303031501527280.jpg', },
        { id: 9, prId: 10, name: 'Bún Bò Huế', rate: 4, likedHealth: false, numberLike: 789, level: 3, imageUri: 'https://bizweb.dktcdn.net/100/442/328/files/bun-bo-hue-dac-san-dan-da-lam-say-long-biet-bao-thuc-khach-4.jpg?v=1638937219225', },
        { id: 10, prId: 11, name: 'Hủ tiếu Nam Vang', rate: 3.5, likedHealth: false, numberLike: 489, level: 3, imageUri: 'https://vcdn1-giadinh.vnecdn.net/2023/05/15/Bc8Thnhphm18-1684125639-9811-1684125654.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=i0OuvKxyIvG-1BRluganjQ', },
        { id: 11, prId: 10, name: 'Bánh Canh Cua', rate: 3, likedHealth: false, numberLike: 142, level: 3, imageUri: 'https://cdn.tgdd.vn/2021/05/CookProduct/thumbcmscn-1200x676-4.jpg', },
        { id: 12, prId: 1, name: 'Bún Thịt Nướng', rate: 3.4, likedHealth: true, numberLike: 456, level: 3, imageUri: 'https://cdn.tgdd.vn/Files/2017/03/24/964440/cach-lam-bun-thit-nuong-ngon-7_760x450.jpg', },
        { id: 13, prId: 2, name: 'Cơm Tấm', rate: 2.7, likedHealth: false, numberLike: 125, level: 2, imageUri: 'https://cdn.tgdd.vn/Files/2021/08/09/1373996/tu-lam-com-tam-suon-trung-don-gian-thom-ngon-nhu-ngoai-hang-202201071248422991.jpg', },
        { id: 14, prId: 1, name: 'Bún Bò Nam Bộ', rate: 4.3, likedHealth: false, numberLike: 951, level: 3, imageUri: 'https://cdn.tgdd.vn/Files/2021/08/25/1377768/huong-dan-cach-lam-mon-bun-bo-tron-chuan-vi-nam-bo-cho-ca-nha-202108251538116432.jpg', },
        { id: 15, prId: 12, name: 'Bánh Mì Kẹp Thịt', rate: 4.6, likedHealth: true, numberLike: 648, level: 1, imageUri: 'https://cdn.tgdd.vn/Files/2021/09/06/1380700/cach-lam-banh-mi-heo-quay-thom-ngon-cho-bua-sang-dinh-duong-202201041047079624.jpg', },
        { id: 16, prId: 14, name: 'Bánh Mì Hòa Mã', rate: 4.1, likedHealth: false, numberLike: 124, level: 1, imageUri: 'https://images.foody.vn/res/g2/12839/prof/s/foody-mobile-8y1dwo0t-jpg-133-636003682444293190.jpg', },
        { id: 17, prId: 2, name: 'Bánh Mì Chảo', rate: 4.4, likedHealth: false, numberLike: 466, level: 2, imageUri: 'https://cdn.tgdd.vn/2021/12/CookRecipe/Avatar/banh-mi-chao-thap-cam-thumbnail.jpg', },
        { id: 18, prId: 1, name: 'Chả Cá Lã Vọng', rate: 2, likedHealth: false, numberLike: 752, level: 2, imageUri: 'https://i-giadinh.vnecdn.net/2023/02/23/Buoc-9-Thanh-pham-9-3656-1677138711.jpg', },
        { id: 20, prId: 2, name: 'Bún Mắm', rate: 1.1, likedHealth: false, numberLike: 369, level: 1, imageUri: 'https://pastaxi-manager.onepas.vn/content/uploads/articles/nguyendoan/anh-blog/bun-mam/cach-nau-bun-mam-1.jpg', },
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

    // Cái này của topic
    const [topicList, setTopicList] = useState([
        { id: 1, text: `Bữa sáng`, },
        { id: 2, text: `Nấu nhanh`, },
        { id: 3, text: `Ít calo`, },
        { id: 4, text: `Đồ chay`, },
        { id: 5, text: `Tráng miệng`, },
        { id: 6, text: `Ăn nhẹ`, },
        { id: 7, text: `Bữa tối`, },
    ]);
    // View all Food
    const [viewAllFood, setViewAllFood] = useState(false);

    const [topicActive, setTopicActive] = useState(1);
    // useEffect(() => {
    //     console.log(`Giá trị mới của topicActive: ${topicActive}`);
    // }, [topicActive]);
    // console.log(`props: ${props}`);

    return (
        <>
            {/* <StatusBar style="dark" backgroundColor="#FFF3D3" /> */}
            <View style={styles.container}>
                {/* <NavTop text="Trang chủ" /> */}
                <View style={styles.topic}>
                    <Text style={styles.topicText}>Theo chủ đề</Text>
                </View>
                <View style={styles.topicContainer}>
                    <View style={styles.topicContent}>
                        <FlatList
                            data={topicList}
                            horizontal={true}
                            renderItem={itemData => {
                                return (
                                    <View style={{ marginRight: 8 }}>
                                        <Pressable
                                            android_ripple={{ color: "#6C3428", foreground: true, radius: 40 }}
                                            style={[({ pressed }) => pressed && styles.pressesItem, { flexDirection: 'row' }]}
                                            onPress={() => {
                                                setTopicActive(itemData.item.id);
                                            }}
                                        >
                                            <View style={styles.topicItem}>
                                                <Text style={styles.topicItemText}>{itemData.item.text}</Text>
                                            </View>
                                        </Pressable>
                                    </View>
                                );
                            }}
                            alwaysBounceHorizontal={true}
                            keyExtractor={(item, index) => {
                                return item.id;
                            }}
                            showsHorizontalScrollIndicator={false}
                            style={styles.topicFlatList}
                        />
                    </View>
                </View>
                <View style={styles.byRegion}>
                    <Text style={styles.byRegionText}>Theo vùng miền</Text>
                    <View style={styles.seeAll}>
                        <Pressable
                            onPress={() => {
                                setViewAllFood(true);
                            }}
                        >
                            <Text style={styles.seeAllText}>Xem tất cả...</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={styles.foodAreaContainer}>
                    <FoodByArea topicActive={topicActive} vietnameseFoods={vietnameseFoods} />
                </View>
                <FoodModal visible={viewAllFood} provinceList={provinceList} vietnameseFoods={vietnameseFoods} onPress={setViewAllFood} />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3D3',
        justifyContent: 'flex-start',
    },
    topic: {
        justifyContent: 'center',
        gap: 10,
        marginLeft: 20,
        marginTop: 10,
        marginBottom: 10,
    },
    topicText: {
        fontSize: 16,
        fontStyle: 'normal',
        fontWeight: '600',
        color: "#131313",
        fontFamily: 'Montserrat_600SemiBold',
    },
    topicContainer: {
        marginHorizontal: 20,
        marginBottom: 20,
        height: 60,
        width: "auto",
    },
    topicContent: {
        paddingVertical: 10,
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: "#FFE9AF",
    },
    topicFlatList: {
        flexGrow: 0,
        overflow: "hidden",
    },
    pressesItem: {
        color: "#EAC696",
    },
    topicItem: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#634800",
        borderRadius: 10,
    },
    topicItemText: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        color: "#FAFAFA",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "700",
        lineHeight: 17,
    },
    byRegion: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 20,
        marginStart: 26,
        marginBottom: 16,
        marginEnd: 28,
    },
    byRegionText: {
        color: "#131313",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        fontFamily: 'Montserrat_600SemiBold',
    },
    seeAll: {
        borderBottomWidth: 1,
        borderBlockColor: "#634800",
        paddingVertical: 2,
    },
    seeAllText: {
        fontSize: 12,
        fontStyle: "normal",
        fontWeight: "600",
        fontFamily: 'SignikaNegative_600SemiBold',
        color: "#634800",
    },
    foodAreaContainer: {
        flex: 1,
        marginHorizontal: 20,
    }
});

export default HomeScreen;