import { FlatList, Pressable, StyleSheet, View, Text, RefreshControl, ActivityIndicator, Image, Dimensions } from 'react-native';
import SvgSave from '../assets/svg/SvgSave';
import SvgShare from '../assets/svg/SvgShare';
import DiscoverImages from '../assets/imagesFuntions/DiscoverImage';
import { SvgLike, SvgUnLike } from '../assets/svg/SvgLike';
import { useCallback, useState, useEffect } from 'react';
import SvgHealth from '../assets/svg/SvgHealth';
import FoodImages from '../assets/imagesFuntions/FoodImages';
import SvgStar from '../assets/svg/SvgStar';
import SvgLevel from '../assets/svg/SvgLevel';

function DiscoverItem({ item, navigation }) {
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
                                    image: { uri: item.imageUri },
                                    image1: item.image1,
                                    image2: item.image2,
                                    introduce: item.introduce,
                                    review: item.review,
                                }
                            );
                            console.log(`Nhấn nút!`);
                        }}
                    >
                        <DiscoverImages width={330} height={200} borderRadius={16} image={{ uri: item.imageUri }} />
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
                        <FoodImages imageUri={image} width={Dimensions.get('window').width * 0.85} height={200} />
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
        { id: '1', name: 'Nét Huế', description: 'Tinh hoa hương vị ẩm thực Huế - nơi vùng đất Cố Đô đã tạo nên nét cuốn hút, độc đáo trong từng món ăn luôn khiến người ta nhớ nhung về hương vị ấy.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/12031240/image-review-nha-hang-net-hue-voi-menu-va-bang-gia-moi-nhat-164968275968442.jpg', image1: 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/12031243/image-review-nha-hang-net-hue-voi-menu-va-bang-gia-moi-nhat-164968276268157.jpg', image2: 'https://cdn.alongwalk.info/vn/wp-content/uploads/2022/04/12031251/image-review-nha-hang-net-hue-voi-menu-va-bang-gia-moi-nhat-164968277115773.jpg', introduce: 'Điểm chung của chuỗi nhà hàng này chính là sự ấm cúng đến từ không gian và phong cách thiết kế. Bước tới quán bạn sẽ cảm nhận được vẻ đẹp mộc mạc, bình dị từ nội thất, ánh đèn, không gian, bàn ghế, cách decor… Bạn sẽ ngỡ rằng chính mình đang thưởng thức các món ăn ngon này ở Huế vậy.|Từ ngoài nhìn vào, bạn có thể dễ dàng nhận ra được một không gian Huế bừng sáng. Kể cả xung quanh có rực rỡ như nào thì nơi đây vẫn mang một phong thái riêng khác biệt. Nào là những chùm đen vàng lấp lánh, những chiếc nón lá bài thơ hay những bức tường vàng, những trụ gỗ vững chãi đặc trưng kiến trúc kinh thành Huế.|Không gian của Nét Huế cũng khá gần gũi, nhẹ nhàng và thân thương, chúng toát lên vẻ đẹp mộc mạc trữ tình gợi cho thực khách về mảnh đất bình dị mà mộng mơ.', review: 'Với thực đơn phong phú và đa dạng tại Huế, bạn có thể thỏa sức lựa chọn hương vị ẩm thực Huế một cách trọn vẹn. Từ món chính, món ăn kèm, đồ tráng miệng… mỗi món ăn một hương vị mà những người đầu bếp muốn gửi gắm tới thực khách.|Bún bò Huế – đại diện xuất xắc cho ẩm thực Huế và cũng là đại diện cho nhà hàng Nét Huế này. Hương vị khác biệt từ phần nước dùng được linh từ xương trong nhiều giờ liên. Mang một vị ngọt ngọt thanh thanh kết hợp với phần bún sợi to cũng các phần topping từ chân giò, tiết, mọc… Bún bò Huế phải ăn kèm với rau sống, nhúng vào bát bún nóng hổi rồi thưởng thức. Một sự kết hợp hoàn hảo từ các nguyên liệu được chọn lọc kỹ lưỡng và được đầu bếp tại Nét Huế tự tay làm. Ngoài ra, bạn còn có thể thưởng thức bún mắm nêm cũng ngon không kém đâu nhé.', },
        { id: '2', name: 'Nhà hàng Phố 79', description: 'Một ốc đảo ẩm thực của Việt Nam, nơi bạn có cơ hội khám phá hương vị độc đáo.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1281/media/202104/26/1619433770-he-thong-nha-hang-pho-79-sai-gon.jpg', image1: 'https://cdn.justfly.vn/1920x1283/media/202104/26/1619433770-he-thong-nha-hang-pho-79-sai-gon-1.jpg', image2: 'https://cdn.justfly.vn/1920x1280/media/202104/26/1619433770-he-thong-nha-hang-pho-79-sai-gon-2.jpg', introduce: 'Với lối kiến trúc Đông Dương độc đáo, sang trọng giao thoa giữa lối kiến trúc Châu Âu và đường nét truyền thống Việt Nam góp phần tôn lên nét tinh tế trong không gian ẩm thực giữa lòng Sài Gòn nhộn nhịp. Từng mảng vị trí trong nhà hàng đều được chăm chút cẩn thận, được chạm nét, sơn phủ bằng những chất liệu mang âm hưởng hoàng gia ấn tượng.|Hơn 50 phòng VIP, Super VIP đa dạng, sảnh tiệc sang trọng với sức chứa lên đến 200 khách, khoảng sân vườn rộng – sân thượng, rooftop skyview phù hợp cho những bữa tiệc chiêu đãi, hội họp, tiệc sinh nhật – thôi nôi, tiệc báo hỷ.|Không gian của nhà hàng cũng khá gần gũi, nhẹ nhàng và thân thương, chúng toát lên vẻ đẹp mộc mạc trữ tình gợi cho thực khách về mảnh đất bình dị mà mộng mơ.', review: 'Thế giới ẩm thực sang trọng với hơn 300 món ăn đầy màu sắc, từ những đầu bếp hàng đầu với hơn 20 năm kinh nghiệm. Thực khách sẽ được thưởng thức phong vị độc đáo từ những món ăn đặc sản, trứ danh hương vị Bắc..|Hải sản cao cấp tươi sống tại hồ; Sashimi chuẩn vị Nhật từ những ngư trưởng nổi tiếng của thế giới, tất cả được nâng tầm thăng hoa cùng không gian sang trọng bậc nhất. Những món ăn đã trở thành thương hiệu của Phố 79 như: Lẩu riêu cá Chép, Xôi 79, Gỏi sò huyết ốc tương, Bào ngư sốt nấm đông cô và dầu hào, Miến cua tay cầm,...', },
        { id: '3', name: 'Maison Mận-Đỏ', description: 'Những địa điểm ẩm thực phong cách Việt Nam, mang đến cho bạn trải nghiệm ẩm thực tuyệt vời.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1283/media/202302/27/1677500379-khong-gian-nha-hang-maison-mando.jpg', image1: 'https://cdn.justfly.vn/1920x1535/media/202302/27/1677496028-nha-hang-mai-son-man-do-ho-chi-minh-1.jpg', image2: 'https://media-cdn.tripadvisor.com/media/photo-s/28/33/e4/d2/lien-he.jpg', introduce: 'Kết hợp giữa kiến trúc hiện đại của phương Tây và nét hoài cổ Việt, thiết kế không gian nhà hàng Maison Mận-Đỏ mang đến cho thực khách sự sang trọng bậc nhất. Bên cạnh đó, với tông màu chủ đạo là đỏ trầm và màu gỗ tạo nên sự ấm cúng.|Đặc biệt, Mận-Đỏ có nhiều phòng riêng phù hợp với những ai đang tìm kiếm nhà hàng có phòng riêng hoặc cần tổ chức tiệc đòi hỏi sự riêng tư, không muốn bị làm phiền. Ngoài ra, nhà hàng cũng là địa điểm yêu thích của các cặp đôi khi tổ chức tiệc kỷ niệm, tỏ tình, cầu hôn hay đính hôn.', review: 'Maison Mận-Đỏ phục vụ đa dạng các món ăn Âu Á Việt, trong đó được chia làm 2 loại. Một là món ăn Việt được chế biến theo phong cách Việt đương đại, nổi bật bởi các món như cơm chiên tỏi bò Wagyu Nhật, bò ngũ vị nướng lá lốt,... Và hai là các món Âu với công thức nước sốt riêng đặc biệt, ngon nhất là tôm hùm phô mai, sườn cừu Úc, gan ngỗng Pháp, steak bò Úc,...|Khi dùng món tại nhà hàng, bạn có thể hoàn toàn yên tâm vì các nguyên liệu được sử dụng ở đây đều được nhập khẩu trực tiếp, đáp ứng tiêu chuẩn quốc tế.' },
        { id: '4', name: 'Ân Nam Quán', description: 'Hương vị truyền thống của Cố Đô hiện hữu trong từng bữa ăn tại các nhà hàng.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1081/media/07/19/3a0e-392d-478a-b583-67c382a011a5.jpg', image1: 'https://cdn.justfly.vn/1920x1080/media/0a/f9/9f15-cec0-4c30-a906-2ddd63123f6d.jpg', image2: 'https://cdn.justfly.vn/1920x1920/media/c8/7b/dad6-5621-4ef8-9d99-dbeafbaf57a8.jpg', introduce: 'Chuỗi Ân Nam Quán là chuỗi nhà hàng đặc sản miền Trung, bởi vậy phong cách trang trí của chuỗi này cũng rất giản dị và mộc mạc với bàn ghế tre cùng một tông màu tối giản.|Tuy đơn giản nhưng thực khách nhìn vào vẫn thấy rõ sự gọn gàng, sạch sẽ bởi sự thoáng đãng trong không gian và đồng điệu trong từng món đồ.', review: 'Thực đơn của chuỗi Ân Nam Quán có tới hơn 80 món ăn đặc sản nổi tiếng của miền Trung, đặc biệt là các món ăn có nguồn gốc từ thành phố Đà Nẵng.|Từ những nguyên liệu đơn giản, gần gũi, các món ăn tại đây luôn được lòng thực khách, đặc biệt với món Gà lên mâm.' },
        { id: '5', name: 'Lẩu Cua Đất Mũi', description: 'Những địa điểm ẩm thực độc đáo với sự kết hợp tuyệt vời của gia vị và nguyên liệu tươi ngon.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://lh3.googleusercontent.com/p/AF1QipOPM_7IixNi3eUhO-Nq0-qRnPj0-pKvms042FvV=s680-w680-h510', image1: 'https://cdn.justfly.vn/1920x1920/media/32/dc/bf13-bab6-4a44-a2f2-39560bf5907d.jpg', image2: 'https://cdn.justfly.vn/1920x2560/media/2a/7a/8d36-f187-4623-9a70-d788ec76266f.jpg', introduce: 'Chuỗi nhà hàng Lẩu cua đất Mũi có không gian không quá rộng. Bên cạnh đó, thiết kế của chuỗi nhà hàng này cũng khá đơn giản và tinh tế, không hoa mỹ, cầu kỳ.|Hầu hết các thực khách đến với nhà hàng này là nhờ thực đơn vô cùng hấp dẫn.', review: 'Lẩu cua Đất Mũi là chuỗi nhà hàng với các món ăn chính được chế biến từ cua vùng Cà Mau.|Bên cạnh việc ăn uống, du khách còn có thể thoải mái ngắm nhìn và quan sát những con cua to, tươi sống còn đang bơi ngay trong bể.' },
        { id: '6', name: 'Wrap & Roll', description: 'Hội tụ của các món ăn truyền thống và hiện đại, tạo nên sự đa dạng cho thực đơn.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1440/media/e5/23/29e8-d3a1-4d35-aaa8-bc3ec5864260.jpg', image1: 'https://cdn.justfly.vn/1920x2261/media/32/8d/3b68-7496-4e05-b88a-5e7675d9298a.jpg', image2: 'https://cdn.justfly.vn/1920x1280/media/29/b3/d2c3-3f4b-41ce-8c05-ccdf2d94510b.jpg', introduce: 'Mỗi nhà hàng nằm trong chuỗi Wrap & Roll đều được tọa lạc ở những vị trí sang trọng và lịch sự nên luôn đảm bảo được một không gian thoáng đãng, sạch sẽ.|Thiết kế của chuỗi cửa hàng này không cầu kỳ mà luôn tối giản để tạo cho thực khách tâm lý cũng như sự thoải mái nhất khi thưởng thức các món ăn tại đây.', review: 'Tập trung vào menu thực đơn với những món gói và cuốn mang hương vị đặc trưng của cả 3 miền, chuỗi nhà hàng này đã trở thành địa chỉ “quen mặt nhớ tên” với các thực khách ở cả Hà Nội và Sài Gòn. Bên cạnh đó, các món cơm, bún, phở, lẩu hay đồ ăn kèm đều mang những hương vị ngon không thể chối từ.|Nhà hàng thật sự như một thiên đường thu nhỏ vậy.' },
        { id: '7', name: 'San Fu Lou', description: 'Bữa tối ẩm thực đầy màu sắc với các món ăn truyền thống và sáng tạo.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1245/media/b6/15/d2f4-38b6-403b-b477-fc6b1cb4c5f4.jpg', image1: 'https://cdn.justfly.vn/1920x1280/media/bf/b9/b9b9-a7cc-4ded-9d87-3592aac79417.jpg', image2: 'https://cdn.justfly.vn/1920x1920/media/7b/09/b20c-fabb-4e92-8452-075adfe84c08.jpg', introduce: 'San Fu Lou là chuỗi nhà hàng mang phong cách cổ điển Trung Hoa cao cấp. Chính bởi vậy, không gian và thiết kế của nhà hàng mang đến sự nhẹ nhàng, tinh tế và đậm chất văn hóa Trung Hoa|Mỗi nhà hàng trong chuỗi San Fu Lou có sức chứa lên tới 72 thực khách và không có không gian riêng. Nhà hàng này chính là địa điểm phù hợp dành cho các buổi tiệc cùng gia đình hay bạn bè đấy.', review: 'Tất cả các món ăn nổi tiếng nhất nền ẩm thực Trung Hoa như dimsum, hoành thánh tôm thịt, há cảo,... sẽ được tìm thấy ở San Fu Lou với sức ngon chuẩn vị.|Bên cạnh các món ăn chính, nhà hàng cũng phục vụ những món trà Trung Hoa để bạn có thể thư thả thưởng trà, ngắm cảnh sau những giờ làm việc căng thẳng.' },
        { id: '8', name: 'Dìn Ký', description: 'Những nơi lý tưởng để thử nghiệm các món ngon của vùng đất Cố Đô.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1281/media/fa/0b/301f-f251-4524-90fd-61d1b46cc29b.jpg', image1: 'https://cdn.justfly.vn/1920x1280/media/21/24/2b59-c684-482e-beec-ee8bc4332403.jpg', image2: 'https://cdn.justfly.vn/1920x2400/media/0d/26/2b46-b285-441a-9f4a-b2bf90266906.jpg', introduce: 'Mỗi nhà hàng trong chuỗi Dìn Ký lại có phong cách bài trí khác nhau phụ thuộc vào địa điểm. Chính sự đa dạng và sáng tạo này khiến cho khách hàng muốn đến một lần lại muốn tới thêm lần nữa.|Các nhà hàng Dìn Ký đều có không gian thoáng đãng, sang trọng và ấm cúng. Chính bởi vậy, nơi đây không những là địa điểm nhậu quen thuộc của các đấng mày râu mà còn là nơi các gia đình, nhóm bạn lựa chọn để mở tiệc, hay các cặp đôi tới để hưởng bầu không khí lãng mạn', review: 'Nhà hàng Dìn Ký với hơn hai mươi năm đồng hành cùng khẩu vị người Sài Thành nên đã từ lâu trở thành địa chỉ quen thuộc với mỗi người dân nơi đây.|Gần 400 món ăn đặc sắc với đa dạng phong cách ẩm thực chắc chắn sẽ làm hài lòng tất cả các thực khách lần đầu tới đây.' },
        { id: '9', name: 'EON 51', description: 'Một cuộc hành trình ẩm thực đầy kỳ thú qua các món ăn độc đáo.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1280/media/2c/da/8841-9cac-4755-935c-4cac0fff1f1b.jpg', image1: 'https://cdn.justfly.vn/1920x1080/media/3c/99/b7fa-35f4-4145-a1e7-8b346ef812e2.jpg', image2: 'https://cdn.justfly.vn/1920x2400/media/39/4d/fa3c-552b-4a66-8b0e-6ab2c261d035.jpg', introduce: 'Nhà hàng EON51 là một không gian lý tưởng cho những thực khách yêu thích tận hưởng một không gian vô-cùng-sang-trọng. Tọa lạc trên tầng 51 nên nhà hàng có view nhìn ra xung quanh cực kỳ đã mắt.|Không gian nhà hàng không chỉ phù hợp cho những bữa tiệc cùng gia đình, bạn bè, mà còn chính là một không gian lãng mạn phù hợp cho các cặp đôi trong các dịp kỷ niệm đặc biệt đấy.', review: 'EON51 là một không gian nhà hàng với menu cực kỳ đa dạng. Nhà hàng được biết đến là địa chỉ đón tiếp tổng thống Mỹ Obama cùng ngoại trưởng Mỹ trong chuyến thăm Việt Nam năm 2016.|Các món ăn chính của nhà hàng bao gồm các món ăn đồ tây từ Âu đến Á, chắc chắn sẽ mang đến cho bạn những trải nghiệm khó quên.' },
        { id: '10', name: 'Ngọc Sương Sài Gòn', description: 'Sự kết hợp tinh tế giữa hương vị truyền thống và các biến thể sáng tạo.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1251/media/e4/06/816f-26f1-4f01-bfa4-f0b7f7a776fc.jpg', image1: 'https://cdn.justfly.vn/1920x1280/media/e9/94/c585-571e-4b1b-b3fe-009c42b8dccf.jpg', image2: 'https://cdn.justfly.vn/1920x2542/media/85/dc/2c54-be1c-4995-93cb-09a2d6a35bf8.jpg', introduce: 'Chuỗi nhà hàng Ngọc Sương Sài Gòn có không gian khá sang trọng và không quá nổi bật so với các nhà hàng khác tại Sài Gòn. Tuy nhiên, khi đến đây, mọi khách hàng đều cảm nhận được sự gần gũi, thân thiện từ không gian cho đến cách phục vụ của từng nhân viên, vô cùng nhiệt tình và chu đáo.|Tại nhà hàng cũng có không gian chung và phòng riêng dành cho khách có nhu cầu ăn uống riêng tư cùng gia đình và bạn bè của mình.', review: 'Tại chuỗi nhà hàng Ngọc Sương, các món hải sản đã gắn bó với tên thương hiệu từ lâu.|Mỗi khi nhắc đến “hải sản” là nhiều người nhớ ngay đến nhà hàng Ngọc Sương. Ngoài ra, tại Ngọc Sương còn phục vụ thực khách các món khai vị, cơm, cháo rau,...' },
        { id: '11', name: 'Út Cà Mau', description: 'Những nhà hàng nổi tiếng với những món ngon không thể bỏ lỡ.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1440/media/52/39/e8bf-4fae-497b-a9de-e26c694014b2.jpg', image1: 'https://cdn.justfly.vn/1920x1282/media/92/01/bb08-32ad-47ac-b96c-7152caac3191.jpg', image2: 'https://cdn.justfly.vn/1920x1920/media/a2/0c/bb6c-dd6d-4551-b609-00d67ae761cb.jpg', introduce: 'Hướng đến hình ảnh một nhà hàng mang hướng mộc mạc, giản dị đúng như chất Cà Mau, concept không gian nơi đây vẫn không làm những thực khách yêu thích sự sang trọng phật lòng. Đây là sự kết hợp hoàn hảo giữa nét truyền thống và hiện đại.|Không gian nhà hàng Út Cà Mau khá rộng rãi và thoáng mát, không bị ngột ngạt giúp khách hàng có những bữa ăn ngon miệng.', review: 'Món ăn nổi bật và đặc sắc nhất trong thực đơn của nhà hàng là cua Cà Mau. Loại cua này là món ăn được nhiều người săn đón bởi lớp thịt thơm, dày và chắc nịch.|Chính cái tên đã làm nên thương hiệu và mang món ăn của Cà Mau đến gần với người Sài Gòn hơn.' },
        { id: '12', name: 'Buffet Hoàng Yến', description: 'Thế giới ẩm thực đa dạng từ các món ăn đường phố đến những bữa tối sang trọng.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1280/media/80/99/cc90-db59-4c02-b118-49907d2f96e1.jpg', image1: 'https://cdn.justfly.vn/1920x1281/media/b0/7c/5de7-26df-4274-a6b8-97a92dbd89bd.jpg', image2: 'https://cdn.justfly.vn/1920x1920/media/ed/85/2dca-708b-43a0-aa01-25305aa674e8.jpg', introduce: 'Đến với chuỗi nhà hàng buffet Hoàng Yến, có lẽ bạn sẽ “bị sốc” với không gian rộng lớn và sang trọng tại đây. Được thiết kế theo phong cách sang trọng và gọn gàng không-tì-vết nhưng không làm mất đi vẻ gần gũi, thân thiện bằng ánh đèn vàng và cách bài trí vô cùng ấm áp.|Vì là nhà hàng Buffet nên tại Hoàng Yến không có không gian phòng riêng, tuy nhiên bù lại luôn có đủ chỗ ngồi dù bạn đi cùng gia đình hay nhóm bạn bè đông đúc.', review: 'Thực đơn tại Hoàng Yến Buffet vô cùng đa dạng với hơn 60 món ăn trưa và 70 món ăn tối gồm khai vị, salad & súp, món chính, tráng miệng và nước uống.|Menu món chính gồm những món ăn được khá nhiều thực khách yêu thích như Quầy hải sản, cá, gà, vịt, sushi,...' },
        { id: '13', name: 'Hàng Dương Quán', description: 'Là nơi lý tưởng để trải nghiệm sự độc đáo của ẩm thực Việt.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x920/media/ba/52/e861-8df4-4e8e-84fc-361c7f61ae7a.jpg', image1: 'https://cdn.justfly.vn/1920x1280/media/8d/8e/51c0-5853-4fb4-a7cc-c4610f050fc8.jpg', image2: 'https://cdn.justfly.vn/1920x1280/media/f7/04/4a11-e184-47b7-920c-1f98948ed20a.jpg', introduce: 'Hàng Dương Quán là nhà hàng được thiết kế theo phong cách vừa sang trọng lại vô cùng độc đáo và hút mắt.|Với tông màu gỗ vừa mang đến vẻ mộc mạc lại sáng bóng. Chính cách bài trí này giúp thực khách vừa ngon miệng, lại ngon mắt khi thưởng thức.', review: 'Đây là một trong những địa chỉ nhà hàng nổi tiếng với các món ăn từ thủy, hải sản khiến ai cũng phải ngỡ ngàng khi lần đầu tiên tới.|Bên cạnh chất lượng luôn tươi ngon, Hàng Dương Quán gây ấn tượng mạnh bởi những con cá khủng nhất từ 50kg đến 200 kg. Thêm vào đó là các món ăn được chế biến từ tôm hùm alaska, cua king crab,...' },
        { id: '14', name: 'Gạo', description: 'Những địa điểm tạo điểm nhấn cho du lịch ẩm thực.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1018/media/61/e0/4ad2-712c-4042-a3e7-8a1f3007caf8.jpg', image1: 'https://cdn.justfly.vn/1920x1049/media/e1/53/4c7d-b601-4eb4-85c9-df40f221de96.jpg', image2: 'https://cdn.justfly.vn/1920x1239/media/b9/7d/ba95-2c02-467b-8bb3-9b4900bf304f.jpg', introduce: 'Được thiết kế với một không gian mở để tận dụng tất cả ánh sáng thiên nhiên ban ngày, Gạo là một không gian phù hợp với những bữa tiệc cùng bạn bè hoặc gia đình.|Vị trí thuận tiện cùng không gian thoáng đãng, sự kết hợp hài hòa giữa nội thất mộc mạc sẽ làm hài lòng cả những vị khách khó tính nhất.', review: 'Đúng như concept mà Gạo hướng tới. Nhà hàng mang đến cho thực khách những món ăn dân dã và đậm hương vị Việt.|Từ các món ăn đơn giản như chả cá nướng sả, đậu hũ chiên sả,.. cho đến gỏi cuốn ốc gạo hay cá lưỡi trâu xoài bằm.' },
        { id: '15', name: 'Quê Nhà', description: 'Sự tận hưởng hương vị đặc trưng của Việt Nam tại các nhà hàng truyền thống.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1280/media/b7/fb/2a75-768a-47d6-b528-019fce704444.jpg', image1: 'https://cdn.justfly.vn/1920x2398/media/f8/ff/562c-1f9c-46dd-a8cc-1e9a5a2c2a12.jpg', image2: 'https://cdn.justfly.vn/1920x1440/media/3c/61/8f89-993f-4a24-a3d1-b3b5791dfc9a.jpg', introduce: 'Vị trí nhà hàng khá thuận lợi và dễ tìm, có khung cảnh khá đẹp mắt. Không gian không quá rộng nhưng được trang trí khá đẹp mắt, tạo được cảm giác vừa mộc mạc, lại vừa ấm cúng, gần gũi.|Vị trí ăn uống là một không gian rộng, không phục vụ phòng riêng. Chính bởi vậy, đây là một địa điểm thích hợp dành cho những gia đình, những nhóm bạn bè không quá đông.', review: 'Quê Nhà là một địa chỉ ăn uống quen thuộc của nhiều người dân Sài Gòn với menu khá ngon và đa dạng.|Đây là điểm đến cho những ai có niềm đam mê với ẩm thực truyền thống Việt Nam với các món dễ ăn, dễ thưởng thức.' },
        { id: '16', name: 'Soa Soa', description: 'Món ăn ấn tượng và phong cách phục vụ chuyên nghiệp.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1191/media/3c/8d/9ef0-9388-4b44-86b4-e633e2f2cd92.jpg', image1: 'https://farm8.staticflickr.com/7625/17015964675_d66151df44_o.jpg', image2: 'https://cdn.justfly.vn/1920x1920/media/9a/dd/9031-f301-43d1-ab73-74f270900b2b.jpg', introduce: 'Soa Soa là nhà hàng với không gian khá sang trọng và ấm cúng bởi ánh đèn màu vàng. Bên cạnh đó, cách bài trí trong nhà hàng cũng toát lên vẻ tinh tế và ấn tượng.|Nhà hàng không có phòng ăn riêng nhưng các dãy bàn được chia theo các phong cách khác nhau rất hòa hợp.', review: 'Nhà hàng Soa Soa chủ yếu phục vụ các món lẩu, tuy nhiên ở đây thực đơn khá đa dạng để thực khách lựa chọn.|Một ví dụ đơn cử như có tới gần hai mươi vị nước dùng với mười loại nấm và năm loại đậu hũ khác nhau.' },
        { id: '17', name: 'Red Chilli Seafood Buffet', description: 'Là nơi để bạn thỏa mãn sự thích thú vị của đầu lưỡi.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1200/media/c6/27/2793-c096-4067-9f13-b86fa902eb35.png', image1: 'https://chloegallery.vn/wp-content/uploads/2018/10/Screen-Shot-2018-10-31-at-2.49.53-AM.png', image2: 'https://cdn.justfly.vn/1920x1281/media/3b/b5/8ce8-dfca-4b15-b621-304e00da0403.jpg', introduce: 'Nhà hàng Red Chili Seafood như một lâu đài cổ nằm bên hồ Bán Nguyệt. Không gian ở đây trở nên lãng mạn và đẹp nhất vào những buổi chiều tà, bởi vậy một lời khuyên dành cho thực khách là nên tới đây vào chiều muộn để vừa ăn tối, vừa thưởng thức cảnh sắc không gian.|Tất cả nội thất trong nhà hàng đều chứa những nét riêng, vừa độc đáo lại vô cùng nổi bật. Chọn một chiếc bàn gần cửa sổ, vừa ăn tối vừa thưởng nhạc dưới ánh nến lãng mạn gì còn gì bằng.', review: 'Đúng như tên gọi của mình, Red Chili mang đến cho thực khách rất nhiều những món ăn hải sản, đặc biệt là một menu với đủ vị sushi dành cho những khách yêu thích cá hồi, cá ba sa, cá trứng,...|Nhà hàng là một địa điểm rất tuyệt vời cho cơn thèm hải sản của bạn.' },
        { id: '18', name: 'Tajmasago Castle Buffet', description: 'Những địa điểm quyến rũ với trái tim của ẩm thực Việt.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1280/media/a3/22/e8b0-e66d-40ea-94c5-b7d7e91614c2.jpg', image1: 'https://2.bp.blogspot.com/-TuUX0Scodh8/Wtmuwf2QA7I/AAAAAAAAFk0/O_gCt5n9pukKZsNFm2FTg5919XIMwMORwCEwYBhgL/s1600/lau-dai-tajmasago-castle-buffet-15.jpg', image2: 'https://cdn.justfly.vn/1920x1080/media/09/51/0d34-58b2-4138-be7b-dc4ee291dae3.jpg', introduce: 'Nhà hàng Tajmasago Castle Buffet được biết đến với tên gọi là “lâu đài trắng”. Đúng như tên gọi, nhà hàng này có không gian vô cùng sang trọng với thiết kế ấn tượng, đẹp mắt và sang chảnh.|Không gian bàn ghế ăn được bố trí rộng rãi, thoáng đãng. Bàn ghế ăn trong nhà được sơn đồng màu trắng tinh khiết. Đối với không gian ăn bên ngoài, mỗi vị trí đều có ô che vô cùng sang trọng.', review: 'Đến với lâu đài trắng, thực khách sẽ có cơ hội trải nghiệm những món ăn tinh hoa của ẩm thực phương Tây. Tiệc buffet với rất nhiều món ăn đặc sắc từ ngỗng, thịt bò, hải sản,... |Tajmasago Castle luôn làm hài lòng tất cả những thực khách nhờ menu buffet đầy màu sắc này.' },
        { id: '19', name: 'Hội Ngộ', description: 'Môi trường ấm cúng và thoải mái để thưởng thức các món ăn ngon.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1696/media/05/e6/b07f-3f5d-47c0-be50-8fbbadf75d63.jpg', image1: 'https://cdn.pastaxi-manager.onepas.vn/content/uploads/articles/linhpt/nh-hoi-ngo/nha-hang-hoi-ngo-nguyen-thi-dieu-1.jpg', image2: 'https://cdn.justfly.vn/1920x1280/media/b8/1a/3d0b-9f7d-4796-82e0-2a7dffce92ac.jpg', introduce: 'Nhà hàng Hội Ngộ là một không gian đậm chất dân dã và truyền thống. Chính không gian của quán cũng được thiết kế mang phong cách mộc mạc gần gũi nhưng không nhàm chán bởi sự kết hợp tinh tế với nét hiện đại.|Không gian quán rộng rãi, thoáng đãng, kết hợp và tận dụng được khá nhiều không gian thiên nhiên nên mang đến sự thoải mái cho thực khách khi ăn uống tại đây. Nhà hàng còn cung cấp các dịch vụ phòng VIP với số lượng từ 8 đến 150 người/ phòng.', review: 'Thực đơn tại nhà hàng Hội Ngộ chủ yếu mang đến cho thực khách những món ăn đậm chất dân gian và truyền thống.|Mỗi món ăn lại là một nét đẹp tinh hoa trong ẩm thực Việt mà bạn nhất định phải thưởng thức qua.' },
        { id: '20', name: 'Pachi Pachi', description: 'Sự hòa quyện của lịch sử và văn hóa qua mỗi bữa ăn tại các nhà hàng này.', like: '', save: '', likeData: "126", unLikeData: "16", saveData: true, imageUri: 'https://cdn.justfly.vn/1920x1440/media/1f/a6/c701-6477-4b95-877c-f0002f209b72.jpg', image1: 'https://bepvietdecor.vn/upload/media/-1691833692-77946c.webp', image2: 'https://cdn.justfly.vn/1920x1440/media/61/4f/4bf2-929a-43e6-a0e3-04d1c67264a7.jpg', introduce: 'Pachi Pachi là nhà hàng mang phong cách Nhật Bản với không gian nhẹ nhàng và ấm cúng. Chính bởi vậy, ấn tượng đầu tiên khi đến với nhà hàng này là sự gọn gàng, ngăn nắp và thiết kế vô cùng thông minh.|Bạn có thể lựa chọn ngồi bàn - ghế hoặc ngồi thảm với bàn thấp y như người Nhật. Nhà hàng có sẵn các loại bàn dành cho nhóm từ 2 đến 6 người. Ngoài ra các loại phòng riêng cũng sẵn sàng cho nhóm khách từ 8 người trở lên với bàn âm sàn.', review: 'Nhà hàng Pachi Pachi nổi tiếng với các món ăn thịt nướng Nhật Bản, lẩu Nhật Bản chuẩn vị.|Với các nguyên liệu chất lượng, tươi ngon và đảm bảo cho sức khỏe, Pachi Pachi là địa điểm tụ tập quen thuộc của người Sài Gòn.' },
    ];
    const listFoods = [
        { id: 1, prId: 1, name: 'Phở', rate: 5, likedHealth: true, numberLike: 999, level: 4, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/pho-bo.jpg?raw=true', },
        { id: 2, prId: 1, name: 'Bánh Mì', rate: 5, likedHealth: true, numberLike: 800, level: 1, imageUri: 'https://baoangiang.com.vn/image/fckeditor/upload/2023/20230516/images/clever-junior-694.jpg', },
        { id: 3, prId: 1, name: 'Bánh Đa Cua', rate: 4, likedHealth: false, numberLike: 100, level: 3, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/banh-da-cua.jpg?raw=true', },
        { id: 4, prId: 8, name: 'Nem Nầm', rate: 4.5, likedHealth: false, numberLike: 250, level: 2, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/nem-nam.jpg?raw=true', },
        { id: 5, prId: 2, name: 'Cơm Gà Hải Nam', rate: 3, likedHealth: false, numberLike: 400, level: 3, imageUri: 'https://cdn.tgdd.vn/Files/2019/03/29/1157476/cach-nau-com-ga-hoi-an-chinh-goc-chuan-vi-nhat-202208271507268751.jpg', },
        { id: 6, prId: 1, name: 'Bún Chả Hà Nội', rate: 5, likedHealth: true, numberLike: 632, level: 3, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/bun-cha.jpg?raw=true', },
        { id: 7, prId: 8, name: 'Cơm Lam', rate: 4, likedHealth: true, numberLike: 900, level: 4, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/com-lam.jpg?raw=true', },
        { id: 8, prId: 2, name: 'Cốm', rate: 3, likedHealth: false, numberLike: 700, level: 2, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/com.jpg?raw=true', },
        { id: 9, prId: 10, name: 'Bún Bò Huế', rate: 4, likedHealth: false, numberLike: 789, level: 3, imageUri: 'https://bizweb.dktcdn.net/100/442/328/files/bun-bo-hue-dac-san-dan-da-lam-say-long-biet-bao-thuc-khach-4.jpg?v=1638937219225', },
        { id: 10, prId: 11, name: 'Dê Tái Chanh', rate: 3.5, likedHealth: false, numberLike: 489, level: 3, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/de-tai-chanh.jpg?raw=true', },
        { id: 11, prId: 10, name: 'Gà Mạnh Hoạch', rate: 3, likedHealth: false, numberLike: 142, level: 3, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/ga-manh-hoach.jpg?raw=true', },
        { id: 12, prId: 1, name: 'Mỳ Xào Thập Cẩm', rate: 3.4, likedHealth: true, numberLike: 456, level: 3, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/mi-chu-xao-thap-cam.jpg?raw=true', },
        { id: 13, prId: 2, name: 'Miến Lươn Xào', rate: 2.7, likedHealth: false, numberLike: 125, level: 2, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/mien-luon-xao.jpg?raw=true', },
        { id: 14, prId: 1, name: 'Nem Rán', rate: 4.3, likedHealth: false, numberLike: 951, level: 3, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/nem-ran.jpg?raw=true', },
        { id: 15, prId: 11, name: 'Bún Đậu Mắm Tôm', rate: 4.6, likedHealth: true, numberLike: 648, level: 1, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/bun-dau-mam-tom.jpg?raw=true', },
        { id: 16, prId: 8, name: 'Thịt Trâu Gác Bếp', rate: 4.1, likedHealth: false, numberLike: 124, level: 1, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/trau-gac-bep.jpg?raw=true', },
        { id: 17, prId: 2, name: 'Xôi Ngũ Sắc', rate: 4.4, likedHealth: false, numberLike: 466, level: 2, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/xoi-ngu-sac.jpg?raw=true', },
        { id: 18, prId: 1, name: 'Chả Cá Lã Vọng', rate: 2, likedHealth: false, numberLike: 752, level: 2, imageUri: 'https://github.com/QuachHung1102/AmThucMienBac_MinhAnh/blob/cba34bc24e8ced4da62bd2132ec96152a1ab6184/assets/images/foodImage/cha-ca-la-vong.jpg?raw=true', },
        { id: 20, prId: 2, name: 'Bún Mắm', rate: 1.1, likedHealth: false, numberLike: 369, level: 1, imageUri: 'https://pastaxi-manager.onepas.vn/content/uploads/articles/nguyendoan/anh-blog/bun-mam/cach-nau-bun-mam-1.jpg', },
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