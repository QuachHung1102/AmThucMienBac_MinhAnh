import { Svg, Path } from "react-native-svg";

function SvgUser(props) {
    const user1 = <Svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
        <Path d="M20 18.75H10C7.23858 18.75 5 20.9886 5 23.75V26.25H25V23.75C25 20.9886 22.7614 18.75 20 18.75Z" fill="#634800" />
        <Path d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z" fill="#634800" />
    </Svg>;
    const user2 = <Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M20 18.75H10C7.23858 18.75 5 20.9886 5 23.75V26.25H25V23.75C25 20.9886 22.7614 18.75 20 18.75Z" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        <Path d="M15 13.75C17.7614 13.75 20 11.5114 20 8.75C20 5.98858 17.7614 3.75 15 3.75C12.2386 3.75 10 5.98858 10 8.75C10 11.5114 12.2386 13.75 15 13.75Z" stroke="#634800" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
    </Svg>;
    if (props.activeBtn == 4) {
        return user1;
    } else {
        return user2;
    }
}

export default SvgUser;