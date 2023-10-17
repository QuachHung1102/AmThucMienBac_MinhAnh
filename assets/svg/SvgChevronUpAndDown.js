import { Path, Svg } from "react-native-svg";

function SvgChevronUpAndDown({ state, width, height, }) {
    const chevronUp = <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path d="M17 14L12 9L7 14" stroke="#634800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    const chevronDown = <Svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 24 24" fill="none">
        <Path d="M7 10L12 15L17 10" stroke="#634800" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    if (state) {
        return chevronDown;
    } else {
        return chevronUp;
    }
}

export default SvgChevronUpAndDown;