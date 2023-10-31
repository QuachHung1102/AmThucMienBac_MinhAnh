import { ScrollView, StyleSheet, View, Text, Pressable, Image, RefreshControl, ActivityIndicator } from 'react-native';
import * as Animatable from 'react-native-animatable';
import DiscoverImages from '../assets/imagesFuntions/DiscoverImage';
import SvgSave from '../assets/svg/SvgSave';
import { SvgLike, SvgUnLike } from '../assets/svg/SvgLike';
import SvgShare from '../assets/svg/SvgShare';
import { useCallback, useEffect, useState } from 'react';


function RestaurantScreen(props) {
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [dataReview, setDataReview] = useState([]);
    const [dataIntro, setDataIntro] = useState([]);

    const params = props.route.params;
    // const restaurant = { id: params.idRestaurant, image1: params.image1, image2: params.image2, introduce: params.introduce, review: params.review };

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
            setData(params/* Fetch your data here*/); //Test code
            splitData(params);
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
                        <DiscoverImages width={390} height={250} borderRadius={0} image={params.image} />
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
                            <Text style={styles.descriptionTitle}>1. Review về không gian nhà hàng</Text>
                            <Text style={styles.descriptionText}>{dataIntro[0]}</Text>
                            <Image
                                source={{ uri: params.image1 }}
                                style={{ width: 330, height: 250, marginVertical: 10, flex: 1, alignSelf: 'center' }}
                            />
                            <Text style={styles.descriptionText}>{dataIntro[1]}</Text>
                            {/* <Text style={styles.descriptionText}>{dataIntro[2]}</Text> */}
                        </View>
                        <View>
                            <Text style={styles.descriptionTitle}>2. Các món ăn nổi bật</Text>
                            <Text style={styles.descriptionText}>{dataReview[0]}</Text>
                            <Image
                                source={{ uri: params.image2 }}
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