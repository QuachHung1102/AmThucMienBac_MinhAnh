import { Platform, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreenStack from './HomeScreenStack';
import SvgSetting from '../assets/svg/SvgSetting';
import SvgUser from '../assets/svg/SvgUser';
import SvgHome from '../assets/svg/Svghome';
import SvgLocation from '../assets/svg/SvgLocation';
import DiscoverScreenStack from './DiscoverScreenStack';
import UserScreenStack from './UserScreenStack';
import SettingsScreen from './SettingsScreen';

const Tab = createBottomTabNavigator();
function TabBarScreen() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                    if (route.name === 'Home') {
                        icon = focused
                            ? <SvgHome activeBtn={1} />
                            : <SvgHome activeBtn={0} />
                    } else if (route.name === 'DiscoverScreenStack') {
                        icon = focused
                            ? <SvgLocation activeBtn={2} />
                            : <SvgLocation activeBtn={0} />
                    } else if (route.name === 'Setting') {
                        icon = focused
                            ? <SvgSetting activeBtn={3} />
                            : <SvgSetting activeBtn={0} />
                    } else if (route.name === 'User') {
                        icon = focused
                            ? <SvgUser activeBtn={4} />
                            : <SvgUser activeBtn={0} />
                    }
                    return icon;
                },
                tabBarActiveTintColor: "#634800",
                tabBarInactiveTintColor: "#634800",
                tabBarStyle: {
                    height: "10%",
                    // paddingBottom: 15
                },
                tabBarIconStyle: {
                    marginTop: "10%",
                },
                tabBarLabelStyle: Platform.OS === 'android' ? styles.headerTitleStyleA : styles.headerTitleStyleIOS,
                // headerShown: false,
            })
            }
        >
            <Tab.Screen
                name='Home'
                component={HomeScreenStack}
                options={{
                    title: "Trang chủ",
                    tabBarLabel: "Trang chủ",
                    headerStyle: {
                        backgroundColor: "#FFF3D3",
                    },
                    headerTitleStyle: styles.headerTitle,
                    headerShown: false,
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='DiscoverScreenStack'
                component={DiscoverScreenStack}
                options={{
                    title: "Khám phá",
                    tabBarLabel: "Khám phá",
                    headerStyle: {
                        backgroundColor: "#FFF3D3",
                    },
                    headerTitleStyle: styles.headerTitle,
                    headerShown: false,
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='Setting'
                component={SettingsScreen}
                options={{
                    title: "Cài đặt",
                    tabBarLabel: "Cài đặt",
                    headerStyle: {
                        backgroundColor: "#FFF3D3"
                    },
                    headerTitleStyle: styles.headerTitle,
                }}
            ></Tab.Screen>
            <Tab.Screen
                name='User'
                component={UserScreenStack}
                options={{
                    title: "Cá nhân",
                    tabBarLabel: "Cá nhân",
                    headerStyle: {
                        backgroundColor: "#FFF3D3"
                    },
                    headerTitleStyle: styles.headerTitle,
                    headerShown: false,
                }}
            ></Tab.Screen>
        </Tab.Navigator >
    )
}

export default TabBarScreen;

const styles = StyleSheet.create({
    headerTitle: {
        textAlign: 'left',
        color: "#634800",
        fontWeight: "700",
        fontSize: 32,
        fontFamily: 'SignikaNegative_700Bold',
    },
    headerTitleStyleA: {
        marginBottom: "15%",
    },
    headerTitleStyleIOS: {
        width: 0,
        marginBottom: 0,
    }
});