import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import IngredientCarousel from "./IngredientCarousel";

// Dựa theo foodId trong props mà có thể fetch data hoặc đẩy hết data vào item khi render và sử dụng luôn
// Ở đây theo lý thuyết chúng ta sẽ fetch data theo foodId đã truyền.
const FoodRecipes = {
    id: '1',
    calo: '665',
    fat: '11',
    people: '2-4',
    time: '60p',
    food_recipes: `1kg bún tươi|700g thịt ba chỉ|500g thịt heo| 1 củ cà rốt, ½ trái đu đủ xanh|1 muỗng canh hành tím|3/2 muỗng canh tỏi, ớt băm|2 muỗng canh dầu hào|3 muỗng canh mật ong|220ml nước mắm, ½ chén giấm, dầu ăn`,
    foodStageProcessing: "Bước 1: Sơ chế và ướp thịt|Bước 2: Sơ chế các nguyên liệu khác|Bước 3: Nướng thịt|Bước 4: Nấu nước mắm|Bước 5: Thưởng thức",
    descriptionPrcoessing: "Đối với thịt ba chỉ, để loại sạch bụi bẩn và mùi hôi các bạn mang đi chà sạch với muối, sau đó rửa lại với nước lạnh và để ráo. Dùng dao cắt thịt thành các miếng mỏng vừa ăn.<Ướp thịt với hỗn hợp gồm hành tím băm, tỏi băm, hạt nêm, bột ngọt, tiêu xay, nước mắm, dầu hào, mật ong, nước màu.<Cho thịt xay vào một bát. Thêm hành tím băm, tỏi băm, hạt nêm, bột ngọt, tiêu xay, nước mắm, dầu hào, mật ong, nước màu. Dùng tay trộn đều và ướp thịt xay khoảng 30 phút để thấm gia vị.<Sau khoảng 30 phút, dùng tay lấy một lượng thịt xay vừa đủ rồi vo viên.|Để loại sạch nhựa và bụi bẩn, cà rốt, đu đủ khi mua về các bạn gọt vỏ, sau đó mang ngâm với nước muối pha loãng khoảng 5 - 10 phút sau đó xả sạch lại với nước rồi để ráo.<Tiến hành tỉa hoa cho cà rốt, sau đó cắt cà rốt và đu đủ lát mỏng rồi cho vào tô. Cho tiếp muối vào tô rồi trộn đều, ướp khoảng 15 phút sau đó rửa sạch cà rốt và đu đủ lại với nước.<Thêm tiếp đường, muối, giấm, tỏi băm vào rồi trộn đều và ướp thêm 15 phút nữa.|Phết một lớp dầu ăn lên bếp nướng điện, xếp thịt ba chỉ và thịt viên lên trên. Tiến hành nướng thịt đến khi chín vàng đều 2 mặt thì gấp ra tô.|Bắc nồi lên bếp, cho vào 1 chén nước mắm (khoảng 200ml), 1 chén đường (khoảng 200gr), 1/2 chén giấm (khoảng 100ml) và 2 chén nước lọc vào và tiến hành nấu ở lửa lớn cho các gia vị tan hoàn toàn và nước mắm bắt đầu sôi thì tắt bếp.|Xếp thịt nướng, bún và rau sống ra dĩa. Cho cà rốt, đu đủ ngâm chua và 1 ít ớt băm ra bát sau đó cho nước mắm đường vừa nấu vào rồi khuấy đều là hoàn thành.",
}

function Ingredients({ props }) {
    const [pagesActive, setGagesActive] = React.useState(1);
    function togglePagesActive(active) {
        setGagesActive(active);
    };

    let food = props.route.params.item;
    const listIngredient = FoodRecipes.food_recipes.split("|").map((item, index) => ({ id: index, text: item }));
    const renderIngredient = ({ item }) => {
        return (
            <Text style={styles.ingredientsItem}>- {item.text}</Text>
        )
    };

    const headerIngredient = () => (
        <View>
            <Text style={styles.title}>{food.name}</Text>
            <Text style={styles.ingredientsText}>Nguyên liệu:</Text>
        </View>
    );

    const footerIngredient = () => (
        <View style={{ overflow: "hidden", borderRadius: 30 }}>
            <Pressable
                onPress={() => togglePagesActive(2)}
                android_ripple={{ color: "#321E1E", radius: 50 }}
                style={styles.ingredientButton}
            >
                <Text style={styles.ingredientButtonText}>Bắt đầu nấu</Text>
            </Pressable>
        </View>
    );
    const firtsPage =
        <View style={styles.foodIngredient}>
            <FlatList
                data={listIngredient}
                renderItem={renderIngredient}
                keyExtractor={(item, index) => {
                    return item.id;
                }}
                ListHeaderComponent={headerIngredient}
                ListFooterComponent={footerIngredient}
                alwaysBounceVertical={true}
                showsVerticalScrollIndicator={false}
            />
        </View>;

    let listStage = FoodRecipes.foodStageProcessing.split('|');
    let listDescription = FoodRecipes.descriptionPrcoessing.split('|');

    let pagesView;
    if (pagesActive == 1) {
        pagesView = firtsPage;
    } else if (pagesActive == 2) {
        pagesView = <IngredientCarousel listStage={listStage} listDescription={listDescription} />;
    }

    return (
        <View style={styles.foodIngredientContainer}>
            {pagesView}
        </View>
    )
}

export default Ingredients;

const styles = StyleSheet.create({
    foodIngredientContainer: {
        marginTop: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: "#FFE9AF",
        height: '52%',
        width: '86%',
        borderRadius: 16,
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowRadius: 16,
        shadowOffset: { width: 2, height: 2 },
        elevation: 5,
    },
    foodIngredient: {
        height: '90%',
        width: '85%',
        paddingHorizontal: 'auto',
        backgroundColor: "#FFE9AF",
        marginTop: 20,
    },
    title: {
        fontSize: 32,
        fontStyle: 'normal',
        fontWeight: '700',
        color: "#634800",
        textAlign: 'center',
        paddingHorizontal: 'auto',
        justifyContent: "flex-start",
        fontFamily: 'SignikaNegative_700Bold',
    },
    ingredientsText: {
        fontFamily: 'SignikaNegative_700Bold',
        fontSize: 20,
        color: "#634800",
        paddingBottom: 5,
    },
    listIngredients: {
        height: '80%',
    },
    ingredientsItem: {
        fontFamily: "Montserrat_600SemiBold",
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 28,
    },
    ingredientButton: {
        alignSelf: "center",
        backgroundColor: "#634800",
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 30,
        marginTop: 5,
    },
    ingredientButtonText: {
        color: "#FAFAFA",
        borderRadius: 30,
    },
})