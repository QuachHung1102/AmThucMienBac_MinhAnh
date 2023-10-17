import { Svg, Path, } from "react-native-svg";

function SvgPrev() {
    const svgPrev = <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
        <Path d="M18.75 5.5L8.75 15.5L18.75 25.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    return svgPrev;
}
function SvgNext() {
    const svgNext = <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
        <Path d="M11.25 25.5L21.25 15.5L11.25 5.5" stroke="#FAFAFA" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    return svgNext;
}

export { SvgNext, SvgPrev };