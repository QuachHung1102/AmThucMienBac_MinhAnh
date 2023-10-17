import { Svg, Path, G, Defs, Rect, ClipPath } from "react-native-svg";

function SvgHealth({ likedHealth, state, height = 24, width = 24, }) {
    const health1 = <Svg fill="#000000" height={height} width={width} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.701 471.701">
        <G>
            <Path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
            c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
            l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
            C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
            s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
            c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
            C444.801,187.101,434.001,213.101,414.401,232.701z"/>
        </G>
    </Svg>;
    const health2 = <Svg xmlns="http://www.w3.org/2000/svg" height={height} width={width} viewBox="0 0 24 24" fill="none">
        <G clip-path="url(#clip0_17_143)">
            <Path d="M12.001 4.52898C14.35 2.41998 17.98 2.48998 20.243 4.75698C22.505 7.02498 22.583 10.637 20.479 12.993L11.999 21.485L3.52101 12.993C1.41701 10.637 1.49601 7.01898 3.75701 4.75698C6.02201 2.49298 9.64501 2.41698 12.001 4.52898Z" fill="#CC0000" />
        </G>
        <Defs>
            <ClipPath id="clip0_17_143">
                <Rect width="24" height="24" fill="white" />
            </ClipPath>
        </Defs>
    </Svg>;
    const health3 = <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
        <G clip-path="url(#clip0_711_801)">
            <Path d="M12.001 5.029C14.35 2.92 17.98 2.99 20.243 5.257C22.505 7.52499 22.583 11.137 20.479 13.493L11.999 21.985L3.52101 13.493C1.41701 11.137 1.49601 7.519 3.75701 5.257C6.02201 2.993 9.64501 2.917 12.001 5.029Z" fill="#B5B5B5" />
        </G>
        <Defs>
            <ClipPath id="clip0_711_801">
                <Rect width="24" height="24" fill="white" transform="translate(0 0.5)" />
            </ClipPath>
        </Defs>
    </Svg>;
    if (likedHealth) {
        return health2;
    } else if (state == 1) {
        return health3;
    } else {
        return health1;
    }
}

export default SvgHealth;