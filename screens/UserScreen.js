import { FlatList, Pressable, StyleSheet, View, Text, RefreshControl, ActivityIndicator, Image } from 'react-native';
import SvgSave from '../assets/svg/SvgSave';
import SvgShare from '../assets/svg/SvgShare';
import DiscoverImages from '../assets/imagesFuntions/DiscoverImage';
import { SvgLike, SvgUnLike } from '../assets/svg/SvgLike';
import { useCallback, useState, useEffect } from 'react';
import SvgHealth from '../assets/svg/SvgHealth';
import { useNavigation } from '@react-navigation/native';
import FoodImages from '../assets/imagesFuntions/FoodImages';
import SvgStar from '../assets/svg/SvgStar';
import SvgLevel from '../assets/svg/SvgLevel';

function DiscoverItem({ item, navigation }) {
    let image = { uri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    if (item.imageUri) {
        image = { uri: item.imageUri }
    }
    return (
        <View style={styles.container}>
            <View style={styles.discoverItem}>
                <View style={styles.imageContainer}>
                    <Pressable
                        onPress={() => {
                            navigation.navigate(
                                'RestaurantScreen',
                                {
                                    idRestaurant: item.id,
                                    name: item.name,
                                    likeData: item.likeData,
                                    unLikeData: item.unLikeData,
                                    saveData: item.saveData,
                                }
                            );
                            console.log(`Nhấn nút!`);
                        }}
                    >
                        <DiscoverImages width={330} height={200} borderRadius={16} />
                    </Pressable>
                </View>
                <View style={styles.discoverContent}>
                    <View style={styles.discoverText}>
                        <View style={[styles.flexRow, styles.discoverName]}>
                            <Text style={styles.discoverNameText}>{item.name}</Text>
                            <Pressable>
                                <SvgSave state={true} />
                            </Pressable>
                        </View>
                        <View style={styles.description}>
                            {/* <Text>{item.Text}</Text> */}
                            <Text numberOfLines={2} style={styles.descriptionT}>{item.description}</Text>
                        </View>
                        <View style={[styles.discoverLikeAndShare, styles.flexRow]}>
                            <View style={[styles.discoverLike, styles.flexRow,]}>
                                <View style={[styles.flexRow, { columnGap: 3 }]}>
                                    <Pressable
                                    // onPress={}
                                    >
                                        <SvgLike state={false} />
                                    </Pressable>
                                    <Text style={styles.likeText}>{item.likeData}</Text>
                                </View>
                                <View style={[styles.flexRow, { columnGap: 3 }]}>
                                    <Pressable
                                    // onPress={}
                                    >
                                        <SvgUnLike state={false} />
                                    </Pressable>
                                    <Text style={styles.likeText}>{item.unLikeData}</Text>
                                </View>
                            </View>
                            <Pressable>
                                <SvgShare />
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}

const FoodItem = ({ item, navigation }) => {
    let image = { uri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1698624000&Signature=qRnN2dceT0SCaSy~m1PZSDNGRKMTEF14ZyNecyjGDamME3m6GPgm4CsFne~mLwOqWnbKgpvijljXtwMHdXnl~356juqqZaqc9yaPmljgGVcjVnAkcUyHF1wNMpfzQEv9lpWIFVcmhaEkrijjTWeFqKq~gVpG8Q0SOMoJ3gHzabWalFv977nUfJpW4HPLa0qY3oy6Rq6EAd00gpJUHWkOHekSM93J7zEaUYGvTLl19D1K7t2MFM8MunBx6vP3p3y49PyhIgzkGLTNJ0HMSjsUXmzdYhMLx6EYLGBtlq3wb5aRdybW-AaMf53AmA8HpQGqpGX3JCO8w4oitI-IYxHchw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };
    if (item.imageUri) {
        image = { uri: item.imageUri }
    }
    return (
        <View style={styles.foodItem}>
            <View style={{ borderRadius: 16 }}>
                <View style={styles.foodImage}>
                    <Pressable onPress={() => {
                        navigation.navigate(
                            'DishIngredients',
                            {
                                item,
                            }
                        )
                    }}>
                        <FoodImages imageUri={image} width={330} height={200} />
                    </Pressable>
                </View>
                <View style={styles.foodInfo}>
                    <View style={styles.foodLike}>
                        <Text numberOfLines={1} style={styles.foodInfoTitle}>{item.name}</Text>
                        <View style={{ alignItems: "center", flexDirection: 'row', columnGap: 5 }}>
                            <Pressable>
                                <SvgHealth likedHealth={item.likedHealth} height={36} width={36} />
                            </Pressable>
                            <Text style={styles.fontSm}>{item.numberLike}</Text>
                        </View>
                    </View>
                    <View style={styles.foodRateAndLevel}>
                        <View style={[styles.flexRow, { columnGap: 2 }]}>
                            <SvgStar />
                            <Text style={styles.foodRate}>{item.rate}</Text>
                        </View>
                        <View style={[styles.flexRow, { columnGap: 5 }]}>
                            <Text style={styles.fontSm}>Level</Text>
                            <SvgLevel level={item.level} />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

function UserScreen(props) {
    const listDiscover = [
        { id: '1', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '2', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '3', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '4', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '5', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '6', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '7', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '8', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '9', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '10', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '11', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '12', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '13', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '14', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '15', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '16', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '17', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '18', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '19', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '20', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: true, likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
    ];
    const listFoods = [
        { id: 1, prId: 1, name: 'Phở', rate: 5, likedHealth: true, numberLike: 999, level: 4, imageUri: '', },
        { id: 2, prId: 1, name: 'Bánh Mì', rate: 5, likedHealth: true, numberLike: 800, level: 1, imageUri: '', },
        { id: 3, prId: 1, name: 'Bún Riêu Cua', rate: 4, likedHealth: false, numberLike: 100, level: 3, imageUri: '', },
        { id: 4, prId: 4, name: 'Gỏi Cuốn', rate: 4.5, likedHealth: false, numberLike: 250, level: 2, imageUri: '', },
        { id: 5, prId: 2, name: 'Cơm Gà Hải Nam', rate: 3, likedHealth: false, numberLike: 400, level: 3, imageUri: '', },
        { id: 6, prId: 1, name: 'Bún Chả Hà Nội', rate: 5, likedHealth: true, numberLike: 632, level: 3, imageUri: '', },
        { id: 7, prId: 8, name: 'Bánh Cuốn', rate: 4, likedHealth: true, numberLike: 900, level: 4, imageUri: '', },
        { id: 8, prId: 2, name: 'Bánh Xèo', rate: 3, likedHealth: false, numberLike: 700, level: 2, imageUri: '', },
        { id: 9, prId: 10, name: 'Bún Bò Huế', rate: 4, likedHealth: false, numberLike: 789, level: 3, imageUri: '', },
        { id: 10, prId: 11, name: 'Hủ tiếu Nam Vang', rate: 3.5, likedHealth: false, numberLike: 489, level: 3, imageUri: '', },
        { id: 11, prId: 10, name: 'Bánh Canh Cua', rate: 3, likedHealth: false, numberLike: 142, level: 3, imageUri: '', },
        { id: 12, prId: 1, name: 'Bún Thịt Nướng', rate: 3.4, likedHealth: true, numberLike: 456, level: 3, imageUri: '', },
        { id: 13, prId: 2, name: 'Cơm Tấm', rate: 2.7, likedHealth: false, numberLike: 125, level: 2, imageUri: '', },
        { id: 14, prId: 1, name: 'Bún Bò Nam Bộ', rate: 4.3, likedHealth: false, numberLike: 951, level: 3, imageUri: '', },
        { id: 15, prId: 12, name: 'Bánh Mì Kẹp Thịt', rate: 4.6, likedHealth: true, numberLike: 648, level: 1, imageUri: '', },
        { id: 16, prId: 14, name: 'Bánh Mì Hòa Mã', rate: 4.1, likedHealth: false, numberLike: 124, level: 1, imageUri: '', },
        { id: 17, prId: 2, name: 'Bánh Mì Chảo', rate: 4.4, likedHealth: false, numberLike: 466, level: 2, imageUri: '', },
        { id: 18, prId: 1, name: 'Chả Cá Lã Vọng', rate: 2, likedHealth: false, numberLike: 752, level: 2, imageUri: '', },
        { id: 20, prId: 2, name: 'Bún Mắm', rate: 1.1, likedHealth: false, numberLike: 369, level: 1, imageUri: '', },
    ];
    const [data, setData] = useState([]);
    const [data2, setData2] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [activeList, setActiveList] = useState(1);

    const navigation = props.navigation;

    let userImg = { uri: 'https://s3-alpha-sig.figma.com/img/a9bb/fad5/8679da3de9942beec55863e50f1010b8?Expires=1698019200&Signature=jq~LS-5qr8oc9D07uvU58hfZVSqBDtxtpx0~6ShjDNPU9L11MWD~8mvcQo9N1WHRJqH3m57xygejUS~UIu5qpHLMULaxwMMIIBftIRbLKmrMVmykRlgB2fR-xBAcv0~K15AMDEB~Hl7j1NihqsuG~RCaFoXlXSV50uF6jwqFk5XBUG2G0QWtI~h3qHJ-zRFo3mjFBIwPXG0T-wLARKYt~FrCxTtbfvLEw2UNRDnRHt6lWYzTnUIkmsWnUsflIOETqytvqKccyfqfDLlxSuuBrGx0-RPg8HcvU~EHrJEhEYsFcxQMitHmXrb6B7IVmWRNXyepAFGCZ5g~J8FNDkrfdw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' };

    const renderDiscoveritemsSave = ({ item }) => {
        return (
            <DiscoverItem item={item} navigation={navigation} />
        )
    }

    const renderDiscoveritemsLike = ({ item }) => {
        return (
            <FoodItem item={item} navigation={navigation} />
        )
    }

    const itemSeparatorComponent = () => {
        return (
            <View style={{ height: 22 }}></View>
        )
    }

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => {
            setRefreshing(false);
        }, 2000);
    }, []);

    useEffect(() => {
        // Simulate fetching data from an API
        setTimeout(() => {
            setData(/* Fetch your data here */listDiscover);
            setData2(listFoods);
            setIsLoading(false);
        }, 2000); // Simulated 2-second delay
    }, []);

    let screen;
    if (activeList == 1) {
        screen = <FlatList
            data={data}
            renderItem={renderDiscoveritemsSave}
            keyExtractor={(item, index) => item.id.toString()}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            ItemSeparatorComponent={itemSeparatorComponent}
        />;
    } else if (activeList == 2) {
        screen = <FlatList
            data={data2}
            renderItem={renderDiscoveritemsLike}
            keyExtractor={(item, index) => item.id.toString()}
            alwaysBounceVertical={true}
            showsVerticalScrollIndicator={false}
            refreshControl={
                <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                />
            }
            ItemSeparatorComponent={itemSeparatorComponent}
        />
    }

    return (
        <View style={styles.discoverContainer}>
            <View style={styles.userView}>
                <View style={[styles.flexRow, { columnGap: 8 }]}>
                    <View>
                        <Image
                            source={userImg}
                            style={{ width: 50, height: 50, borderRadius: 50, borderColor: 'transparent', borderWidth: 2 }}
                        />
                    </View>
                    <View>
                        <Text style={styles.userName}>Tuấn Anh</Text>
                        <Text style={styles.timeJoin}>Tham gia từ: 12 - 09 -2023</Text>
                    </View>
                </View>
                <View style={{ borderTopWidth: 1, marginTop: 15 }}></View>
                <View style={[styles.flexRow, { justifyContent: 'space-between', paddingHorizontal: 20, marginBottom: 20, paddingTop: 5 }]}>
                    <Pressable
                        onPress={() => {
                            setActiveList(1);
                        }}
                    >
                        <View style={[styles.flexRow, { columnGap: 10 }, styles.btnActive, activeList == 1 ? styles.borderBottomWidth : null]}>
                            <Text style={[styles.btnText, activeList == 1 ? styles.btnTextActive : styles.btnTextUnActive]}>Đã lưu</Text>
                            <SvgSave state={activeList == 1} save2={true} />
                        </View>
                    </Pressable>
                    <Pressable
                        onPress={() => {
                            setActiveList(2);
                        }}
                    >
                        <View style={[styles.flexRow, { columnGap: 10 }, styles.btnActive, activeList == 2 ? styles.borderBottomWidth : null]}>
                            <Text style={[styles.btnText, activeList == 2 ? styles.btnTextActive : styles.btnTextUnActive]}>Đã thích</Text>
                            <SvgHealth likedHealth={activeList == 2} state={1} />
                        </View>
                    </Pressable>
                </View>
            </View>
            {isLoading ? (
                <ActivityIndicator size="large" color="#000" />
            ) : (
                <View style={{ flex: 1 }}>{screen}</View>
            )}
        </View>
    );
}

export default UserScreen;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    discoverContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFF3D3",
        paddingBottom: 15,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 30,
        shadowOffset: { width: 0, height: 2 }, //only in IOS
        shadowRadius: 12,
        shadowOpacity: 0.3,
        elevation: 4,
        shadowColor: "#A4A4A4",
    },
    discoverItem: {
    },
    imageContainer: {
        flex: 5,
        borderRadius: 12,
    },
    discoverContent: {
        flex: 4,
        backgroundColor: '#FAFAFA',
        borderBottomStartRadius: 16,
        borderBottomEndRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    discoverText: {
        width: '90%',
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
    description: {
        marginVertical: 5,
    },
    discoverLikeAndShare: {
        justifyContent: "space-between",
        paddingBottom: 10,
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
    userName: {
        fontSize: 14,
        fontWeight: '600',
        fontFamily: "Montserrat_600SemiBold",
        color: '#383838',
    },
    timeJoin: {
        color: '#B5B5B5',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Montserrat_400Regular',
    },
    userView: {
        paddingHorizontal: 11,
        width: '90%',
    },
    descriptionT: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 14,
        color: '#383838',
        fontWeight: '600',
        letterSpacing: 0.2,
    },
    btnActive: {
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    borderBottomWidth: {
        borderBottomWidth: 2,
        borderBottomColor: '#634800',
    },
    btnText: {
        fontSize: 20,
        fontWeight: '700',
        fontFamily: "SignikaNegative_700Bold",
    },
    btnTextActive: {
        color: '#634800',
    },
    btnTextUnActive: {
        color: '#B5B5B5',
    },
    foodItem: {
        flex: 1,
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: "#A4A4A4",
        shadowOffset: { height: 2, width: 0 }
    },
    food: {
        flex: 1,
        marginHorizontal: 22,
        marginVertical: 20,
    },
    foodInfo: {
        flex: 2,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: "#FAFAFA",
        rowGap: 10,
    },
    foodInfoTitle: {
        fontSize: 24,
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
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "600",
        color: "#B5B5B5",
        fontFamily: 'Montserrat_600SemiBold',
    },
    foodRateAndLevel: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    foodRate: {
        fontSize: 16,
        fontWeight: "600",
        color: "#B5B5B5",
        fontStyle: "normal",
        fontFamily: 'SignikaNegative_700Bold',
    },
    foodImage: {
        flex: 5,
    }
})