import { FlatList, Pressable, StyleSheet, View, Text, RefreshControl, ActivityIndicator } from 'react-native';
import SvgSave from '../assets/svg/SvgSave';
import SvgShare from '../assets/svg/SvgShare';
import DiscoverImages from '../assets/imagesFuntions/DiscoverImage';
import { SvgLike, SvgUnLike } from '../assets/svg/SvgLike';
import { useCallback, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';

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
                            )
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
                                <SvgSave state={true} save2={false} />
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

function DiscoverScreen(props) {
    const listDiscover = [
        { id: '1', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '2', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '3', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '4', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '5', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '6', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '7', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '8', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '9', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '10', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '11', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '12', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '13', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '14', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '15', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '16', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '17', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '18', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '19', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
        { id: '20', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://s3-alpha-sig.figma.com/img/f5e5/783d/08af8cd2041a089d14df4351c5a2bc57?Expires=1696809600&Signature=dYmvWhe4MmL6Jp3zwz3~qN9TFV2pu9OMFUpCrPz~kYLgPo23fj39gCYXShLaxeNhZWnxQf5hayZbUaEb6z9R~lJpHM9400UdZpE5vkIbQUMusJ~ALKAZNgA25IE0EFBOESxYY4qCK9drgBfBvK1HOYKD-yUjSRqBiqkeuXf70nwQwaUUI-lPWkgItgN~eNiI6UQi9j2jWRZ2Y0Byqb6~zpMmeg7aP4kYzGzfcXPd8kS-KtMHGOjTbqyVLdU190b7V~4F2JOQ6eN-KudzU9GLtQ~1lbTZl0Kxdj~UBBL0HLUQL1s0SDA1sHB820Qsj6u7fx1WK~WsQsOrpWqVrCtOwQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4', },
    ];
    const [data, setData] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const navigation = props.navigation;

    const renderDiscoveritems = ({ item }) => {
        return (
            <DiscoverItem item={item} navigation={navigation} />
        )
    }

    const itemSeparatorComponent = () => {
        return (
            <View style={{ height: 20 }}></View>
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
            setIsLoading(false);
        }, 2000); // Simulated 2-second delay
    }, []);

    return (
        <>
            <StatusBar style="dark" backgroundColor="#FFF3D3" />
            <View style={styles.discoverContainer}>
                {isLoading ? (
                    <ActivityIndicator size="large" color="#000" />
                ) : (
                    <FlatList
                        data={data}
                        renderItem={renderDiscoveritems}
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
                        style={{ marginVertical: 15 }}
                    />
                )}
            </View>
        </>
    );
}

export default DiscoverScreen;

const styles = StyleSheet.create({
    flexRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    discoverContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#FFF3D3",
    },
    container: {
        flex: 1,
        alignItems: 'center',
        marginHorizontal: 30,
        elevation: 20, //only in android
        shadowOffset: { width: 0, height: 2 }, //only in IOS
        shadowRadius: 12,
        shadowOpacity: 0.3,
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
    descriptionT: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 14,
        color: '#383838',
        fontWeight: '600',
        letterSpacing: 0.2,
    }
})