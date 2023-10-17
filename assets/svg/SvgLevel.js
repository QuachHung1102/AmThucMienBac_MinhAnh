import { Svg, Circle } from "react-native-svg";
import { StyleSheet, View } from "react-native";

function SvgLevel(props) {
    const level = <Svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
        <Circle cx="3.5" cy="4" r="3.5" fill="#E07A02" />
    </Svg>
    const uLevel = <Svg xmlns="http://www.w3.org/2000/svg" width="7" height="8" viewBox="0 0 7 8" fill="none">
        <Circle cx="3.5" cy="4" r="3.5" fill="#A4A4A4" />
    </Svg>;
    let render = [];
    for (let i = 0; i < 4; i++) {
        if (i < props.level) {
            render.push(<View key={`level-${i}`}>{level}</View>);
        } else {
            render.push(<View key={`uLevel-${i}`}>{uLevel}</View>);
        }
    }
    return <View style={styles.container}>{render}</View>;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        columnGap: 3,
    }
});
export default SvgLevel;