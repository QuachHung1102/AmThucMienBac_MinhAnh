import { ScrollView, StyleSheet, View, Text, Pressable, Image, RefreshControl, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import DiscoverImages from '../assets/imagesFuntions/DiscoverImage';
import SvgSave from '../assets/svg/SvgSave';
import { SvgLike, SvgUnLike } from '../assets/svg/SvgLike';
import SvgShare from '../assets/svg/SvgShare';
import { useCallback, useEffect, useState } from 'react';

const restaurant =
    { id: '1', imageUri1: '', imageUri2: '', introduce: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.|Với mong muốn mang trọn hương vị xứ Huế ấy cho thực khách Hà Thành, chuỗi nhà hàng Nét Huế - thương hiệu nhà hàng ngon Hà Nội mang đậm ẩm thực Huế đã ra đời, phục vụ chuyên những món về Huế giúp thực khách như được hưởng trọn hương vị miền trung trong từng món ăn.|Không gian của Nét Huế cũng khá gần gũi, nhẹ nhàng và thân thương, chúng toát lên vẻ đẹp mộc mạc trữ tình gợi cho thực khách về mảnh đất bình dị mà mộng mơ.', review: 'Điểm chung của chuỗi nhà hàng này chính là sự ấm cúng đến từ không gian và phong cách thiết kế. Bước tới quán bạn sẽ cảm nhận được vẻ đẹp mộc mạc, bình dị từ nội thất, ánh đèn, không gian, bàn ghế, cách decor… Bạn sẽ ngỡ rằng chính mình đang thưởng thức các món ăn ngon này ở Huế vậy.|Từ ngoài nhìn vào, bạn có thể dễ dàng nhận ra được một không gian Huế bừng sáng. Kể cả xung quanh có rực rỡ như nào thì nơi đây vẫn mang một phong thái riêng khác biệt. Nào là những chùm đen vàng lấp lánh, những chiếc nón lá bài thơ hay những bức tường vàng, những trụ gỗ vững chãi đặc trưng kiến trúc kinh thành Huế.', };

function RestaurantScreen(props) {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [dataReview, setDataReview] = useState([]);
    const [dataIntro, setDataIntro] = useState([]);

    const params = props.route.params;

    let image1 = { uri: 'https://s3-alpha-sig.figma.com/img/ab0a/2efb/dc9d62a44deb1726c04f25324948de93?Expires=1698019200&Signature=hhn~rkuZKVl2ECFJcME5bY8gDzgGI79OC3mx1YLyFd64czLGDy-AYEa5qNqID6FxY8Vlh7zgkjcfC4F23CxuGwXx5Jx46tFs5Df4939ITMewXFVYZwgaHHfd4Kpic7qAHYfMPek4LBtsrgzLmFzTX8Z31XLKoNCcxNyS6n4dRKADrfeV7~jYstYkYC69ed1LuV0HoawKcxVOcaLMxRmlz4yXL2Gt2l9BbaJZFd9ka9VNuYL7Cfkqr5YriCPjKXKKQYy22x~sf33MhHYdvUNnBXhrqCp~JSctXTG~p33scK1KbyuLFWpirdT~07C1PM28CHiKnOoiQ0-doLF1OFHV7Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    let image2 = { uri: 'https://s3-alpha-sig.figma.com/img/46db/216d/d599116c4e668351da93066da9fcdbdc?Expires=1698019200&Signature=Qao084bvC7dncfkyedtYCV56eRWvFoeduvXWfXtgUjz59gcqC0kKSlc3iAbge5DNeBgJg9ax9vstvyGBzbxp~cAODUIMgK09s1LNQTIt4uRfGEb7zzQYhn~gE9cQoAVt2SzUwPdyhVboRykeW9VyQvNlsaH2GLfa4-vylY1Vwuxe-~HALyoGWWPMTXMaCzVz5uNOZP3ptcUqIkcEbSBKbRJiYLbzIQOrdw1itkdX~QSpFdK3DWe9w06uCI7Gcaa9uYRgD1tsJ7jvdk0RK5gb~fNFDcniAfsnAJ1k1p-17FYqN3hdxhPDeVynCWc4DobBlZbt7glUKeQpSLLL4n--ww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };

    if (data.imageUri1) {
        image1 = { uri: data.imageUri1 }
    }
    if (data.imageUri2) {
        image2 = { uri: data.imageUri2 }
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        // fetchData(); // Gọi lại fetchData khi người dùng làm mới.
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
        // Thành phần này đã tích hợp trong fetchData. Nếu dùng thì comment lại
    }, [fetchData]);

    const splitData = ((fetchedData) => {
        if (fetchedData) {
            setDataIntro(fetchedData.introduce.split('|'));
            setDataReview(fetchedData.review.split('|'));
        }
    });

    useEffect(() => {
        // Simulate fetching data from an API
        fetchData(); // This is real fetch data, gọi khi render lần đầu.
    }, [fetchData]);

    const fetchData = useCallback(async () => {
        try {
            // const response = await fetch('https://api.example.com/data');
            // const result = await response.json(); // ép dữ liệu từ JSON sang js
            // setData(result);
            // splitData(result);
            setData(restaurant/* Fetch your data here*/); //Test code
            splitData(restaurant);
            setIsLoading(false);
            setRefreshing(false);
        } catch (error) {
            console.error(`Lỗi khi tải dữ liệu!`, error);
        } finally {
            setIsLoading(false);
            setRefreshing(false);
        }
    }, []);

    if (dataIntro.length > 0 && dataReview.length > 0) {
        return (
            <Animatable.View animation='fadeIn' duration={500} style={styles.container}>
                <ScrollView style={styles.contentView}
                    contentContainerStyle={{ justifyContent: 'center' }}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={styles.restaurantImg}>
                        <DiscoverImages width={390} height={250} borderRadius={0} />
                    </View>
                    <View style={styles.restaurantContent}>
                        <View style={[styles.flexRow, styles.discoverName]}>
                            <Text style={styles.discoverNameText}>{params.name}</Text>
                            <Pressable>
                                <SvgSave state={true} />
                            </Pressable>
                        </View>
                        <View style={[styles.discoverLikeAndShare, styles.flexRow]}>
                            <View style={[styles.discoverLike, styles.flexRow,]}>
                                <View style={[styles.flexRow, { columnGap: 3 }]}>
                                    <Pressable
                                    // onPress={}
                                    >
                                        <SvgLike state={false} />
                                    </Pressable>
                                    <Text style={styles.likeText}>{params.likeData}</Text>
                                    {/* <Text>100</Text> */}
                                </View>
                                <View style={[styles.flexRow, { columnGap: 3 }]}>
                                    <Pressable
                                    // onPress={}
                                    >
                                        <SvgUnLike state={false} />
                                    </Pressable>
                                    <Text style={styles.likeText}>{params.unLikeData}</Text>
                                    {/* <Text>50</Text> */}
                                </View>
                            </View>
                            <Pressable>
                                <SvgShare />
                            </Pressable>
                        </View>
                        <View style={{ borderTopWidth: 1, marginTop: 5 }}></View>
                        <View>
                            <Text style={styles.descriptionTitle}>1. Giới thiệu nhà hàng {params.name} Hà Nội</Text>
                            <Text style={styles.descriptionText}>{dataIntro[0]}</Text>
                            <Image
                                source={image1}
                                style={{ width: 330, height: 250, marginVertical: 10, flex: 1, alignSelf: 'center' }}
                            />
                            <Text style={styles.descriptionText}>{dataIntro[1]}</Text>
                            <Text style={styles.descriptionText}>{dataIntro[2]}</Text>
                        </View>
                        <View>
                            <Text style={styles.descriptionTitle}>2. Review về không gian nhà hàng {params.name}</Text>
                            <Text style={styles.descriptionText}>{dataReview[0]}</Text>
                            <Image
                                source={image2}
                                style={{ width: 330, height: 250, marginVertical: 10, flex: 1, alignSelf: 'center' }}
                            />
                            <Text style={styles.descriptionText}>{dataReview[1]}</Text>
                        </View>
                    </View>
                </ScrollView>
            </Animatable.View>
        );
    }
}

export default RestaurantScreen;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#FFF3D3",
        paddingTop: 30,
    },
    contentView: {
        flex: 1,
    },
    restaurantImg: {
    },
    restaurantContent: {
        width: "85%",
        // backgroundColor: "green",
        alignSelf: 'center',
        marginVertical: 10,
    },
    discoverName: {
        paddingTop: 5,
        justifyContent: "space-between",
    },
    discoverNameText: {
        color: '#634800',
        fontSize: 24,
        fontFamily: 'SignikaNegative_700Bold',
        fontWeight: '700',
    },
    discoverLikeAndShare: {
        justifyContent: "space-between",
        paddingBottom: 10,
        marginTop: 8,
    },
    discoverLike: {
        columnGap: 5,
        justifyContent: "space-between",
    },
    likeText: {
        color: '#B5B5B5',
        fontSize: 18,
        fontWeight: '600',
        fontFamily: "Montserrat_600SemiBold"
    },
    descriptionTitle: {
        color: "#634800",
        fontFamily: "SignikaNegative_700Bold",
        fontWeight: '700',
        fontSize: 16,
        marginTop: 10,
    },
    descriptionText: {
        color: '#383838',
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        fontWeight: '400',
        marginTop: 5,
    }
});