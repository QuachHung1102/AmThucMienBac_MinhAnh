import { Path, Svg } from "react-native-svg";

function SvgSave({ state, save2 }) {
    const svgUnSave = <Svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <Path d="M9 9C9 7.34315 10.3431 6 12 6H24C25.6569 6 27 7.34315 27 9V31.5L18 22.5L9 31.5V9Z" stroke="#E07A02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    const svgUnSave2 = <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <Path d="M6 6.5C6 5.39543 6.89543 4.5 8 4.5H16C17.1046 4.5 18 5.39543 18 6.5V21.5L12 15.5L6 21.5V6.5Z" fill="#B5B5B5" stroke="#B5B5B5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    const svgSaved = <Svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
        <Path d="M9 9C9 7.34315 10.3431 6 12 6H24C25.6569 6 27 7.34315 27 9V31.5L18 22.5L9 31.5V9Z" fill="#E07A02" stroke="#E07A02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    const svgSaved2 = <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <Path d="M6 6.5C6 5.39543 6.89543 4.5 8 4.5H16C17.1046 4.5 18 5.39543 18 6.5V21.5L12 15.5L6 21.5V6.5Z" fill="#E07A02" stroke="#E07A02" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    if (state) {
        if (save2) {
            return svgSaved2;
        } else {
            return svgSaved;
        }
    } else {
        if (save2) {
            return svgUnSave2;
        } else {
            return svgUnSave;
        }
    }
}

export default SvgSave;